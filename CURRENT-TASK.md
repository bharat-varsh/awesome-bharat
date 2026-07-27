### ~~Task 4.3 - Create detail pages for all seven collections~~ ✅

Context:

- Cards and listing pages must link to concrete detail pages.
- Reuse common layout patterns, avoid app-only assumptions.

Read first:

- src/pages/apps/[slug].astro
- src/layouts/ContentLayout.astro
- src/components/RightSidebar.astro

Files changed:

- src/pages/channels/[slug].astro (new)
- src/pages/products/[slug].astro (new)
- src/pages/blogs/[slug].astro (new)
- src/pages/projects/[slug].astro (new)
- src/pages/communities/[slug].astro (new)
- src/pages/podcasts/[slug].astro (new)
- src/pages/initiatives/[slug].astro (new)
- src/layouts/CollectionDetailLayout.astro (new shared layout)
- src/utils/relatedContent.ts (refactored: expanded to support all collections)
- src/components/RelatedItem.astro (expanded type support)
- src/components/YouMightLike.astro (expanded type support)

Implementation:

1. Built shared `CollectionDetailLayout.astro` for all non-app collections (header with CTA, description, MDX slot, right sidebar slot)
2. Each detail page shows primary CTA above fold (type-specific label per ctaUtils)
3. Renders collection-specific metadata (topics, language, platform, price, license, etc.)
4. Includes related content block in right sidebar via `getRelatedContentSimple`

Validation:

- npm run check ✅ (0 errors, 1 pre-existing warning)

Done criteria:

- ✅ Every collection has clickable listing -> detail flow.
- ✅ Primary CTA is visible above fold on each type.
