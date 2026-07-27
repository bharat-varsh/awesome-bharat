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
