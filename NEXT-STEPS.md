# NEXT_STEPS.md

## Purpose and How To Use This File

This file is the active implementation roadmap for the current codebase state.
It combines:

- issues confirmed in CODE_REPORT.md,
- still-relevant items from planning/\*.md,
- and excludes work that is already completed or clearly outdated.

How to execute tasks with other AI models:

1. Pick 1 or more tasks from any phase.
2. Give the model only those task blocks.
3. The task block itself includes context, files, implementation steps, validation, and done criteria.

Global execution rules for every task:

- Do not modify docs/ (build output).
- Use src/content/config.ts as the source of truth for content schemas.
- Preserve existing design language from src/styles/global.css and planning/DESIGN-SYSTEM.md.
- Run validation commands listed in each task before marking done.
- Keep changes small and reviewable.

What is intentionally excluded as obsolete:

- Re-doing Phase 0 items already fixed (footer wiring, sidebar stretch, duplicate store badges, inline onclick carousel handlers, aspectRatio cleanup).
- Re-adding infrastructure tasks already present (graphify, scaffold script, playwright smoke setup, check script).

---

## Phase 1 - Critical Integrity Fixes From Code Report

### Task 1.1 - Fix category name formatting bug

Context:

- CODE_REPORT confirms formatCategoryName lowercases words incorrectly.
- Current bad output example: booksAndReference -> Books and reference.
- Required output: Books And Reference.

Read first:

- src/utils/textUtils.ts
- src/pages/categories/[category].astro

Files to change:

- src/utils/textUtils.ts

Implementation steps:

1. Locate formatCategoryName().
2. Keep camelCase split logic.
3. Remove final blanket lowercasing.
4. Ensure each token is capitalized.

Short snippet pattern:

```ts
return splitWords
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
```

Validation:

- npm run check
- npm run build

Done criteria:

- Category headings show proper title case for all camelCase categories.

### Task 1.2 - Fix broken People and Companies navigation routes

Context:

- CODE_REPORT confirms nav links point to /people and /companies but route files are missing.
- Person collection key is persons, while desired public route is people.
- Current behavior produces 404s from homepage and nav.

Read first:

- src/layouts/BaseLayout.astro
- src/components/ContentCard.astro
- src/components/ContentCardFull.astro
- src/pages/apps/[slug].astro

Files to change:

- src/pages/people/index.astro (new)
- src/pages/people/[slug].astro (new)
- src/pages/companies/index.astro (new)
- src/pages/companies/[slug].astro (new)
- src/components/ContentCardFull.astro
- src/pages/domains/[domain].astro

Implementation steps:

1. Create people and companies listing pages following apps listing layout pattern (CollectionHero + card grid).
2. Create detail pages for people and companies.
3. For people route, query collection persons but expose URL prefix /people.
4. Normalize link construction so person links always use /people/{slug}, never /persons/{slug}.
5. Keep company links at /companies/{slug}.

Short snippet pattern:

```ts
const personHref = `/people/${slug}`;
const companyHref = `/companies/${slug}`;
```

Validation:

- npm run check
- npm run build
- npm run test:e2e

Done criteria:

- Sidebar links Home, Domains, Apps, People, Companies all resolve.
- No generated links point to /persons/\*.

### Task 1.3 - Remove invalid SVG format override in Engage component

Context:

- CODE_REPORT flags format="webp" on SVG assets in Engage.astro.
- SVG should be rendered as SVG without forced conversion.

Read first:

- src/components/Engage.astro

Files to change:

- src/components/Engage.astro

Implementation steps:

1. Find Image usages where source is SVG.
2. Remove format="webp" for those usages.
3. Keep width/height/alt intact.

Validation:

- npm run check
- npm run build

Done criteria:

- No SVG image in Engage forces webp conversion.

### Task 1.4 - Package hygiene cleanup

Context:

- CODE_REPORT identifies:
    - @fontsource-variable/geist unused.
    - shadcn CLI in dependencies instead of devDependencies.

Read first:

- package.json
- src/layouts/BaseLayout.astro (verify actual imported fonts)

Files to change:

- package.json

Implementation steps:

1. Remove unused @fontsource-variable/geist.
2. Move shadcn from dependencies to devDependencies.
3. Keep lockfile update in same commit.

Validation:

- npm install
- npm run check
- npm run build

Done criteria:

- Dependency sections reflect runtime vs tooling usage correctly.

### AGENTS.md update after Phase 1

Update AGENTS.md with these exact changes:

1. In Known Issues and Design Decisions, remove items fixed in this phase:
    - People/Companies route gap
    - /persons vs /people link mismatch
    - SVG format override issue
    - formatCategoryName capitalization bug
2. In Project Structure, add the new pages:
    - src/pages/people/index.astro
    - src/pages/people/[slug].astro
    - src/pages/companies/index.astro
    - src/pages/companies/[slug].astro
3. In Key Commands or workflow notes, keep npm run check as mandatory mid-task gate.

---

## Phase 2 - Metadata, SEO, and Feed Accuracy

### Task 2.1 - Add valid default OG image and fix twitter creator placeholder

Context:

- CODE_REPORT confirms SEO.astro default image is /og-image.jpg, but file is missing.
- twitter:creator is currently "@" placeholder.

Read first:

- src/components/SEO.astro
- public/

Files to change:

- public/og-image.jpg (new)
- src/components/SEO.astro

Implementation steps:

1. Add a real 1200x630 og-image.jpg in public.
2. Keep default OG image path in SEO.astro pointing to that file.
3. Replace twitter handle placeholder with real account or remove twitter:creator tag when unknown.
4. Ensure no broken meta URL values are emitted.

Short snippet pattern:

```astro
const twitterHandle = "@awesomebharat";
```

Or:

```astro
{twitterHandle && <meta property="twitter:creator" content={twitterHandle} />}
```

Validation:

- npm run build
- Inspect built HTML meta tags in docs/ for one page

Done criteria:

- Default OG URL resolves.
- No twitter:creator content="@" remains.

### Task 2.2 - Correct RSS scope or copy

Context:

- CODE_REPORT notes rss.xml.ts description claims all content, but feed currently contains apps only.

Read first:

- src/pages/rss.xml.ts
- src/content/config.ts

Files to change:

- src/pages/rss.xml.ts

Implementation options (pick one and finish fully):

- Option A: Keep apps-only feed and rewrite title/description to explicitly say apps.
- Option B: Expand feed entries to include other routed collections (at minimum apps, persons, companies once their pages exist).

Short snippet pattern for Option A:

```ts
description: 'Latest apps from Awesome Bharat';
```

Validation:

- npm run check
- npm run build
- Open docs/rss.xml and verify copy and items align.

Done criteria:

- Feed scope and feed copy are consistent.

### Task 2.3 - Make search behavior explicit in dev and production

Context:

- CODE_REPORT notes Search.astro has a hidden fallback and Pagefind is build-only.
- Developers need a clear dev-mode message.

Read first:

- src/components/Search.astro
- package.json postbuild pagefind command

Files to change:

- src/components/Search.astro
- README.md (optional, if needed for developer note)

Implementation steps:

1. Detect when pagefind index is unavailable.
2. Show a visible non-error helper text in dev mode:
    - Example: "Search is available after npm run build (pagefind index generation)."
3. Keep production behavior unchanged when index exists.

Validation:

- npm run dev -> search area should show clear helper state.
- npm run build -> search should function with index.

Done criteria:

- No hidden fallback state in dev.
- User sees clear instruction instead of silent failure.

### AGENTS.md update after Phase 2

Update AGENTS.md with these exact changes:

1. In SEO or Known Issues sections, remove OG image and twitter placeholder warnings.
2. Add one explicit Search note under Key Commands or workflow:
    - npm run build generates pagefind index used by search.
    - In dev mode, search may show helper text until build index exists.
3. If RSS scope was changed, update Build Output or routing notes to match final feed behavior.

---

## Phase 3 - Collection Coverage and CTA Completeness

### Task 3.1 - Extend CTA utilities to all 10 collection types

Context:

- CODE_REPORT confirms ctaUtils currently covers only apps, persons, companies.
- Schemas already exist for channels, products, blogs, projects, communities, podcasts, initiatives.
- Planning docs define primary CTA mapping per type.

Read first:

- src/utils/ctaUtils.ts
- src/content/config.ts
- planning/CONTENT-ARCHITECTURE.md (Primary CTA mapping)

Files to change:

- src/utils/ctaUtils.ts

Implementation steps:

1. Extend getPrimaryCTALabel and getPrimaryCTAUrl for all missing types.
2. Implement URL fallback order per type:
    - channels: channelUrl -> Subscribe
    - products: buyUrl then website -> Buy
    - blogs: url -> Read
    - projects: repositoryUrl -> Contribute
    - communities: joinUrl -> Join
    - podcasts: platforms[0].url then website -> Listen
    - initiatives: howToHelp[0].url then website -> Get Involved
3. Keep existing app/person/company behavior unchanged.

Short snippet pattern:

```ts
if (collection === 'products') return data.buyUrl ?? data.website ?? null;
```

Validation:

- npm run check
- npm run build

Done criteria:

- Every collection type has deterministic primary CTA label and URL logic.

### Task 3.2 - Expand cross-cutting collection scan lists

Context:

- CODE_REPORT confirms collectionsToScan.ts includes only apps, persons, companies.
- This blocks tags/categories/domains from seeing future entries in 7 existing collections.

Read first:

- src/utils/collectionsToScan.ts
- src/pages/tags/[tag].astro
- src/pages/categories/[category].astro
- src/pages/domains/[domain].astro

Files to change:

- src/utils/collectionsToScan.ts
- any page-level type guards that assume only 3 collections

Implementation steps:

1. Add all existing configured collections to scanned list.
2. Ensure title resolution utility handles title vs name safely.
3. Ensure rendering components can display mixed collection cards without route errors.

Validation:

- npm run check
- npm run build

Done criteria:

- Tags, categories, and domains include all supported collections once content exists.

### Task 3.3 - Add route-safe href resolver for cross-collection cards

Context:

- Mixed collection pages currently risk using collection key as URL prefix directly.
- persons collection must route to /people.

Read first:

- src/components/ContentCard.astro
- src/components/ContentCardFull.astro
- src/components/RelatedItem.astro
- src/utils/ (create route utility if needed)

Files to change:

- src/utils/routeUtils.ts (new)
- all card components that build href

Implementation steps:

1. Create one utility function, for example getEntryHref(collection, slug).
2. Mapping rules:
    - persons -> /people/{slug}
    - all others -> /{collection}/{slug}
3. Replace inline href construction in all card-like components.

Short snippet pattern:

```ts
const ROUTE_PREFIX: Record<string, string> = { persons: 'people' };
return `/${ROUTE_PREFIX[collection] ?? collection}/${slug}`;
```

Validation:

- npm run check
- npm run build
- click-test cards in apps/tags/categories/domains pages

Done criteria:

- No component hardcodes inconsistent path rules.

### AGENTS.md update after Phase 3

Update AGENTS.md with these exact changes:

1. Add a short routing convention note:
    - collection key persons maps to public route /people.
2. Add CTA mapping table for all 10 content types (same labels used in code).
3. Update project structure or architecture notes to mention routeUtils utility and where all cross-collection hrefs must go through it.

---

## Phase 4 - Ship the Seven Page-less Collections

This phase turns schema-only collections into visible product surface.
Collections to implement: channels, products, blogs, projects, communities, podcasts, initiatives.

### Task 4.1 - Create collection folders and minimum seed content

Context:

- CODE_REPORT confirms these schemas exist but directories/content are missing.
- Without content, routes and discovery pages remain empty.

Read first:

- src/content/config.ts
- planning/CONTENT-GUIDELINES.md
- scripts/scaffold-content.mjs

Files to change:

- src/content/channels/\*.mdx (new)
- src/content/products/\*.mdx (new)
- src/content/blogs/\*.mdx (new)
- src/content/projects/\*.mdx (new)
- src/content/communities/\*.mdx (new)
- src/content/podcasts/\*.mdx (new)
- src/content/initiatives/\*.mdx (new)

Implementation steps:

1. Add at least 2 non-draft entries per collection.
2. Fill required frontmatter exactly as schema expects.
3. Keep body concise (150-400 words) and action-oriented.
4. Ensure links are valid and real.

Validation:

- npm run check
- npm run build

Done criteria:

- All seven collections have real, non-draft content entries passing schema checks.

### Task 4.2 - Create listing pages for all seven collections

Context:

- Planning docs and code-report alignment: these collections are invisible without routes.

Read first:

- src/pages/apps/index.astro
- src/components/CollectionHero.astro
- src/components/ContentCardFull.astro

Files to change:

- src/pages/channels/index.astro (new)
- src/pages/products/index.astro (new)
- src/pages/blogs/index.astro (new)
- src/pages/projects/index.astro (new)
- src/pages/communities/index.astro (new)
- src/pages/podcasts/index.astro (new)
- src/pages/initiatives/index.astro (new)

Implementation steps:

1. Reuse listing page pattern from apps.
2. Filter draft entries.
3. Sort featured first, then date/name depending on schema.
4. Render ContentCardFull with CTA hint label and URL from ctaUtils.

Validation:

- npm run check
- npm run build

Done criteria:

- Each new collection has a working index page with cards and CTAs.

### Task 4.3 - Create detail pages for all seven collections

Context:

- Cards and listing pages must link to concrete detail pages.
- Reuse common layout patterns, avoid app-only assumptions.

Read first:

- src/pages/apps/[slug].astro
- src/layouts/ContentLayout.astro
- src/components/RightSidebar.astro

Files to change:

- src/pages/channels/[slug].astro (new)
- src/pages/products/[slug].astro (new)
- src/pages/blogs/[slug].astro (new)
- src/pages/projects/[slug].astro (new)
- src/pages/communities/[slug].astro (new)
- src/pages/podcasts/[slug].astro (new)
- src/pages/initiatives/[slug].astro (new)
- optional: src/layouts/CollectionDetailLayout.astro (new shared layout)

Implementation steps:

1. Build one shared non-app detail layout if needed.
2. Above the fold, show primary CTA button (type-specific label).
3. Render relevant metadata and links per collection.
4. Include related content block using existing related-content utility.

Validation:

- npm run check
- npm run build
- npm run test:e2e (extend smoke if necessary)

Done criteria:

- Every collection has clickable listing -> detail flow.
- Primary CTA is visible above fold on each type.

### Task 4.4 - Expand navigation and homepage sections for new collections

Context:

- Planning docs expect dual discovery by type and domain.
- After new routes exist, navigation must expose them.

Read first:

- src/components/AppSidebar.tsx
- src/pages/index.astro
- planning/ROADMAP.md (Phase 1 and 2 intent)

Files to change:

- src/components/AppSidebar.tsx
- src/pages/index.astro

Implementation steps:

1. Add sidebar nav entries for all newly routed collections.
2. Add homepage sections beyond latest apps where useful (featured people/companies plus at least one new type section).
3. Keep layout responsive and consistent with existing card rows/grid style.

Validation:

- npm run check
- npm run build
- npm run test:e2e

Done criteria:

- New collections are discoverable from primary navigation and homepage.

### AGENTS.md update after Phase 4

Update AGENTS.md with these exact changes:

1. In Project Structure, add all new collection route folders and content folders.
2. In Content Collections section, mark the seven collections as active (not planned).
3. In Primary CTA table, ensure implemented labels and source fields match final ctaUtils behavior.
4. In Key Commands, keep scaffold command examples for these collection types.

---

## Phase 5 - Domain-first Discovery and Opportunities Foundation

This phase includes planning items still aligned with code-report and current architecture.
It should start only after Phase 4 is complete.

### Task 5.1 - Strengthen domain pages with cross-collection grouping

Context:

- Domain pages exist but must become core cross-type discovery surface.
- CODE_REPORT confirms domain logic depends on scanned collections coverage.

Read first:

- src/pages/domains/[domain].astro
- src/utils/domainMeta.ts
- src/utils/collectionsToScan.ts

Files to change:

- src/pages/domains/[domain].astro
- src/pages/domains/index.astro

Implementation steps:

1. Group domain results by collection type with per-group headings.
2. Add result counts per group.
3. Ensure empty groups do not render.
4. Keep persons links routed via /people.

Validation:

- npm run check
- npm run build

Done criteria:

- Domain pages provide clear, mixed-type discovery and no broken links.

### Task 5.2 - Introduce domain opportunities content model and section shell

Context:

- planning/CONTENT-ARCHITECTURE.md and ROADMAP Phase 4 define opportunities as differentiator.
- Implement shell first, then fill content iteratively.

Read first:

- planning/CONTENT-ARCHITECTURE.md (Opportunities section)
- planning/CONTENT-GUIDELINES.md (Opportunities writing)
- src/content/config.ts

Files to change:

- src/content/config.ts (new domains collection schema if absent)
- src/content/domains/\*.mdx (new)
- src/components (new opportunities section component)
- src/pages/domains/[domain].astro

Implementation steps:

1. Add or finalize schema for domain opportunities data blocks.
2. Render section conditionally only when data exists.
3. Start with one domain pilot entry and verify rendering.

Validation:

- npm run check
- npm run build

Done criteria:

- At least one domain page shows an Opportunities section with real structured data.

### AGENTS.md update after Phase 5

Update AGENTS.md with these exact changes:

1. Add a new section describing Opportunities data flow:
    - schema location,
    - content folder,
    - render component,
    - domain page integration point.
2. Add one short rule in Agent Context:
    - For domain work, verify both grouped content results and opportunities block rendering.

---

## Phase 6 - Scale, Quality, and Contributor Operations

Start this phase only when major routing/content expansion is stable.

### Task 6.1 - Structured SEO and per-collection feeds

Context:

- CODE_REPORT flags SEO inconsistencies and feed scope mismatch.
- Planning Phase 5 calls for stronger discovery metadata.

Read first:

- src/components/SEO.astro
- src/pages/rss.xml.ts
- src/pages/domains/[domain]/rss.xml.ts

Files to change:

- src/components/SEO.astro
- src/pages/_rss_.ts

Implementation steps:

1. Add structured data blocks for major entity types (SoftwareApplication, Person, Organization as applicable).
2. Add per-collection feed routes.
3. Keep canonical URLs and OG fields consistent.

Validation:

- npm run build
- validate generated xml files and page head metadata

Done criteria:

- Feeds and metadata represent real page coverage accurately.

### Task 6.2 - Accessibility and dark-mode audit pass

Context:

- Planning Phase 6 priorities remain valid for long-term quality.

Read first:

- planning/DESIGN-SYSTEM.md
- src/styles/global.css
- key UI components and layouts

Files to change:

- component/layout files discovered during audit

Implementation steps:

1. Run accessibility audits on homepage, one listing page, one detail page, and one domain page.
2. Fix keyboard navigation, focus states, ARIA labels, and contrast issues.
3. Audit dark mode contrast on cards, badges, and CTA buttons.

Validation:

- npm run build
- npm run test:e2e
- lighthouse/accessibility checks

Done criteria:

- No critical accessibility issues on key templates.

### Task 6.3 - Contributor workflow hardening

Context:

- Planning docs emphasize repeatable content operations.
- Needed once content volume grows across all collections.

Read first:

- CONTRIBUTING.md
- scripts/scaffold-content.mjs
- planning/AI-AGENT-GUIDE.md

Files to change:

- CONTRIBUTING.md
- scripts/ (optional validation helper)
- .github templates (optional)

Implementation steps:

1. Document per-collection content checklist and validation sequence.
2. Add lightweight automation for frontmatter completeness checks.
3. Keep onboarding path short for content contributors.

Validation:

- npm run check
- run new script if added

Done criteria:

- New contributors can add valid entries with minimal manual back-and-forth.

### AGENTS.md update after Phase 6

Update AGENTS.md with these exact changes:

1. Add quality gates section:
    - required checks for code, content, SEO, accessibility.
2. Add contributor workflow summary with links to CONTRIBUTING and scaffold command usage.
3. Add a maintenance checklist for future agents:
    - keep route mapping centralized,
    - keep CTA mapping in sync with schema,
    - keep feeds and SEO metadata aligned with actual routed collections.

---

## Recommended execution order

Minimum high-value path:

1. Complete Phase 1 and Phase 2 fully.
2. Complete Task 3.1, Task 3.2, Task 3.3.
3. Complete Phase 4 (all four tasks).
4. Start Phase 5 only after Phase 4 done criteria are met.
5. Use Phase 6 as hardening and scale-up.

If executing with small model context windows:

- Prefer one task at a time.
- Always include the task block, the listed Read first files, and done criteria in the prompt.
