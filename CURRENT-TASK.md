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
