## Task B — Brand SVG icons: replace hardcoded old-orange hex with the new accent color 🟢 Nano

**Files:**

- `src/assets/images/brand-logo.svg`
- `src/assets/images/engage/add.svg`
- `src/assets/images/engage/bug.svg`
- `src/assets/images/engage/fix.svg`
- `src/assets/images/engage/suggest.svg`
- `src/assets/images/engage/website.svg`

These SVGs still bake in the pre-redesign bright orange (`#ea580c`) as a literal `fill`/`stroke` attribute value, outside the Tailwind token system entirely (SVGs aren't touched by `@theme` tokens). The new accent primary is `--color-primary-600: #b8541f` (see `global.css`). This was not in scope of the original component-level tasks but is a visible inconsistency — the icons render in the old bright orange while every other accent in the app now renders in the muted saffron/terracotta.

### B.1 — Find and replace in each file

In every file listed above, replace all occurrences of `#ea580c` with `#b8541f` (case-insensitive; some files use it in both `fill` and `stroke` attributes, and one — `suggest.svg` — has it twice):

- `brand-logo.svg:2` — one `fill="#ea580c"` on the root `<svg>`.
- `engage/add.svg:3,6` — `fill="#ea580c" stroke="#ea580c"` on the root `<svg>`, plus one more occurrence inside a nested element.
- `engage/bug.svg:3,6` — `stroke="#ea580c"` on the root `<svg>`, plus one more occurrence inside a nested element.
- `engage/fix.svg:3` — `fill="#ea580c"` on the root `<svg>`.
- `engage/suggest.svg:3,5,6` — `stroke="#ea580c"` appears three times (root `<svg>`, a `<g>` tracer element, and one more nested element).
- `engage/website.svg:3,6` — `stroke="#ea580c"` on the root `<svg>` and again on the inner `<path>`.

A single find-and-replace of `#ea580c` → `#b8541f` (all occurrences, case-insensitive) across each file is sufficient — there is no styling logic to preserve, just literal color attributes.

**Test:** `npm run build` → visually inspect the homepage/header logo (`brand-logo.svg`, if rendered anywhere) and the "Engage" section icons (add/bug/fix/suggest/website — used wherever `Engage.astro` renders its icon links) in both themes. Confirm they now render in the muted terracotta (`#b8541f`) matching `primary-600`, not the old bright orange (`#ea580c`).

---
