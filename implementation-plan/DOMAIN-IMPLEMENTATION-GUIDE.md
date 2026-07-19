## Task list overview

| # | Task | New/Edit | File |
|---|------|----------|------|
| 1 | Create the domain metadata util | New | `src/utils/domainMeta.ts` |
| 2 | Create a shared "collections to scan" registry | New | `src/utils/collectionsToScan.ts` |
| 3 | Build the domain detail page `/domains/[domain]` | New | `src/pages/domains/[domain].astro` |
| 4 | Build the domain index page `/domains` | New | `src/pages/domains/index.astro` |
| 5 | Migrate existing cards to the real `domains` field | Edit | 3 existing pages |
| 6 | Add "Domains" to the sidebar navigation | Edit | `src/components/SidebarNav.astro` |
| 7 | Link domains from the detail page header | Edit | `src/layouts/ContentLayout.astro` + `[slug].astro` |
| 8 | (Optional) Per-domain RSS feed | New | `src/pages/domains/[domain]/rss.xml.ts` |
| 9 | Build, verify, and add seed data | — | commands below |

---

## Task 1 — Create the domain metadata util

**File (new):** `src/utils/domainMeta.ts`

This maps each of the 29 `domainEnum` values to a display label, an emoji icon, and a one-line blurb (used in hero copy). It mirrors the `categoryEmojis` pattern already in [src/pages/categories/[category].astro:24](../src/pages/categories/[category].astro).

```ts
import { formatCategoryName } from './textUtils.ts';

export interface DomainMeta {
    /** Human-readable label, e.g. "Artificial Intelligence" */
    label: string;
    /** Emoji shown in hero + badges */
    icon: string;
    /** One-line description used in the hero copy */
    blurb: string;
}

/**
 * Keys MUST exactly match the `domainEnum` values in src/content/config.ts.
 * If you add a value to domainEnum, add it here too (and vice versa).
 */
export const DOMAIN_META: Record<string, DomainMeta> = {
    technology: { label: 'Technology', icon: '💻', blurb: 'Indian-built technology across the stack.' },
    space: { label: 'Space', icon: '🚀', blurb: "India's reach for the stars — space tech and exploration." },
    defense: { label: 'Defense', icon: '🛡️', blurb: 'Defense and strategic technology made in India.' },
    artificialIntelligence: { label: 'Artificial Intelligence', icon: '🤖', blurb: 'AI research, models, and products from India.' },
    health: { label: 'Health', icon: '🏥', blurb: 'Healthcare innovation improving Indian lives.' },
    mentalHealth: { label: 'Mental Health', icon: '🧠', blurb: 'Tools and voices supporting mental wellbeing.' },
    environment: { label: 'Environment', icon: '🌱', blurb: 'Protecting and restoring the environment.' },
    agriculture: { label: 'Agriculture', icon: '🌾', blurb: 'Feeding the nation — agri-tech and farming.' },
    cleanEnergy: { label: 'Clean Energy', icon: '⚡', blurb: 'Renewable and clean energy from India.' },
    education: { label: 'Education', icon: '🎓', blurb: 'Learning, teaching, and knowledge for all.' },
    research: { label: 'Research', icon: '🔬', blurb: 'Frontier research and scientific discovery.' },
    startups: { label: 'Startups', icon: '🚀', blurb: "India's startup ecosystem and founders." },
    finance: { label: 'Finance', icon: '💰', blurb: 'Fintech, payments, and financial services.' },
    manufacturing: { label: 'Manufacturing', icon: '🏭', blurb: 'Making things — Indian manufacturing.' },
    socialImpact: { label: 'Social Impact', icon: '🤝', blurb: 'Work that changes lives for the better.' },
    governance: { label: 'Governance', icon: '🏛️', blurb: 'Public systems, policy, and civic tech.' },
    ruralDevelopment: { label: 'Rural Development', icon: '🏘️', blurb: "Uplifting India's villages and rural economy." },
    arts: { label: 'Arts', icon: '🎨', blurb: "India's creative and visual arts." },
    music: { label: 'Music', icon: '🎵', blurb: 'Indian sound — artists, composers, and labels.' },
    cinema: { label: 'Cinema', icon: '🎬', blurb: 'Film and storytelling made by Indians.' },
    literature: { label: 'Literature', icon: '📚', blurb: 'Indian writers, books, and words.' },
    heritage: { label: 'Heritage', icon: '🏯', blurb: "Celebrating India's culture and heritage." },
    sports: { label: 'Sports', icon: '🏅', blurb: 'Athletes and sporting excellence.' },
    fitness: { label: 'Fitness', icon: '💪', blurb: 'Movement, health, and physical wellbeing.' },
    infrastructure: { label: 'Infrastructure', icon: '🏗️', blurb: 'Roads, grids, and the backbone of India.' },
    transportation: { label: 'Transportation', icon: '🚆', blurb: 'Moving people and goods across India.' },
    digitalIndia: { label: 'Digital India', icon: '📲', blurb: 'The digital public infrastructure story.' },
    cybersecurity: { label: 'Cybersecurity', icon: '🔒', blurb: 'Defending the digital frontier.' },
    gaming: { label: 'Gaming', icon: '🎮', blurb: 'Games and studios made in India.' },
};

/** All valid domain keys, in enum order. */
export const ALL_DOMAINS = Object.keys(DOMAIN_META);

/** Safe lookup — falls back to a formatted label + generic icon for unknown keys. */
export function getDomainMeta(domain: string): DomainMeta {
    return (
        DOMAIN_META[domain] ?? {
            label: formatCategoryName(domain),
            icon: '🏷️',
            blurb: `Indian-made work in ${formatCategoryName(domain).toLowerCase()}.`,
        }
    );
}
```

**Verify:** `npx tsc --noEmit` (or rely on the build in Task 9) shows no type errors in this file.

---

## Task 2 — Create a shared "collections to scan" registry

**File (new):** `src/utils/collectionsToScan.ts`

The domain page must scan multiple collections and normalize their differing field names (`title` vs `name`, `logo` vs `avatar`). Centralize that here so every cross-collection page stays consistent and so adding the seven new collections later is a one-line change.

```ts
import type { CollectionEntry } from 'astro:content';

/**
 * Collections that participate in cross-cutting pages (domains, tags, categories).
 * When the pageless collections (channels, products, blogs, projects, communities,
 * podcasts, initiatives) get built out, add their names here and they will appear
 * on every domain page automatically.
 */
export const SCANNED_COLLECTIONS = ['apps', 'persons', 'companies'] as const;

export type ScannedCollection = (typeof SCANNED_COLLECTIONS)[number];

/** Any entry from a scanned collection. */
export type ScannedEntry = CollectionEntry<ScannedCollection>;

/** Title field differs by collection: apps use `title`, everyone else uses `name`. */
export function getEntryTitle(item: ScannedEntry): string {
    return 'title' in item.data ? item.data.title : item.data.name;
}

/** apps use `description`; persons use `bio`; companies use `description`. */
export function getEntryDescription(item: ScannedEntry): string | undefined {
    if ('description' in item.data) return item.data.description;
    if ('bio' in item.data) return item.data.bio;
    return undefined;
}

/** apps/companies use `logo`; persons use `avatar`. */
export function getEntryImage(item: ScannedEntry): string | undefined {
    if ('logo' in item.data) return item.data.logo;
    if ('avatar' in item.data) return item.data.avatar;
    return undefined;
}

/** Human label + section id for grouping in the UI. */
export const COLLECTION_GROUP_META: Record<ScannedCollection, { title: string; id: string }> = {
    apps: { title: 'Apps', id: 'apps' },
    persons: { title: 'People', id: 'people' },
    companies: { title: 'Companies', id: 'companies' },
};
```

> **Note on the `domains` field:** every scanned collection has `domains: string[]` (defaulting to `[]`). So `item.data.domains` is always safe to read across all of them.

---

## Task 3 — Build the domain detail page

**File (new):** `src/pages/domains/[domain].astro`

Structure is copied from [src/pages/categories/[category].astro](../src/pages/categories/[category].astro) but (a) keyed on `data.domains`, (b) scans all collections via the Task 2 helpers, (c) uses `getDomainMeta` for label/icon/blurb.

```astro
---
import { getCollection } from 'astro:content';
import type { GetStaticPaths } from 'astro';
import BaseLayout from '@/layouts/BaseLayout.astro';
import CollectionHero from '@/components/CollectionHero.astro';
import ContentCardFull from '@/components/ContentCardFull.astro';
import { getPrimaryCTAUrl } from '@/utils/ctaUtils.ts';
import { resolveLogo } from '@/utils/imageResolvers.ts';
import { getDomainMeta } from '@/utils/domainMeta.ts';
import {
    SCANNED_COLLECTIONS,
    COLLECTION_GROUP_META,
    getEntryTitle,
    getEntryDescription,
    getEntryImage,
    type ScannedCollection,
    type ScannedEntry,
} from '@/utils/collectionsToScan.ts';

interface DomainPageProps {
    domain: string;
    // one array of entries per scanned collection, in SCANNED_COLLECTIONS order
    groups: Array<{ collection: ScannedCollection; items: ScannedEntry[] }>;
}

export const getStaticPaths = (async () => {
    // Load every scanned collection, drop drafts.
    const loaded = await Promise.all(
        SCANNED_COLLECTIONS.map(async (name) => {
            const entries = (await getCollection(name)) as ScannedEntry[];
            return {
                collection: name,
                entries: entries.filter((e) => !e.data.draft),
            };
        })
    );

    // Sort featured entries to the front within each collection.
    const sortFeaturedFirst = (items: ScannedEntry[]) =>
        [...items].sort(
            (a, b) => Number(Boolean(b.data.featured)) - Number(Boolean(a.data.featured))
        );

    // Collect every domain that appears on any entry.
    const domains = new Set<string>();
    for (const { entries } of loaded) {
        for (const entry of entries) {
            for (const domain of entry.data.domains ?? []) {
                domains.add(domain);
            }
        }
    }

    return [...domains].map((domain) => ({
        params: { domain },
        props: {
            domain,
            groups: loaded.map(({ collection, entries }) => ({
                collection,
                items: sortFeaturedFirst(
                    entries.filter((e) => (e.data.domains ?? []).includes(domain))
                ),
            })),
        },
    }));
}) satisfies GetStaticPaths;

const { domain, groups } = Astro.props as DomainPageProps;
const meta = getDomainMeta(domain);

// Only render groups that actually have matches.
const visibleGroups = groups.filter((g) => g.items.length > 0);
const totalItems = visibleGroups.reduce((sum, g) => sum + g.items.length, 0);
const countLabel = `${totalItems} ${totalItems === 1 ? 'item' : 'items'}`;
const description = meta.blurb;

const pills = visibleGroups.map((g) => ({
    label: `${COLLECTION_GROUP_META[g.collection].title} (${g.items.length})`,
    href: `#${COLLECTION_GROUP_META[g.collection].id}`,
}));
---

<BaseLayout title={`${meta.label} | Awesome Bharat`} description={description}>
    <div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <CollectionHero
            eyebrow="Domain"
            title={meta.label}
            description={description}
            countLabel={countLabel}
            icon={meta.icon}
            pills={pills}
        />

        <div class="mt-10 space-y-12">
            {
                visibleGroups.map((group) => {
                    const groupMeta = COLLECTION_GROUP_META[group.collection];
                    return (
                        <section id={groupMeta.id} class="scroll-mt-24">
                            <div class="mb-4 flex items-end justify-between gap-4">
                                <div>
                                    <h2 class="font-serif text-2xl font-extrabold text-neutral-900 dark:text-neutral-100">
                                        {groupMeta.title}
                                    </h2>
                                    <p class="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                                        {group.items.length}{' '}
                                        {group.items.length === 1 ? 'match' : 'matches'} in{' '}
                                        {meta.label}
                                    </p>
                                </div>
                            </div>

                            <div class="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
                                {group.items.map((item) => (
                                    <ContentCardFull
                                        title={getEntryTitle(item)}
                                        description={getEntryDescription(item)}
                                        slug={item.slug}
                                        collection={item.collection}
                                        logoSrc={
                                            getEntryImage(item)
                                                ? resolveLogo(item.slug, getEntryImage(item))
                                                : undefined
                                        }
                                        domains={(item.data.domains ?? []).map(
                                            (d) => getDomainMeta(d).label
                                        )}
                                        categories={
                                            item.collection === 'apps'
                                                ? item.data.categories
                                                : undefined
                                        }
                                        ctaLabel="View More"
                                        ctaUrl={getPrimaryCTAUrl(item.collection, item.data)}
                                        featured={item.data.featured}
                                    />
                                ))}
                            </div>
                        </section>
                    );
                })
            }
        </div>
    </div>
</BaseLayout>
```

> **Important:** `getStaticPaths` only generates a page for domains that appear on ≥1 non-draft entry. If no content uses a given domain, `/domains/<that-domain>` will 404 — that is expected. Task 9 adds seed data so at least a couple of domain pages exist.

---

## Task 4 — Build the domain index page

**File (new):** `src/pages/domains/index.astro`

A directory of all domains **that have content**, shown as a grid of cards with live counts. Links to each `/domains/[domain]`.

```astro
---
import { getCollection } from 'astro:content';
import BaseLayout from '@/layouts/BaseLayout.astro';
import CollectionHero from '@/components/CollectionHero.astro';
import { getDomainMeta } from '@/utils/domainMeta.ts';
import { SCANNED_COLLECTIONS, type ScannedEntry } from '@/utils/collectionsToScan.ts';

// Count how many non-draft entries (across all scanned collections) use each domain.
const counts = new Map<string, number>();

for (const name of SCANNED_COLLECTIONS) {
    const entries = (await getCollection(name)) as ScannedEntry[];
    for (const entry of entries) {
        if (entry.data.draft) continue;
        for (const domain of entry.data.domains ?? []) {
            counts.set(domain, (counts.get(domain) ?? 0) + 1);
        }
    }
}

// Only show domains that have at least one item; sort by count desc, then label.
const domains = [...counts.entries()]
    .map(([key, count]) => ({ key, count, meta: getDomainMeta(key) }))
    .sort((a, b) => b.count - a.count || a.meta.label.localeCompare(b.meta.label));

const totalDomains = domains.length;
---

<BaseLayout
    title="Explore by Domain | Awesome Bharat"
    description="Browse remarkable Indian work by domain — space, AI, cinema, finance, and more."
>
    <div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <CollectionHero
            eyebrow="Explore"
            title="Domains"
            description="Every domain of Indian excellence, from space and AI to cinema and rural development."
            countLabel={`${totalDomains} ${totalDomains === 1 ? 'domain' : 'domains'}`}
            icon="🧭"
        />

        <div class="mt-10 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
            {
                domains.map(({ key, count, meta }) => (
                    <a
                        href={`/domains/${key}`}
                        class="group flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-4 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover dark:border-neutral-800 dark:bg-neutral-900"
                    >
                        <span
                            class="grid h-12 w-12 flex-none place-items-center rounded-xl bg-neutral-100 text-2xl ring-1 ring-neutral-200 dark:bg-neutral-800 dark:ring-neutral-700"
                            aria-hidden="true"
                        >
                            {meta.icon}
                        </span>
                        <div class="min-w-0">
                            <h2 class="truncate text-base font-semibold text-neutral-900 dark:text-neutral-100">
                                {meta.label}
                            </h2>
                            <p class="text-sm text-neutral-500 dark:text-neutral-400">
                                {count} {count === 1 ? 'item' : 'items'}
                            </p>
                        </div>
                    </a>
                ))
            }
        </div>
    </div>
</BaseLayout>
```

---

## Task 5 — Migrate existing cards to the real `domains` field

Three existing pages pass domains to `ContentCardFull` using the `domain:`-tag hack. Replace those with the real `domains` field so cards show consistent domain badges everywhere.

Import `getDomainMeta` at the top of each file:
```ts
import { getDomainMeta } from '@/utils/domainMeta.ts';
```

**5a — [src/pages/apps/index.astro](../src/pages/apps/index.astro):** find
```ts
domains={app.data.tags
    ?.filter((tag: string) => tag.startsWith('domain:'))
    ?.map((tag: string) => tag.replace('domain:', ''))}
```
replace with
```ts
domains={(app.data.domains ?? []).map((d) => getDomainMeta(d).label)}
```

**5b — [src/pages/categories/[category].astro:190](../src/pages/categories/[category].astro):** find the same `tags?.filter(...startsWith('domain:'))` block passed to `domains=` and replace with
```ts
domains={(item.data.domains ?? []).map((d) => getDomainMeta(d).label)}
```

**5c — [src/pages/tags/[tag].astro:158](../src/pages/tags/[tag].astro):** same replacement as 5b.

> After this task, the `domain:`-prefixed tag convention is fully retired. If any seed content used `tags: ["domain:space"]`, move that to `domains: [space]` in the frontmatter (Task 9 covers seeding correctly).

---

## Task 6 — Add "Domains" to the sidebar navigation

**File (edit):** [src/components/SidebarNav.astro](../src/components/SidebarNav.astro)

The `collections` array (around line 17) drives the nav. Add a standalone "Explore by Domain" link. Insert this **static** link right after the closing `</Divider>` that precedes the dynamic collections (around line 70), before the `{collections.map(...)}` block:

```astro
<a
    href="/domains"
    class:list={[
        'flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors',
        isActive('/domains')
            ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 font-semibold'
            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800',
    ]}
>
    <div class="flex items-center gap-3">
        <span class="w-5 h-5 grid place-items-center text-base" aria-hidden="true">🧭</span>
        <span>Domains</span>
    </div>
</a>
```

`isActive` is already defined in the file (line 40) and already matches by prefix, so `/domains/space` will also highlight this link.

---

## Task 7 — Link domains from the detail page header

Make each detail page's header show its domains as clickable chips linking to the domain pages. The app detail page renders via [src/layouts/ContentLayout.astro](../src/layouts/ContentLayout.astro).

**7a — Pass domains into the layout.** In [src/pages/apps/[slug].astro](../src/pages/apps/[slug].astro), add a prop to the `<ContentLayout ...>` tag:
```astro
domains={app.data.domains}
```

**7b — Accept and render it.** In [src/layouts/ContentLayout.astro](../src/layouts/ContentLayout.astro):

1. Add to `Props` interface (after `tags?: string[];`):
   ```ts
   domains?: string[];
   ```
2. Add to the destructuring (after `tags,`):
   ```ts
   domains = [],
   ```
3. Import the helper at the top of the frontmatter:
   ```ts
   import { getDomainMeta } from '../utils/domainMeta.ts';
   ```
4. Render domain chips. Immediately **before** the existing category-chips block (the `categories.length > 0 && (...)` block near line 153), insert:
   ```astro
   {
       domains.length > 0 && (
           <div class="flex flex-wrap gap-2 mt-1">
               {domains.map((domain) => {
                   const dm = getDomainMeta(domain);
                   return (
                       <a
                           href={`/domains/${domain}`}
                           class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-primary-100 dark:bg-primary-900/40 text-primary-800 dark:text-primary-200 hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors"
                       >
                           <span aria-hidden="true">{dm.icon}</span>
                           {dm.label}
                       </a>
                   );
               })}
           </div>
       )
   }
   ```

---

## Task 8 — (Optional) Per-domain RSS feed

Only do this if per-domain feeds are desired. Model it on the existing [src/pages/rss.xml.ts](../src/pages/rss.xml.ts) (open that file first to copy its import of `@astrojs/rss` and `site` usage).

**File (new):** `src/pages/domains/[domain]/rss.xml.ts`

```ts
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { SCANNED_COLLECTIONS, getEntryTitle, getEntryDescription, type ScannedEntry } from '@/utils/collectionsToScan.ts';
import { getDomainMeta } from '@/utils/domainMeta.ts';

export async function getStaticPaths() {
    const domains = new Set<string>();
    for (const name of SCANNED_COLLECTIONS) {
        const entries = (await getCollection(name)) as ScannedEntry[];
        for (const e of entries) {
            if (e.data.draft) continue;
            for (const d of e.data.domains ?? []) domains.add(d);
        }
    }
    return [...domains].map((domain) => ({ params: { domain } }));
}

export async function GET(context: APIContext) {
    const domain = context.params.domain as string;
    const meta = getDomainMeta(domain);

    const items: Array<{ title: string; description: string; link: string }> = [];
    for (const name of SCANNED_COLLECTIONS) {
        const entries = (await getCollection(name)) as ScannedEntry[];
        for (const e of entries) {
            if (e.data.draft || !(e.data.domains ?? []).includes(domain)) continue;
            items.push({
                title: getEntryTitle(e),
                description: getEntryDescription(e) ?? '',
                link: `/${e.collection}/${e.slug}`,
            });
        }
    }

    return rss({
        title: `${meta.label} — Awesome Bharat`,
        description: meta.blurb,
        site: context.site!,
        items,
    });
}
```

> If `@astrojs/rss` import style differs in the existing `rss.xml.ts`, match that file exactly.

---

## Task 9 — Build, verify, and seed data

**9a — Seed domains on existing content.** The domain pages only generate for domains present in content. Add `domains` to the existing app frontmatter so real pages exist. Edit the two files in `src/content/apps/*.mdx` and add (values must be from the 29-key enum):
```yaml
domains:
    - mentalHealth
    - digitalIndia
```
Also add `domains` to `src/content/persons/*.mdx` and `src/content/companies/*.mdx` frontmatter (these currently have none) so the People/Companies groups appear on a domain page:
```yaml
domains:
    - technology
```

**9b — Build.**
```bash
npm run build
```
Expected: build succeeds, and the terminal shows generated routes like `/domains/index.html`, `/domains/mentalHealth/index.html`, `/domains/technology/index.html`.

**9d — Lint/format.**
```bash
npm run lint && npm run format
```

---

## Definition of done

- [ ] `src/utils/domainMeta.ts` and `src/utils/collectionsToScan.ts` exist and type-check.
- [ ] `/domains` renders a grid of domains with live counts.
- [ ] `/domains/[domain]` renders items grouped by collection, featured-first, with anchor pills.
- [ ] All three existing pages use `data.domains` (the `domain:`-tag hack is gone).
- [ ] Sidebar has a working "Domains" entry.
- [ ] App detail headers show clickable domain chips.
- [ ] `npm run build` passes; at least two real domain pages generate.

---

## Notes for when the 7 new collections land

The domain pages are already forward-compatible. When the collections in `COLLECTIONS-IMPLEMENTATION-GUIDE.md` are built:
1. Add each new collection name to `SCANNED_COLLECTIONS` in `src/utils/collectionsToScan.ts`.
2. Add a matching entry to `COLLECTION_GROUP_META` (e.g. `channels: { title: 'Channels', id: 'channels' }`).
3. Confirm the new collection's title/description/image field is handled by `getEntryTitle` / `getEntryDescription` / `getEntryImage` (all seven use `name` / `description` / `logo`, which are already covered).

No changes to the domain pages themselves are required.
