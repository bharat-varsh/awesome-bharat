# Domain Pages — Step-by-Step Implementation Guide

---

## Background the implementer must know (read once)

1. **The schema already has a real `domains` field.** In [src/content/config.ts](../src/content/config.ts), every collection (`apps`, `persons`, `companies`, `channels`, `products`, `blogs`, `projects`, `communities`, `podcasts`, `initiatives`) has:

    ```ts
    domains: z.array(domainEnum).default([]),
    ```

    `domainEnum` has **29 values** (listed in Task 1). This is a typed, validated field — it is the correct source of truth.

2. **BUT the current pages ignore it.** [src/pages/apps/index.astro](../src/pages/apps/index.astro), [src/pages/categories/[category].astro](../src/pages/categories/[category].astro), and [src/pages/tags/[tag].astro](../src/pages/tags/[tag].astro) currently derive "domains" from a `domain:`-prefixed **tag** hack:

    ```ts
    domains={item.data.tags
        ?.filter((tag) => tag.startsWith('domain:'))
        ?.map((tag) => tag.replace('domain:', ''))}
    ```

    This guide **standardizes on the real `domains` field** and migrates those call sites. Do not perpetuate the `domain:`-tag hack.

3. **Naming pattern across collections:** `apps` use `data.title`; every other collection uses `data.name`. `apps` use `data.logo`; `persons` use `data.avatar`; the rest use `data.logo`. Helper functions in Task 3 abstract this.

4. **Reusable building blocks that already exist** (do not rebuild them):
    - [src/components/CollectionHero.astro](../src/components/CollectionHero.astro) — hero card. Props: `eyebrow`, `title`, `description`, `countLabel`, `icon`, `pills` (array of `{label, href}`).
    - [src/components/ContentCardFull.astro](../src/components/ContentCardFull.astro) — the card. Props: `title`, `description`, `slug`, `collection`, `logoSrc` (ImageMetadata), `domains` (string[]), `categories` (string[]), `ctaLabel`, `ctaUrl`, `featured`.
    - [src/utils/imageResolvers.ts](../src/utils/imageResolvers.ts) — `resolveLogo(slug, logo?)` → `ImageMetadata`.
    - [src/utils/ctaUtils.ts](../src/utils/ctaUtils.ts) — `getPrimaryCTAUrl(collection, data)`.
    - [src/utils/textUtils.ts](../src/utils/textUtils.ts) — `formatCategoryName(str)` inserts spaces into camelCase and title-cases.

5. **The reference page to copy structure from is** [src/pages/categories/[category].astro](../src/pages/categories/[category].astro). The domain page is the same shape but keyed on `data.domains` instead of `data.categories`, and it works across all collections instead of just apps.

---
