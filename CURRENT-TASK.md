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