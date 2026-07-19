## Task 2.3 — CollectionHero: editorial serif hero, drop orange/teal gradient, make `font-display` real 🔵

**File:** `src/components/CollectionHero.astro`

**Find** the `<section>` (~lines 19–21):

```html
<section
    class="overflow-hidden rounded-lg border border-primary-200/80 bg-gradient-to-br from-primary-100 via-white to-secondary-100 px-5 py-6 shadow-sm dark:border-secondary-700 dark:from-secondary-800 dark:via-secondary-900 dark:to-gray-900 sm:px-7 sm:py-8"
></section>
```

**Replace with:**

```html
<section
    class="overflow-hidden rounded-2xl border border-neutral-200 bg-white px-6 py-8 shadow-card dark:border-neutral-800 dark:bg-neutral-900 sm:px-8 sm:py-10"
></section>
```

**Find** the eyebrow (~line 26):

```html
<p
    class="mb-3 text-xs font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300"
></p>
```

**Replace with:**

```html
<p
    class="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-primary-600 dark:text-primary-400"
></p>
```

**Find** the icon tile + title (~lines 32–42):

```html
<span
    class="grid h-12 w-12 flex-none place-items-center rounded-lg bg-white text-2xl shadow-sm ring-1 ring-primary-200 dark:bg-secondary-800 dark:ring-secondary-700"
    aria-hidden="true"
>
    {icon}
</span>
<h1
    class="break-words font-display text-3xl font-extrabold leading-tight text-gray-950 dark:text-white sm:text-4xl"
>
    {title}
</h1>
```

**Replace with:**

```html
<span
    class="grid h-12 w-12 flex-none place-items-center rounded-xl bg-neutral-100 text-2xl ring-1 ring-neutral-200 dark:bg-neutral-800 dark:ring-neutral-700"
    aria-hidden="true"
>
    {icon}
</span>
<h1
    class="break-words font-serif text-4xl font-semibold leading-tight text-neutral-900 dark:text-white sm:text-5xl"
>
    {title}
</h1>
```

(`font-display` was a dead class; `font-serif` is the real editorial token.)

**Find** the count pill (~lines 49–51):

```html
<p
    class="w-fit flex-none rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm"
></p>
```

**Replace with:**

```html
<p
    class="w-fit flex-none rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white"
></p>
```

Optionally tokenize the `pills` block (~lines 63, 68): replace `ring-primary-200` → `ring-neutral-200`, `bg-white/90` → `bg-neutral-50`, `dark:bg-secondary-800` → `dark:bg-neutral-800`, `dark:ring-secondary-700` → `dark:ring-neutral-700`. Keep `hover:bg-primary-600 hover:text-white`.

**Test:** `npm run build` → `/apps` hero is a clean white/neutral card with a large **serif** title, tasteful saffron eyebrow + count pill; no orange-to-teal gradient.

---
