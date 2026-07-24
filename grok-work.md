# shadcn Migration Handoff — Awesome Bharat

> **Audience:** The next LLM / developer continuing this work.  
> **Do not re-audit the whole codebase.** This file is the source of truth for what is done, what is left, how to implement it, and which pitfalls to avoid.  
> **Scope:** Replacing custom UI with [shadcn/ui](https://ui.shadcn.com) primitives. Skip `only-references/` (and any `only-reference*` folders).

---

## 0. Project context (read once)

| Item | Value |
|------|--------|
| Stack | Astro 5 + React 19 (`@astrojs/react`) + Tailwind CSS v4 + TypeScript |
| Site | Curated discovery portal; static build to `./docs` (GitHub Pages) |
| Path alias | `@/*` → `./src/*` (see `tsconfig.json`) |
| shadcn config | `components.json` — style `radix-nova`, `rsc: false`, `tsx: true`, icons `lucide` |
| CSS entry | `src/styles/global.css` (imports Tailwind, `tw-animate-css`, `shadcn/tailwind.css`) |
| cn helper | `src/lib/utils.ts` → `cn(...inputs)` via `clsx` + `tailwind-merge` |
| Install new shadcn comps | From repo root: `npx shadcn@latest add <name>` |

### Already installed shadcn UI (`src/components/ui/`)

| File | Component(s) |
|------|----------------|
| `badge.tsx` | `Badge`, `badgeVariants` |
| `button.tsx` | `Button`, `buttonVariants` |
| `card.tsx` | `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardAction`, `CardContent`, `CardFooter` |
| `input.tsx` | `Input` |
| `label.tsx` | `Label` |
| `separator.tsx` | `Separator` |
| `sheet.tsx` | Sheet (used by sidebar mobile) |
| `sidebar.tsx` | Full sidebar kit |
| `skeleton.tsx` | `Skeleton` |
| `tooltip.tsx` | Tooltip kit |

### Not installed yet (needed for later phases)

| Component | Command | Needed for |
|-----------|---------|------------|
| Dropdown Menu | `npx shadcn@latest add dropdown-menu` | Phase 3 — primary CTA |
| Carousel | `npx shadcn@latest add carousel` | Optional — horizontal rows |
| Avatar | `npx shadcn@latest add avatar` | Optional — logos/fallbacks |
| Scroll Area | `npx shadcn@latest add scroll-area` | Optional — right sidebar |

### Critical Astro + shadcn rules (do not ignore)

1. **`asChild` / Radix `Slot` often breaks when the child is plain Astro HTML** (e.g. `<a>` inside `<Badge asChild>`). Prefer:
   - `badgeVariants()` / `buttonVariants()` on native `<a>` / `<button>`, **or**
   - pure React components where the child is a real React element.
2. **Static presentational UI** (Badge, Separator, Card): import React components into `.astro` **without** `client:*` (SSR, no hydration).
3. **Interactive UI** (ThemeToggle, DropdownMenu, Sidebar): use `client:load` or `client:idle`.
4. **Keep Astro `<Image>`** from `astro:assets` for optimized images when the wrapper stays Astro. If you convert a card to React TSX, pass resolved image **URL strings** (`resolvedImage.src` or similar) into `<img>`, or keep the outer shell Astro and only swap class structure.
5. **Brand classes:** prefer semantic tokens (`bg-primary`, `text-muted-foreground`, `border-border`, `bg-card`) when touching a component. Numbered ramps (`primary-600`, `neutral-800`) still exist in `global.css` for legacy.
6. **`.ab-card` custom styles** live in `src/styles/global.css` (`@layer components`, ~lines 359–415). They provide hover wash + featured border. **Do not delete without migrating styles.** Phase 2 should compose `ab-card` with shadcn `Card` via `className`, or port styles into Card variants.

### Verification commands

```bash
npx astro check
npx eslint <changed-files>
npx astro build --outDir ./docs
# Full pipeline (format + lint + check + build):
npm run build
```

### Layout shell (already shadcn — do not reimplement)

| File | Role |
|------|------|
| `src/components/AppSidebar.tsx` | Left nav using `Sidebar`, `SidebarMenu*`, lucide icons, counts via `SidebarMenuBadge` |
| `src/components/AppSidebarLayout.tsx` | `SidebarProvider`, sticky header, `SidebarTrigger`, vertical `Separator`, `TooltipProvider`, title link, `headerEnd` slot |
| `src/layouts/BaseLayout.astro` | SEO, theme FOUC script, particles, renders `AppSidebarLayout` with nav data + Search + ThemeToggle |
| `src/hooks/use-mobile.ts` | Used by sidebar |

`BaseLayout` builds `navItems` from content collections and passes `logoSrc`, `currentPath`, `items` into `AppSidebarLayout`.

---

## Status dashboard

| Phase | Status | Summary |
|-------|--------|---------|
| **0** Cleanup dead nav | **DONE** | Deleted unused Header/Left/Mobile/Navigation stack; RightSidebar inlined |
| **1** Primitives | **DONE** | Separator, ThemeToggle→Button, Badge chips, scroll buttonVariants |
| **2** Cards | **TODO** | Adopt Card family; preserve `.ab-card` / featured |
| **3** CTA Dropdown | **TODO** | Install dropdown-menu; extract PrimaryCta React component |
| **Optional** | **TODO** | Carousel, Avatar, ScrollArea, Search Skeleton, Footer polish |

---

# Phase 0 — Cleanup dead components

## Status: COMPLETE

## Goal

Remove custom nav/header components already replaced by the AppSidebar stack so future work does not edit dead code.

## What was done

### Deleted files (no longer in repo)

| Deleted file | Why it was safe |
|--------------|-----------------|
| `src/components/Header.astro` | Replaced by header inside `AppSidebarLayout.tsx` |
| `src/components/LeftSidebar.astro` | Replaced by `AppSidebar.tsx` |
| `src/components/SidebarNav.astro` | Replaced by `SidebarMenu` items in `AppSidebar.tsx` |
| `src/components/MobileNav.astro` | Replaced by sidebar mobile Sheet + `SidebarTrigger` |
| `src/components/Navigation.astro` | Orphaned horizontal nav; unused |
| `src/components/Sidebar.astro` | Shared left/right aside; left path gone; right inlined into RightSidebar |

### Modified instead of deleted

**`src/components/RightSidebar.astro`** still used `Sidebar.astro` with `position="right"`. Before deleting `Sidebar.astro`, its right-position classes were inlined into `RightSidebar.astro`.

Current shape (do not break this without a layout redesign):

- Sticky right column on `lg+`: `lg:w-64`, `lg:sticky top-16`, `lg:h-[calc(100vh-4rem)]`, border-l
- On small screens: full width, top border
- Slot for related content (`ContentLayout` puts YouMightLike etc. here)

### What Phase 0 did NOT touch

- `AppSidebar` / `AppSidebarLayout` / `BaseLayout` shell (already correct)
- `RightSidebar` consumers (`ContentLayout.astro`)

## Left for Phase 0

**Nothing.** If someone re-adds old Header/LeftSidebar files, delete them again.

---

# Phase 1 — Zero-risk primitives

## Status: COMPLETE

## Goal

Replace simple custom UI with installed shadcn `Separator`, `Button`/`buttonVariants`, and `Badge`/`badgeVariants` without redesigning layout.

## What was done (file-by-file)

### 1.1 Divider → Separator

| Action | Detail |
|--------|--------|
| Deleted | `src/components/Divider.astro` (was a single `border-t` div) |
| Updated | `src/components/Engage.astro` — import `Separator` from `@/components/ui/separator`; two usages: `<Separator className="my-4" />` before/after engage sections |
| Updated | `src/components/YouTubeEmbed.astro` — same Separator after embed blocks |

### 1.2 ThemeToggle → Button + lucide

| Action | Detail |
|--------|--------|
| Created | `src/components/ThemeToggle.tsx` |
| Deleted | `src/components/ThemeToggle.astro` |
| Wired | `src/layouts/BaseLayout.astro`: `import { ThemeToggle } from '@/components/ThemeToggle'` and `<ThemeToggle client:load />` inside `headerEnd` slot |

**Implementation of `ThemeToggle.tsx`:**

- `Button` `variant="ghost"` `size="icon"`
- `aria-label="Toggle theme"`
- `onClick` toggles `document.documentElement.classList` `'dark'`
- `Sun` icon: `className="hidden dark:block"`
- `Moon` icon: `className="block dark:hidden"`

**Do not remove** the FOUC theme script in `BaseLayout.astro` `<head>` (reads localStorage / prefers-color-scheme, MutationObserver writes theme). ThemeToggle only flips the class; persistence is already handled by that observer.

**Optional later:** wrap ThemeToggle with Tooltip (“Toggle theme”) — `TooltipProvider` already wraps the layout in `AppSidebarLayout`.

### 1.3 Chips / pills → Badge

#### `src/components/ContentCardFull.astro`

- Imports `Badge` from `@/components/ui/badge`
- Featured flag → `<Badge className="flex-shrink-0">Featured</Badge>`
- Domain → `<Badge variant="secondary">…</Badge>`
- Category → `<Badge variant="outline">…</Badge>`
- Outer link still uses `ab-card` class (Phase 2)

#### `src/components/CollectionHero.astro`

- Imports `Badge`, `badgeVariants`, `cn`
- Count label → `<Badge className="h-auto w-fit flex-none px-4 py-2 text-sm font-semibold">{countLabel}</Badge>`
- Pill **links** → native `<a class={cn(badgeVariants({ variant: 'outline' }), 'h-auto px-3 py-1.5 text-sm font-semibold')}>` (no asChild)
- Pill **spans** → `<Badge variant="outline" …>`

#### `src/layouts/ContentLayout.astro`

- Imports `Badge`, `badgeVariants`, `cn`
- Domain / category / tag **links** use `badgeVariants` on `<a>` (secondary / outline / secondary)
- Status chips (Paid/Free, Ads, Open/Closed Source, Offline/Internet) use `<Badge variant="outline" className="h-auto gap-1.5 px-3 py-1">` with colored `span` dots inside
- Status section border uses `border-border`

### 1.4 Scroll controls → buttonVariants

Pattern used everywhere: keep **native** `<button type="button">` so existing vanilla JS `getElementById` / class queries still work; style with `buttonVariants` + `cn`.

| File | Buttons | Variant | Notes |
|------|---------|---------|-------|
| `CardRow.astro` | `.scroll-left`, `.scroll-right` | `outline` + `size: icon` | Keep classes `scroll-left` / `scroll-right` and `data-scroll-container={id}` — homepage script in `src/pages/index.astro` binds them |
| `Screenshots.astro` | `#scroll-left`, `#scroll-right` | `secondary` + `icon` | Keep IDs; script at bottom of file |
| `YouTubeEmbed.astro` | `#shorts-scroll-left/right`, `#long-form-scroll-left/right` | `secondary` + `icon` | Keep IDs; script at bottom |

Chevron icons remain inline SVG (no lucide required for Astro-only buttons).

### 1.5 Phase 1 verification (already passed)

- `npx astro check` → 0 errors
- ESLint on touched files → clean
- `npx astro build --outDir ./docs` → success

## Left for Phase 1

**Nothing required.** Optional polish only:

- Tooltip on ThemeToggle
- Replace remaining hard-coded `primary-600` / `gray-*` on non-migrated bits when you touch those files

---

# Phase 2 — Card family

## Status: TODO (not started)

## Goal

Replace custom card-like surfaces with shadcn `Card` (+ subcomponents) while **preserving** discovery-card hover/featured look from `.ab-card`.

## Install

None — `src/components/ui/card.tsx` is already installed.

Exports to use:

```ts
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
```

`Card` accepts `size?: "default" | "sm"` and `className`.

## Design constraint (mandatory)

`.ab-card` and `.ab-card--featured` in `src/styles/global.css` provide:

- Surface background, subtle border, radius, shadow
- Hover background / border / shadow
- Gradient wash via `::before`
- Featured accent ring (saffron)

**Recommended approach A (lowest risk):**  
Compose classes: `className={cn("ab-card", featured && "ab-card--featured", …)}` on the outer element. If using React `Card`, pass `className="ab-card …"` and override/remove conflicting default Card ring/bg if double borders appear.

**Approach B:** Port `.ab-card` rules into Card `className` defaults or a local `DiscoveryCard` wrapper component that wraps `Card` and applies ab-card styles. Then gradually drop raw `ab-card` from pages.

**Do not** strip featured styling without a product decision.

## Files to update (exact inventory)

### 2.1 `src/components/ContentCard.astro` — compact carousel card

**Current:**

- Outer: `<a href={href} class={`ab-card group block w-[140px] …`}>`
- Image box + `astro:assets` `Image`
- Title `h3`, optional first tag as subtitle

**Target structure (conceptual):**

```astro
---
import { Card, CardContent, CardTitle } from '@/components/ui/card';
// keep Image + resolveLogo
---
<a href={href} class={cn('ab-card group block w-[140px] …', extraClass)}>
  <!-- Option: use Card as visual only without nested interactive issues -->
  <Card className="ab-card border-0 shadow-none ring-0 bg-transparent …">
    …
  </Card>
</a>
```

**Better pattern for link cards:** either:

1. Keep outer `<a class="ab-card">` and use Card only for inner layout tokens, **or**
2. Convert to React `ContentCard.tsx` where `Card` uses `className` and wraps content; whole card is still one `<a>`.

Prefer keeping Astro + `Image` for optimization:

```astro
<a href={href} class={`ab-card group … ${extraClass}`}>
  <div class="…image…"><Image … /></div>
  <div class="mt-3">
    <h3 class="…">{title}</h3>
    {tags?.[0] && <p class="text-muted-foreground text-xs …">{tags[0]}</p>}
  </div>
</a>
```

Phase 2 minimum: if visual Card API is desired, wrap image+text in structure matching CardContent, apply `Card`-like padding via shared classes, **or** SSR-render React Card with image URL string.

**Consumers:** `src/pages/index.astro` (CardRow slots).

### 2.2 `src/components/ContentCardFull.astro` — listing grid card

**Current:**

- Outer `<a class={`ab-card … ${featured ? 'ab-card--featured' : ''}`}>`
- Horizontal flex: logo Image, title, Badge (already Phase 1), description, CTA text with chevron

**Target:**

- Outer still link + `ab-card` / `ab-card--featured`
- Map structure:
  - Logo → left column (or Card header media)
  - Title → `CardTitle` styles or component
  - Description → `CardDescription` / `text-muted-foreground`
  - Badges already done
  - CTA line → `text-primary` linkish text (or `buttonVariants({ variant: 'link' })` classes)

**Consumers:** `src/pages/apps/index.astro`, category/domain/tag listing pages that import ContentCardFull.

### 2.3 `src/components/RelatedItem.astro` — related sidebar item

**Current:** `<a class="ab-card group block w-full p-3">` + logo + title.

**Target:** `ab-card` + compact Card `size="sm"` layout tokens; keep `resolveLogo` + Image.

**Consumer:** `YouMightLike.astro` → `ContentLayout` right sidebar slot.

### 2.4 `src/components/CollectionHero.astro` — listing page hero

**Current:** Custom `<section class="overflow-hidden rounded-2xl border … shadow-card">` with eyebrow, icon, h1, description, count Badge (done), pills (done).

**Target:**

- Outer → `Card` with similar padding, **or** keep section and only align tokens (`bg-card`, `border-border`, `shadow-card`)
- Title/description map to `CardHeader` / `CardTitle` / `CardDescription`
- Count Badge → `CardAction` position if using CardHeader grid

**Consumers:** apps index, domains index, tags/categories pages.

### 2.5 `src/layouts/ContentLayout.astro` — detail header card

**Location:** `<header class="mb-12">` → first child `div` with:

```
rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-card bg-white dark:bg-neutral-900 p-5 sm:p-7
```

**Target:** Replace that div’s classes with `Card` / `CardContent` (SSR React) or equivalent token classes:

- `bg-card text-card-foreground ring-1 ring-foreground/10` etc. from Card
- Keep inner grid: logo | title+chips | primary CTA
- Primary CTA is **Phase 3** (leave dropdown as-is until Phase 3)

### 2.6 `src/components/Engage.astro` — action tiles

**Current:** Many `<a class="flex flex-col … rounded-lg border … bg-white dark:bg-gray-800">` tiles for contribute + socials.

**Target (pick one):**

- Each tile: `Card size="sm"` with padding, **or**
- `buttonVariants({ variant: 'outline' })` on the anchor for a lighter look

Separators already Phase 1.

Keep Astro `Image` icons for engage SVGs under `src/assets/images/engage/`.

### 2.7 `src/components/StoreBadges.astro` — store badge shell

**Current:** Outer:

```
mb-6 rounded-2xl border … bg-white dark:bg-neutral-900 shadow-card p-4 sm:p-5
```

Inner store images stay as-is (Play/App Store/F-Droid/GitHub PNGs).

**Target:** Outer wrapper → `Card` / `CardContent` only. Fallback non-image store link is currently a green pill div — convert that fallback to `buttonVariants({ variant: 'default' })` on the `<a>`.

**Do not** replace store badge images with shadcn anything.

### 2.8 Page-level `ab-card` usages (not components)

| File | Pattern |
|------|---------|
| `src/pages/domains/index.astro` | `<a class="ab-card group flex items-center gap-4 p-4">` domain rows |
| `src/pages/index.astro` | Category tiles with `class="ab-card flex items-center …"` |

Apply the same composition rules as ContentCard: keep `ab-card`, optionally align with Card tokens.

### 2.9 Suggested Phase 2 implementation order

1. `StoreBadges.astro` shell (simplest)
2. `CollectionHero.astro` outer surface
3. `ContentLayout` detail header shell
4. `RelatedItem.astro`
5. `ContentCard.astro` + `ContentCardFull.astro`
6. `Engage.astro` tiles
7. Page-level domain/category `ab-card` links

### 2.10 Phase 2 acceptance criteria

- [ ] Visual parity: hover wash + featured border still work on listing cards
- [ ] No nested interactive controls (no `<button>` inside outer `<a>` cards)
- [ ] `astro:assets` Image still used for content logos where possible
- [ ] `npx astro check` + build pass
- [ ] No new client JS for pure cards (SSR only)

---

# Phase 3 — Primary CTA → Dropdown Menu

## Status: TODO (not started)

## Goal

Replace the hand-rolled multi-store CTA dropdown on detail pages with accessible shadcn **Dropdown Menu** + **Button**.

## Install (required first)

```bash
npx shadcn@latest add dropdown-menu
```

Expect new file: `src/components/ui/dropdown-menu.tsx`.

## Where the code lives today

**File:** `src/layouts/ContentLayout.astro`

**Frontmatter helpers already present:**

```ts
import { getCTALinks, getPrimaryCTALabel, getPrimaryCTAUrl } from '../utils/ctaUtils.ts';

const ctaGroups = getCTALinks(collection, { type, source, storeLinks, repositoryLinks, website });
const primaryCTALabel = getPrimaryCTALabel(...);
const primaryCTAUrl = getPrimaryCTAUrl(...);
```

**UI block:** roughly lines **221–390** (Column 3 primary CTA):

- Trigger is an `<a data-cta-dropdown>` with primary colors
- If `ctaGroups` total links > 1: shows chevron-down SVG and a sibling absolute panel `.cta-dropdown` with `hidden` toggled by script
- Panel lists groups with store badge images (Play / App Store / F-Droid / GitHub) reusing imports:
  - `googlePlayBadge`, `appStoreBadge`, `fdroidBadge`, `githubBadge` from `src/assets/images/badges/`
- Detection logic for each link: label/url includes play store, app store, fdroid, github

**Script at bottom of ContentLayout** (~lines 503–528):

```js
// CTA Dropdown functionality
document.addEventListener('DOMContentLoaded', () => {
  // toggles .cta-dropdown hidden on [data-cta-dropdown] click
  // closes on outside click
});
```

**Delete this script** when React dropdown ships.

## Target architecture

### Create `src/components/PrimaryCta.tsx` (name can vary)

Client component (`client:load` from Astro).

**Props (suggested):**

```ts
type CtaLink = { label: string; url: string };
type CtaGroup = { label: string; links: CtaLink[] };

type PrimaryCtaProps = {
  label: string;
  primaryUrl: string;
  groups: CtaGroup[];
  /** Pre-resolved public URLs for store badge images if you pass from Astro */
  badgeImages?: {
    play?: string;
    appStore?: string;
    fdroid?: string;
    github?: string;
  };
};
```

**Behavior:**

1. Count total links across `groups`.
2. **If total ≤ 1:** render single  
   `Button asChild` → `<a href={primaryUrl} target="_blank" rel="noopener noreferrer">`  
   with ExternalLink icon (lucide). No dropdown.
3. **If total > 1:**  
   - `DropdownMenu`  
   - `DropdownMenuTrigger asChild` → `Button` (default variant, larger padding) showing `label` + `ChevronDown`  
   - `DropdownMenuContent` align end  
   - For each group: `DropdownMenuLabel` (group.label) + `DropdownMenuItem asChild` → `<a href={link.url} target="_blank" …>`  
   - Inside item: store badge `<img>` or text label (reuse same isPlayStore / isAppStore / … detection)

**Note:** `Button asChild` works **inside React** with a React `<a>`. That is fine here (unlike Astro asChild).

### Wire from `ContentLayout.astro`

```astro
---
import { PrimaryCta } from '@/components/PrimaryCta';
// resolve badge image .src from ImageMetadata imports if needed
---
{primaryCTALabel && primaryCTAUrl && (
  <PrimaryCta
    client:load
    label={primaryCTALabel}
    primaryUrl={primaryCTAUrl}
    groups={ctaGroups}
    badgeImages={{ play: googlePlayBadge.src, … }}
  />
)}
```

Remove the old markup block and the DOMContentLoaded script.

### Styling notes

- Match previous CTA prominence: primary filled button, `rounded-xl`, comfortable padding (`size="lg"` + custom `className` if needed)
- Menu width ~ `w-64`
- Dark mode: rely on dropdown-menu tokens (popover colors)

### CTA utils — do not rewrite unless broken

`src/utils/ctaUtils.ts` already decides labels/URLs/groups per content type. Phase 3 only changes presentation.

### Phase 3 acceptance criteria

- [ ] Multi-link apps (e.g. Mindful/Neend with several store links) open accessible menu (keyboard Esc/arrows)
- [ ] Single-link case is a direct external link button
- [ ] Outside click / Esc closes menu (built into Radix)
- [ ] Old `data-cta-dropdown` / `.cta-dropdown` / bottom script gone
- [ ] Store badge images still show in menu items where applicable
- [ ] `astro check` + build pass

---

# Optional phase — polish (after 2–3)

## Status: TODO

Do these only if product wants them; not required for “using shadcn.”

### O1. Carousel (Embla)

```bash
npx shadcn@latest add carousel
```

| Replace | File | Keep inside slides |
|---------|------|--------------------|
| Horizontal scroll + custom buttons | `CardRow.astro` | ContentCard slot content |
| Same | `Screenshots.astro` | screenshot imgs + load/error handlers |
| Same | `YouTubeEmbed.astro` | iframes |

Tradeoff: adds dependency; current CSS scroll + buttonVariants is acceptable.

If implementing: convert each to React island or hybrid; migrate click handlers to `CarouselPrevious` / `CarouselNext`. Homepage `index.astro` script that binds `.scroll-left`/`.scroll-right` can be removed for CardRow once Carousel owns controls.

### O2. Avatar

```bash
npx shadcn@latest add avatar
```

Optional for logo boxes in ContentCard / ContentCardFull / RelatedItem / ContentLayout. Prefer Astro Image when possible. Use AvatarFallback initials when image missing.

### O3. Scroll Area

```bash
npx shadcn@latest add scroll-area
```

Optional for right sidebar overflow / long tag rows.  
Also note known layout bug (from project docs): stretch/`items-center` issues on content+sidebar — fix layout separately if still present in `ContentLayout` (`items-start` preferred).

### O4. Search.astro — Skeleton only

**Do not** replace Pagefind with shadcn Input.

`src/components/Search.astro` uses:

- `<pagefind-searchbox>` custom element
- CSS variables for theming
- A pulse placeholder div — can become:

```astro
import { Skeleton } from '@/components/ui/skeleton';
// <Skeleton className="h-10 w-full rounded-lg" />
```

Future “cmdk” Command+Dialog search is a separate project (would need Pagefind JS API).

### O5. Footer polish

`src/components/Footer.astro` (now rendered from BaseLayout):

- Copyright top border → `<Separator />`
- RSS link → `buttonVariants({ variant: 'link' })`
- GitHub icon link → `Button variant="ghost" size="icon"` (React) or buttonVariants on `<a>`

Keep 3-column layout; there is no shadcn Footer primitive.

### O6. ThemeToggle Tooltip

In `ThemeToggle.tsx` or BaseLayout, wrap with Tooltip (provider already in AppSidebarLayout). Confirm nested TooltipProvider is OK (usually fine).

---

# Do not replace (explicit non-goals)

| Item | Reason |
|------|--------|
| `SEO.astro` | Meta tags only |
| Pagefind search core | Third-party Shadow DOM UI |
| Store badge PNG assets | Brand store artwork |
| YouTube iframe content | Domain embeds; only chrome migrated |
| Content MDX bodies | Not UI components |
| `src/scripts/particles.ts` | Atmosphere effect |
| Rewriting content schemas | Out of scope |

---

# Current component tree (after Phase 0–1)

```
src/components/
  AppSidebar.tsx          ← shadcn Sidebar (done)
  AppSidebarLayout.tsx    ← shell (done)
  ThemeToggle.tsx         ← Button (done, Phase 1)
  CardRow.astro           ← buttonVariants scroll (done); Card content still custom
  CollectionHero.astro    ← Badge done; outer shell → Phase 2 Card
  ContentCard.astro       ← Phase 2
  ContentCardFull.astro   ← Badge done; Phase 2 Card
  RelatedItem.astro       ← Phase 2
  Engage.astro            ← Separator done; tiles → Phase 2
  StoreBadges.astro       ← Phase 2 shell
  Screenshots.astro       ← buttonVariants done; optional Carousel
  YouTubeEmbed.astro      ← Separator + buttonVariants done; optional Carousel
  YouMightLike.astro      ← composition only
  RightSidebar.astro      ← layout shell (inlined Phase 0)
  Footer.astro            ← optional polish
  Search.astro            ← Pagefind; optional Skeleton
  SEO.astro               ← keep
  ui/                     ← shadcn primitives
```

Deleted (gone): Header, LeftSidebar, Sidebar, SidebarNav, MobileNav, Navigation, Divider, ThemeToggle.astro.

---

# Recommended next-session checklist

Copy-paste for the next model:

```
1. Read grok-work.md fully (this file). Do not re-scan only-references.
2. Confirm Phase 0–1 files match “What was done” sections.
3. Implement Phase 2 starting with StoreBadges shell → CollectionHero → ContentLayout header → cards.
   - Preserve .ab-card / .ab-card--featured from global.css
   - Prefer SSR React Card or class composition; avoid unnecessary client:load
4. Implement Phase 3:
   - npx shadcn@latest add dropdown-menu
   - Create PrimaryCta.tsx; wire ContentLayout; delete dropdown script
5. Run: npx astro check && npx astro build --outDir ./docs
6. Optionally do O1–O6.
7. Update this file’s Status dashboard when a phase completes.
```

---

# Quick reference: patterns already used in this repo

### buttonVariants on Astro native button (keep IDs/classes for scripts)

```astro
---
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
---
<button
  type="button"
  id="scroll-left"
  class={cn(buttonVariants({ variant: 'secondary', size: 'icon' }), 'absolute … rounded-full')}
  aria-label="Scroll left"
>
  <!-- svg chevron -->
</button>
```

### badgeVariants on native link (avoid asChild from Astro)

```astro
---
import { badgeVariants } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
---
<a href={`/tags/${tag}`} class={cn(badgeVariants({ variant: 'secondary' }))}>#{tag}</a>
```

### Badge as React child content (non-link)

```astro
import { Badge } from '@/components/ui/badge';
---
<Badge variant="outline" className="h-auto gap-1.5 px-3 py-1">Free</Badge>
```

### Separator

```astro
import { Separator } from '@/components/ui/separator';
---
<Separator className="my-4" />
```

### Interactive React island

```astro
import { ThemeToggle } from '@/components/ThemeToggle';
---
<ThemeToggle client:load />
```

---

# History

| When | What |
|------|------|
| 2026-07-24 | Phase 0 + Phase 1 implemented and verified (astro check + build). This handoff file written for Phase 2 / 3 / optional continuation. |
