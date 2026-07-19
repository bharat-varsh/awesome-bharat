## Task 2.5 — Screenshots / YouTubeEmbed / StoreBadges: typo + shadow token cleanup 🟢

**Files:** `src/components/Screenshots.astro`, `src/components/YouTubeEmbed.astro`, `src/components/StoreBadges.astro`

### 2.5a — `StoreBadges.astro`: fix typo (~line 87)

**Find:** `whitespace-nowwrap` **Replace with:** `whitespace-nowrap`

### 2.5b — `YouTubeEmbed.astro`: fix typo (~line 27)

**Find:** `overflow-hideen` **Replace with:** `overflow-hidden`

### 2.5c — Card shadows → token (both `Screenshots.astro` and `YouTubeEmbed.astro`)

In both files, the media card wrapper uses `shadow-lg hover:shadow-xl ... border-gray-200 dark:border-gray-700`. Replace **each occurrence** of:

```
shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900
```

with:

```
shadow-card hover:shadow-card-hover transition-shadow duration-200 border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900
```

(Screenshots has 1 occurrence ~line 29; YouTubeEmbed has 2 ~lines 28 and 103.)

**Test:** `npm run build` → on an app detail page with screenshots/videos (e.g. `/apps/mindful`), media tiles have subtle neutral shadows; no visual regressions; arrows still scroll.

---
