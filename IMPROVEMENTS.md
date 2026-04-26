# Awesome Bharat — Improvement Plan

This document captures all identified issues and proposed improvements across the codebase, design, and content model. Items are grouped by area and ordered roughly by impact. Each item includes the root cause, the proposed fix, and the files affected.

---

## Table of Contents

1. [Bug Fixes](#1-bug-fixes)
2. [Design System & Typography](#2-design-system--typography)
3. [Homepage](#3-homepage)
4. [Detail Page (App / Person / Company)](#4-detail-page)
5. [Listing Pages](#5-listing-pages)
6. [Tag & Category Landing Pages](#6-tag--category-landing-pages)
7. [Cards & Related Content](#7-cards--related-content)
8. [Navigation & Layout Shell](#8-navigation--layout-shell)
9. [Content Model Expansions](#9-content-model-expansions)
10. [Code Quality & Best Practices](#10-code-quality--best-practices)

---

## 1. Bug Fixes

### 1.1 Right Sidebar Does Not Scroll

**Problem:** The right sidebar in `ContentLayout.astro` is supposed to scroll independently while the article scrolls separately. Currently the flex wrapper uses `items-center`, which stretches the sidebar to match the full article height. The sidebar never overflows, so `overflow-y-auto` never activates.

**Fix:** Change `items-center` to `items-start` on the flex wrapper in `ContentLayout.astro`.

```astro
<!-- Before -->
<div class="flex flex-col lg:flex-row gap-0 justify-center items-center">
    <!-- After -->
    <div class="flex flex-col lg:flex-row gap-0 justify-center items-start"></div>
</div>
```

**Files:** `src/layouts/ContentLayout.astro`

---

### 1.2 Footer Never Renders

**Problem:** `Footer.astro` is a complete, well-written component but is never imported or used in `BaseLayout.astro`. No page on the site has a footer.

**Fix:** Import and add `<Footer />` to `BaseLayout.astro` inside the `flex flex-col min-h-screen` wrapper, after the main content area.

**Files:** `src/layouts/BaseLayout.astro`, `src/components/Footer.astro`

---

### 1.3 Footer Copyright Div Is Inside the Grid

**Problem:** In `Footer.astro`, the copyright `<div>` is a child of the `grid grid-cols-1 md:grid-cols-3` container. On desktop it becomes a fourth grid column rather than spanning the full width below the three columns.

**Fix:** Move the copyright block outside the grid div, or add `md:col-span-3` to it.

**Files:** `src/components/Footer.astro`

---

### 1.4 Inline `onclick` Scroll Handlers Are Fragile

**Problem:** The homepage carousel uses `onclick="this.nextElementSibling.scrollBy(...)"`. This relies on exact DOM sibling order. If the markup changes, it silently breaks with no error.

**Fix:** Replace with a `<script>` block that queries the scroll container by `id` or `data-` attribute.

**Files:** `src/pages/index.astro`

---

### 1.5 `<Image>` Components Using Plain String Paths

**Problem:** `Header.astro` and `SidebarNav.astro` pass `src="/images/brand-logo.svg"` (a plain string) to Astro's `<Image>` component. Astro's image optimization pipeline only works with imported assets or remote URLs. Plain local paths bypass optimization entirely.

**Fix:** Import the SVG as an asset and pass the import reference, or use a plain `<img>` tag if optimization is not needed for this SVG.

**Files:** `src/components/Header.astro`, `src/components/SidebarNav.astro`

---

### 1.6 `aspectRatio` Prop Is Deprecated

**Problem:** Multiple `<Image>` usages pass `aspectRatio="1/1"`. This prop was removed in Astro 3 and is silently ignored. The actual aspect ratio is controlled by CSS `aspect-square`.

**Fix:** Remove all `aspectRatio` props from `<Image>` components. Ensure `aspect-square` or explicit `width`/`height` is set via CSS where needed.

**Files:** `src/components/ContentCard.astro`, `src/components/Engage.astro`, `src/components/RelatedItem.astro`

---

## 2. Design System & Typography

### 2.1 Fix the Secondary Color Scale Direction

**Problem:** In `tailwind.config.mjs`, the `secondary` palette is inverted — `50` is the darkest value (`#02414E`) and `900` is nearly black (`#000708`). Tailwind convention is `50` = lightest, `900` = darkest. This makes dark mode reasoning confusing and will cause bugs when adding new components.

**Fix:** Reverse the scale so `50` is the lightest teal and `900` is the darkest. Update all usages of `secondary-*` classes accordingly.

**Files:** `tailwind.config.mjs`, all components using `secondary-*` classes

---

### 2.2 Load a Custom Display Font

**Problem:** No custom font is loaded. The site falls back to the system sans-serif stack, which looks generic and gives the site no personality.

**Recommendation:** Load **Plus Jakarta Sans** (modern, clean, works well for both headings and body) or **Nunito** (friendly, rounded, suits the celebratory tone). Use Google Fonts or bundle via `fontsource`.

Apply the display font to headings only (`h1`–`h3`) and keep system sans-serif for body text to maintain performance.

**Files:** `src/layouts/BaseLayout.astro`, `tailwind.config.mjs`

---

### 2.3 Establish a Proper Color Contrast Baseline

**Problem:** The light mode body background (`primary-100/30` ≈ very pale cream) and the sidebar background (`primary-50`) are nearly identical. There is no clear visual separation between regions.

**Fix:**

- Body background: keep `primary-50` (solid, not transparent)
- Sidebar background: `white` in light mode, `secondary-800` in dark mode
- Add a visible `border-r` on the left sidebar in light mode

**Files:** `src/layouts/BaseLayout.astro`, `src/components/Sidebar.astro`

---

### 2.4 Remove Duplicate Scrollbar Styles

**Problem:** `Sidebar.astro` contains a `<style is:global>` block that applies scrollbar styles to every `<aside>` on the page. The same styles are already handled in `global.css`. The duplication is redundant and the global scope is leaky.

**Fix:** Remove the `<style is:global>` block from `Sidebar.astro`.

**Files:** `src/components/Sidebar.astro`

---

## 3. Homepage

### 3.1 Hero Section Needs Visual Weight

**Problem:** The hero is a centered heading and two lines of text on a plain background. It has no visual energy and doesn't communicate what the site is about at a glance.

**Proposed redesign:**

- Add a subtle background: a radial gradient from `primary-100` to `primary-50`, or a low-opacity geometric/mandala pattern SVG
- Add a stat strip below the subtitle: _"X apps · Y people · Z companies · all Indian-made"_ — pulls live counts from collections at build time
- Keep the heading but drop the `[ Awesome ]` bracket styling — replace with a proper typographic treatment (e.g., the word "Awesome" in the primary orange, "Bharat" in a slightly heavier weight)

**Files:** `src/pages/index.astro`

---

### 3.2 Homepage Should Show Multiple Content Sections

**Problem:** The homepage only shows "Latest Apps". The site covers apps, people, companies, and more — none of that is visible on the homepage.

**Proposed layout:**

1. Hero (stat strip + tagline)
2. "Latest Apps" — horizontal scroll row (existing, improved)
3. "Featured People" — horizontal scroll row of person cards
4. "Featured Companies" — horizontal scroll row
5. "Explore by Category" — a grid of category pills linking to category pages
6. "Explore everything" CTA

**Files:** `src/pages/index.astro`

---

### 3.3 Improve the Horizontal Scroll Row

**Problem:** The scroll arrows use fragile inline `onclick` DOM traversal. The cards are too small (60–120px) for a homepage feature row.

**Fix:**

- Use `data-scroll-container` attributes and a `<script>` block for arrow behavior
- Increase card size in the homepage row context (use a larger variant)
- Add a subtle fade gradient on the right edge to hint at more content

**Files:** `src/pages/index.astro`, `src/components/ContentCard.astro`

---

## 4. Detail Page

### 4.1 Add a Clear Primary CTA Above the Fold

**Problem:** There is no single obvious action on the detail page. The store badges are buried below the description, engage section, and other content. A user landing on the Neend page has to scroll to find the Download button.

**Fix:** Add a prominent primary CTA button directly in the header card, next to the title. The CTA label and URL should be derived from the content type:

- App with `storeLinks` → "Download" (links to Play Store or App Store)
- Open-source with `repositoryLinks` → "View on GitHub"
- Person with `website` → "Visit Website"
- Company with `website` → "Visit Website"

This logic belongs in a utility function `getPrimaryCTA(data)` that returns `{ label, url }`.

**Files:** `src/layouts/ContentLayout.astro`, `src/utils/` (new `ctaUtils.ts`)

---

### 4.2 Redesign the Header Card

**Problem:** The current header is a dense 4-column grid of badges with no breathing room. The badges use `ring-2` which looks like form validation errors. The layout collapses awkwardly on medium screens.

**Proposed layout:**

```
[ Logo 96px ]  [ Title (large)          ]  [ Primary CTA button ]
               [ by Author Name         ]
               [ Category chips (2 max) ]
               [ Tag pills (scrollable) ]
```

**Badge redesign:** Replace `ring-2` with filled pill chips:

- Green background + white text: Free, No Ads, Open Source, Works Offline
- Red/muted background: Paid, Has Ads, Closed Source, Needs Internet
- Neutral gray background: category names

**Files:** `src/layouts/ContentLayout.astro`

---

### 4.3 Redesign the Engage Section

**Problem:** The "Contribute to development" and "On the web" sections show bare icon buttons with no labels. Users cannot tell what the icons do without hovering.

**Fix:** Replace icon-only buttons with labeled action cards:

```
[ icon ]  Add a feature     →  links to GitHub issues
[ icon ]  Fix a bug         →  links to GitHub bug issues
[ icon ]  Suggest something →  links to feature request template
[ icon ]  Report a bug      →  links to bug report template
```

Each action should be a small card with icon + label + subtle description, arranged in a 2×2 grid.

**Files:** `src/components/Engage.astro`

---

### 4.4 Fix Store Badges Duplication

**Problem:** The store badges block is copy-pasted twice in `ContentLayout.astro` — once before screenshots and once after the prose slot.

**Fix:** Extract to `src/components/StoreBadges.astro` and use it in both positions (or decide on one canonical position — recommended: after the description, before screenshots).

**Files:** `src/layouts/ContentLayout.astro`, new `src/components/StoreBadges.astro`

---

### 4.5 Fix Right Sidebar Scroll (see Bug Fix 1.1)

Once the `items-start` fix is applied, the right sidebar will scroll correctly. Additionally, the `YouMightLike` grid has conflicting responsive classes — fix described in section 7.2.

---

## 5. Listing Pages

### 5.1 Add a Hero Banner to Listing Pages

**Problem:** The current listing page (`/apps`) is a plain heading + subtitle + icon grid. It has no visual energy and gives no context about what the collection contains.

**Proposed hero banner:**

- Full-width strip, ~200px tall
- Background: gradient from `primary-600` to `secondary-400` (orange → teal), or a subtle pattern
- Left side: collection icon (large), collection name (large heading), item count
- Right side: a short punchy description and a stat or fact
- Example for Apps: _"2 apps · built by Indians · downloaded by millions"_

**Files:** `src/pages/apps/index.astro`, new `src/components/CollectionHero.astro`

---

### 5.2 Richer Cards in the Listing Grid

**Problem:** `ContentCard` is 60–120px wide — designed for compact scroll rows. In a full listing grid, this is too small and shows almost no information.

**Fix:** Create a `ContentCardFull.astro` variant for listing grids:

- Logo: 64px
- Title: medium weight, 2-line clamp
- Description: 2-line clamp (from `description` field)
- Primary tag or category
- A subtle CTA hint label ("Download", "Visit", etc.)
- Hover: slight lift shadow

The listing grid should use `ContentCardFull` and the homepage scroll rows should keep `ContentCard` (compact).

**Files:** `src/pages/apps/index.astro`, new `src/components/ContentCardFull.astro`

---

### 5.3 Add Category Filter Strip

**Problem:** There is no way to filter the listing by category. With many entries, the page becomes an undifferentiated wall.

**Fix:** Add a horizontally scrollable filter strip above the grid with category pill buttons. Clicking a pill filters the grid client-side (or links to a category page). The active filter is highlighted in `primary-600`.

**Files:** `src/pages/apps/index.astro`

---

## 6. Tag & Category Landing Pages

These pages do not exist yet. They are a significant feature addition.

### 6.1 Create Tag Landing Pages (`/tags/[tag]`)

**Purpose:** When a user clicks a tag (e.g., `#sleep`, `#women-founders`, `#open-source`), they should land on a page that:

1. Shows a hero banner with the tag name, item count, and a curated description
2. Groups results by content type (Apps, People, Companies) in horizontal scroll rows
3. Has a "Featured" item pinned at the top of each group

**Implementation:**

- New page: `src/pages/tags/[tag].astro` using `getStaticPaths`
- Collect all items across all collections that have this tag
- Group by collection type
- Render `CollectionHero` + grouped `ContentCardFull` rows

**Files:** New `src/pages/tags/[tag].astro`, `src/components/CollectionHero.astro`

---

### 6.2 Create Category Landing Pages (`/categories/[category]`)

**Purpose:** Same pattern as tag pages but for formal categories (e.g., `/categories/healthAndFitness`).

**Hero content ideas:**

- Category icon (emoji or SVG)
- Category name (formatted, e.g., "Health & Fitness")
- Item count across all content types
- A curated one-liner: _"Indian-made apps and tools for your health journey"_

**Files:** New `src/pages/categories/[category].astro`

---

### 6.3 Tag/Category Hero Banner Design

The hero banner for tag and category pages should follow this structure:

```
┌─────────────────────────────────────────────────────────────┐
│  [Icon/Emoji]  #sleep                          12 items      │
│                                                              │
│  Apps, people, and tools helping Indians sleep better.       │
│                                                              │
│  [ Apps (8) ]  [ People (3) ]  [ Companies (1) ]            │
└─────────────────────────────────────────────────────────────┘
```

Background: gradient or subtle pattern. The tab strip at the bottom lets users jump to each content type section.

---

## 7. Cards & Related Content

### 7.1 Create `ContentCardFull` Component

As described in 5.2. This is the primary card for listing grids and tag/category pages.

**Props:** Same as `ContentCard` plus `description`, `ctaLabel`, `ctaUrl`

**Files:** New `src/components/ContentCardFull.astro`

---

### 7.2 Fix `YouMightLike` Grid Conflict

**Problem:** `YouMightLike.astro` has both Tailwind responsive grid classes (`grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-2`) and an inline `[grid-template-columns:repeat(auto-fit,...)]` style. The inline style overrides all the responsive classes, making them dead code.

**Fix:** Remove the inline `[grid-template-columns:...]` and rely on the Tailwind responsive classes. Adjust the breakpoints so the sidebar shows 2 columns on large screens.

**Files:** `src/components/YouMightLike.astro`

---

### 7.3 Improve Related Content Scoring

**Problem:** `relatedContent.ts` only scores on `tags`. For apps, matching on `categories` and shared `authors` would produce much more relevant results.

**Fix:** Update `MATCHING_FIELDS_CONFIG`:

```ts
const MATCHING_FIELDS_CONFIG = {
    apps: ['tags', 'categories', 'authors'],
    persons: ['tags'],
    companies: ['tags'],
};
```

Author matching requires comparing `slug` values inside the `authors` array — update `calculateRelevanceScore` to handle nested object arrays.

**Files:** `src/utils/relatedContent.ts`

---

### 7.4 Add "By the Same Author" Section to Right Sidebar

**Problem:** The right sidebar only shows "You might also like" (tag-based). There is no section for other content by the same person or company.

**Fix:** In `[slug].astro`, compute a second list: all apps whose `authors` array contains any of the current app's authors. Pass this as a second slot to the right sidebar under a "More by [Author Name]" heading.

**Files:** `src/pages/apps/[slug].astro`, `src/components/YouMightLike.astro` (or a new `ByAuthor.astro`)

---

## 8. Navigation & Layout Shell

### 8.1 Add More Content Types to Sidebar Nav

**Problem:** The sidebar only shows Apps, Persons, and Companies. As the site grows to include YouTube channels, blogs, products, etc., the nav needs to be extensible.

**Fix:** The `collections` array in `SidebarNav.astro` is already dynamic — just add new entries as new collections are created. Consider grouping: "Content" (Apps, Products, Channels, Blogs) and "People" (Persons, Companies).

**Files:** `src/components/SidebarNav.astro`

---

### 8.2 Mobile Nav Uses Wrong Background

**Problem:** The mobile nav drawer uses `bg-white dark:bg-gray-900` while the desktop sidebar uses `bg-primary-50 dark:bg-secondary-500`. They look like different components on the same site.

**Fix:** Align the mobile drawer background with the desktop sidebar: `bg-primary-50 dark:bg-secondary-800`.

**Files:** `src/components/MobileNav.astro`

---

### 8.3 Add Search

**Problem:** With a growing catalog, there is no way to search. This is a significant usability gap.

**Recommendation:** Implement client-side search using [Pagefind](https://pagefind.app/) — it integrates natively with Astro static builds, requires zero server, and indexes all content automatically. Add a search input to the header.

**Files:** `astro.config.mjs`, `src/components/Header.astro`, new `src/components/Search.astro`

---

## 9. Content Model Expansions

The site is described as covering "varied content from any Indian" — the current schema only covers apps, persons, and companies. These are the next content types to add.

### 9.1 YouTube Channels Collection

**Schema additions:**

```ts
const youtubeChannels = defineCollection({
    schema: z.object({
        name: z.string(),
        description: z.string(),
        channelUrl: z.string().url(),
        channelId: z.string().optional(),
        topics: z.array(z.string()),
        language: z.array(z.string()),
        authors: z.array(authorSchema),
        tags: z.array(z.string()),
        logo: z.string().optional(),
        draft: z.boolean().default(false),
    }),
});
```

**Primary CTA:** "Subscribe" → `channelUrl`

---

### 9.2 Products Collection

**Schema additions:**

```ts
const products = defineCollection({
    schema: z.object({
        name: z.string(),
        description: z.string(),
        category: z.string(),
        buyUrl: z.string().url().optional(),
        website: z.string().url().optional(),
        authors: z.array(authorSchema),
        tags: z.array(z.string()),
        paid: z.boolean(),
        logo: z.string().optional(),
        draft: z.boolean().default(false),
    }),
});
```

**Primary CTA:** "Buy" → `buyUrl` or "Visit" → `website`

---

### 9.3 Blogs / Newsletters Collection

**Schema additions:**

```ts
const blogs = defineCollection({
    schema: z.object({
        name: z.string(),
        description: z.string(),
        url: z.string().url(),
        rssUrl: z.string().url().optional(),
        topics: z.array(z.string()),
        authors: z.array(authorSchema),
        tags: z.array(z.string()),
        logo: z.string().optional(),
        draft: z.boolean().default(false),
    }),
});
```

**Primary CTA:** "Read" → `url`

---

## 10. Code Quality & Best Practices

### 10.1 Extract `StoreBadges` Component

Duplicate store badge rendering block in `ContentLayout.astro` (appears twice). Extract to `src/components/StoreBadges.astro`.

---

### 10.2 Extract CTA Logic to Utility

The logic for determining the primary CTA (Download vs Contribute vs Visit vs Buy) should live in `src/utils/ctaUtils.ts`, not be scattered across templates.

```ts
export function getPrimaryCTA(
    data: AppData | PersonData | CompanyData
): { label: string; url: string } | null;
```

---

### 10.3 Add `featured` Field to Persons and Companies

The `apps` schema has a `featured` boolean but `persons` and `companies` do not. Add it to both so the homepage can show featured people and companies.

**Files:** `src/content/config.ts`

---

### 10.4 Consistent Path Aliases

The codebase mixes `@/components/`, `@components/`, `@utils/`, and `@/utils/`. Pick one convention (`@/` prefix for everything) and apply it consistently.

**Files:** `tsconfig.json`, all component imports

---

### 10.5 Remove `<style is:global>` from `Sidebar.astro`

Global styles scoped to `aside` affect every `<aside>` on the page. The scrollbar styles are already in `global.css`. Remove the duplicate.

**Files:** `src/components/Sidebar.astro`

---

### 10.6 `relatedContent.ts` Has Unused `getRelatedContent` Export

The internal `getRelatedContent` function (returns scored results) is not exported but `getRelatedContentSimple` is. The scoring data is thrown away. Either export both or consolidate.

**Files:** `src/utils/relatedContent.ts`

---

## Priority Order

| Done | Priority | Item                                                                                        | Effort | Impact |
| ---- | -------- | ------------------------------------------------------------------------------------------- | ------ | ------ |
| [x]  | P0       | [1.1 Right sidebar scroll fix](#11-right-sidebar-does-not-scroll)                           | XS     | High   |
| [x]  | P0       | [1.2 Wire up Footer](#12-footer-never-renders)                                              | XS     | Medium |
| [x]  | P0       | [1.3 Fix footer copyright layout](#13-footer-copyright-div-is-inside-the-grid)              | XS     | Low    |
| [x]  | P1       | [4.1 Primary CTA above the fold](#41-add-a-clear-primary-cta-above-the-fold)                | S      | High   |
| [ ]  | P1       | [4.2 Redesign header card badges](#42-redesign-the-header-card)                             | S      | High   |
| [ ]  | P1       | [5.1 Listing page hero banner](#51-add-a-hero-banner-to-listing-pages)                      | M      | High   |
| [ ]  | P1       | [5.2 `ContentCardFull` component](#52-richer-cards-in-the-listing-grid)                     | M      | High   |
| [ ]  | P1       | [2.2 Load custom font](#22-load-a-custom-display-font)                                      | XS     | High   |
| [ ]  | P1       | [2.1 Fix secondary color scale](#21-fix-the-secondary-color-scale-direction)                | S      | Medium |
| [ ]  | P2       | [3.1 Hero section visual weight](#31-hero-section-needs-visual-weight)                      | S      | Medium |
| [ ]  | P2       | [3.2 Homepage multi-section layout](#32-homepage-should-show-multiple-content-sections)     | M      | Medium |
| [ ]  | P2       | [4.3 Redesign Engage section](#43-redesign-the-engage-section)                              | S      | Medium |
| [ ]  | P2       | [4.4 Extract StoreBadges component](#44-fix-store-badges-duplication)                       | XS     | Low    |
| [ ]  | P2       | [7.2 Fix YouMightLike grid](#72-fix-youmightlike-grid-conflict)                             | XS     | Medium |
| [ ]  | P2       | [7.3 Improve related content scoring](#73-improve-related-content-scoring)                  | S      | Medium |
| [ ]  | P2       | [7.4 "By same author" sidebar section](#74-add-by-the-same-author-section-to-right-sidebar) | S      | Medium |
| [ ]  | P3       | [6.1 Tag landing pages](#61-create-tag-landing-pages-tags-tag)                              | L      | High   |
| [ ]  | P3       | [6.2 Category landing pages](#62-create-category-landing-pages-categories-category)         | L      | High   |
| [ ]  | P3       | [8.3 Search (Pagefind)](#83-add-search)                                                     | M      | High   |
| [ ]  | P3       | [9.x New content type schemas](#9-content-model-expansions)                                 | L      | High   |
| [ ]  | P3       | [1.4–1.6 Remaining bug fixes](#14-inline-onclick-scroll-handlers-are-fragile)               | S      | Low    |
| [ ]  | P3       | [10.x Code quality items](#10-code-quality--best-practices)                                 | S      | Low    |

**Effort key:** XS = < 1 hour, S = half day, M = 1–2 days, L = 3+ days
