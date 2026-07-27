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
