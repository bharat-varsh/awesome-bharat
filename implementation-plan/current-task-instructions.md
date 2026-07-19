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
