## Task 2.2 — ContentCardFull: retire yellow "featured" + tokenize 🔵

**File:** `src/components/ContentCardFull.astro`

**Find** the `<a>` class (~lines 40–43):

```
    class={`group block min-w-[280px] rounded-xl border p-4 transition-all duration-200 hover:-translate-y-[2px] hover:shadow-md ${
        featured ? 'border-yellow-400' : 'border-gray-200 dark:border-secondary-600'
    } bg-white dark:bg-secondary-800`}
```

**Replace with:**

```
    class={`group block min-w-[280px] rounded-2xl border p-4 transition-all duration-200 hover:-translate-y-1 shadow-card hover:shadow-card-hover ${
        featured
            ? 'border-primary-300 dark:border-primary-500/50 ring-1 ring-primary-200/60 dark:ring-primary-500/20'
            : 'border-neutral-200 dark:border-neutral-800'
    } bg-white dark:bg-neutral-900`}
```

**Find** the logo image (~line 49):

```
                    class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
```

**Replace with:**

```
                    class="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
```

Also wrap the logo tile with rounding — **find** (~line 47):

```html
<div class="h-14 w-14 overflow-hidden"></div>
```

**Replace with:**

```html
<div class="h-14 w-14 overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800"></div>
```

**Find** the Featured pill (~line 68):

```html
<span
    class="flex-shrink-0 rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-semibold text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
>
    ★ Featured
</span>
```

**Replace with:**

```html
<span
    class="flex-shrink-0 rounded-full bg-primary-100 px-2 py-0.5 text-xs font-semibold text-primary-800 dark:bg-primary-900/40 dark:text-primary-200"
>
    Featured
</span>
```

**Test:** `npm run build` → `/apps` grid cards are rounded with soft shadows, logos uncropped on a subtle tile; featured cards get a tasteful saffron ring (no yellow); hover lifts.

---
