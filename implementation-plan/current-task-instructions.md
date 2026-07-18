## Task 1.5 — ThemeToggle: replace heavyweight SVGs with clean line icons 🔵

**File:** `src/components/ThemeToggle.astro`

Replace the **entire file** with:

```astro
---

---

<button
    id="theme-toggle"
    type="button"
    class="p-2 rounded-lg text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
    aria-label="Toggle theme"
>
    <!-- Sun icon (shown in dark mode) -->
    <svg
        class="w-5 h-5 hidden dark:block"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1.8"
    >
        <circle cx="12" cy="12" r="4"></circle>
        <path
            stroke-linecap="round"
            d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
        ></path>
    </svg>

    <!-- Moon icon (shown in light mode) -->
    <svg
        class="w-5 h-5 block dark:hidden"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1.8"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
</button>

<script>
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle?.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
    });
</script>
```

(Clean `currentColor` line icons; fixes the duplicate `id` bug; persistence still handled by the `MutationObserver` in `BaseLayout.astro`.)

**Test:** `npm run build` → toggle shows a moon in light mode, sun in dark mode; clicking flips the theme; reload preserves choice.

---
