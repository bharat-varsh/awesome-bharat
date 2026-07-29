#!/usr/bin/env node
/**
 * validate-entry.mjs — Frontmatter completeness & quality checker for Awesome Bharat MDX entries.
 *
 * Usage:
 *   node scripts/validate-entry.mjs                        # validate ALL entries
 *   node scripts/validate-entry.mjs apps                    # all entries in a collection
 *   node scripts/validate-entry.mjs apps/my-app.mdx         # single file
 *   node scripts/validate-entry.mjs src/content/apps/       # directory
 *   node scripts/validate-entry.mjs my-app                  # by slug (auto-detects)
 *
 * Exit codes:
 *   0 — all green
 *   1 — any entry has errors
 */

import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { resolve, join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = resolve(fileURLToPath(import.meta.url), '..');
const ROOT = resolve(__dirname, '..');
const CONTENT_DIR = join(ROOT, 'src', 'content');
const IMAGES_DIR = join(ROOT, 'src', 'assets', 'images');

// ─── Collection registry ──────────────────────────────────────────────────────

const COLLECTIONS = [
    'apps', 'persons', 'companies', 'channels', 'products',
    'blogs', 'projects', 'communities', 'podcasts', 'initiatives',
];

const AUTHORS_COLLECTIONS = [
    'apps', 'channels', 'products', 'blogs', 'projects',
    'communities', 'podcasts', 'initiatives',
];

// ═══ FIELD REQUIREMENTS ═══════════════════════════════════════════════════════

const SCHEMA_REQUIRED = {
    apps:        ['title', 'description', 'authors', 'type', 'devices', 'source', 'paid', 'ads', 'offline', 'categories', 'tags'],
    persons:     ['name'],
    companies:   ['name'],
    channels:    ['name', 'description', 'channelUrl', 'topics', 'tags'],
    products:    ['name', 'description', 'tags'],
    blogs:       ['name', 'description', 'url', 'topics', 'tags'],
    projects:    ['name', 'description', 'repositoryUrl', 'language', 'tags'],
    communities: ['name', 'description', 'platform', 'joinUrl', 'tags'],
    podcasts:    ['name', 'description', 'platforms', 'topics', 'tags'],
    initiatives: ['name', 'description', 'tags'],
};

const EDITORIAL_REQUIRED = {
    apps:        ['domains'],
    persons:     ['bio', 'tags', 'domains'],
    companies:   ['description', 'tags', 'domains'],
    channels:    ['domains', 'language'],
    products:    ['domains', 'madeIn'],
    blogs:       ['domains', 'language'],
    projects:    ['domains'],
    communities: ['domains'],
    podcasts:    ['domains', 'language'],
    initiatives: ['domains'],
};

const RECOMMENDED = {
    apps:        ['website', 'logo', 'date'],
    persons:     ['socials', 'website'],
    companies:   ['website', 'logo', 'location', 'founded'],
    channels:    ['subscriberRange', 'logo', 'authors'],
    products:    ['website', 'buyUrl', 'priceRange', 'logo', 'authors'],
    blogs:       ['rssUrl', 'frequency', 'logo', 'authors'],
    projects:    ['license', 'starsRange', 'website', 'logo', 'authors'],
    communities: ['memberRange', 'logo', 'authors'],
    podcasts:    ['frequency', 'episodeCount', 'logo', 'website', 'authors'],
    initiatives: ['website', 'howToHelp', 'mission', 'founded', 'location', 'socials'],
};

const URL_FIELDS = new Set(['website', 'url', 'channelUrl', 'repositoryUrl', 'joinUrl', 'buyUrl', 'rssUrl']);

// ─── Slug cache ───────────────────────────────────────────────────────────────

const _slugCache = {};

function cachedSlugs(dir) {
    if (!_slugCache[dir]) {
        const d = join(CONTENT_DIR, dir);
        if (!existsSync(d)) { _slugCache[dir] = new Set(); }
        else {
            _slugCache[dir] = new Set(
                readdirSync(d).filter(f => f.endsWith('.mdx')).map(f => f.replace(/\.mdx$/, ''))
            );
        }
    }
    return _slugCache[dir];
}

// ═══ YAML Frontmatter Parser ══════════════════════════════════════════════════

function parseFrontmatter(raw) {
    const fm = {};
    const header = raw.match(/^---\n([\s\S]*?)\n---/);
    if (!header) return fm;

    const lines = header[1].split('\n');

    // Stack: { parent, container, key, indent }
    const root = { parent: null, container: fm, key: null, indent: -1 };
    let current = root;

    for (let i = 0; i < lines.length; i++) {
        const rawLine = lines[i];
        if (!rawLine.trim() || rawLine.trimStart().startsWith('#')) continue;

        const content = rawLine.trim();
        const indent = rawLine.length - rawLine.trimStart().length;

        // Walk up until parent indent < our indent
        while (current.indent >= indent && current !== root) {
            current = current.parent;
        }

        // ── Array item ──
        const arrMatch = content.match(/^-\s+(.*)/);
        if (arrMatch) {
            const rawVal = arrMatch[1];

            // Ensure container is an array
            if (!Array.isArray(current.container)) {
                if (current.key !== null && current.parent) {
                    current.parent.container[current.key] = [];
                    current.container = current.parent.container[current.key];
                } else {
                    continue;
                }
            }

            // Check if next non-blank line is indented → nested object
            let isNested = false;
            let nestedIndent = -1;
            for (let k = i + 1; k < lines.length; k++) {
                const nxt = lines[k];
                if (!nxt.trim() || nxt.trimStart().startsWith('#')) continue;
                const ni = nxt.length - nxt.trimStart().length;
                if (ni > indent) {
                    isNested = true;
                    nestedIndent = ni;
                }
                break;
            }

            if (isNested) {
                const obj = {};
                const kv = rawVal.match(/^([\w-]+):\s*(.*)/);
                if (kv) obj[kv[1]] = parseScalar(kv[2]);

                current.container.push(obj);
                // Descend into obj
                current = { parent: current, container: obj, key: null, indent: nestedIndent - 1 };
            } else {
                if (rawVal.startsWith('{') && rawVal.endsWith('}')) {
                    try { current.container.push(JSON.parse(rawVal)); }
                    catch { current.container.push(rawVal); }
                } else {
                    current.container.push(parseScalar(rawVal));
                }
            }
            continue;
        }

        // ── Key: value ──
        const kvMatch = content.match(/^([\w-]+):\s*(.*)/);
        if (!kvMatch) continue;

        const key = kvMatch[1];
        let val = kvMatch[2];

        // ── Block scalar (> or |) ──
        if (val === '>' || val === '|') {
            const blockLines = [];
            let j = i + 1;
            while (j < lines.length) {
                const nxt = lines[j];
                const nxtContent = nxt.trim();
                if (!nxtContent) { j++; continue; }
                const ni = nxt.length - nxt.trimStart().length;
                if (ni <= indent && !nxt.trimStart().startsWith('#')) break;
                blockLines.push(nxtContent);
                j++;
            }
            current.container[key] = blockLines.join(' ') || true;
            i = j - 1;
            continue;
        }

        // ── Empty value — peek ahead ──
        if (val.trim() === '') {
            let nextContent = null;
            for (let k = i + 1; k < lines.length; k++) {
                const nxt = lines[k];
                if (!nxt.trim() || nxt.trimStart().startsWith('#')) continue;
                nextContent = nxt.trim();
                break;
            }
            if (nextContent && nextContent.startsWith('- ')) {
                current.container[key] = [];
                current = { parent: current, container: current.container[key], key: null, indent: indent + 1 };
            } else {
                const obj = {};
                current.container[key] = obj;
                current = { parent: current, container: obj, key: null, indent: indent + 1 };
            }
            continue;
        }

        // ── Ordinary key: value ──
        current.container[key] = parseScalar(val);
    }

    return fm;
}

function parseScalar(val) {
    const v = val.trim();
    if (v === 'true') return true;
    if (v === 'false') return false;
    if (v === 'null') return null;
    if (/^\d+$/.test(v)) return parseInt(v, 10);
    if (/^\d+\.\d+$/.test(v)) return parseFloat(v);

    if (/^\[.*\]$/.test(v)) {
        try { return JSON.parse(v.replace(/'/g, '"')); }
        catch { return v; }
    }

    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
        try { return JSON.parse(v); }
        catch { /* fall through */ }
    }

    return v;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function collectionFromPath(filePath) {
    const rel = relative(CONTENT_DIR, filePath);
    const parts = rel.split(sep);
    return parts[0] && COLLECTIONS.includes(parts[0]) ? parts[0] : null;
}

function findEntries(arg) {
    if (COLLECTIONS.includes(arg)) return findCollectionFiles(arg);

    const asFull = resolve(ROOT, arg);
    if (existsSync(asFull)) {
        if (asFull.endsWith('.mdx')) return [asFull];
        if (statSync(asFull).isDirectory()) {
            return readdirSync(asFull).filter(f => f.endsWith('.mdx')).map(f => join(asFull, f));
        }
    }

    const cr = join(CONTENT_DIR, arg);
    if (existsSync(cr)) {
        if (cr.endsWith('.mdx')) return [cr];
        if (statSync(cr).isDirectory()) {
            return readdirSync(cr).filter(f => f.endsWith('.mdx')).map(f => join(cr, f));
        }
    }

    const results = [];
    for (const col of COLLECTIONS) {
        const c = join(CONTENT_DIR, col, `${arg}.mdx`);
        if (existsSync(c)) results.push(c);
    }
    return results;
}

function findCollectionFiles(collection) {
    const dir = join(CONTENT_DIR, collection);
    if (!existsSync(dir)) return [];
    return readdirSync(dir).filter(f => f.endsWith('.mdx')).map(f => join(dir, f));
}

function hasTODO(val) {
    if (typeof val === 'string') return /TODO/i.test(val);
    if (Array.isArray(val)) return val.some(v => typeof v === 'string' && /TODO/i.test(v));
    if (typeof val === 'object' && val !== null) {
        return Object.values(val).some(v => typeof v === 'string' && /TODO/i.test(v));
    }
    return false;
}

function bodyText(raw) {
    return raw.replace(/^---[\s\S]*?\n---\n*/, '').trim();
}

function isNonEmpty(val) {
    if (val === undefined || val === null) return false;
    if (typeof val === 'string') return val.trim().length > 0;
    if (typeof val === 'boolean') return true;
    if (typeof val === 'number') return true;
    if (Array.isArray(val)) return val.length > 0;
    if (typeof val === 'object') return Object.keys(val).length > 0;
    return true;
}

// ═══ Validation ═══════════════════════════════════════════════════════════════

function validateEntry(filePath) {
    const errors = [];
    const warnings = [];
    const info = [];

    const raw = readFileSync(filePath, 'utf8');
    const fm = parseFrontmatter(raw);
    const collection = collectionFromPath(filePath);

    if (!collection) {
        return { errors: [`Could not determine collection from path`], warnings: [], info: [] };
    }

    const shortPath = relative(ROOT, filePath);
    info.push(`📁 ${collection}  ·  ${shortPath}`);

    const isDraft = fm.draft === true;
    const entryName = fm.name || fm.title || 'untitled';
    info.push(`📝 ${String(entryName)}${isDraft ? '  🔶 DRAFT' : ''}`);

    // ── 1. Schema-required fields ──
    for (const field of (SCHEMA_REQUIRED[collection] || [])) {
        const val = fm[field];
        if (!isNonEmpty(val)) {
            errors.push(`Missing required field: \`${field}\``);
        } else if (hasTODO(val)) {
            const msg = `\`${field}\` contains TODO placeholder — fill before publishing`;
            if (isDraft) warnings.push(msg);
            else errors.push(msg);
        }
        if (URL_FIELDS.has(field) && typeof val === 'string' && val.length > 0) {
            if (!val.startsWith('http://') && !val.startsWith('https://')) {
                errors.push(`\`${field}\` should be a valid URL (got "${val}")`);
            }
        }
    }

    // ── 2. Editorial-required fields ──
    for (const field of (EDITORIAL_REQUIRED[collection] || [])) {
        const val = fm[field];
        if (!isNonEmpty(val)) {
            warnings.push(`Editorial requirement: \`${field}\` missing — entry won't surface on related pages`);
        } else if (hasTODO(val)) {
            warnings.push(`\`${field}\` contains TODO placeholder`);
        }
    }

    // ── 3. Recommended fields ──
    for (const field of (RECOMMENDED[collection] || [])) {
        const val = fm[field];
        if (!isNonEmpty(val)) {
            warnings.push(`Recommended: \`${field}\` (useful for discovery)`);
        }
    }

    // ── 4. Author slug validation ──
    if (AUTHORS_COLLECTIONS.includes(collection) && Array.isArray(fm.authors)) {
        const existingPersons = cachedSlugs('persons');
        const existingCompanies = cachedSlugs('companies');
        for (const author of fm.authors) {
            const slug = typeof author === 'object' && author ? author.slug : null;
            if (slug && !existingPersons.has(slug) && !existingCompanies.has(slug)) {
                warnings.push(`Author slug "${slug}" — no matching entry in persons/ or companies/`);
            }
        }
    }

    if (collection === 'companies' && Array.isArray(fm.members)) {
        const existingPersons = cachedSlugs('persons');
        for (const member of fm.members) {
            const slug = typeof member === 'object' && member ? member.slug : null;
            if (slug && !existingPersons.has(slug)) {
                warnings.push(`Member slug "${slug}" — no matching entry in persons/`);
            }
        }
    }

    // ── 5. Logo / avatar file check ──
    const logoField = collection === 'persons' ? 'avatar' : 'logo';
    const logoVal = fm[logoField];
    if (typeof logoVal === 'string' && logoVal.length > 0) {
        if (/TODO/i.test(logoVal)) {
            warnings.push(`\`${logoField}\` set to "${logoVal}" — placeholder`);
        } else {
            const imgExts = ['.png', '.webp', '.jpg', '.jpeg', '.svg', '.gif'];
            const found = imgExts.some(ext => existsSync(join(IMAGES_DIR, `${logoVal}${ext}`)));
            if (!found) {
                const tried = imgExts.map(e => `${logoVal}${e}`).join(', ');
                warnings.push(`\`${logoField}="${logoVal}"\` — no matching file in src/assets/images/ (tried: ${tried})`);
            }
        }
    }

    // ── 6. Body content quality ──
    const body = bodyText(raw);
    if (body) {
        if (/TODO/i.test(body)) {
            const msg = 'Body contains TODO placeholders';
            if (isDraft) warnings.push(msg); else errors.push(msg);
        }
        if (body.length < 100) {
            warnings.push(`Body very short (${body.length} chars) — aim for 150–400 words`);
        } else if (body.length < 300) {
            warnings.push(`Body could use more content (${body.length} chars) — typical entries 800–2500 chars`);
        }
        if (/example\.com/i.test(body) || /github\.com\/TODO/i.test(body)) {
            errors.push('Body/frontmatter contains example/TODO URLs (example.com or github.com/TODO)');
        }
        if (collection !== 'persons' && !body.includes('**Ready to')) {
            warnings.push('Body missing closing CTA ("**Ready to ...?**" pattern)');
        }
    } else {
        warnings.push('No body content after frontmatter');
    }

    // ── 7. CTA readiness ──
    const ctaChecks = {
        apps:        () => (fm.storeLinks?.length || 0) > 0 || (fm.repositoryLinks?.length || 0) > 0,
        persons:     () => !!fm.website || (fm.socials?.length || 0) > 0,
        companies:   () => !!fm.website,
        channels:    () => !!fm.channelUrl,
        products:    () => !!fm.buyUrl || !!fm.website,
        blogs:       () => !!fm.url,
        projects:    () => !!fm.repositoryUrl,
        communities: () => !!fm.joinUrl,
        podcasts:    () => (fm.platforms?.length || 0) > 0,
        initiatives: () => (fm.howToHelp?.length || 0) > 0 || !!fm.website,
    };

    if (ctaChecks[collection] && !isDraft) {
        if (!ctaChecks[collection]()) {
            warnings.push('No CTA links — visitors won\'t know where to go');
        }
    }

    return { errors, warnings, info };
}

// ═══ Reporter ═════════════════════════════════════════════════════════════════

function report(results) {
    let totalErrors = 0;
    let totalWarnings = 0;

    for (const [filePath, result] of Object.entries(results).sort()) {
        totalErrors += result.errors.length;
        totalWarnings += result.warnings.length;

        const emoji = result.errors.length ? '❌' : result.warnings.length ? '⚠️' : '✅';
        const rel = relative(ROOT, filePath);
        console.log(`\n${emoji}  ${rel}`);

        for (const item of result.info) console.log(`     ${item}`);
        if (result.errors.length || result.warnings.length) console.log('');
        for (const err of result.errors) console.log(`     ❌  ${err}`);
        for (const warn of result.warnings) console.log(`     ⚠️   ${warn}`);
        if (!result.errors.length && !result.warnings.length) console.log('     ✨ All checks passed');
    }

    const count = Object.keys(results).length;
    console.log(`\n${'─'.repeat(50)}`);
    console.log(`📊  ${count} file(s) · ${totalErrors} error(s) · ${totalWarnings} warning(s)`);
    if (totalErrors === 0) console.log('✅  No errors — ready for review');
    return totalErrors;
}

// ═══ Main ═════════════════════════════════════════════════════════════════════

function main() {
    const args = process.argv.slice(2);
    let files = [];

    if (args.length === 0) {
        for (const col of COLLECTIONS) {
            files.push(...findCollectionFiles(col));
        }
    } else {
        for (const arg of args) {
            const found = findEntries(arg);
            if (found.length === 0) {
                console.error(`No entries found matching: ${arg}`);
                process.exit(1);
            }
            files.push(...found);
        }
    }

    if (files.length === 0) {
        console.log('No MDX entries found.');
        process.exit(0);
    }

    console.log(`🔍  Validating ${files.length} entry/entries...\n`);

    const results = {};
    for (const f of files) {
        try {
            results[f] = validateEntry(f);
        } catch (err) {
            results[f] = { errors: [`Parse error: ${err.message}`], warnings: [], info: [] };
        }
    }

    const errCount = report(results);
    process.exit(errCount > 0 ? 1 : 0);
}

main();
