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

### AGENTS.md update after completing the work

Update AGENTS.md with these exact changes:

1. Add a short routing convention note:
    - collection key persons maps to public route /people.
2. Add CTA mapping table for all 10 content types (same labels used in code).
3. Update project structure or architecture notes to mention routeUtils utility and where all cross-collection hrefs must go through it.