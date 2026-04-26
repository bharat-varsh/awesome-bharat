# Awesome Bharat - Project Documentation

## What This Site Is

**Awesome Bharat** is a curated discovery portal that showcases remarkable things made by Indians — apps, products, companies, people, open-source projects, YouTube channels, blogs, and more. It is not a Wikipedia or an encyclopedia. It is a **teaser + action portal**: each page contains just enough information to spark interest, then gives the visitor a clear, context-appropriate call-to-action that sends them to the actual content.

The site celebrates Indian creativity and talent across all domains. Content is hand-curated and editorially selected.

### Core Philosophy

- **Discover, then act.** Every detail page has one primary CTA above the fold. The CTA is specific to the content type — not a generic "Learn more".
- **Curated, not exhaustive.** Quality over quantity. Each entry is chosen because it is genuinely interesting or impressive.
- **Celebrate the maker.** Every piece of content is linked back to the person or company that made it.
- **Spark interest, then get out of the way.** The site is a launchpad, not a destination.

### Primary CTA by Content Type

| Content type       | Primary CTA    | Source field                        |
|--------------------|----------------|-------------------------------------|
| App                | Download       | `storeLinks`                        |
| Open-source repo   | Contribute     | `repositoryLinks`                   |
| Person             | Follow / Visit | `socials` or `website`              |
| Company            | Visit          | `website`                           |
| YouTube channel    | Subscribe      | `socials` with label `youtube`      |
| Product            | Buy            | `storeLinks` or `website`           |
| Blog               | Read           | `website`                           |

---

## Tech Stack

- **Astro 5.x** with MDX integration
- **Tailwind CSS** for styling (with `@tailwindcss/typography` plugin)
- **TypeScript**
- Build output deploys to `/docs` for GitHub Pages

---

## Project Structure

```
src/
├── content/
│   ├── apps/          # App entries (MDX)
│   ├── persons/       # Person profiles (MDX)
│   ├── companies/     # Company profiles (MDX)
│   └── config.ts      # Content collection schemas (Zod)
├── components/        # Astro components
│   ├── ContentCard.astro      # Compact card for scroll rows
│   ├── ContentLayout.astro    # Detail page layout
│   ├── Engage.astro           # Contribute / community / web links
│   ├── Header.astro
│   ├── Footer.astro           # NOTE: not yet wired into BaseLayout
│   ├── LeftSidebar.astro      # Navigation sidebar
│   ├── RightSidebar.astro     # Related content sidebar
│   ├── SidebarNav.astro       # Nav links with collection counts
│   ├── YouMightLike.astro     # Related items grid
│   ├── RelatedItem.astro      # Single related item card
│   ├── Screenshots.astro
│   ├── YouTubeEmbed.astro
│   └── ThemeToggle.astro
├── layouts/
│   ├── BaseLayout.astro       # Shell: header + left sidebar + main slot
│   └── ContentLayout.astro    # Detail page: article + right sidebar
├── pages/
│   ├── index.astro            # Homepage
│   ├── apps/
│   │   ├── index.astro        # Apps listing
│   │   └── [slug].astro       # App detail
│   └── rss.xml.ts
├── styles/
│   └── global.css
└── utils/
    ├── dateUtils.ts
    ├── imageRegistry.ts       # Maps slug/filename → ImageMetadata
    ├── imageResolvers.ts      # resolveLogo(), resolvePageImages()
    ├── relatedContent.ts      # Tag-based related content scoring
    └── textUtils.ts           # formatCategoryName()
```

---

## Content Collections

### Apps (`src/content/apps/`)
- `title`, `description` — Basic info
- `authors` — Array of `{ slug, type: 'person' | 'company' }`
- `type` — `'app'` or `'plugin'`
- `devices` — `['auto', 'desktop', 'mobile', 'tv', 'watch']`
- `source` — `'open-source'` or `'closed-source'`
- `paid`, `ads`, `offline` — Boolean flags
- `categories` — Google Play-style category enum
- `tags` — Free-form string array (used for related content and tag pages)
- `website`, `youtubeVideoIds`, `youtubeShortsIds`
- `repositoryLinks`, `storeLinks`, `externalLinks`, `socials`
- `screenshots` — Array of `{ url }`
- `logo` — Optional filename (resolved via `imageRegistry`)
- `date` — Publication date
- `draft` — Hides from all listings when `true`
- `featured` — Pins to top of listings

### Persons (`src/content/persons/`)
- `name`, `bio`, `email`, `website`
- `socials` — Array of `{ label, url }`
- `avatar`, `draft`

### Companies (`src/content/companies/`)
- `name`, `description`, `founded`, `location`, `website`
- `members` — Array of `{ slug, role }` (links to persons)
- `socials`, `logo`, `draft`

---

## Key Commands

```bash
npm run dev          # Start dev server (http://localhost:4321)
npm run build        # Build for production → ./docs
npm run preview      # Preview production build
npm run lint         # ESLint
npm run format       # Prettier
```

---

## Image Handling

Images live in `src/assets/images/` and must be registered in `src/utils/imageRegistry.ts` before use. The `resolveLogo(slug, logo?)` function resolves in this order:

1. Explicit `logo` filename if registered
2. Slug-based lookup
3. Default fallback image

**Important:** Astro's `<Image>` component only optimizes imported assets. Do not pass plain string paths like `"/images/foo.svg"` — import the asset or use the registry.

---

## Adding New Content

1. Create a new `.mdx` file in the appropriate collection folder
2. Fill in frontmatter following the schema in `src/content/config.ts`
3. If the entry has a logo/avatar, add the image to `src/assets/images/` and register it in `src/utils/imageRegistry.ts`
4. Run `npm run build` to verify no schema errors

---

## Known Issues & Design Decisions

### Right Sidebar Scroll Bug
`ContentLayout.astro` wraps the article + right sidebar in `items-center`. This stretches the sidebar to match the article height, preventing independent scroll. Fix: change to `items-start`.

### Footer Not Rendered
`Footer.astro` exists but is not imported in `BaseLayout.astro`. It never renders.

### Secondary Color Scale Is Inverted
In `tailwind.config.mjs`, the `secondary` palette runs from `50` (darkest) to `900` (nearly black). Tailwind convention is the opposite. This causes confusion when reading dark mode classes.

### Store Badges Duplicated
`ContentLayout.astro` renders the store badges block twice (before screenshots and after the prose slot). Extract to a `StoreBadges.astro` component.

### Inline onclick Scroll Handlers
The homepage carousel uses `onclick="this.nextElementSibling.scrollBy(...)"`. Fragile DOM traversal — should be proper `<script>` event listeners.

### `aspectRatio` Prop Deprecated
Several `<Image>` usages pass `aspectRatio="1/1"` — removed in Astro 3, silently ignored.

### Related Content Only Matches Tags
`relatedContent.ts` only scores on `tags`. Apps would benefit from also matching `categories` and `authors`.

---

## Build Output

Production build outputs to `./docs` for GitHub Pages. Configured with `site: 'https://awesomebharat.com'` in `astro.config.mjs`.
