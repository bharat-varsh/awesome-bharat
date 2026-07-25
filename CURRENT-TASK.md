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
