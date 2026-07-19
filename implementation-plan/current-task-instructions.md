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
