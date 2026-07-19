## Task 3.1 — Homepage: editorial hero, one responsive `<h1>`, deduped carousel with icon-button arrows 🟡

**File:** `src/pages/index.astro`

### 3.1a — Hero section

**Find** the hero `<section>` (lines 63–123, from `<!-- Hero -->` through its closing `</section>`) and **replace the whole block** with:

```astro
<!-- Hero -->
<section class="border-b border-neutral-200 dark:border-neutral-800">
    <div class="container-wide py-16 sm:py-20 text-center">
        <p
            class="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400"
        >
            Curated · Made in India
        </p>
        <h1
            class="font-serif text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 text-balance"
        >
            Remarkable things,
            <span class="italic text-primary-600 dark:text-primary-400">made by Indians</span>
        </h1>
        <p class="mx-auto mt-6 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
            A curated collection of awesome made by Indians — discover the work and the great people
            who made it possible.
        </p>

        <!-- Stat strip -->
        <div
            class="mt-8 inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm font-medium text-neutral-700 dark:text-neutral-300"
        >
            <span class="flex items-center gap-1.5">
                <span
                    class="font-serif text-lg font-semibold text-neutral-900 dark:text-neutral-100"
                    >{stats.apps}</span
                >
                apps
            </span>
            <span class="h-1 w-1 rounded-full bg-neutral-300 dark:bg-neutral-700"></span>
            <span class="flex items-center gap-1.5">
                <span
                    class="font-serif text-lg font-semibold text-neutral-900 dark:text-neutral-100"
                    >{stats.persons}</span
                >
                people
            </span>
            <span class="h-1 w-1 rounded-full bg-neutral-300 dark:bg-neutral-700"></span>
            <span class="flex items-center gap-1.5">
                <span
                    class="font-serif text-lg font-semibold text-neutral-900 dark:text-neutral-100"
                    >{stats.companies}</span
                >
                companies
            </span>
        </div>
    </div>
</section>
```

(One responsive serif `<h1>` replaces the duplicated desktop/mobile spans; no orange gradient.)
