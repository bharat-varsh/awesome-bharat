## Task 3.2 — ContentLayout: remove orange glow, round logo, natural scroll, dedupe store badges, new status chips 🟡

**File:** `src/layouts/ContentLayout.astro` (large file — make targeted edits only).

### 3.2a — Header card: drop the orange glow shadow

**Find** (~lines 108–110):

```html
<div
    class="rounded-2xl shadow-lg shadow-primary-400/80 dark:shadow-primary-900/80 bg-white dark:bg-secondary-900 p-4 sm:p-6"
></div>
```

**Replace with:**

```html
<div
    class="rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-card bg-white dark:bg-neutral-900 p-5 sm:p-7"
></div>
```

### 3.2b — Round the logo tile

**Find** (~line 119):

```html
<div class="w-20 h-20 sm:w-24 sm:h-24 overflow-hidden"></div>
```

**Replace with:**

```html
<div
    class="w-20 h-20 sm:w-24 sm:h-24 overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800 p-1"
></div>
```

### 3.2c — Fix the dual independent-scroll panes (allow natural page scroll)

The article and sidebar are each fixed-height independent scroll regions, which feels cramped. **Find** the outer wrapper (~line 101):

```html
<div class="flex flex-col lg:flex-row gap-0 justify-center items-start"></div>
```

Leave it as-is (`items-start` is already correct). **Find** the `<article>` (~lines 102–105):

```html
<article
    class="max-w-6xl px-10 py-8 lg:h-[calc(100vh-4rem)] lg:overflow-y-auto scrollbar-hide"
    data-pagefind-body
></article>
```

**Replace with:**

```html
<article class="w-full max-w-3xl px-5 sm:px-8 py-8" data-pagefind-body></article>
```

(Removes the fixed-height inner scroll; the page scrolls naturally. Then make the right sidebar sticky instead of an independent pane — open `src/components/Sidebar.astro` and for the `position === 'right'` branch it is already `lg:sticky top-16 ... lg:h-[calc(100vh-4rem)] lg:overflow-y-auto`, which is fine as a sticky column once the article no longer traps scroll. No change required there.)

### 3.2d — Fix redundant padding on the description

**Find** (~line 422):

```html
<div class="mt-10 mb-6 px-4 sm:px-4 lg:px-0"></div>
```

**Replace with:**

```html
<div class="mt-10 mb-6"></div>
```

And the description `<p>` (~lines 423–425) — swap `text-gray-700 dark:text-gray-300` → `text-neutral-700 dark:text-neutral-300`.
