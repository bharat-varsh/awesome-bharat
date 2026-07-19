## Task A — StoreBadges: finish tokenizing the card (leftover from Task 2.5) 🟢 Nano

**File:** `src/components/StoreBadges.astro`

The store-badge grid has no card container styling at all (unlike `Screenshots.astro`/`YouTubeEmbed.astro`, which got `shadow-card`/`border-neutral-*`/`bg-neutral-*` treatment), and its text-label fallback pill still uses raw `gray-900`/`gray-100` instead of the neutral/primary token scheme.

### A.1 — Wrap the badge row in a card

**Find** (~line 22):

```html
<div class="mb-6 px-2 sm:px-2 lg:px-0">
    <div class="flex flex-wrap gap-4 items-center justify-around"></div>
</div>
```

**Replace with:**

```html
<div
    class="mb-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-card p-4 sm:p-5"
>
    <div class="flex flex-wrap gap-4 items-center justify-around"></div>
</div>
```

(Two opening `<div>` tags — make sure the corresponding closing `</div></div>` at the bottom (~lines 94–95) is left untouched; the extra wrapper just adds one more level that already closes correctly since you only changed the opening tag's classes/attributes, not the nesting.)

### A.2 — Tokenize the fallback text pill

**Find** (~line 87):

```html
<div
    class="h-12 sm:h-10 md:h-11 px-6 flex items-center justify-center bg-gray-900 dark:bg-gray-100 rounded-lg text-white dark:text-gray-900 font-semibold text-sm sm:text-base whitespace-nowrap hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
>
    {store.label}
</div>
```

**Replace with:**

```html
<div
    class="h-12 sm:h-10 md:h-11 px-6 flex items-center justify-center bg-primary-600 dark:bg-primary-500 rounded-lg text-white font-semibold text-sm sm:text-base whitespace-nowrap hover:bg-primary-700 dark:hover:bg-primary-400 transition-colors"
>
    {store.label}
</div>
```

**Test:** `npm run build` → open any app detail page with a non-standard store link (i.e. a `storeLinks` entry that isn't Play Store/App Store/F-Droid/GitHub, so the fallback pill renders) — e.g. check `src/content/apps/*.mdx` for a `storeLinks` entry with a label like "Website" or "Direct Download". Confirm the badge row now sits inside a bordered/shadowed card matching `Screenshots.astro`/`YouTubeEmbed.astro`, and the fallback pill is saffron instead of black/white. Check both themes.

---

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

## Suggested order

| #   | Task                                          | Tier    | Depends on    |
| --- | --------------------------------------------- | ------- | ------------- |
| A   | StoreBadges card + fallback pill tokenization | 🟢 Nano | Phase 2 (2.5) |
| B   | Brand/engage SVG icon color swap              | 🟢 Nano | —             |

Both tasks are independent, disjoint-file, and parallel-safe.
