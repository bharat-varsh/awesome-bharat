# Awesome Bharat - Project Documentation

## Project Overview

Static site generator for [Awesome Bharat](https://awesomebharat.com) - a curated collection of amazing applications built by Indian developers and companies.

**Tech Stack:**
- Astro 5.x with MDX integration
- Tailwind CSS for styling
- TypeScript
- Built output deploys to `/docs` for GitHub Pages

## Project Structure

```
src/
├── content/
│   ├── apps/          # App entries (MDX)
│   ├── persons/       # Developer profiles
│   ├── companies/     # Company profiles
│   └── config.ts      # Content collection schemas
├── components/        # Astro components
├── layouts/           # Page layouts
├── pages/             # Route pages
│   ├── index.astro    # Homepage
│   ├── apps/          # Apps listing & detail
│   └── rss.xml.ts     # RSS feed
├── styles/            # Global CSS
└── utils/             # Helper functions
```

## Content Collections

### Apps Schema (`src/content/config.ts`)
- `title`, `description` - Basic info
- `authors` - Array of `{slug, type: 'person'|'company'}`
- `type` - 'app' or 'plugin'
- `devices` - ['auto', 'desktop', 'mobile', 'tv', 'watch']
- `source` - 'open-source' or 'closed-source'
- `paid`, `ads`, `offline` - Boolean flags
- `categories` - Google Play categories
- `tags` - Custom tags
- `website`, `youtubeVideoIds`, `youtubeShortsIds`
- `repositoryLinks`, `storeLinks`, `externalLinks`, `socials`
- `screenshots` - Array of `{url}`
- `logo` - Optional logo filename
- `date` - Publication date
- `draft` - Draft flag

### Persons Schema
- `name`, `bio`, `email`, `website`
- `socials` - Array of `{label, url}`
- `avatar`, `draft`

### Companies Schema
- `name`, `description`, `founded`, `location`, `website`
- `members` - Array of `{slug, role}`
- `socials`, `logo`, `draft`

## Key Commands

```bash
npm run dev          # Start dev server
npm run build        # Build for production (outputs to ./docs)
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run format       # Run Prettier
```

## Image Handling

Images are stored in `src/assets/images/` and registered in `src/utils/imageRegistry.ts`. The `resolveLogo()` function maps app slugs to images.

## Adding New Content

1. Create new MDX file in appropriate collection folder
2. Add frontmatter following the schema
3. Run `npm run build` to generate static pages

## Build Output

Production build outputs to `./docs` for GitHub Pages deployment. The site is configured with `site: 'https://awesomebharat.com'` in astro.config.mjs.