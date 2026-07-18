## Task 1.2 — Header: replace `[ Awesome ] Bharat` bracket wordmark + neutral bar 🔵

**File:** `src/components/Header.astro`

**Find** the header open tag (~line 28):

```html
<header
    class="sticky top-0 z-50 bg-primary-100/80 dark:bg-secondary-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
></header>
```

**Replace with:**

```html
<header
    class="sticky top-0 z-50 bg-neutral-50/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800"
></header>
```

**Find** the center title block (~lines 81–98):

```html
<a
    href="/"
    class="flex flex-col md:flex-row items-center gap-1 md:gap-2 justify-center text-center"
>
    <span
        class="group text-lg md:text-xl lg:text-2xl
            font-bold md:font-semibold lg:font-bold
            hover:text-primary-600 dark:hover:text-primary-400"
    >
        <span
            class="text-primary-600 dark:text-primary-400
            group-hover:text-gray-950 dark:group-hover:text-primary-100"
        >
            [ Awesome ]
        </span>
        Bharat
    </span>
</a>
```

**Replace with:**

```html
<a href="/" class="flex items-center justify-center text-center">
    <span
        class="font-serif text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 transition-colors"
    >
        Awesome<span class="text-primary-600 dark:text-primary-400">Bharat</span>
    </span>
</a>
```

(Serif wordmark, no brackets, accent on the second word.)

**Test:** `npm run build` → header reads "AwesomeBharat" in serif, "Bharat" in saffron; bar is neutral translucent. Hamburger + search + theme toggle still work.

---
