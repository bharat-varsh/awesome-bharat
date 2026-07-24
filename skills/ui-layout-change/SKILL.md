---
name: ui-layout-change
description: Safely change Astro layouts, components, Tailwind styles, navigation, cards, or page shells. Use for UI/layout work, sidebar, header, mobile nav, dark mode, or design-system-aligned styling.
---

# UI / Layout Change

## Read first

- `planning/DESIGN-SYSTEM.md` — colors, type, cards, page layouts
- Similar existing component under `src/components/` or layout under `src/layouts/`
- `AGENTS.md` known issues (sidebar scroll, footer, store badges)

## Where things live

| Concern | Location |
| ------- | -------- |
| Shell (header, left nav) | `src/layouts/BaseLayout.astro` |
| Detail article + right rail | `src/layouts/ContentLayout.astro` |
| Cards / badges / SEO | `src/components/*.astro` |
| Global CSS | `src/styles/global.css` |
| Listing / detail routes | `src/pages/` |
| CTA resolution | `src/utils/ctaUtils.ts` |

## Rules

1. **Match neighbors** — Same prop patterns, `@/` imports, Tailwind class order, dark variants.
2. **Images** — `resolveLogo()` / registry only; never `src="/images/..."`.
3. **Interactivity** — `data-*` + `<script>` listeners; no inline `onclick`.
4. **No dead Astro props** — e.g. do not pass `aspectRatio` on `<Image>`.
5. **Sidebar height** — Prefer `items-start` over `items-center` when article + sticky sidebar share a row.
6. **Scope** — Touch only files needed; avoid drive-by refactors.

## Verify

```bash
npm run check    # fast
npm run dev      # visual: light/dark, mobile, listing + detail
npm run build    # done-gate
```

## Do not

- Hardcode colors that ignore design tokens / dark mode
- Duplicate store-badge or card markup instead of shared components
- Change content MDX while doing pure layout work
