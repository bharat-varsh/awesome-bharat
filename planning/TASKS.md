# Awesome Bharat — Task Dispatch Guide

> **How to use this document**: Tell your AI agent: "Do task X.Y" and point it to this file. Each task is self-contained with everything the agent needs — context, files to read, what to produce, and how to verify.
>
> **Task types**: 🔨 Code | 🔍 Research | 🎨 Design+Code | 📝 Content
>
> **Before any code task**, the agent should read: `AGENTS.md` (project overview) + relevant planning doc noted in each task.

---

## Quick Reference

| ID                                           | Task                                             | Type | Effort | Depends On    |
| -------------------------------------------- | ------------------------------------------------ | ---- | ------ | ------------- |
| **Phase 1 — Polish & Gaps**                  |
| 1.1                                          | ContentCardFull component                        | 🎨   | M      | —             |
| 1.2                                          | "By Same Author" sidebar section                 | 🔨   | S      | —             |
| 1.3                                          | Homepage multi-section layout                    | 🎨   | M      | —             |
| 1.4                                          | Pagefind search integration                      | 🔨   | M      | —             |
| 1.5                                          | Mobile nav background fix                        | 🔨   | XS     | —             |
| **Phase 2 — Content Type Expansion**         |
| 2.1                                          | Add new collection schemas to config.ts          | 🔨   | S      | —             |
| 2.2                                          | Create collection folders + example entries      | 📝🔍 | M      | 2.1           |
| 2.3                                          | Listing pages for new collections                | 🔨   | M      | 2.1, 2.2      |
| 2.4                                          | Detail pages for new collections                 | 🔨   | L      | 2.1, 2.2, 2.3 |
| 2.5                                          | Extend ctaUtils for all content types            | 🔨   | S      | 2.1           |
| 2.6                                          | Update sidebar navigation                        | 🔨   | XS     | 2.1           |
| 2.7                                          | Update tag/category pages for new types          | 🔨   | S      | 2.1, 2.2      |
| **Phase 3 — Domain Pages & Dual Navigation** |
| 3.1                                          | Domain enum + display config utility             | 🔨   | S      | 2.1           |
| 3.2                                          | Research domain content (achievements, stats)    | 🔍   | L      | —             |
| 3.3                                          | Domain landing pages                             | 🎨   | L      | 3.1           |
| 3.4                                          | Domain index page                                | 🎨   | M      | 3.1           |
| 3.5                                          | Homepage "Explore by Domain" wiring              | 🔨   | S      | 3.3           |
| 3.6                                          | Domain navigation in sidebar                     | 🔨   | S      | 3.1           |
| **Phase 4 — Opportunities & Engagement**     |
| 4.1                                          | Domain content collection schema + MDX structure | 🔨   | M      | 3.1           |
| 4.2                                          | AchievementCard component                        | 🎨   | M      | —             |
| 4.3                                          | ComparisonWidget component                       | 🎨   | M      | —             |
| 4.4                                          | ActionCard component                             | 🎨   | S      | —             |
| 4.5                                          | MilestoneCard component                          | 🎨   | S      | —             |
| 4.6                                          | Opportunities section layout (compose all)       | 🎨   | M      | 4.1–4.5       |
| 4.7                                          | Research + write Opportunities for Space domain  | 🔍📝 | M      | 4.1           |
| 4.8                                          | Research + write Opportunities for Environment   | 🔍📝 | M      | 4.1           |
| 4.9                                          | Research + write Opportunities for Technology    | 🔍📝 | M      | 4.1           |
| 4.10                                         | Research + write Opportunities for Education     | 🔍📝 | M      | 4.1           |
| 4.11                                         | Research + write Opportunities for Social Impact | 🔍📝 | M      | 4.1           |
| **Phase 5 — Discovery & Scale**              |
| 5.1                                          | Pagefind optimization (facets, filters)          | 🔨   | S      | 1.4           |
| 5.2                                          | Build performance audit + optimization           | 🔨   | M      | —             |
| 5.3                                          | SEO: structured data + meta tags                 | 🔨   | M      | —             |
| 5.4                                          | Dynamic OG image generation                      | 🔨   | M      | —             |
| 5.5                                          | Analytics integration (Plausible/Umami)          | 🔨   | S      | —             |
| **Phase 6 — Polish & Growth**                |
| 6.1                                          | Accessibility audit + fixes                      | 🔨   | M      | —             |
| 6.2                                          | Animation & micro-interactions                   | 🎨   | M      | —             |
| 6.3                                          | Dark mode audit + polish                         | 🎨   | S      | —             |
| 6.4                                          | Contributor workflow tooling                     | 🔨   | M      | —             |
| 6.5                                          | Performance budget + Lighthouse optimization     | 🔨   | S      | —             |

**Effort**: XS = <1hr, S = 2-4hr, M = 1-2 days, L = 3+ days

---

## Phase 1 — Polish & Gaps

---

### Task 1.1 — ContentCardFull Component

**Type**: 🎨 Design+Code
**Effort**: M (1-2 days)
**Depends on**: Nothing

#### Context

The existing `ContentCard.astro` is a compact 60-120px card for scroll rows. Listing pages, tag pages, and category pages need a richer card that shows description, domain badge, and CTA hint.

#### Read First

- `planning/DESIGN-SYSTEM.md` → section "ContentCardFull (Listing)"
- `src/components/ContentCard.astro` — existing compact card (for pattern reference)
- `src/components/ContentCardFull.astro` — may already exist as a stub
- `src/pages/apps/index.astro` — where it will be used

#### What to Build

Create `src/components/ContentCardFull.astro` with:

**Props**:

```typescript
interface Props {
    title: string;
    description?: string;
    slug: string;
    collection: string; // 'apps' | 'persons' | 'companies' | etc.
    logoSrc?: ImageMetadata;
    domains?: string[];
    categories?: string[];
    ctaLabel?: string | null;
    ctaUrl?: string | null;
    featured?: boolean;
}
```

**Layout**:

```
┌──────────────────────────────────────┐
│  [Logo 56px]  Title (2 lines max)    │
│               Description (2 lines)  │
│                                      │
│  [Domain badge]  [Category badge]    │
│                         [CTA hint →] │
└──────────────────────────────────────┘
```

**Requirements**:

- Min width: 280px, uses `rounded-xl`, `p-4`
- Background: `bg-white dark:bg-secondary-800`
- Border: `border border-gray-200 dark:border-secondary-600`
- Hover: `shadow-md` + `translate-y-[-2px]` with 200ms transition
- Title: `font-semibold`, 2-line clamp (`line-clamp-2`)
- Description: `text-sm text-gray-600 dark:text-gray-400`, 2-line clamp
- CTA hint: `text-sm text-primary-500` with `→` arrow, bottom-right
- Featured: add gold border `border-yellow-400` + small ⭐ badge
- Entire card is a clickable `<a>` linking to `/{collection}/{slug}`
- Logo uses `resolveLogo()` from `@/utils/imageResolvers`
- Domain badges: `bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200`, rounded-full, text-xs
- Max 1 domain badge + 1 category badge shown (don't overflow)

#### Then Update

- `src/pages/apps/index.astro` — replace `ContentCard` with `ContentCardFull` in the grid
- `src/pages/tags/[tag].astro` — use `ContentCardFull` if currently using compact cards
- `src/pages/categories/[category].astro` — same

#### Verify

```bash
npm run build
```

- Card renders on `/apps/` listing page
- Card shows title, description, and CTA hint
- Hover effect works
- Dark mode looks correct
- Featured card has gold border

---

### Task 1.2 — "By Same Author" Sidebar Section

**Type**: 🔨 Code
**Effort**: S (2-4 hours)
**Depends on**: Nothing

#### Context

The right sidebar on detail pages shows "You might also like" (tag-based related content). There's no "More by this author" section. When an author has multiple apps/content, users should see it.

#### Read First

- `src/pages/apps/[slug].astro` — current detail page (see how related items are fetched)
- `src/components/RightSidebar.astro` — the sidebar wrapper
- `src/components/YouMightLike.astro` — existing related items section
- `src/components/RelatedItem.astro` — individual item in sidebar

#### What to Build

In `src/pages/apps/[slug].astro`:

1. After fetching related apps, add a query for "same author" apps:

```typescript
// Get other apps by same authors
const currentAuthors = entry.data.authors.map((a) => a.slug);
const byAuthor = allApps
    .filter(
        (app) =>
            app.id !== entry.id && app.data.authors.some((a) => currentAuthors.includes(a.slug))
    )
    .slice(0, 4);
```

2. Pass this data to the right sidebar. The right sidebar needs a new section below "You might also like":

```astro
<!-- In RightSidebar or directly in ContentLayout where sidebar is composed -->{
    byAuthor.length > 0 && (
        <div class="mt-8">
            <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                More by {authorName}
            </h3>
            <div class="grid grid-cols-2 gap-2">
                {byAuthor.map((item) => (
                    <RelatedItem
                        title={item.data.title}
                        slug={item.slug}
                        collection="apps"
                        logoSrc={resolveLogo(item.slug, item.data.logo)}
                    />
                ))}
            </div>
        </div>
    )
}
```

3. Get the author name for the heading:

```typescript
const authorName = resolvedAuthors?.[0]?.name || 'this author';
```

#### Verify

```bash
npm run build
```

- Visit `/apps/mindful` — should show "More by Pawan Nagar" if he has other apps
- If author has no other apps, section doesn't render
- Section appears below "You might also like"

---

### Task 1.3 — Homepage Multi-Section Layout

**Type**: 🎨 Design+Code
**Effort**: M (1-2 days)
**Depends on**: Nothing

#### Context

Homepage currently only shows "Latest Apps" in a scroll row. Should show multiple content sections.

#### Read First

- `planning/DESIGN-SYSTEM.md` → section "Homepage"
- `src/pages/index.astro` — current homepage
- `src/components/ContentCard.astro` — used in scroll rows

#### What to Build

Update `src/pages/index.astro` to have this structure:

1. **Hero** (keep existing, already has stat strip)

2. **"Latest Apps"** — horizontal scroll row (keep existing)

3. **"Featured People"** — new horizontal scroll row
    - Fetch from `persons` collection, filter non-draft, sort featured first
    - Use `ContentCard` (compact) with avatar instead of logo
    - "View all →" link to `/people/` (or `#` if page doesn't exist yet)

4. **"Featured Companies"** — new horizontal scroll row
    - Fetch from `companies` collection, filter non-draft
    - Use `ContentCard` with company logo
    - "View all →" link to `/companies/` (or `#`)

5. **"Explore by Category"** — grid of category pills
    - Collect all unique categories from apps
    - Render as clickable pills: `bg-primary-100 text-primary-800 rounded-full px-4 py-2`
    - Each links to `/categories/{category}`
    - Grid: `flex flex-wrap gap-2`

6. **"Explore Everything" CTA** (keep existing)

Each section follows this pattern:

```astro
<section class="space-y-4">
    <div class="flex items-center justify-between">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Section Title</h2>
        <a href="/collection/" class="text-sm text-primary-500 hover:text-primary-600">View all →</a
        >
    </div>
    <!-- scroll row or grid -->
</section>
```

Section spacing: `space-y-12` between sections.

#### Verify

```bash
npm run build
```

- Homepage shows multiple sections
- Each section has heading + "View all" link
- Scroll rows scroll horizontally with arrow buttons
- Category pills link to correct pages
- Responsive on mobile (sections stack, pills wrap)

---

### Task 1.4 — Pagefind Search Integration

**Type**: 🔨 Code
**Effort**: M (1-2 days)
**Depends on**: Nothing

#### Context

No search exists. With growing content, users need to find things. Pagefind is a client-side search that indexes static sites at build time — perfect for Astro.

#### Read First

- https://pagefind.app/docs/
- https://docs.astro.build/en/guides/integrations-guide/ (for integration patterns)
- `src/components/Header.astro` — where search input goes
- `astro.config.mjs` — may need post-build hook

#### What to Build

1. **Install Pagefind**:

```bash
npm install --save-dev pagefind
```

2. **Add post-build indexing** in `package.json` scripts:

```json
"postbuild": "npx pagefind --site docs"
```

3. **Create `src/components/Search.astro`**:

- Search input in the header area
- On focus/type: show results overlay
- Use Pagefind's UI library or custom markup
- Style to match site design (primary colors, rounded, dark mode)

```astro
---
// No props needed
---

<div class="relative" data-search-wrapper>
    <input
        type="search"
        placeholder="Search..."
        class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-secondary-600
           bg-white dark:bg-secondary-800 text-sm
           focus:outline-none focus:ring-2 focus:ring-primary-500"
        data-search-input
    />
    <div
        class="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-secondary-800
              rounded-xl shadow-xl border border-gray-200 dark:border-secondary-600
              hidden z-50 max-h-96 overflow-y-auto"
        data-search-results
    >
    </div>
</div>

<script>
    // Import Pagefind at runtime
    async function initSearch() {
        const pagefind = await import('/pagefind/pagefind.js');
        await pagefind.init();

        const input = document.querySelector('[data-search-input]');
        const results = document.querySelector('[data-search-results]');

        input?.addEventListener('input', async (e) => {
            const query = (e.target as HTMLInputElement).value;
            if (query.length < 2) {
                results?.classList.add('hidden');
                return;
            }
            const search = await pagefind.search(query);
            const items = await Promise.all(search.results.slice(0, 8).map((r) => r.data()));
            // Render results...
            results?.classList.remove('hidden');
            if (results) {
                results.innerHTML = items
                    .map(
                        (item) => `
          <a href="${item.url}" class="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-secondary-700 border-b border-gray-100 dark:border-secondary-600 last:border-0">
            <div class="font-medium text-sm text-gray-900 dark:text-gray-100">${item.meta?.title || 'Untitled'}</div>
            <div class="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">${item.excerpt}</div>
          </a>
        `
                    )
                    .join('');
            }
        });

        // Close on click outside
        document.addEventListener('click', (e) => {
            if (!(e.target as Element).closest('[data-search-wrapper]')) {
                results?.classList.add('hidden');
            }
        });
    }
    initSearch();
</script>
```

4. **Add to Header.astro**: Import and place `<Search />` in the header bar.

5. **Add `data-pagefind-body`** attribute to the main content area in layouts so Pagefind only indexes content, not nav/sidebar.

#### Verify

```bash
npm run build
```

- `docs/pagefind/` directory is created with index files
- Search input appears in header
- Typing "Mindful" returns the Mindful app
- Results link to correct pages
- Works in dark mode

---

### Task 1.5 — Mobile Nav Background Fix

**Type**: 🔨 Code
**Effort**: XS (<1 hour)
**Depends on**: Nothing

#### Context

Mobile nav drawer uses `bg-white dark:bg-gray-900` while desktop sidebar uses themed colors. They look like different sites.

#### Read First

- `src/components/MobileNav.astro`
- `src/components/LeftSidebar.astro` (for the desktop background classes to match)

#### What to Do

In `src/components/MobileNav.astro`, find the drawer container element and change:

- `bg-white` → `bg-primary-50`
- `dark:bg-gray-900` → `dark:bg-secondary-800`

This aligns with the desktop sidebar styling.

#### Verify

```bash
npm run build
```

- Mobile nav (resize to <1024px) has same background color as desktop sidebar
- Dark mode mobile nav uses `secondary-800`

---

## Phase 2 — Content Type Expansion

---

### Task 2.1 — Add New Collection Schemas

**Type**: 🔨 Code
**Effort**: S (2-4 hours)
**Depends on**: Nothing

#### Context

The site currently has 3 collections (apps, persons, companies). Need to add 7 more.

#### Read First

- `planning/CONTENT-ARCHITECTURE.md` → sections 4-10 (full schema specs for each type)
- `src/content/config.ts` — current schemas (apps, persons, companies)

#### What to Build

Update `src/content/config.ts` to add these collections:

1. **channels** (YouTube Channels)
2. **products** (Physical/digital products)
3. **blogs** (Blogs & Newsletters)
4. **projects** (Open-source projects, non-app)
5. **communities** (Discord/Telegram/Slack)
6. **podcasts** (Podcasts)
7. **initiatives** (NGOs, social movements)

Also add the `domains` field (as `z.array(domainEnum).default([])`) to existing collections (apps, persons, companies).

**Domain enum** to add:

```typescript
const domainEnum = z.enum([
    'technology',
    'space',
    'defense',
    'artificialIntelligence',
    'health',
    'mentalHealth',
    'environment',
    'agriculture',
    'cleanEnergy',
    'education',
    'research',
    'startups',
    'finance',
    'manufacturing',
    'socialImpact',
    'governance',
    'ruralDevelopment',
    'arts',
    'music',
    'cinema',
    'literature',
    'heritage',
    'sports',
    'fitness',
    'infrastructure',
    'transportation',
    'digitalIndia',
    'cybersecurity',
    'gaming',
]);
```

Copy the exact schema definitions from `planning/CONTENT-ARCHITECTURE.md`. Use the existing `linkSchema` and `authorSchema` patterns already in the file.

Export all collections in the `collections` object at the bottom.

#### Verify

```bash
npm run build
```

- No TypeScript errors
- No Zod schema errors
- Existing apps/persons/companies still work (no breaking changes)

---

### Task 2.2 — Create Collection Folders + Example Entries

**Type**: 📝🔍 Research + Content
**Effort**: M (1-2 days)
**Depends on**: 2.1

#### Context

Each new collection needs a folder and at least 2 real example entries (not dummy data) to test the schema and serve as templates.

#### Read First

- `planning/CONTENT-GUIDELINES.md` — editorial voice, templates
- `planning/CONTENT-ARCHITECTURE.md` — schemas for reference
- `src/content/apps/mindful.mdx` — example of a well-written entry
- `src/content/config.ts` — the schemas you're writing entries for

#### What to Create

Create folders and 2 entries each. Research REAL Indian creators/projects:

| Collection  | Folder                     | Suggested Research Targets                         |
| ----------- | -------------------------- | -------------------------------------------------- |
| channels    | `src/content/channels/`    | Popular Indian tech/education YouTubers            |
| products    | `src/content/products/`    | Indian D2C products or made-in-India tech products |
| blogs       | `src/content/blogs/`       | Indian tech blogs, newsletters                     |
| projects    | `src/content/projects/`    | Indian-maintained OSS libraries/tools (not apps)   |
| communities | `src/content/communities/` | Indian dev communities on Discord/Telegram         |
| podcasts    | `src/content/podcasts/`    | Indian tech/business podcasts                      |
| initiatives | `src/content/initiatives/` | Indian NGOs or social movements                    |

**For each entry**:

1. Research the subject — verify it's real, active, Indian-made/led
2. Create MDX file with complete frontmatter (all available fields filled)
3. Write 150-400 word body following templates in `CONTENT-GUIDELINES.md`
4. Ensure slugs are kebab-case lowercase
5. If logo/image is available, add to `src/assets/images/` and register in `src/utils/imageRegistry.ts`

**Filename format**: `kebab-case-name.mdx`

#### Verify

```bash
npm run build
```

- All 14 new entries (7 collections × 2) pass schema validation
- No build errors
- Frontmatter matches schema exactly

---

### Task 2.3 — Listing Pages for New Collections

**Type**: 🔨 Code
**Effort**: M (1-2 days)
**Depends on**: 2.1, 2.2

#### Context

Each new collection needs a listing page at its URL path, following the same pattern as `/apps/`.

#### Read First

- `src/pages/apps/index.astro` — template to follow
- `src/components/CollectionHero.astro` — hero banner component
- `src/components/ContentCardFull.astro` — card for grid (or `ContentCard` if 1.1 not done yet)
- `planning/DESIGN-SYSTEM.md` → "Listing Page" layout

#### What to Build

Create these files, each following the `/apps/index.astro` pattern:

```
src/pages/channels/index.astro
src/pages/products/index.astro
src/pages/blogs/index.astro
src/pages/projects/index.astro
src/pages/communities/index.astro
src/pages/podcasts/index.astro
src/pages/initiatives/index.astro
```

Each page:

1. Imports `BaseLayout`, `CollectionHero`, and card component
2. Fetches collection with `getCollection('name', ({ data }) => !data.draft)`
3. Sorts by featured first, then by name/date
4. Renders `CollectionHero` with:
    - `icon`: appropriate emoji for collection
    - `title`: collection display name
    - `description`: one-line description
    - `count`: number of entries
5. Renders grid of cards: `grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4`

**Collection metadata**:

| Collection  | Emoji | Title                | Description                                         |
| ----------- | ----- | -------------------- | --------------------------------------------------- |
| channels    | 📺    | YouTube Channels     | Indian creators making incredible content           |
| products    | 🛍️    | Products             | Made-in-India products worth knowing about          |
| blogs       | ✍️    | Blogs & Newsletters  | Indian voices writing things worth reading          |
| projects    | 🔧    | Open Source Projects | Indian-maintained libraries, tools, and frameworks  |
| communities | 👥    | Communities          | Spaces where Indian builders connect and grow       |
| podcasts    | 🎙️    | Podcasts             | Indian podcasts worth your earbuds                  |
| initiatives | 🌟    | Initiatives          | Organizations and movements driving change in India |

#### Verify

```bash
npm run build
```

- Each listing page generates HTML in `docs/`
- Pages display entries in a grid
- CollectionHero shows correct icon, title, count
- Pages are accessible at their URLs

---

### Task 2.4 — Detail Pages for New Collections

**Type**: 🔨 Code
**Effort**: L (3+ days)
**Depends on**: 2.1, 2.2, 2.3

#### Context

Each collection needs a `[slug].astro` detail page that shows the full entry with appropriate layout, CTA, and related content.

#### Read First

- `src/pages/apps/[slug].astro` — template to follow (most complete example)
- `src/layouts/ContentLayout.astro` — the detail page layout component
- `src/utils/ctaUtils.ts` — CTA resolution logic
- `src/utils/relatedContent.ts` — related items logic
- `planning/CONTENT-ARCHITECTURE.md` → Primary CTA mapping table

#### What to Build

Create `[slug].astro` for each new collection:

```
src/pages/channels/[slug].astro
src/pages/products/[slug].astro
src/pages/blogs/[slug].astro
src/pages/projects/[slug].astro
src/pages/communities/[slug].astro
src/pages/podcasts/[slug].astro
src/pages/initiatives/[slug].astro
```

Each page must:

1. Use `getStaticPaths()` to generate routes for non-draft entries
2. Pass appropriate data to `ContentLayout`:
    - Title, description, logo
    - Correct primary CTA (see table below)
    - Tags, domains, categories (if applicable)
    - Type-specific fields (platform links for podcasts, channelUrl for channels, etc.)
3. Fetch related content from same collection using `getRelatedContentSimple()`
4. Render MDX body content via `<Content />` component

**CTA by collection**:

| Collection  | CTA Label    | CTA URL Source                               |
| ----------- | ------------ | -------------------------------------------- |
| channels    | Subscribe    | `data.channelUrl`                            |
| products    | Buy / Visit  | `data.buyUrl` or `data.website`              |
| blogs       | Read         | `data.url`                                   |
| projects    | Contribute   | `data.repositoryUrl`                         |
| communities | Join         | `data.joinUrl`                               |
| podcasts    | Listen       | `data.platforms[0].url`                      |
| initiatives | Get Involved | `data.howToHelp?.[0]?.url` or `data.website` |

**Type-specific sections** (render conditionally if data exists):

- **Channels**: embed featured videos via `YouTubeEmbed`
- **Products**: screenshots gallery
- **Projects**: show license badge, programming languages
- **Podcasts**: list all platform links as badges
- **Initiatives**: render `howToHelp` as action items
- **Communities**: show platform badge (Discord/Telegram/Slack icon)

#### Verify

```bash
npm run build
```

- Each entry has a working detail page
- CTA button shows correct label and links correctly
- Related content appears in sidebar
- MDX body renders properly
- No broken links

---

### Task 2.5 — Extend ctaUtils for All Content Types

**Type**: 🔨 Code
**Effort**: S (2-4 hours)
**Depends on**: 2.1

#### Context

`src/utils/ctaUtils.ts` currently handles apps, persons, and companies. Need to extend for 7 new types.

#### Read First

- `src/utils/ctaUtils.ts` — current implementation
- `planning/CONTENT-ARCHITECTURE.md` → "Primary CTA Mapping" table

#### What to Do

Update the three functions in `ctaUtils.ts`:

**`getCTALinks(collection, data)`** — add cases:

```typescript
case 'channels':
  // Group: "Subscribe" → [{ label: 'YouTube', url: data.channelUrl }]
case 'products':
  // Group: "Buy" → data.buyUrl, fallback "Visit" → data.website
case 'blogs':
  // Group: "Read" → [{ label: data.name, url: data.url }]
case 'projects':
  // Group: "Contribute" → [{ label: 'GitHub', url: data.repositoryUrl }]
case 'communities':
  // Group: "Join" → [{ label: data.platform, url: data.joinUrl }]
case 'podcasts':
  // Group: "Listen" → data.platforms array
case 'initiatives':
  // Group: "Get Involved" → data.howToHelp mapped, fallback "Visit" → data.website
```

**`getPrimaryCTALabel(collection, data)`** — add return values for each type.

**`getPrimaryCTAUrl(collection, data)`** — add URL resolution for each type.

#### Verify

```bash
npm run build
```

- No TypeScript errors
- Existing app/person/company CTAs still work
- New types resolve correct labels and URLs

---

### Task 2.6 — Update Sidebar Navigation

**Type**: 🔨 Code
**Effort**: XS (<1 hour)
**Depends on**: 2.1

#### Context

The sidebar nav needs to show all 10 collections, grouped logically.

#### Read First

- `src/components/SidebarNav.astro` — current sidebar nav

#### What to Do

Update the collections array in `SidebarNav.astro` to include all 10 types, grouped:

**Content group**:

- Apps (`/apps/`)
- Projects (`/projects/`)
- Products (`/products/`)
- Channels (`/channels/`)
- Blogs (`/blogs/`)
- Podcasts (`/podcasts/`)

**People & Orgs group**:

- People (`/people/` or current persons path)
- Companies (`/companies/`)
- Communities (`/communities/`)
- Initiatives (`/initiatives/`)

Each nav item shows: emoji icon + name + count of non-draft entries.

Add a subtle separator or group heading between the two groups.

#### Verify

```bash
npm run build
```

- Sidebar shows all 10 collections
- Counts are correct
- Links navigate to listing pages
- Groups are visually separated

---

### Task 2.7 — Update Tag/Category Pages for New Types

**Type**: 🔨 Code
**Effort**: S (2-4 hours)
**Depends on**: 2.1, 2.2

#### Context

Tag pages (`/tags/[tag]`) and category pages (`/categories/[category]`) currently only show apps, persons, and companies. They need to include all 10 content types.

#### Read First

- `src/pages/tags/[tag].astro` — current implementation
- `src/pages/categories/[category].astro` — current implementation

#### What to Do

In both files:

1. Add `getCollection()` calls for all new collections
2. Filter each by matching tag (for tag pages) or category/domain (for category pages)
3. Add new tab pills and grouped sections for each collection that has results
4. Use appropriate card component and CTA labels via `getPrimaryCTALabel()`

For **tag pages**: check `data.tags` on every collection type.

For **category pages**: check `data.categories` (apps only) AND `data.domains` (all types). A category page for "productivity" should show apps with that category, AND any other content type tagged with that theme.

#### Verify

```bash
npm run build
```

- Tag pages include results from new collections
- Category pages show cross-collection results
- Tab navigation includes new types when they have matching entries
- No errors with empty collections (gracefully handle 0 results)

---

## Phase 3 — Domain Pages & Dual Navigation

---

### Task 3.1 — Domain Enum + Display Config

**Type**: 🔨 Code
**Effort**: S (2-4 hours)
**Depends on**: 2.1

#### Context

Domains need a utility file with display names, emojis, and descriptions for rendering domain pages and badges.

#### Read First

- `planning/CONTENT-ARCHITECTURE.md` → "Domain Taxonomy" section (full list with emojis and display names)
- `src/utils/textUtils.ts` — existing utility pattern

#### What to Build

Create `src/utils/domainUtils.ts`:

```typescript
export interface DomainInfo {
    id: string;
    name: string;
    emoji: string;
    description: string;
    group: string; // "Science & Technology", "Social Impact", etc.
}

export const DOMAINS: Record<string, DomainInfo> = {
    technology: {
        id: 'technology',
        name: 'Technology',
        emoji: '💻',
        description: 'Indian tech innovations and digital solutions',
        group: 'Science & Technology',
    },
    space: {
        id: 'space',
        name: 'Space & Exploration',
        emoji: '🚀',
        description: "India's journey to the stars",
        group: 'Science & Technology',
    },
    // ... all 29 domains from CONTENT-ARCHITECTURE.md
};

export function getDomainInfo(domain: string): DomainInfo | undefined;
export function getDomainsByGroup(): Record<string, DomainInfo[]>;
export function formatDomainName(domain: string): string;
```

Include ALL 29 domains from the architecture doc with correct emojis, names, descriptions, and group assignments.

#### Verify

```bash
npm run build
```

- No TypeScript errors
- Importing and calling functions works

---

### Task 3.2 — Research Domain Content

**Type**: 🔍 Research
**Effort**: L (3+ days — can be done domain by domain)
**Depends on**: Nothing (can start anytime)

#### Context

Domain pages need real data: Indian achievements, world comparisons, action links. This is pure research — no code.

#### What to Research

For each of the top 5 priority domains, gather:

**1. Space (`space`)**:

- 5-8 India achievements (Chandrayaan-3, Mangalyaan, Gaganyaan, AstroSat, private space startups like Skyroot/Agnikul)
- 3-4 comparisons (satellites in orbit, launches per year, space budget, private companies)
- 3-5 actions (ISRO citizen programs, space-tech OSS, startups to follow)
- 3-5 recent milestones with source URLs

**2. Environment (`environment`)**:

- 5-8 achievements (solar capacity growth, EV adoption, waste management initiatives, forest restoration)
- 3-4 comparisons (renewable capacity, EV market share, recycling rate)
- 3-5 actions (NGOs to join, clean-up drives, tree planting orgs)
- 3-5 recent milestones with source URLs

**3. Technology/Startups (`startups`)**:

- 5-8 achievements (UPI, ONDC, unicorn count, global tech CEOs of Indian origin)
- 3-4 comparisons (startup funding, unicorns, patents filed)
- 3-5 actions (startup communities, open source to contribute to)
- 3-5 milestones

**4. Education (`education`)**:

- 5-8 achievements (IITs producing global leaders, EdTech growth, NEP 2020, Atal Innovation Mission)
- 3-4 comparisons (literacy rate progress, research papers, EdTech market)
- 3-5 actions (teaching volunteer programs, education NGOs)
- 3-5 milestones

**5. Social Impact (`socialImpact`)**:

- 5-8 achievements (Swachh Bharat progress, digital inclusion, microfinance, Self-Help Groups)
- 3-4 comparisons (poverty reduction rate, digital payment adoption)
- 3-5 actions (volunteer orgs, social enterprises to support)
- 3-5 milestones

#### Output Format

For each domain, produce a structured YAML/MDX-ready document:

```yaml
domain: space
achievements:
    - title: 'Chandrayaan-3 Soft Landing'
      description: 'India became the 4th nation to soft-land on the Moon, and 1st near the south pole'
      date: 2023-08-23
      source: 'https://www.isro.gov.in/Chandrayaan3.html'
      badge: '🏆 Historic First'
    - ...

comparisons:
    - metric: 'Active satellites in orbit'
      india: 60
      leaders:
          - country: 'USA'
            value: 3400
          - country: 'China'
            value: 600
      gap: 'Rapidly growing — India launched 100+ satellites in the last 5 years'
      source: 'https://...'
    - ...

actions:
    - type: collaborate
      title: "Contribute to ISRO's open data initiatives"
      description: 'ISRO publishes satellite data openly — build tools on top'
      url: 'https://bhuvan.nrsc.gov.in/'
    - ...

milestones:
    - title: 'Aditya-L1 reaches Lagrange point'
      source: 'The Hindu'
      sourceUrl: 'https://...'
      date: 2024-01-06
    - ...
```

**Important**: All facts MUST be verifiable. Include source URLs. Do not fabricate statistics.

#### Verify

- Every achievement has a credible source URL
- All comparison numbers are from verifiable reports (cite year)
- Action URLs are working and lead to real organizations
- Dates are accurate

---

### Task 3.3 — Domain Landing Pages

**Type**: 🎨 Design+Code
**Effort**: L (3+ days)
**Depends on**: 3.1

#### Context

Domain pages are the second axis of navigation. They show ALL content across ALL types related to a specific domain (like Space, Health, etc.).

#### Read First

- `planning/DESIGN-SYSTEM.md` → "Domain Page" layout
- `planning/CONTENT-ARCHITECTURE.md` → "Dual Navigation Model"
- `src/utils/domainUtils.ts` — domain metadata (from task 3.1)
- `src/pages/tags/[tag].astro` — similar pattern (cross-collection grouping)
- `src/pages/categories/[category].astro` — similar pattern

#### What to Build

Create `src/pages/domains/[domain].astro`:

1. **`getStaticPaths()`**: generate a path for every domain in the enum
2. **Data fetching**: for each collection, filter entries where `data.domains` includes this domain
3. **Layout**:

```
Hero (domain emoji + name + description + total count + type tabs)
─────────────────────────────────────────────────────────────────
[Opportunities Section placeholder — Phase 4 will fill this]
─────────────────────────────────────────────────────────────────
Tab navigation: [Apps (8)] [People (12)] [Companies (5)] [Channels (3)] ...
─────────────────────────────────────────────────────────────────
Grid of ContentCardFull for active tab's content
```

4. **Tab navigation**: horizontal pills showing each content type + count. Only show types that have results.
5. **Content grouping**: Show cards for the selected type (default: the type with most entries)
6. **Fallback**: If domain has no entries yet, show a message: "No entries yet for {domain}. Check back soon!"

Use `CollectionHero` or create a domain-specific hero variant with the domain's gradient/color.

#### Verify

```bash
npm run build
```

- `/domains/technology/` renders with any entries that have `domains: ['technology']`
- Tab navigation works
- Empty tabs are hidden
- Page looks good in dark mode

---

### Task 3.4 — Domain Index Page

**Type**: 🎨 Design+Code
**Effort**: M (1-2 days)
**Depends on**: 3.1

#### Context

A page showing all available domains as a visual grid, so users can browse by domain.

#### Read First

- `planning/DESIGN-SYSTEM.md` → page layout patterns
- `src/utils/domainUtils.ts` → `getDomainsByGroup()` function

#### What to Build

Create `src/pages/domains/index.astro`:

1. Page title: "Explore by Domain"
2. Group domains by their `group` field (Science & Technology, Social Impact, Arts & Culture, etc.)
3. For each group, render a section heading + grid of domain cards

**Domain card**:

```
┌────────────────────┐
│  🚀               │
│  Space             │
│  India's journey   │
│  to the stars      │
│                    │
│  [12 items]        │
└────────────────────┘
```

- Card links to `/domains/{domainId}/`
- Background: subtle gradient or domain-color tint
- Emoji large (text-3xl)
- Item count fetched at build time (count entries with this domain across all collections)
- Grid: `grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`

#### Verify

```bash
npm run build
```

- Page renders at `/domains/`
- All 29 domains shown, grouped
- Counts are accurate
- Cards link to domain pages

---

### Task 3.5 — Homepage "Explore by Domain" Wiring

**Type**: 🔨 Code
**Effort**: S (2-4 hours)
**Depends on**: 3.3

#### Context

The homepage (from task 1.3) has an "Explore by Domain" section that needs to link to actual domain pages.

#### Read First

- `src/pages/index.astro`
- `src/utils/domainUtils.ts`

#### What to Do

In `src/pages/index.astro`, add/update the "Explore by Domain" section:

1. Import `DOMAINS` and `getDomainsByGroup()` from `domainUtils`
2. Show top 8-12 domains as pills/cards (pick the ones with most content, or curate a featured list)
3. Each links to `/domains/{id}/`
4. Add "View all domains →" link to `/domains/`

Style as clickable pills: `bg-primary-100 dark:bg-secondary-700 rounded-xl px-4 py-3` with emoji + name.

#### Verify

```bash
npm run build
```

- Domain pills render on homepage
- Links point to correct domain pages
- Responsive: wraps on mobile

---

### Task 3.6 — Domain Navigation in Sidebar

**Type**: 🔨 Code
**Effort**: S (2-4 hours)
**Depends on**: 3.1

#### Context

The left sidebar needs a "Domains" section so users can jump to any domain from anywhere.

#### Read First

- `src/components/LeftSidebar.astro`
- `src/components/SidebarNav.astro`
- `src/utils/domainUtils.ts`

#### What to Do

Add a "Domains" section below the existing collection nav:

1. Section heading: "Domains" with a subtle divider above
2. List domains with emoji + name, linking to `/domains/{id}/`
3. Show only top 8-10 domains (ones with most content) + "View all →" link
4. OR show all domains in a collapsible/expandable section
5. Match existing sidebar link styling

#### Verify

```bash
npm run build
```

- Domains section appears in sidebar
- Links navigate correctly
- Doesn't make sidebar too long (collapsible or limited)

---

## Phase 4 — Opportunities & Engagement

---

### Task 4.1 — Domain Content Collection Schema

**Type**: 🔨 Code
**Effort**: M (1-2 days)
**Depends on**: 3.1

#### Context

Opportunities data (achievements, comparisons, actions, milestones) needs a structured home. Each domain gets an MDX file in a dedicated collection.

#### Read First

- `planning/CONTENT-ARCHITECTURE.md` → "Opportunities Section" (full schema)
- `src/content/config.ts` — where to add the schema

#### What to Build

1. Add a `domains` collection to `config.ts`:

```typescript
const domains = defineCollection({
    schema: z.object({
        domain: domainEnum,
        title: z.string(),
        emoji: z.string(),
        description: z.string(),
        achievements: z
            .array(
                z.object({
                    title: z.string(),
                    description: z.string(),
                    date: z.coerce.date().optional(),
                    source: z.string().url().optional(),
                    badge: z.string().optional(),
                })
            )
            .default([]),
        comparisons: z
            .array(
                z.object({
                    metric: z.string(),
                    india: z.number(),
                    leaders: z.array(
                        z.object({
                            country: z.string(),
                            value: z.number(),
                        })
                    ),
                    gap: z.string().optional(),
                    source: z.string().url().optional(),
                })
            )
            .default([]),
        actions: z
            .array(
                z.object({
                    type: z.enum(['volunteer', 'donate', 'promote', 'collaborate', 'learn']),
                    title: z.string(),
                    description: z.string().optional(),
                    url: z.string().url().optional(),
                })
            )
            .default([]),
        milestones: z
            .array(
                z.object({
                    title: z.string(),
                    source: z.string().optional(),
                    sourceUrl: z.string().url().optional(),
                    date: z.coerce.date().optional(),
                    thumbnail: z.string().optional(),
                })
            )
            .default([]),
    }),
});
```

2. Create `src/content/domains/` folder

3. Create one example domain file (e.g., `space.mdx`) with real data from task 3.2 research.

#### Verify

```bash
npm run build
```

- Schema validates the example domain file
- No TypeScript errors

---

### Task 4.2 — AchievementCard Component

**Type**: 🎨 Design+Code
**Effort**: M (1-2 days)
**Depends on**: Nothing

#### Context

The signature visual element of Opportunities sections. Must feel celebratory and special — NOT a plain card.

#### Read First

- `planning/DESIGN-SYSTEM.md` → "AchievementCard (Gamification)" section

#### What to Build

Create `src/components/AchievementCard.astro`:

**Props**:

```typescript
interface Props {
    title: string;
    description: string;
    date?: Date;
    badge?: string; // e.g., "🏆 Historic First"
    source?: string; // URL
}
```

**Design requirements** (this is the most visually distinctive component on the site):

- Background: subtle gradient (gold/amber for historic achievements, blue/purple for tech)
- Badge displayed prominently at top
- Title in heading font (Plus Jakarta Sans), bold
- Description in smaller text below
- Date in muted text, formatted nicely
- Source link as small "Source →" at bottom
- Border: 2px with gradient or gold accent
- Border-radius: `rounded-2xl`
- Inner subtle glow/shadow for depth
- NOT flat, NOT plain — think Xbox achievements, GitHub badges, Duolingo streaks
- Responsive: works at both full-width and in a carousel context
- Dark mode: gradient stays vibrant but slightly muted

**Inspiration**: Think of the feeling when you unlock an achievement in a game. The card should evoke that same celebratory feeling.

#### Verify

- Component renders without errors
- Looks distinctly different from regular content cards
- Works in light and dark mode
- Readable at various widths

---

### Task 4.3 — ComparisonWidget Component

**Type**: 🎨 Design+Code
**Effort**: M (1-2 days)
**Depends on**: Nothing

#### Context

Shows India vs world leaders on specific metrics. Must be factual and visually clear.

#### Read First

- `planning/DESIGN-SYSTEM.md` → "ComparisonWidget" section

#### What to Build

Create `src/components/ComparisonWidget.astro`:

**Props**:

```typescript
interface Props {
    metric: string;
    india: number;
    leaders: { country: string; value: number }[];
    gap?: string;
    source?: string;
}
```

**Design**:

```
┌─────────────────────────────────────────────────┐
│  Metric Name                                     │
│                                                  │
│  🇮🇳 India    ████████░░░░░░░░░░  60           │
│  🇺🇸 USA      ████████████████████ 3400        │
│  🇨🇳 China    █████████████░░░░░░░ 600         │
│                                                  │
│  💡 "Growth insight text here"                   │
│                                                  │
│  [Source link]                                   │
└─────────────────────────────────────────────────┘
```

- India's bar: `bg-primary-500` (orange)
- Other countries: `bg-gray-300 dark:bg-gray-600`
- Bar width proportional to values (max value = 100% width)
- Country flags as emoji prefixes
- Gap/insight text in muted italic
- Responsive: bars stack vertically, labels above bars on mobile
- Dark mode: bars remain visible, text contrast maintained

#### Verify

- Renders correctly with sample data
- Bar proportions are accurate
- Works with 1-5 leader countries
- Responsive
- Dark mode

---

### Task 4.4 — ActionCard Component

**Type**: 🎨 Design+Code
**Effort**: S (2-4 hours)
**Depends on**: Nothing

#### Context

CTAs that drive real-world action — volunteer, donate, promote, collaborate.

#### Read First

- `planning/DESIGN-SYSTEM.md` → "ActionCard (CTA)" section

#### What to Build

Create `src/components/ActionCard.astro`:

**Props**:

```typescript
interface Props {
    type: 'volunteer' | 'donate' | 'promote' | 'collaborate' | 'learn';
    title: string;
    description?: string;
    url?: string;
}
```

**Design**:

- Background tint based on type:
    - volunteer: `bg-green-50 dark:bg-green-950`
    - donate: `bg-amber-50 dark:bg-amber-950`
    - promote: `bg-blue-50 dark:bg-blue-950`
    - collaborate: `bg-purple-50 dark:bg-purple-950`
    - learn: `bg-cyan-50 dark:bg-cyan-950`
- Icon per type (emoji or inline SVG):
    - volunteer: 🤝
    - donate: 💝
    - promote: 📢
    - collaborate: 🔧
    - learn: 📖
- Title bold, starts with a verb
- Description optional, smaller text
- CTA button at bottom if URL provided
- Border-radius: `rounded-xl`
- Hover: slight lift

#### Verify

- All 5 types render with correct colors/icons
- Button links correctly
- Works without URL (no button shown)
- Dark mode
- Grid of 3 action cards looks balanced

---

### Task 4.5 — MilestoneCard Component

**Type**: 🎨 Design+Code
**Effort**: S (2-4 hours)
**Depends on**: Nothing

#### Context

News/achievement cards that link to external articles. Achievement aesthetic, not generic news cards.

#### Read First

- `planning/DESIGN-SYSTEM.md` → "MilestoneCard (News)" section

#### What to Build

Create `src/components/MilestoneCard.astro`:

**Props**:

```typescript
interface Props {
    title: string;
    source?: string; // "Times of India"
    sourceUrl?: string;
    date?: Date;
    thumbnail?: string; // Optional image URL
    domainEmoji?: string; // e.g., "🚀"
}
```

**Design**:

- Left border accent in domain color (primary-500 default)
- Domain emoji as badge in top-right
- Title: medium font weight, 2-line clamp
- Source: small text with 📰 prefix
- Date: muted, formatted as "Jan 15, 2024"
- "Read →" link to sourceUrl
- Optional thumbnail on the left (small, rounded)
- Achievement aesthetic: subtle gradient background, not flat white
- Border-radius: `rounded-xl`
- Hover: slight lift, border brightens

#### Verify

- Renders with and without thumbnail
- Source links work
- Date formats correctly
- Fits in a horizontal scroll row
- Dark mode

---

### Task 4.6 — Opportunities Section Layout

**Type**: 🎨 Design+Code
**Effort**: M (1-2 days)
**Depends on**: 4.1, 4.2, 4.3, 4.4, 4.5

#### Context

Compose all Opportunities components into a cohesive section on domain pages.

#### Read First

- `planning/DESIGN-SYSTEM.md` → "Domain Page" layout
- `src/pages/domains/[domain].astro` (from task 3.3)
- All components from 4.2-4.5

#### What to Build

Create `src/components/OpportunitiesSection.astro`:

**Props**:

```typescript
interface Props {
    achievements: Achievement[];
    comparisons: Comparison[];
    actions: Action[];
    milestones: Milestone[];
}
```

**Layout**:

```
═══ OPPORTUNITIES ════════════════════════════════

[Achievement carousel — horizontal scroll of AchievementCards]

[ComparisonWidget(s) — stacked vertically, max 3 shown]

[Action cards — 3-column grid]

── Recent Milestones ──
[MilestoneCard row — horizontal scroll or 3-col grid]
```

- Section has a distinct visual separator (thicker border or background change)
- Heading: "Opportunities in {Domain}" with an appropriate emoji
- Each sub-section only renders if it has data
- Achievement carousel: horizontal scroll with arrow buttons (same scroll pattern as homepage)
- Comparison widgets: max 3 visible, "Show more" if more exist
- Action cards: responsive grid (1 col mobile, 3 col desktop)
- Milestones: horizontal scroll row or grid

Then **integrate into `src/pages/domains/[domain].astro`**:

- Fetch domain data from the `domains` collection
- Pass achievements, comparisons, actions, milestones to `OpportunitiesSection`
- Render between hero and content sections

#### Verify

```bash
npm run build
```

- Domain page shows Opportunities section with real data
- All sub-sections render correctly
- Scroll/carousel works
- Empty sections are hidden gracefully
- Responsive + dark mode

---

### Task 4.7 — Research + Write Opportunities for Space

**Type**: 🔍📝 Research + Content
**Effort**: M (1-2 days)
**Depends on**: 4.1 (needs schema to exist)

#### Context

Create the first fully-populated domain Opportunities file.

#### Read First

- `planning/CONTENT-GUIDELINES.md` → "Opportunities Section Writing" guide
- `planning/CONTENT-ARCHITECTURE.md` → Opportunities data model
- Task 3.2 research output (if already done)
- `src/content/config.ts` → domains collection schema (for exact field names)

#### What to Produce

Create `src/content/domains/space.mdx`:

**Frontmatter** must include:

- `domain: space`
- `title`: "Space & Exploration"
- `emoji`: "🚀"
- `description`: one compelling sentence
- `achievements`: 5-8 entries (Chandrayaan-3, Mangalyaan, AstroSat, Reusable Launch Vehicle, private space sector growth, etc.)
- `comparisons`: 3-4 entries (satellites in orbit, launch frequency, space budget, private startups)
- `actions`: 3-5 entries (with real URLs to ISRO programs, space-tech OSS, startups, citizen science)
- `milestones`: 3-5 recent entries (with source URLs to actual news articles)

**MDX body**: 200-400 words of editorial prose about India's space journey — celebratory, forward-looking, inspiring action.

**Requirements**:

- ALL facts must be verifiable (include source URLs)
- ALL action URLs must be real, working links
- Tone: inspiring not shaming (see Content Guidelines)
- Comparisons frame gaps as opportunities
- Achievements use appropriate badge emojis

#### Verify

```bash
npm run build
```

- File passes schema validation
- All URLs are accessible (manually spot-check 5+)
- Content reads well and inspires

---

### Task 4.8 — Research + Write Opportunities for Environment

**Type**: 🔍📝 Research + Content
**Effort**: M (1-2 days)
**Depends on**: 4.1

#### Same structure as 4.7 but for Environment domain.

Create `src/content/domains/environment.mdx`:

**Research targets**:

- Achievements: Solar capacity (300GW target), International Solar Alliance, Swachh Bharat toilet coverage, forest cover increase, EV policy, single-use plastic ban
- Comparisons: Renewable energy capacity, recycling rates, air quality index, carbon emissions per capita
- Actions: NGOs (Chintan, Goonj, Waste Warriors), clean-up drives, tree planting (Grow Trees, SankalpTaru)
- Milestones: Recent policy announcements, capacity additions, international climate commitments

Follow same format and requirements as task 4.7.

---

### Task 4.9 — Research + Write Opportunities for Technology/Startups

**Type**: 🔍📝 Research + Content
**Effort**: M (1-2 days)
**Depends on**: 4.1

Create `src/content/domains/startups.mdx`:

**Research targets**:

- Achievements: UPI (billions of transactions), 100+ unicorns, ONDC, DigiLocker, CoWIN, India Stack
- Comparisons: Startup ecosystem ranking, VC funding, developer population, patents filed
- Actions: Open source projects (ONDC, Beckn, India Stack), startup communities, incubators
- Milestones: Recent funding rounds, IPOs, global expansions

---

### Task 4.10 — Research + Write Opportunities for Education

**Type**: 🔍📝 Research + Content
**Effort**: M (1-2 days)
**Depends on**: 4.1

Create `src/content/domains/education.mdx`:

**Research targets**:

- Achievements: NEP 2020, IIT/IIM global alumni impact, SWAYAM/NPTEL (free courses), Atal Innovation Mission, Pratham's Read India
- Comparisons: Research papers published, university rankings, GER (Gross Enrollment Ratio), EdTech market
- Actions: Teach For India, Pratham, Khan Academy India, mentoring platforms
- Milestones: Recent policy implementations, digital education expansion

---

### Task 4.11 — Research + Write Opportunities for Social Impact

**Type**: 🔍📝 Research + Content
**Effort**: M (1-2 days)
**Depends on**: 4.1

Create `src/content/domains/socialImpact.mdx`:

**Research targets**:

- Achievements: 110M people out of poverty (2014-2024 UN report), SHG movement (9 crore women), Jan Dhan accounts (50 crore+), Aadhaar (universal ID), Ayushman Bharat coverage
- Comparisons: Financial inclusion rate, poverty reduction pace, digital payment adoption
- Actions: Goonj, Akshaya Patra, Smile Foundation, HelpAge India, volunteer platforms
- Milestones: Recent social welfare expansions, NGO achievements

---

## Phase 5 — Discovery & Scale

---

### Task 5.1 — Pagefind Optimization

**Type**: 🔨 Code
**Effort**: S (2-4 hours)
**Depends on**: 1.4

#### Context

Basic Pagefind from task 1.4 works but needs refinement for 500+ entries.

#### What to Do

- Add `data-pagefind-meta` attributes to content pages (title, collection type, domain)
- Add `data-pagefind-filter` for faceted search (filter by type: apps, people, etc.)
- Update Search component UI to show filter pills
- Ensure search excludes navigation/sidebar content (only indexes main body)
- Test with current content — results should show entry type badge

---

### Task 5.2 — Build Performance Audit

**Type**: 🔨 Code
**Effort**: M (1-2 days)
**Depends on**: Nothing

#### What to Do

- Measure current build time
- Profile `getStaticPaths()` calls — ensure no redundant collection fetches
- Check image optimization isn't a bottleneck
- If builds exceed 60s, implement:
    - Shared data loading (fetch collections once, pass to pages)
    - Lazy image imports
    - Consider `output: 'static'` with deferred rendering for less-visited pages
- Document build time in a comment in `astro.config.mjs`

---

### Task 5.3 — SEO: Structured Data + Meta

**Type**: 🔨 Code
**Effort**: M (1-2 days)
**Depends on**: Nothing

#### Read First

- `src/components/SEO.astro` — existing SEO component
- https://schema.org — structured data reference

#### What to Do

- Add JSON-LD structured data to detail pages:
    - Apps: `SoftwareApplication` schema
    - Persons: `Person` schema
    - Companies: `Organization` schema
    - Channels: `VideoObject` or `CreativeWork`
    - Podcasts: `PodcastSeries`
- Ensure Open Graph tags are complete on all page types
- Add Twitter card meta tags
- Add canonical URLs
- Verify sitemap includes all new page types (domains, new collections)
- Add per-collection RSS feeds

---

### Task 5.4 — Dynamic OG Image Generation

**Type**: 🔨 Code
**Effort**: M (1-2 days)
**Depends on**: Nothing

#### What to Do

- Generate OG images at build time using `@vercel/og` or `satori`
- Template: brand colors + entry title + logo on gradient background
- Different templates for:
    - Entry pages: title + logo + collection badge
    - Domain pages: domain emoji + name + stat
    - Tag pages: tag name + item count
- Output to `public/og/` or alongside pages
- Update SEO component to reference generated images

---

### Task 5.5 — Analytics Integration

**Type**: 🔨 Code
**Effort**: S (2-4 hours)
**Depends on**: Nothing

#### What to Do

- Choose: Plausible or Umami (both privacy-respecting, no cookies)
- Add script tag to `BaseLayout.astro` head
- Configure to track:
    - Page views
    - Outbound link clicks (CTA effectiveness)
    - Search queries (if Pagefind exposes)
- Add `data-analytics-*` attributes to CTA buttons for tracking
- No personal data collection — aligns with project's no-accounts boundary

---

## Phase 6 — Polish & Growth

---

### Task 6.1 — Accessibility Audit

**Type**: 🔨 Code
**Effort**: M (1-2 days)
**Depends on**: Nothing

#### What to Do

- Run Lighthouse accessibility audit on 5+ representative pages
- Fix all "Critical" and "Serious" issues:
    - Missing alt text on images
    - Color contrast failures (especially dark mode)
    - Missing focus indicators on interactive elements
    - Non-semantic heading hierarchy
    - Missing ARIA labels on icon-only buttons
- Ensure all interactive elements (dropdowns, scroll buttons, search) are keyboard navigable
- Test with screen reader (NVDA or VoiceOver)
- Target: WCAG 2.1 AA compliance

---

### Task 6.2 — Animation & Micro-interactions

**Type**: 🎨 Design+Code
**Effort**: M (1-2 days)
**Depends on**: Nothing

#### Read First

- `planning/DESIGN-SYSTEM.md` → "Animation & Motion" section

#### What to Do

- Add consistent hover effects to all card types (200ms ease `translateY(-2px)` + shadow)
- Add dropdown animation (opacity + scale, 200ms)
- Add tab content cross-fade (200ms opacity transition)
- Add Achievement card first-view glow pulse (600ms, CSS animation, runs once)
- Add `prefers-reduced-motion` media query check — disable animations if set
- Ensure all animations use `transform` and `opacity` only (GPU-composited)

---

### Task 6.3 — Dark Mode Audit

**Type**: 🎨 Design+Code
**Effort**: S (2-4 hours)
**Depends on**: Nothing

#### What to Do

- Review every component in dark mode (use browser DevTools to toggle `dark` class)
- Check: text contrast, card borders, badge readability, gradient visibility
- Fix: AchievementCard gradients, ComparisonWidget bar visibility, ActionCard tints
- Ensure no white-background flash on page load
- Test theme toggle transitions

---

### Task 6.4 — Contributor Workflow Tooling

**Type**: 🔨 Code
**Effort**: M (1-2 days)
**Depends on**: Nothing

#### What to Do

1. **GitHub Issue Templates** (`.github/ISSUE_TEMPLATE/`):
    - `new-entry.yml` — form for suggesting a new entry (asks: type, name, URL, why it's notable)
    - `bug-report.yml` — standard bug report
    - `feature-request.yml` — feature suggestion

2. **Entry Scaffolding Script**:
   Create `scripts/new-entry.mjs`:

    ```bash
    npm run new:app my-app-name      # Creates src/content/apps/my-app-name.mdx with template
    npm run new:person john-doe      # Creates src/content/persons/john-doe.mdx
    npm run new:channel name         # etc.
    ```

    Script creates the MDX file with all required frontmatter fields pre-filled as placeholders.

3. **Validation Script**:
   Create `scripts/validate.mjs`:

    ```bash
    npm run validate                 # Checks all entries for: missing required fields, broken URLs, orphan slugs
    ```

4. **Update CONTRIBUTING.md** to reference:
    - `planning/CONTENT-GUIDELINES.md` for editorial standards
    - The scaffolding script
    - The issue templates

---

### Task 6.5 — Performance Budget

**Type**: 🔨 Code
**Effort**: S (2-4 hours)
**Depends on**: Nothing

#### What to Do

- Run Lighthouse on homepage, a listing page, and a detail page
- Set targets: Performance 95+, Accessibility 95+, Best Practices 95+, SEO 95+
- Identify and fix:
    - Render-blocking resources
    - Unoptimized images
    - Excessive DOM size
    - Font loading (ensure `font-display: swap` or `optional`)
- Add Lighthouse CI to build process (optional) or document manual check process
- Set total page weight budget: <500KB transferred for initial load

---

## Content Research Tasks (Ongoing)

These can be done at ANY time, parallel with any phase.

---

### Task R.1 — Research Indian Apps (batch of 10)

**Type**: 🔍📝 Research + Content
**Effort**: M per batch

#### What to Do

Research and write 10 new app entries. For each:

1. Find a notable Indian-made app not yet on the site
2. Verify: Indian-made, active, genuinely useful/impressive
3. Gather: screenshots, store links, website, repository (if OSS), author info
4. Write MDX entry following `planning/CONTENT-GUIDELINES.md`
5. Create/update author (person or company) entry if needed
6. Register logo in imageRegistry if available

**Good sources for discovery**: Product Hunt (filter India), IndieHackers, GitHub trending (India), Play Store "Made in India" collections, tech Twitter/X.

---

### Task R.2 — Research Indian YouTube Channels (batch of 10)

**Type**: 🔍📝 Research + Content

Find 10 notable Indian YouTube channels across varied domains (not just tech). For each:

- Channel name, URL, subscriber count range, topics, languages
- Why it's notable (unique angle, production quality, impact)
- 2-3 featured video IDs
- Write MDX entry

---

### Task R.3 — Research Indian Open Source Projects (batch of 10)

**Type**: 🔍📝 Research + Content

Find 10 Indian-maintained OSS projects (libraries, tools, frameworks — NOT end-user apps). For each:

- Repo URL, stars, license, languages
- What it does and why it's impressive
- Write MDX entry

**Good sources**: GitHub, awesome lists, FOSS India community.

---

### Task R.4 — Research Indian Initiatives/NGOs (batch of 10)

**Type**: 🔍📝 Research + Content

Find 10 Indian NGOs or social initiatives worth featuring. Diverse domains (environment, education, health, rural development). For each:

- Mission, impact metrics, how to help
- Working URLs for volunteering/donating
- Write MDX entry with `howToHelp` array filled

---

### Task R.5 — Research Indian Podcasts (batch of 10)

**Type**: 🔍📝 Research + Content

Find 10 Indian podcasts across domains. For each:

- Name, platforms (Spotify, Apple, YouTube), topics, language, frequency
- Why it's worth listening to
- Write MDX entry

---

### Task R.6 — Research Indian Communities (batch of 10)

**Type**: 🔍📝 Research + Content

Find 10 active Indian developer/creator communities. For each:

- Platform, join URL, member count range, topics
- What makes it valuable
- Write MDX entry
