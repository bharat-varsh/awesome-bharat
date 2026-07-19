### 3.1d — "Explore by Category" + CTA tokenize

**Find** the category card class (~lines 316–319):

```
                            class="bg-white dark:bg-secondary-800 border border-gray-300 dark:border-secondary-800
                                 rounded-xl p-4 flex items-center justify-center text-center font-medium text-gray-700 dark:text-gray-200
                                 hover:bg-primary-50 dark:hover:bg-secondary-700 hover:border-primary-300 dark:hover:border-primary-500
                                 transition-all duration-200"
```

**Replace with:**

```
                            class="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800
                                 rounded-xl p-4 flex items-center justify-center text-center font-medium text-neutral-700 dark:text-neutral-200
                                 hover:border-primary-400 hover:text-primary-700 dark:hover:text-primary-300
                                 transition-all duration-200"
```

Also update the section `<h2>` (~line 308) to serif: replace `class="text-xl font-semibold text-gray-900 dark:text-gray-100"` with `class="font-serif text-2xl font-semibold text-neutral-900 dark:text-neutral-100"`.

**CTA button** (~lines 330–334): **find**

```
                class="inline-block px-8 py-3 rounded-lg
             bg-primary-600 text-white font-medium
             hover:bg-primary-700 transition-colors"
```

**replace with:**

```
                class="inline-block px-8 py-3 rounded-xl bg-primary-600 text-white font-semibold shadow-card hover:bg-primary-700 hover:shadow-card-hover transition-all"
```

Leave the `<script>` at the bottom (lines 341–358) unchanged — it already drives `.scroll-left/.scroll-right` via `data-scroll-container`.

**Test:** `npm run build` → homepage has a large serif editorial hero, three carousels with clean circular icon-button arrows (which scroll on click), rounded category tiles, and a saffron CTA. Verify at mobile, tablet, desktop widths, in both themes. No horizontal page overflow.

---
