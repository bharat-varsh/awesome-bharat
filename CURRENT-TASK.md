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