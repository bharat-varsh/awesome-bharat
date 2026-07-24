#!/usr/bin/env node
/**
 * Scaffold a new content MDX entry + optional imageRegistry stub.
 *
 * Usage:
 *   npm run scaffold -- <type> <slug> [--title "Display Name"] [--logo]
 *   npm run scaffold -- app my-app --title "My App"
 *   npm run scaffold -- person jane-doe --title "Jane Doe" --logo
 *
 * Types: app | person | company | channel | product | blog | project | community | podcast | initiative
 */

import { mkdirSync, writeFileSync, existsSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const COLLECTION_DIRS = {
    app: 'apps',
    person: 'persons',
    company: 'companies',
    channel: 'channels',
    product: 'products',
    blog: 'blogs',
    project: 'projects',
    community: 'communities',
    podcast: 'podcasts',
    initiative: 'initiatives',
};

const ALIASES = {
    apps: 'app',
    persons: 'person',
    companies: 'company',
    channels: 'channel',
    products: 'product',
    blogs: 'blog',
    projects: 'project',
    communities: 'community',
    podcasts: 'podcast',
    initiatives: 'initiative',
};

function usage(exitCode = 1) {
    console.log(`Usage: npm run scaffold -- <type> <slug> [--title "Name"] [--logo]

Types: ${Object.keys(COLLECTION_DIRS).join(' | ')}

Examples:
  npm run scaffold -- app mindful-clone --title "Mindful Clone"
  npm run scaffold -- person ada-lovelace --title "Ada Lovelace" --logo
`);
    process.exit(exitCode);
}

function parseArgs(argv) {
    const args = { type: null, slug: null, title: null, logo: false };
    const positional = [];
    for (let i = 0; i < argv.length; i++) {
        const a = argv[i];
        if (a === '--help' || a === '-h') usage(0);
        if (a === '--logo') {
            args.logo = true;
            continue;
        }
        if (a === '--title') {
            args.title = argv[++i] ?? '';
            continue;
        }
        if (a.startsWith('--title=')) {
            args.title = a.slice('--title='.length);
            continue;
        }
        if (a.startsWith('-')) {
            console.error(`Unknown flag: ${a}`);
            usage(1);
        }
        positional.push(a);
    }
    args.type = positional[0] ?? null;
    args.slug = positional[1] ?? null;
    return args;
}

function toTitle(slug) {
    return slug
        .split('-')
        .filter(Boolean)
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');
}

function frontmatter(type, slug, title) {
    const name = title;
    const stubs = {
        app: `---
title: ${JSON.stringify(name)}
description: >
    TODO: 1–2 sentence teaser. What it is and why it matters.
authors:
    - slug: TODO-person-or-company-slug
      type: person
type: app
devices:
    - mobile
source: open-source
paid: false
ads: false
offline: false
categories:
    - productivity
domains:
    - technology
tags:
    - TODO
website: https://example.com
# storeLinks:
#     - label: Play Store
#       url: https://play.google.com/store/apps/details?id=
# repositoryLinks:
#     - label: Github
#       url: https://github.com/
# logo: ${slug}
draft: true
---

**TODO: punchy hook line.**

#### **What it does**

- TODO

#### **Why it matters**

- TODO

**Ready to try it? Download / visit via the CTA above.**
`,
        person: `---
name: ${JSON.stringify(name)}
bio: TODO short bio
# title: Role or headline
domains:
    - technology
tags:
    - TODO
# website: https://example.com
# socials:
#     - label: Github
#       url: https://github.com/
# avatar: ${slug}
draft: true
---

TODO: 150–400 word profile. Hook → background → impact → where to follow.
`,
        company: `---
name: ${JSON.stringify(name)}
description: TODO one-line description
# founded: 2020
# location: Bengaluru, India
domains:
    - technology
tags:
    - TODO
# website: https://example.com
# members:
#     - slug: person-slug
#       role: Founder
# logo: ${slug}
draft: true
---

TODO: company overview. Mission, products, why noteworthy.
`,
        channel: `---
name: ${JSON.stringify(name)}
description: TODO channel teaser
channelUrl: https://www.youtube.com/@TODO
topics:
    - TODO
language:
    - English
domains:
    - technology
tags:
    - TODO
# logo: ${slug}
draft: true
---

TODO: why subscribe. Topics, style, standout videos.
`,
        product: `---
name: ${JSON.stringify(name)}
description: TODO product teaser
category: TODO
domains:
    - technology
tags:
    - TODO
paid: true
madeIn: India
# buyUrl: https://example.com
# website: https://example.com
# logo: ${slug}
draft: true
---

TODO: what it is, who it's for, why buy Indian-made.
`,
        blog: `---
name: ${JSON.stringify(name)}
description: TODO blog teaser
url: https://example.com
topics:
    - TODO
language:
    - English
domains:
    - technology
tags:
    - TODO
# logo: ${slug}
draft: true
---

TODO: voice, topics, why follow.
`,
        project: `---
name: ${JSON.stringify(name)}
description: TODO project teaser
repositoryUrl: https://github.com/TODO/TODO
language:
    - TypeScript
domains:
    - technology
tags:
    - TODO
# website: https://example.com
# logo: ${slug}
draft: true
---

TODO: problem solved, stack, how to contribute.
`,
        community: `---
name: ${JSON.stringify(name)}
description: TODO community teaser
platform: discord
joinUrl: https://discord.gg/TODO
topics:
    - TODO
domains:
    - technology
tags:
    - TODO
# logo: ${slug}
draft: true
---

TODO: who it's for, norms, how to get value.
`,
        podcast: `---
name: ${JSON.stringify(name)}
description: TODO podcast teaser
platforms:
    - label: Spotify
      url: https://open.spotify.com/show/TODO
topics:
    - TODO
language:
    - English
domains:
    - technology
tags:
    - TODO
# logo: ${slug}
draft: true
---

TODO: format, hosts, standout episodes.
`,
        initiative: `---
name: ${JSON.stringify(name)}
description: TODO initiative teaser
# mission: One-line mission
domains:
    - socialImpact
tags:
    - TODO
# website: https://example.com
# howToHelp:
#     - action: Donate
#       url: https://example.com
# logo: ${slug}
draft: true
---

TODO: problem, approach, impact, how to help.
`,
    };
    return stubs[type];
}

function registerLogoStub(slug) {
    const registryPath = join(root, 'src', 'utils', 'imageRegistry.ts');
    let src = readFileSync(registryPath, 'utf8');
    const importLine = `import ${camel(slug)} from '@/assets/images/${slug}.png';\n`;
    const registryKey = `    ${camel(slug)},\n`;

    if (src.includes(`from '@/assets/images/${slug}.`) || src.includes(`    ${camel(slug)},`)) {
        console.log(`  imageRegistry: already has entry for ${slug}`);
        return;
    }

    // Insert import after last image import (before imageRegistry export)
    const exportIdx = src.indexOf('export const imageRegistry');
    if (exportIdx === -1) {
        console.warn('  imageRegistry: could not find export; skip stub');
        return;
    }
    src = src.slice(0, exportIdx) + importLine + src.slice(exportIdx);

    // Insert key after default entry
    const defaultMatch = src.match(/(\s+default:\s*defaultCardImage,\s*\n)/);
    if (defaultMatch) {
        src = src.replace(defaultMatch[1], `${defaultMatch[1]}${registryKey}`);
    } else {
        src = src.replace(
            /export const imageRegistry: Record<string, ImageMetadata> = \{\n/,
            `export const imageRegistry: Record<string, ImageMetadata> = {\n${registryKey}`
        );
    }

    writeFileSync(registryPath, src, 'utf8');
    console.log(`  imageRegistry: added stub import + key for ${slug}`);
    console.log(`  → place logo at src/assets/images/${slug}.png (or change extension in import)`);
}

function camel(slug) {
    return slug.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
}

function main() {
    const args = parseArgs(process.argv.slice(2));
    if (!args.type || !args.slug) usage(1);

    let type = args.type.toLowerCase();
    if (ALIASES[type]) type = ALIASES[type];
    if (!COLLECTION_DIRS[type]) {
        console.error(`Unknown type: ${args.type}`);
        usage(1);
    }

    const slug = args.slug.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-');
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
        console.error(`Invalid slug: ${args.slug} (use kebab-case)`);
        process.exit(1);
    }

    const title = args.title?.trim() || toTitle(slug);
    const dir = join(root, 'src', 'content', COLLECTION_DIRS[type]);
    const filePath = join(dir, `${slug}.mdx`);

    if (existsSync(filePath)) {
        console.error(`Already exists: ${filePath}`);
        process.exit(1);
    }

    mkdirSync(dir, { recursive: true });
    writeFileSync(filePath, frontmatter(type, slug, title), 'utf8');
    console.log(`Created ${filePath}`);

    if (args.logo) {
        registerLogoStub(slug);
    }

    console.log(`
Next checklist:
  [ ] Research & fill TODOs / real URLs (no invented metrics)
  [ ] Body 150–400 words (see planning/CONTENT-GUIDELINES.md)
  [ ] Authors/members slugs exist if required
  [ ] Logo in src/assets/images/ + imageRegistry if used
  [ ] Set draft: false when ready
  [ ] npm run check && npm run build

Skill: skills/add-content-entry
`);
}

main();
