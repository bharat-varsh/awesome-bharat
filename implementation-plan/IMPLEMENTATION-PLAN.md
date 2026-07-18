# PHASE 0 — Foundation (BLOCKING) 🔴 Large

> One task, done by a **Large** model, because it combines a framework migration with token-system design and requires build debugging. Do NOT split or parallelize. When this task is complete and `npm run build` passes, the whole site will already look dramatically better (warm neutral + saffron, serif headings) even before later phases.

## Task 0.1 — Migrate to Tailwind v4 + install design tokens + self-hosted fonts 🔴

### Step A — Dependencies

Run:

```bash
npm install tailwindcss@^4 @tailwindcss/vite@^4 @fontsource-variable/inter @fontsource-variable/fraunces
npm install -D @tailwindcss/typography@latest
npm uninstall @astrojs/tailwind
```

### Step B — `astro.config.mjs`

Replace the whole file with:

```js
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'url';
import { resolve } from 'path';

export default defineConfig({
    site: 'https://awesomebharat.com',
    integrations: [mdx(), sitemap()],
    markdown: {
        shikiConfig: {
            theme: 'github-dark',
            wrap: true,
        },
    },
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                '@': resolve(fileURLToPath(new URL('.', import.meta.url)), 'src'),
            },
        },
        build: {
            cssMinify: 'lightningcss',
        },
    },
});
```

> Note: the old `tailwind({ applyBaseStyles: false })` integration is removed; v4 works via the Vite plugin.

### Step C — Delete the old config

Delete `tailwind.config.mjs` entirely (v4 is CSS-first; theme now lives in `global.css`).

### Step D — Replace `src/styles/global.css` with the full token system

Replace the **entire** file with:

```css
@import 'tailwindcss';
@plugin '@tailwindcss/typography';

/* Class-based dark mode (Tailwind v4 syntax) */
@custom-variant dark (&:where(.dark, .dark *));

@theme {
    /* ---------- Typography ---------- */
    --font-sans:
        'Inter Variable', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        'Helvetica Neue', Arial, sans-serif;
    --font-serif: 'Fraunces Variable', ui-serif, Georgia, Cambria, 'Times New Roman', serif;

    /* ---------- Warm neutral (stone) ramp ---------- */
    --color-neutral-50: #fafaf9;
    --color-neutral-100: #f5f5f4;
    --color-neutral-200: #e7e5e4;
    --color-neutral-300: #d6d3d1;
    --color-neutral-400: #a8a29e;
    --color-neutral-500: #78716c;
    --color-neutral-600: #57534e;
    --color-neutral-700: #44403c;
    --color-neutral-800: #292524;
    --color-neutral-900: #1c1917;
    --color-neutral-950: #0c0a09;

    /* Override Tailwind's default gray to the warm ramp (cohesion, adds 950) */
    --color-gray-50: #fafaf9;
    --color-gray-100: #f5f5f4;
    --color-gray-200: #e7e5e4;
    --color-gray-300: #d6d3d1;
    --color-gray-400: #a8a29e;
    --color-gray-500: #78716c;
    --color-gray-600: #57534e;
    --color-gray-700: #44403c;
    --color-gray-800: #292524;
    --color-gray-900: #1c1917;
    --color-gray-950: #0c0a09;

    /* Legacy "secondary" name → warm neutral ramp (keeps existing classes working) */
    --color-secondary-50: #fafaf9;
    --color-secondary-100: #f5f5f4;
    --color-secondary-200: #e7e5e4;
    --color-secondary-300: #d6d3d1;
    --color-secondary-400: #a8a29e;
    --color-secondary-500: #78716c;
    --color-secondary-600: #57534e;
    --color-secondary-700: #44403c;
    --color-secondary-800: #292524;
    --color-secondary-900: #1c1917;
    --color-secondary-950: #0c0a09;

    /* ---------- Accent (refined saffron / terracotta) ---------- */
    --color-accent-50: #fdf5ef;
    --color-accent-100: #fae7d5;
    --color-accent-200: #f4cba9;
    --color-accent-300: #eca873;
    --color-accent-400: #e08445;
    --color-accent-500: #cf6a2b;
    --color-accent-600: #b8541f;
    --color-accent-700: #98411c;
    --color-accent-800: #7c361c;
    --color-accent-900: #662e1a;
    --color-accent-950: #37160b;

    /* Legacy "primary" name → accent ramp (keeps existing classes working) */
    --color-primary-50: #fdf5ef;
    --color-primary-100: #fae7d5;
    --color-primary-200: #f4cba9;
    --color-primary-300: #eca873;
    --color-primary-400: #e08445;
    --color-primary-500: #cf6a2b;
    --color-primary-600: #b8541f;
    --color-primary-700: #98411c;
    --color-primary-800: #7c361c;
    --color-primary-900: #662e1a;
    --color-primary-950: #37160b;

    /* ---------- Radii ---------- */
    --radius-card: 1rem;

    /* ---------- Layered neutral shadows (replace orange glows) ---------- */
    --shadow-card: 0 1px 2px rgb(28 25 23 / 0.04), 0 6px 16px rgb(28 25 23 / 0.06);
    --shadow-card-hover: 0 4px 8px rgb(28 25 23 / 0.06), 0 14px 32px rgb(28 25 23 / 0.1);
}

/* ---------- Semantic surface variables (theme-switched) ---------- */
:root {
    --surface: #ffffff;
    --surface-page: #fafaf9;
    --surface-elevated: #ffffff;
    --border-subtle: #e7e5e4;
    --ink: #1c1917;
    --ink-muted: #78716c;
}
.dark {
    --surface: #1c1917;
    --surface-page: #0c0a09;
    --surface-elevated: #1c1917;
    --border-subtle: #292524;
    --ink: #fafaf9;
    --ink-muted: #a8a29e;
}

@layer base {
    * {
        font-feature-settings:
            'rlig' 1,
            'calt' 1;
    }
    html {
        font-family: var(--font-sans);
    }
    /* Editorial: display headings use the serif */
    h1,
    h2,
    h3 {
        font-family: var(--font-serif);
        font-optical-sizing: auto;
        letter-spacing: -0.01em;
    }
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        @apply bg-neutral-100 dark:bg-neutral-900;
    }
    ::-webkit-scrollbar-thumb {
        @apply bg-neutral-300 dark:bg-neutral-700 rounded;
    }
    ::-webkit-scrollbar-thumb:hover {
        @apply bg-neutral-400 dark:bg-neutral-600;
    }
}

*:focus-visible {
    @apply outline-2 outline-offset-2 outline-primary-600 dark:outline-primary-400;
}

html {
    @apply transition-colors duration-200;
}

body {
    @apply antialiased;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

@layer components {
    .container-narrow {
        @apply max-w-4xl mx-auto px-4 sm:px-6 lg:px-8;
    }
    .container-wide {
        @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
    }
}

@layer utilities {
    .text-balance {
        text-wrap: balance;
    }
    .animate-fade-in {
        animation: fadeIn 0.5s ease-out both;
    }
    .scrollbar-hide::-webkit-scrollbar {
        display: none;
    }
    .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
}

/* ---------- Prose (Tailwind Typography v4 via CSS variables) ---------- */
.prose {
    max-width: none;
    --tw-prose-body: var(--color-neutral-700);
    --tw-prose-headings: var(--color-neutral-900);
    --tw-prose-links: var(--color-primary-600);
    --tw-prose-bold: var(--color-neutral-900);
    --tw-prose-code: var(--color-neutral-900);
    --tw-prose-quotes: var(--color-neutral-700);
    --tw-prose-quote-borders: var(--color-primary-500);
    --tw-prose-hr: var(--color-neutral-300);
    --tw-prose-th-borders: var(--color-neutral-300);
    --tw-prose-td-borders: var(--color-neutral-200);
}
.dark .prose {
    --tw-prose-body: var(--color-neutral-300);
    --tw-prose-headings: var(--color-neutral-100);
    --tw-prose-links: var(--color-primary-400);
    --tw-prose-bold: var(--color-neutral-100);
    --tw-prose-code: var(--color-neutral-100);
    --tw-prose-quotes: var(--color-neutral-300);
    --tw-prose-quote-borders: var(--color-primary-400);
    --tw-prose-hr: var(--color-neutral-700);
    --tw-prose-th-borders: var(--color-neutral-700);
    --tw-prose-td-borders: var(--color-neutral-800);
}
.prose :is(h1, h2, h3, h4) {
    font-family: var(--font-serif);
}
.prose a {
    text-decoration: none;
}
.prose a:hover {
    text-decoration: underline;
}
.prose pre {
    @apply bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg;
}
.prose img {
    @apply rounded-lg shadow-card;
}
```

### Step E — Fonts + remove Google Fonts from `src/layouts/BaseLayout.astro`

1. At the **top of the frontmatter** (after the existing imports, around line 6), add:

```js
import '@fontsource-variable/inter';
import '@fontsource-variable/fraunces';
```

2. **Delete** these lines from `<head>` (lines 29–34):

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
    href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
    rel="stylesheet"
/>
```

(Leave the `<meta name="generator">` and everything else intact. The body-background change is a separate task — 1.1.)

### Step F — Fix the font var in `src/components/Search.astro`

Find (line 54):

```css
--pagefind-ui-font: 'Plus Jakarta Sans', sans-serif;
```

Replace with:

```css
--pagefind-ui-font: 'Inter Variable', system-ui, sans-serif;
```

(The hardcoded Pagefind color hex values are updated in Task 1.6 — leave them for now.)

### Test (Phase 0 gate — MUST pass before any other phase)

```bash
npm run build
```

- Open http://localhost:4321 — the site should render with **serif headings**, a **warm off-white** background feel, and **saffron/terracotta** accents (links, buttons) instead of bright orange, and **no teal**.
- No build/console errors about Tailwind, `@theme`, or missing fonts.
- Toggle dark mode (button top-right) — surfaces should be **warm charcoal**, not teal-black.
- Then confirm a production build:

```bash
npm run build
```

Must complete with no errors. **If the build fails, fix it before proceeding.** Common v4 gotchas: `@plugin` path must be quoted; `@custom-variant` must appear before use; ensure no leftover `@tailwind base/components/utilities` directives remain.

---

# PHASE 1 — Global chrome _(all parallel-safe with each other and with Phase 2)_

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

**Test:** `npm run build` → homepage and `/apps` have a clean near-white (light) / near-black warm (dark) background with no orange tint. No horizontal scrollbar.

---

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

## Task 1.3 — Footer: fix bracket brand + neutral surface 🟢

**File:** `src/components/Footer.astro`

**Find** (~line 28):

```html
<footer class="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800"></footer>
```

**Replace with:**

```html
<footer
    class="bg-neutral-100 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800"
></footer>
```

**Find** (~line 88):

```html
© {currentYear} [ Awesome ] Bharat. All rights reserved.
```

**Replace with:**

```html
© {currentYear} AwesomeBharat. All rights reserved.
```

**Test:** `npm run build` → footer renders (it is already wired into `BaseLayout`), neutral background, copyright reads "AwesomeBharat" with no brackets.

---

## Task 1.4 — Sidebar + SidebarNav: neutral surface, refined active state, fix route 🟡

**Files:** `src/components/Sidebar.astro`, `src/components/SidebarNav.astro`

### 1.4a — `src/components/Sidebar.astro`

**Find** (~line 13):

```
'bg-primary-50 dark:bg-secondary-800',
```

**Replace with:**

```
'bg-neutral-50 dark:bg-neutral-900',
```

### 1.4b — `src/components/SidebarNav.astro`

This file has the active-state highlight repeated twice (Home link ~line 53, and collection links ~line 80). In **both** places:

**Find (each occurrence):**

```
                ? 'bg-primary-300 dark:bg-primary-700/30 text-primary-800 dark:text-primary-300'
```

**Replace with:**

```
                ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 font-semibold'
```

(Subtle accent wash instead of a saturated orange block.)

**Route fix:** In the `collections` array (~lines 24–29), the "Persons" entry uses `href: '/persons'`, but the homepage links people to `/people`. Standardize on `/people` everywhere. **Find:**

```js
    {
        name: 'Persons',
        href: '/persons',
        icon: 'persons',
        count: publishedPersons.length,
    },
```

**Replace with:**

```js
    {
        name: 'People',
        href: '/people',
        icon: 'persons',
        count: publishedPersons.length,
    },
```

> ⚠️ **Prerequisite check:** confirm a `/people` route exists (look for `src/pages/people/`). If only `src/pages/persons/` exists and `/people` 404s, do the **opposite** instead — keep `/persons` here and change the homepage links in `src/pages/index.astro` (Task 3.1) from `/people/...` → `/persons/...` and the "View all" `href="/people"` → `href="/persons"`. Pick whichever directory actually exists and make the other side match. Do not create new routes (out of scope). If unsure, leave `/persons` and fix the homepage side.

**Test:** `npm run build` (desktop width ≥1024px) → left sidebar is warm neutral; active page has a soft saffron highlight (not a solid block); clicking "Apps"/"People"/"Companies" navigates without 404.

---

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

## Task 1.6 — Search: swap hardcoded Pagefind hex for token values 🟢

**File:** `src/components/Search.astro`

**Find** (~lines 29–43):

```css
:root {
    --pagefind-ui-primary: #ea580c;
    --pagefind-ui-text: #111827;
    --pagefind-ui-background: #ffffff;
    --pagefind-ui-border: #e5e7eb;
    --pagefind-ui-tag: #f3f4f6;
}

.dark {
    --pagefind-ui-primary: #fb923c;
    --pagefind-ui-text: #f9fafb;
    --pagefind-ui-background: #111827;
    --pagefind-ui-border: #374151;
    --pagefind-ui-tag: #1f2937;
}
```

**Replace with:**

```css
:root {
    --pagefind-ui-primary: #b8541f;
    --pagefind-ui-text: #1c1917;
    --pagefind-ui-background: #ffffff;
    --pagefind-ui-border: #e7e5e4;
    --pagefind-ui-tag: #f5f5f4;
}

.dark {
    --pagefind-ui-primary: #e08445;
    --pagefind-ui-text: #fafaf9;
    --pagefind-ui-background: #1c1917;
    --pagefind-ui-border: #292524;
    --pagefind-ui-tag: #292524;
}
```

(These hex values equal `primary-600`/`neutral-*` tokens; Pagefind's shadow-DOM can't read Tailwind classes, so hex is required here.)

**Test:** `npm run build && npm run preview` (search only indexes after a build). Open the site, use the search box → results dropdown uses warm neutral surfaces and saffron accent in both themes.

---

# PHASE 2 — Core components _(parallel-safe with each other and Phase 1)_

## Task 2.1 — ContentCard: give the carousel card a real, rounded card affordance 🟡

**File:** `src/components/ContentCard.astro` — **biggest single visual win.**

Replace the markup block (everything from `<a` to the closing `</a>`, lines 19–42) with:

```astro
<a
    href={href}
    class={`group flex-shrink-0 w-[140px] sm:w-[160px] rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-3 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover ${extraClass}`}
>
    <div class="overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800">
        <Image
            class="aspect-square w-full object-contain transition-transform duration-300 group-hover:scale-105"
            src={resolvedImage}
            alt={title}
            format="webp"
            widths={[120, 140, 160, 180]}
            sizes="(min-width:640px) 160px, 140px"
        />
    </div>

    <div class="mt-3 text-left">
        <h3
            class="text-sm font-semibold leading-snug line-clamp-2 text-neutral-900 dark:text-neutral-100"
        >
            {title}
        </h3>
        {
            tags?.[0] && (
                <p class="mt-1 text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1">
                    {tags[0]}
                </p>
            )
        }
    </div>
</a>
```

Key changes: wider card (140–160px), rounded container + border + `shadow-card`, hover lift + `shadow-card-hover`, **rounded masked icon** on a subtle tile, `object-contain` (was `object-cover`, which cropped logos). The `Props` interface and frontmatter are unchanged.

> **Coordination note:** the homepage scroll rows (Task 3.1) reference these cards. The wider card still works in the existing `flex gap-5 overflow-x-auto snap-x` rows — no change needed there beyond Task 3.1's own edits. If doing 2.1 before 3.1, the rows simply show larger cards.

**Test:** `npm run build` → homepage carousels show rounded, bordered cards with soft shadows that lift on hover; logos are fully visible (not cropped). Both themes look clean.

---

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

## Task 2.4 — RelatedItem: remove orange glow + weird hover-shrink; fix title field 🔵

**File:** `src/components/RelatedItem.astro`

**Find** the `<a>` (~line 20):

```
    class="w-24 h-30 group block m-2 p-3 overflow-hidden rounded-lg hover:scale-95 shadow-xl shadow-primary-200 dark:shadow-primary-800/50 hover:shadow-primary-400/50 dark:hover:shadow-primary-900/50 transition-all duration-200"
```

**Replace with:**

```
    class="group block w-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-3 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover"
```

**Fix the title field.** For `persons`/`companies` the data field is `name`, not `title`, so `item.data.title` is `undefined` for them. **Find** (~lines 27, 34):

```
                alt={item.data.title}
```

```
        {item.data.title}
```

Replace both `item.data.title` with:

```
{('title' in item.data ? item.data.title : item.data.name)}
```

For the `alt`, write `alt={'title' in item.data ? item.data.title : item.data.name}`.

**Find** the `<h4>` (~lines 34–37) and remove the duplicated `line-clamp-2`:

```html
<h4
    class="text-xs font-small text-gray-900 dark:text-gray-100 line-clamp-2 transition-colors line-clamp-2"
></h4>
```

**Replace with:**

```html
<h4 class="mt-2 text-xs font-medium text-neutral-900 dark:text-neutral-100 line-clamp-2"></h4>
```

**Test:** `npm run build` → open an app detail page (`/apps/mindful`); the "More by …" tiles in the right sidebar are neutral rounded cards that lift on hover (no orange glow, no shrink), and their titles render.

---

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

# PHASE 3 — Pages _(do after Phases 1 & 2; 3.1 and 3.2 are parallel-safe)_

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

### 3.1b — Extract a reusable carousel (removes 3× duplicated markup)

Create a new file `src/components/CardRow.astro`:

```astro
---
export interface Props {
    title: string;
    viewAllHref: string;
    id: string;
}
const { title, viewAllHref, id } = Astro.props;
---

<section class="space-y-4">
    <div class="flex items-center justify-between">
        <h2 class="font-serif text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
            {title}
        </h2>
        <a
            href={viewAllHref}
            class="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
        >
            View all →
        </a>
    </div>

    <div class="relative">
        <button
            aria-label="Scroll left"
            class="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-700 bg-white/90 dark:bg-neutral-900/90 text-neutral-700 dark:text-neutral-200 shadow-card backdrop-blur hover:bg-white dark:hover:bg-neutral-800 scroll-left"
            data-scroll-container={id}
        >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"></path>
            </svg>
        </button>

        <div
            id={id}
            class="flex gap-4 overflow-x-auto scroll-smooth pb-2 snap-x snap-mandatory px-1 md:px-12 scrollbar-hide"
        >
            <slot />
        </div>

        <button
            aria-label="Scroll right"
            class="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-700 bg-white/90 dark:bg-neutral-900/90 text-neutral-700 dark:text-neutral-200 shadow-card backdrop-blur hover:bg-white dark:hover:bg-neutral-800 scroll-right"
            data-scroll-container={id}
        >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"></path>
            </svg>
        </button>
    </div>
</section>
```

(Icon-button arrows replace the `‹`/`›` glyphs; the `.scroll-left/.scroll-right` + `data-scroll-container` contract matches the existing `<script>` at the bottom of `index.astro`, so it keeps working.)

### 3.1c — Use `CardRow` in `index.astro`

Add to the frontmatter imports (top of file, after the `ContentCard` import ~line 8):

```js
import CardRow from '@/components/CardRow.astro';
```

Then replace the **three** `<section class="space-y-4">…</section>` carousel blocks (Latest Apps lines ~127–188, Featured People ~191–246, Featured Companies ~249–304) with these three, keeping the existing `.map(...)` bodies:

```astro
<CardRow title="Latest Apps" viewAllHref="/apps" id="latest-apps">
    {
        latestApps.map((app) => (
            <ContentCard
                title={app.data.title}
                href={`/apps/${app.slug}`}
                image={app.data.logo}
                slug={app.slug}
                tags={[
                    nonDraftPersons.find(
                        (p: CollectionEntry<'persons'>) => p.slug === app.data.authors?.[0]?.slug
                    )?.data.name ||
                        nonDraftCompanies.find(
                            (c: CollectionEntry<'companies'>) =>
                                c.slug === app.data.authors?.[0]?.slug
                        )?.data.name ||
                        'Unknown',
                ]}
                class="snap-start"
            />
        ))
    }
</CardRow>

<CardRow title="Featured People" viewAllHref="/people" id="featured-people">
    {
        featuredPersons.map((person) => (
            <ContentCard
                title={person.data.name}
                href={`/people/${person.slug}`}
                image={person.data.avatar}
                slug={person.slug}
                tags={person.data.tags}
                class="snap-start"
            />
        ))
    }
</CardRow>

<CardRow title="Featured Companies" viewAllHref="/companies" id="featured-companies">
    {
        featuredCompanies.map((company) => (
            <ContentCard
                title={company.data.name}
                href={`/companies/${company.slug}`}
                image={company.data.logo}
                slug={company.slug}
                tags={company.data.tags}
                class="snap-start"
            />
        ))
    }
</CardRow>
```

> If Task 1.4 kept `/persons`, change the two `/people` references here (`viewAllHref` and `href={`/people/...`}`) to `/persons`.

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

### 3.2e — Replace the 4 status pills with a restrained chip system

**Find** the entire badges row (~lines 374–416, from `<!-- Badges row ...` through its closing `</div>` before `</div>` that closes the header card) and **replace** with:

```html
                    <!-- Status chips -->
                    <div class="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                        <div class="flex flex-wrap gap-2">
                            <span class="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 dark:border-neutral-700 px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300">
                                <span class={`h-1.5 w-1.5 rounded-full ${paid ? 'bg-neutral-400' : 'bg-emerald-500'}`} />
                                {paid ? 'Paid' : 'Free'}
                            </span>
                            <span class="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 dark:border-neutral-700 px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300">
                                <span class={`h-1.5 w-1.5 rounded-full ${ads ? 'bg-neutral-400' : 'bg-emerald-500'}`} />
                                {ads ? 'Has Ads' : 'No Ads'}
                            </span>
                            <span class="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 dark:border-neutral-700 px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300">
                                <span class={`h-1.5 w-1.5 rounded-full ${source === 'open-source' ? 'bg-emerald-500' : 'bg-neutral-400'}`} />
                                {source === 'open-source' ? 'Open Source' : 'Closed Source'}
                            </span>
                            <span class="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 dark:border-neutral-700 px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300">
                                <span class={`h-1.5 w-1.5 rounded-full ${offline ? 'bg-emerald-500' : 'bg-neutral-400'}`} />
                                {offline ? 'Works Offline' : 'Needs Internet'}
                            </span>
                        </div>
                    </div>
```

(Neutral outlined chips with a small status dot — replaces the red/green Bootstrap pills. A single accent color `emerald` dot signals "good"; everything else neutral.)

### 3.2f — Tokenize the tag chips + category chips + CTA button (find/replace within the header block)

- Category chip (~line 162): replace `bg-gray-100 dark:bg-secondary-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-secondary-700` → `bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700`.
- Tag chip (~line 178): already uses `primary-*` (now saffron) — leave as-is, it's fine.
- Author link (~line 147): `text-primary-600 dark:text-primary-400` — fine, leave.
- Primary CTA (~line 204): replace `bg-primary-600 hover:bg-primary-700 text-white dark:bg-primary-500 dark:hover:bg-primary-400 shadow-md hover:shadow-lg` → `bg-primary-600 hover:bg-primary-700 text-white dark:bg-primary-500 dark:hover:bg-primary-400 shadow-card hover:shadow-card-hover`.

### 3.2g — De-duplicate the store badges

The store badges render **twice** (once as the inline dropdown, and once via `<StoreBadges>` at line 458). Keep both — they serve different purposes (dropdown = quick action; `<StoreBadges>` block = full badges below content). **No change needed** unless you see a literal duplicate `<StoreBadges>` — there is only one, so leave it. (This sub-task exists to confirm; the CLAUDE.md "duplicated" note refers to the dropdown+block pattern, which is intentional here.)

**Test:** `npm run build` → open `/apps/mindful`: header card has a clean neutral border + soft shadow (no orange glow), logo sits on a rounded tile, status chips are neutral outlined with a small dot, page scrolls naturally as one column (no trapped inner scroll), right sidebar sticks. CTA dropdown still opens/closes. Check both themes.

---

## Task 3.3 — Apps pages: confirm alignment (mostly inherited) 🟢

**Files:** `src/pages/apps/index.astro`, `src/pages/apps/[slug].astro`

These consume the now-refactored `CollectionHero`, `ContentCardFull`, and `ContentLayout`, so they inherit the new look. Only change needed: in `src/pages/apps/index.astro`, the grid wrapper (~lines 31–33) is fine. Verify no `primary-`/`secondary-` literals remain that imply the old palette — none do here.

**Test:** `npm run build` → `/apps` listing shows the new hero + cards; clicking an app shows the new detail layout. No errors.

---

# PHASE 4 — Polish 🟡

## Task 4.1 — Motion, accessibility, and token audit 🟡

**Multiple files.**

1. **Entrance motion:** In `src/pages/apps/index.astro`, add `animate-fade-in` to the grid container class. In `src/pages/index.astro`, add `animate-fade-in` to each `CardRow` usage via a wrapper or the section — keep it subtle (respect users who prefer reduced motion by adding to `global.css`):

```css
@media (prefers-reduced-motion: reduce) {
    .animate-fade-in {
        animation: none;
    }
}
```

(Append this to the end of `src/styles/global.css`.)

2. **Accessibility:**
    - Confirm all icon-only buttons have `aria-label` (carousel arrows do; theme toggle does).
    - Verify text contrast in both themes on the hero, chips, and muted text (`neutral-500` on `neutral-50` passes AA for normal text; `neutral-400` on `neutral-950` passes for dark).

3. **Token audit:** Search the codebase for leftover values that should now be tokens:

```bash
grep -rn "secondary-" src/ || true
grep -rniE "#(ea580c|f97316|fb923c|14b8a6|0d9488|2dd4bf)" src/ || true
grep -rn "font-display" src/ || true
grep -rn "shadow-primary" src/ || true
```

- `secondary-*` classes are fine (they map to warm neutral now) but prefer migrating high-traffic ones to `neutral-*` for clarity — optional.
- Any remaining old orange/teal hex or `shadow-primary-*` outside `global.css`/`Search.astro` should be replaced with tokens.
- `font-display` should no longer appear (replaced by `font-serif` in Task 2.3).

**Test (full regression):**

```bash
npm run build
```

Must pass. Then `npm run preview` and click through: homepage (all rows + arrows + search), `/apps`, an app detail page, theme toggle + reload persistence, mobile drawer nav. Confirm no orange washes, no bracket brand, no teal, serif headings throughout, cards rounded with neutral shadows, and no console errors.

---

## Suggested execution order & tiers at a glance

| #   | Task                            | Tier      | Depends on    |
| --- | ------------------------------- | --------- | ------------- |
| 0.1 | Tailwind v4 + tokens + fonts    | 🔴 Opus   | —             |
| 1.1 | BaseLayout bg + main container  | 🔵 Haiku  | 0.1           |
| 1.2 | Header wordmark                 | 🔵 Haiku  | 0.1           |
| 1.3 | Footer brand + surface          | 🟢 Nano   | 0.1           |
| 1.4 | Sidebar/Nav + route fix         | 🟡 Sonnet | 0.1           |
| 1.5 | ThemeToggle icons               | 🔵 Haiku  | 0.1           |
| 1.6 | Search token hex                | 🟢 Nano   | 0.1           |
| 2.1 | ContentCard redesign            | 🟡 Sonnet | 0.1           |
| 2.2 | ContentCardFull                 | 🔵 Haiku  | 0.1           |
| 2.3 | CollectionHero                  | 🔵 Haiku  | 0.1           |
| 2.4 | RelatedItem                     | 🔵 Haiku  | 0.1           |
| 2.5 | Screenshots/YouTube/StoreBadges | 🟢 Nano   | 0.1           |
| 3.1 | Homepage + CardRow              | 🟡 Sonnet | 1.x, 2.1      |
| 3.2 | ContentLayout                   | 🟡 Sonnet | 1.x, 2.4, 2.5 |
| 3.3 | Apps pages check                | 🟢 Nano   | 2.2, 2.3, 3.2 |
| 4.1 | Polish + audit                  | 🟡 Sonnet | all           |

Phases 1 and 2 are fully parallel-safe (disjoint files). Phase 3 waits for 1 & 2. Phase 4 is last.
