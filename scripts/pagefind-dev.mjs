#!/usr/bin/env node
/**
 * pagefind-dev.mjs — Make Pagefind search available in `astro dev`.
 *
 * Astro only serves files from `public/` during dev, but the Pagefind bundle is
 * generated into `docs/pagefind/` by `postbuild`. Without it, `/pagefind/*`
 * returns 404 in dev and the search box stays inert.
 *
 * This script regenerates the index from the last production build and outputs
 * it to `public/pagefind/` so `npm run dev` serves a working search box.
 *
 * Usage:
 *   node scripts/pagefind-dev.mjs
 */

import { existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const __dirname = resolve(fileURLToPath(import.meta.url), '..');
const ROOT = resolve(__dirname, '..');
const DOCS_DIR = join(ROOT, 'docs');
const PUBLIC_DIR = join(ROOT, 'public');
const OUTPUT_DIR = join(PUBLIC_DIR, 'pagefind');

function log(message) {
    console.log(`[pagefind-dev] ${message}`);
}

if (!existsSync(join(DOCS_DIR, 'index.html'))) {
    log(
        'No production build found (docs/ is missing). Skipping — search will be unavailable until `npm run build` is run at least once.'
    );
    process.exit(0);
}

log('Generating pagefind index into public/pagefind/ for dev...');

const result = spawnSync(
    'npx',
    ['pagefind', '--site', 'docs', '--output-path', 'public/pagefind'],
    {
        cwd: ROOT,
        stdio: 'inherit',
        shell: false,
        env: { ...process.env },
    }
);

if (result.status !== 0) {
    console.error('[pagefind-dev] pagefind failed; search will be unavailable in dev.');
    process.exit(result.status ?? 1);
}

if (!existsSync(join(OUTPUT_DIR, 'pagefind-entry.json'))) {
    console.error('[pagefind-dev] pagefind did not write an index to public/pagefind/.');
    process.exit(1);
}

log('Done. Dev search index is available at /pagefind/');
