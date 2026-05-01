# Awesome Bharat — Design System & UI Principles

This document defines the visual identity, component catalog, and layout patterns. AI agents building UI components reference this to ensure consistency.

---

## Table of Contents

1. [Color System](#color-system)
2. [Typography](#typography)
3. [Spacing & Layout](#spacing--layout)
4. [Card Components](#card-components)
5. [Page Layout Patterns](#page-layout-patterns)
6. [Interactive Elements](#interactive-elements)
7. [Dark Mode](#dark-mode)
8. [Image Guidelines](#image-guidelines)
9. [Animation & Motion](#animation--motion)

---

## Color System

### Primary Palette (Orange)

The brand color — used for CTAs, highlights, active states, and celebratory elements.

| Token         | Hex            | Usage                          |
| ------------- | -------------- | ------------------------------ |
| `primary-50`  | Lightest cream | Page background (light mode)   |
| `primary-100` | Light peach    | Card backgrounds, hover states |
| `primary-200` | Soft orange    | Borders, dividers              |
| `primary-300` | Medium orange  | Secondary text accents         |
| `primary-400` | Orange         | Icons, badges                  |
| `primary-500` | Vivid orange   | Primary buttons, links         |
| `primary-600` | Deep orange    | Button hover, active links     |
| `primary-700` | Dark orange    | Headings accent                |
| `primary-800` | Very dark      | High-contrast text on light    |
| `primary-900` | Near black     | Body text alternative          |

### Secondary Palette (Teal)

The supporting color — used for dark mode backgrounds, information elements, and contrast.

| Token           | Hex            | Usage                  |
| --------------- | -------------- | ---------------------- |
| `secondary-50`  | Lightest teal  | Subtle backgrounds     |
| `secondary-100` | Light teal     | Info badges            |
| `secondary-200` | Soft teal      | Borders in dark mode   |
| `secondary-300` | Medium teal    | Muted text (dark mode) |
| `secondary-400` | Teal           | Secondary buttons      |
| `secondary-500` | Vivid teal     | Dark mode sidebar bg   |
| `secondary-600` | Deep teal      | Dark mode card bg      |
| `secondary-700` | Dark teal      | Dark mode surface      |
| `secondary-800` | Very dark teal | Dark mode base bg      |
| `secondary-900` | Near black     | Dark mode body         |

**Note**: The secondary scale follows standard Tailwind convention (50 = lightest, 900 = darkest). This was corrected in Phase 0.

### Semantic Colors

| Purpose          | Light Mode    | Dark Mode       |
| ---------------- | ------------- | --------------- |
| Body background  | `primary-50`  | `secondary-900` |
| Surface/Card     | `white`       | `secondary-800` |
| Sidebar          | `white`       | `secondary-700` |
| Primary text     | `gray-900`    | `gray-100`      |
| Secondary text   | `gray-600`    | `gray-400`      |
| Border           | `gray-200`    | `secondary-600` |
| Success/Positive | `green-600`   | `green-400`     |
| Warning          | `amber-600`   | `amber-400`     |
| Accent           | `primary-500` | `primary-400`   |

### Badge Colors

| Badge Type    | Background                       | Text            |
| ------------- | -------------------------------- | --------------- |
| Free / No Ads | `green-100`                      | `green-800`     |
| Open Source   | `blue-100`                       | `blue-800`      |
| Works Offline | `purple-100`                     | `purple-800`    |
| Paid          | `amber-100`                      | `amber-800`     |
| Has Ads       | `red-100`                        | `red-800`       |
| Closed Source | `gray-100`                       | `gray-800`      |
| Domain tag    | `primary-100`                    | `primary-800`   |
| Category      | `secondary-100`                  | `secondary-800` |
| Featured      | `yellow-100` border `yellow-400` | `yellow-800`    |

---

## Typography

### Font Stack

- **Headings (h1–h3)**: Plus Jakarta Sans (loaded from Google Fonts, `font-display: swap`)
- **Body text**: System sans-serif stack (`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`)
- **Monospace**: `ui-monospace, SFMono-Regular, Menlo, Monaco, monospace`

### Scale

| Element              | Size                       | Weight                | Line Height       |
| -------------------- | -------------------------- | --------------------- | ----------------- |
| h1 (page title)      | `text-3xl` / `md:text-4xl` | `font-bold` (700)     | `leading-tight`   |
| h2 (section heading) | `text-2xl`                 | `font-semibold` (600) | `leading-snug`    |
| h3 (card title)      | `text-lg` / `text-xl`      | `font-semibold` (600) | `leading-snug`    |
| Body                 | `text-base` (16px)         | `font-normal` (400)   | `leading-relaxed` |
| Small/meta           | `text-sm` (14px)           | `font-normal` (400)   | `leading-normal`  |
| Caption/label        | `text-xs` (12px)           | `font-medium` (500)   | `leading-normal`  |

### Heading Treatment

- Page titles: Primary color accent on keywords (e.g., "Awesome" in orange)
- Section headings: Neutral dark color, subtle bottom border or left accent
- Card titles: Dark, 2-line clamp with ellipsis

---

## Spacing & Layout

### Spacing Scale

Use Tailwind's default spacing scale. Key values:

| Context                | Spacing                  |
| ---------------------- | ------------------------ |
| Page padding (mobile)  | `px-4`                   |
| Page padding (desktop) | `px-8`                   |
| Section gap            | `space-y-12` or `gap-12` |
| Card grid gap          | `gap-4` or `gap-6`       |
| Card internal padding  | `p-4`                    |
| Badge/pill padding     | `px-3 py-1`              |

### Grid System

| Context             | Grid Definition                                   |
| ------------------- | ------------------------------------------------- |
| Listing page grid   | `grid-cols-[repeat(auto-fill,minmax(280px,1fr))]` |
| Homepage scroll row | Flex row, `overflow-x-auto`, `gap-4`              |
| Domain page groups  | Full-width sections, stacked vertically           |
| Right sidebar       | Single column, `w-72` on desktop                  |
| Footer              | `grid-cols-1 md:grid-cols-3`                      |

### Breakpoints

Standard Tailwind breakpoints:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

Key responsive behaviors:

- Left sidebar: Hidden below `lg`, shown as fixed sidebar on `lg+`
- Right sidebar: Hidden below `lg`, shown as scrollable aside on `lg+`
- Mobile nav: Shown below `lg`, hidden on `lg+`
- Card grid: 1 col → 2 col → 3 col → auto-fill

---

## Card Components

### ContentCard (Compact)

**Used in**: Homepage scroll rows, "You might also like" sidebar

```
┌────────────────┐
│   [Logo 48px]  │
│                │
│  Title (1 line)│
│  Author (tiny) │
└────────────────┘
```

- Width: `80px–120px`
- Hover: subtle scale + shadow
- Click: navigates to detail page

---

### ContentCardFull (Listing)

**Used in**: Listing pages, tag pages, category pages, domain pages

```
┌──────────────────────────────────────┐
│  [Logo 56px]  Title (2 lines max)    │
│               Description (2 lines)  │
│                                      │
│  [Domain badge]  [Category badge]    │
│                         [CTA hint →] │
└──────────────────────────────────────┘
```

- Min width: `280px`
- Background: `white` / `secondary-800` (dark)
- Border: `1px solid gray-200` / `secondary-600`
- Border-radius: `rounded-xl`
- Padding: `p-4`
- Hover: `shadow-md` + slight `translate-y-[-2px]`
- CTA hint: small text like "Download →" in `primary-500`
- Featured badge: gold border + star icon

---

### AchievementCard (Gamification)

**Used in**: Opportunities section on domain pages

```
┌──────────────────────────────────────────┐
│  🏆  Badge Title                         │
│ ╭────────────────────────────────────╮   │
│ │  Achievement Title (bold)          │   │
│ │  One-line description              │   │
│ │                        [Date]      │   │
│ ╰────────────────────────────────────╯   │
│  ── subtle gradient bg ──                │
└──────────────────────────────────────────┘
```

Design inspiration: Xbox achievements, GitHub contribution badges, Duolingo streaks

- Background: subtle gradient (gold → amber for historic firsts, blue → purple for tech)
- Badge icon: emoji or custom SVG
- Border: `2px` with gradient or gold accent
- Inner glow/shadow for depth
- Border-radius: `rounded-2xl`
- NOT a plain card — must feel celebratory and special
- Font: heading font (Plus Jakarta Sans) for title

---

### ComparisonWidget

**Used in**: Opportunities section on domain pages

```
┌─────────────────────────────────────────────────┐
│  [Metric Name]                                   │
│                                                  │
│  🇮🇳 India    ████████░░░░░░░░░░  60           │
│  🇺🇸 USA      ████████████████████ 3400        │
│  🇨🇳 China    █████████████░░░░░░░ 600         │
│                                                  │
│  💡 "India needs 10x growth..."                  │
└─────────────────────────────────────────────────┘
```

- Clean, minimal bar chart style
- India's bar always uses `primary-500` (orange)
- Other countries use neutral `gray-400`
- Gap insight in muted text below
- Tone: factual, not judgmental
- Responsive: stacks bars vertically on mobile

---

### ActionCard (CTA)

**Used in**: Opportunities section, initiative pages

```
┌────────────────────────────┐
│  [🤝 Icon]                 │
│                            │
│  Volunteer with [Org]      │
│  Help clean rivers in      │
│  Mumbai every weekend      │
│                            │
│  [ Get Involved → ]       │
└────────────────────────────┘
```

- Background: light tint of the action type color
    - Volunteer: `green-50`
    - Donate: `amber-50`
    - Promote: `blue-50`
    - Collaborate: `purple-50`
- Bold CTA button at bottom
- Icon prominent and large (32px)
- Border-radius: `rounded-xl`
- Action verb as heading (bold, short)

---

### MilestoneCard (News)

**Used in**: Opportunities section, entry detail pages

```
┌─────────────────────────────────────────┐
│  [Thumbnail]    [🚀 Domain Badge]       │
│                                         │
│  Title of Achievement/Article           │
│  One-line summary                       │
│                                         │
│  📰 Source Name        Jan 15, 2024     │
│                           [ Read → ]    │
└─────────────────────────────────────────┘
```

- Achievement aesthetic: subtle left border in domain color
- Source as small badge (newspaper icon + name)
- Date in muted text
- Thumbnail optional (falls back to gradient with domain emoji)
- NOT a generic news card — feels like unlocking an achievement
- Border-radius: `rounded-xl`
- Hover: slight lift

---

## Page Layout Patterns

### Homepage

```
┌─────────────────────────────────────────────────────────────────┐
│  [Header]                                                        │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────┐        │
│  │  HERO                                                │        │
│  │  "Discover remarkable things made by Indians"        │        │
│  │  [Stat strip: X apps · Y people · Z companies]      │        │
│  └─────────────────────────────────────────────────────┘        │
│                                                                  │
│  ── Latest Apps ──────────────────── [View all →]               │
│  [Card] [Card] [Card] [Card] [Card] →→→ (scroll)               │
│                                                                  │
│  ── Featured People ──────────────── [View all →]               │
│  [Card] [Card] [Card] [Card] →→→ (scroll)                      │
│                                                                  │
│  ── Featured Companies ───────────── [View all →]               │
│  [Card] [Card] [Card] →→→ (scroll)                             │
│                                                                  │
│  ── Explore by Domain ────────────────────────                  │
│  [🚀 Space] [🌱 Environment] [📚 Education] [💻 Tech] ...     │
│                                                                  │
│  ── Explore by Category ──────────────────────                  │
│  [Productivity] [Health] [Finance] [Entertainment] ...          │
│                                                                  │
│  [Footer]                                                        │
└─────────────────────────────────────────────────────────────────┘
```

---

### Listing Page (e.g., /apps/)

```
┌────────────────────────────────────────────────────┐
│  ┌────────────────────────────────────────────┐    │
│  │  CollectionHero                             │    │
│  │  [Icon] Apps · 42 entries                   │    │
│  │  "Indian-made apps downloaded by millions"  │    │
│  └────────────────────────────────────────────┘    │
│                                                     │
│  [Filter strip: All | Productivity | Health | ...]  │
│                                                     │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐              │
│  │CardF │ │CardF │ │CardF │ │CardF │              │
│  └──────┘ └──────┘ └──────┘ └──────┘              │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐              │
│  │CardF │ │CardF │ │CardF │ │CardF │              │
│  └──────┘ └──────┘ └──────┘ └──────┘              │
└────────────────────────────────────────────────────┘
```

---

### Detail Page (e.g., /apps/mindful)

```
┌────────────────────────────────────────────────────────────────┐
│                                                                  │
│  ┌──────────────────────────────────┐  ┌──────────────────┐    │
│  │  ARTICLE                          │  │  RIGHT SIDEBAR   │    │
│  │                                   │  │                  │    │
│  │  ┌────────────────────────────┐   │  │  You might like  │    │
│  │  │ Header Card                │   │  │  [Item] [Item]   │    │
│  │  │ [Logo] Title    [CTA btn]  │   │  │  [Item] [Item]   │    │
│  │  │        Author              │   │  │                  │    │
│  │  │ [badges row]               │   │  │  More by Author  │    │
│  │  └────────────────────────────┘   │  │  [Item] [Item]   │    │
│  │                                   │  │                  │    │
│  │  Description                      │  │                  │    │
│  │  [Engage section]                 │  │                  │    │
│  │  [Screenshots]                    │  │                  │    │
│  │  [YouTube embeds]                 │  │                  │    │
│  │  [MDX content]                    │  │                  │    │
│  │  [Store badges]                   │  │                  │    │
│  │  [External links]                 │  │                  │    │
│  │                                   │  │                  │    │
│  └──────────────────────────────────┘  └──────────────────┘    │
│                                                                  │
└────────────────────────────────────────────────────────────────┘
```

---

### Domain Page (e.g., /domains/space)

```
┌──────────────────────────────────────────────────────────────────┐
│  ┌──────────────────────────────────────────────────────────┐    │
│  │  HERO: 🚀 Space & Exploration                             │    │
│  │  "India's journey to the stars"                           │    │
│  │  [42 items across 6 content types]                        │    │
│  │  [Apps(8)] [People(12)] [Companies(5)] [Channels(10)]...  │    │
│  └──────────────────────────────────────────────────────────┘    │
│                                                                    │
│  ═══ OPPORTUNITIES ═══════════════════════════════════════════    │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐                    │
│  │Achievement │ │Achievement │ │Achievement │  ← carousel        │
│  │   Card     │ │   Card     │ │   Card     │                    │
│  └────────────┘ └────────────┘ └────────────┘                    │
│                                                                    │
│  ┌─────────────────────────────────────────────┐                  │
│  │  Comparison Widget                           │                  │
│  └─────────────────────────────────────────────┘                  │
│                                                                    │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐                          │
│  │ Action   │ │ Action   │ │ Action   │                          │
│  │ Card     │ │ Card     │ │ Card     │                          │
│  └──────────┘ └──────────┘ └──────────┘                          │
│                                                                    │
│  ── Recent Milestones ─────────────────                           │
│  [Milestone] [Milestone] [Milestone]                              │
│                                                                    │
│  ═══ CONTENT ════════════════════════════════════════════════     │
│                                                                    │
│  ── Apps ──────────────────────────── [View all →]               │
│  [CardFull] [CardFull] [CardFull] [CardFull]                     │
│                                                                    │
│  ── People ────────────────────────── [View all →]               │
│  [CardFull] [CardFull] [CardFull] [CardFull]                     │
│                                                                    │
│  ── Channels ──────────────────────── [View all →]               │
│  [CardFull] [CardFull] [CardFull]                                │
│                                                                    │
└──────────────────────────────────────────────────────────────────┘
```

---

### Tag Page (e.g., /tags/women-in-tech)

```
┌────────────────────────────────────────────────────────────┐
│  ┌────────────────────────────────────────────────────┐    │
│  │  # women-in-tech           18 items                 │    │
│  │  "Indian women building remarkable things in tech"  │    │
│  │  [Apps(3)] [People(8)] [Companies(4)] [Channels(3)] │    │
│  └────────────────────────────────────────────────────┘    │
│                                                             │
│  [Tab: Apps | People | Companies | Channels | ...]          │
│                                                             │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                      │
│  │CardF │ │CardF │ │CardF │ │CardF │                      │
│  └──────┘ └──────┘ └──────┘ └──────┘                      │
└────────────────────────────────────────────────────────────┘
```

---

## Interactive Elements

### Buttons

| Variant    | Style                                                                                 | Usage                          |
| ---------- | ------------------------------------------------------------------------------------- | ------------------------------ |
| Primary    | `bg-primary-500 text-white hover:bg-primary-600 rounded-lg px-6 py-2.5 font-medium`   | Main CTA (Download, Subscribe) |
| Secondary  | `border border-primary-500 text-primary-600 hover:bg-primary-50 rounded-lg px-4 py-2` | Secondary actions              |
| Ghost      | `text-primary-600 hover:bg-primary-50 rounded-lg px-3 py-1.5`                         | Tertiary, inline actions       |
| Pill/Badge | `bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-sm`                            | Filters, tags                  |

### Links

- Default: `text-primary-600 hover:text-primary-700 underline-offset-2 hover:underline`
- In cards: no underline, entire card is clickable
- External: append subtle `↗` icon

### Scroll Containers

- Horizontal scroll rows: `overflow-x-auto`, `scroll-smooth`, `snap-x snap-mandatory`
- Fade gradient on right edge: `bg-gradient-to-l from-white via-white/80 to-transparent` (absolute positioned)
- Arrow buttons: circular, `bg-white shadow-md`, positioned at container edges
- Use `data-scroll-container` and `data-scroll-left` / `data-scroll-right` attributes

### Dropdowns

- CTA dropdown (store links): anchored to button, appears below
- Close on click-outside
- Animated: `transition-all duration-200 opacity-0 scale-95 → opacity-100 scale-100`

---

## Dark Mode

Implemented via class-based toggle (`dark` class on `<html>`).

### Strategy

- Preference detection: check `localStorage`, fallback to `prefers-color-scheme`
- No flash: inline script in `<head>` sets class before paint
- Toggle in header via `ThemeToggle` component

### Dark Mode Color Mapping

| Element          | Light                  | Dark                                  |
| ---------------- | ---------------------- | ------------------------------------- |
| Body bg          | `bg-primary-50`        | `bg-secondary-900`                    |
| Card bg          | `bg-white`             | `bg-secondary-800`                    |
| Card border      | `border-gray-200`      | `border-secondary-600`                |
| Text primary     | `text-gray-900`        | `text-gray-100`                       |
| Text secondary   | `text-gray-600`        | `text-gray-400`                       |
| Sidebar bg       | `bg-white`             | `bg-secondary-700`                    |
| CTA button       | `bg-primary-500`       | `bg-primary-500` (unchanged)          |
| Badge bg         | `[color]-100`          | `[color]-900` with `text-[color]-200` |
| Achievement card | Gradient stays vibrant | Slightly muted gradient               |

---

## Image Guidelines

### Sizes

| Context                | Dimensions      | Format            |
| ---------------------- | --------------- | ----------------- |
| Logo (detail header)   | 96×96px         | WebP (eager load) |
| Logo (ContentCard)     | 48×48px         | WebP              |
| Logo (ContentCardFull) | 56×56px         | WebP              |
| Logo (sidebar item)    | 32×32px         | WebP              |
| Screenshots            | Original aspect | WebP (lazy load)  |
| OG/social cards        | 1200×630px      | PNG               |
| Milestone thumbnails   | 160×90px        | WebP              |

### Format Preferences

1. **WebP** — default for all raster images
2. **SVG** — for logos that are vector
3. **PNG** — fallback only if WebP not available

### Image Optimization

- All images imported through `imageRegistry.ts`
- Astro `<Image>` component handles format conversion and resizing
- Use `loading="eager"` for above-fold logos only
- Use `loading="lazy"` for everything else (screenshots, thumbnails)
- Always set explicit `width` and `height` to prevent layout shift

### Fallbacks

- Missing logo → `brand-logo.svg` (default from registry)
- Missing screenshot → no render (conditionally hidden)
- Missing avatar → initials-based placeholder or generic person icon

---

## Animation & Motion

### Principles

1. **Subtle and purposeful** — animations serve UX, not decoration
2. **Fast** — 150ms–300ms for most transitions
3. **Respect preferences** — check `prefers-reduced-motion`, disable animations if set
4. **No layout shift** — animations use `transform` and `opacity` only

### Standard Transitions

| Interaction                   | Animation                                                         |
| ----------------------------- | ----------------------------------------------------------------- |
| Card hover                    | `transform: translateY(-2px)` + `box-shadow` increase, 200ms ease |
| Button hover                  | Background color shift, 150ms ease                                |
| Dropdown open                 | `opacity` 0→1 + `scale` 0.95→1, 200ms ease-out                    |
| Dropdown close                | `opacity` 1→0 + `scale` 1→0.95, 150ms ease-in                     |
| Page load                     | Content fades in, 300ms                                           |
| Tab switch                    | Content cross-fades, 200ms                                        |
| Achievement card (first view) | Subtle glow pulse, 600ms, once                                    |

### Scroll Behavior

- `scroll-behavior: smooth` globally
- Scroll rows: `scroll-snap-type: x mandatory` on container, `scroll-snap-align: start` on children
- Parallax: avoid (performance cost, accessibility issues)
