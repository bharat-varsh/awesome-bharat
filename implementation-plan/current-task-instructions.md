## Task 1.1 — BaseLayout: neutral page background + intrinsic `main` container 🔵

**File:** `src/layouts/BaseLayout.astro`

**Find** (the `<body>` open tag, ~line 73):

```html
<body
    class="bg-primary-100/30 dark:bg-secondary-900 text-gray-900 dark:text-gray-100 transition-colors"
></body>
```

**Replace with:**

```html
<body
    class="bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors"
></body>
```

**Find** the `<main>` (~line 81):

```html
<main class="flex-1 overflow-x-hidden" data-pagefind-body>
    <slot />
</main>
```

**Replace with:**

```html
<main class="flex-1 overflow-x-hidden min-w-0" data-pagefind-body>
    <slot />
</main>
```

(`min-w-0` prevents flex children from forcing horizontal overflow. Page-level max-width stays per-page for now; ContentLayout/homepage tasks handle their own spacing.)

**Test:** `npm run dev` → homepage and `/apps` have a clean near-white (light) / near-black warm (dark) background with no orange tint. No horizontal scrollbar.

---
