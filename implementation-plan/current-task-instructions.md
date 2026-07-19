## Task 5 — Migrate existing cards to the real `domains` field

Three existing pages pass domains to `ContentCardFull` using the `domain:`-tag hack. Replace those with the real `domains` field so cards show consistent domain badges everywhere.

Import `getDomainMeta` at the top of each file:
```ts
import { getDomainMeta } from '@/utils/domainMeta.ts';
```

**5a — [src/pages/apps/index.astro](../src/pages/apps/index.astro):** find
```ts
domains={app.data.tags
    ?.filter((tag: string) => tag.startsWith('domain:'))
    ?.map((tag: string) => tag.replace('domain:', ''))}
```
replace with
```ts
domains={(app.data.domains ?? []).map((d) => getDomainMeta(d).label)}
```

**5b — [src/pages/categories/[category].astro:190](../src/pages/categories/[category].astro):** find the same `tags?.filter(...startsWith('domain:'))` block passed to `domains=` and replace with
```ts
domains={(item.data.domains ?? []).map((d) => getDomainMeta(d).label)}
```

**5c — [src/pages/tags/[tag].astro:158](../src/pages/tags/[tag].astro):** same replacement as 5b.

> After this task, the `domain:`-prefixed tag convention is fully retired. If any seed content used `tags: ["domain:space"]`, move that to `domains: [space]` in the frontmatter (Task 9 covers seeding correctly).

---