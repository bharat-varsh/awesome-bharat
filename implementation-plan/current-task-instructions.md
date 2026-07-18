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
