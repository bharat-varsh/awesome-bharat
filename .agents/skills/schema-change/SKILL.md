---
name: schema-change
description: Change Astro content collection Zod schemas in config.ts and cascade updates. Use when adding/removing fields, enums, collections, or fixing frontmatter validation.
---

# Schema Change

Source of truth: `src/content/config.ts`.

## Steps

1. **Edit schema** — Update the collection in `defineCollection({ schema: z.object(...) })`. Prefer `.optional()` / `.default()` for non-breaking adds.
2. **Update all MDX** in that collection — required fields must exist; invalid enum values fail the build.
3. **Cascade code** that reads the field:
   - Pages: `src/pages/**`
   - Layouts/components consuming frontmatter
   - Utils: `ctaUtils.ts`, `relatedContent.ts`, `imageResolvers.ts`, etc.
4. **Docs** (if field is user-facing):
   - `planning/CONTENT-ARCHITECTURE.md`
   - `planning/CONTENT-GUIDELINES.md` (required-fields tables)
   - `AGENTS.md` content collection summary if needed
5. **New collection** — schema + `collections` export + folder under `src/content/{name}/` + listing/detail pages + nav (`SidebarNav` / `LeftSidebar`) + CTA branch in `ctaUtils.ts` if applicable.

## Enum changes

- **Add value** — safe if optional consumers handle unknown gracefully
- **Rename/remove** — grep MDX + TS for old string; fix every hit before build

## Verify

```bash
npm run check
npm run build    # Zod validates every content entry
```

## Do not

- Change schema without updating existing entries
- Use loose `z.any()` / untyped frontmatter access
- Skip CTA / related-content utils when the field drives links or discovery
