# Awesome Bharat - Project Documentation

> **Planning Documents**: For detailed project strategy, architecture, and guidelines, see the `planning/` folder:
>
> - [`planning/VISION.md`](planning/VISION.md) — Mission, philosophy, hard boundaries, success criteria
> - [`planning/CONTENT-ARCHITECTURE.md`](planning/CONTENT-ARCHITECTURE.md) — All content types, schemas, dual taxonomy, Opportunities section
> - [`planning/ROADMAP.md`](planning/ROADMAP.md) — Phased delivery plan (6 phases)
> - [`planning/DESIGN-SYSTEM.md`](planning/DESIGN-SYSTEM.md) — Colors, typography, card components, page layouts
> - [`planning/AI-AGENT-GUIDE.md`](planning/AI-AGENT-GUIDE.md) — Code conventions, workflows, quality checklists
> - [`planning/CONTENT-GUIDELINES.md`](planning/CONTENT-GUIDELINES.md) — Editorial voice, inclusion criteria, writing templates

## What This Site Is

**Awesome Bharat** is a curated discovery platform that celebrates remarkable things made or led by Indians — across every domain: apps, products, companies, people, open-source projects, YouTube channels, blogs, podcasts, communities, and social initiatives. It is not a Wikipedia or an encyclopedia. It is a **teaser + action portal**: each page sparks interest, then sends the visitor to the actual content via a clear, context-appropriate call-to-action.

The site exists to break the notion that India has nothing noteworthy, to bring into public limelight even the smallest genuine effort, and to inspire people to act. Content is hand-curated and editorially vetted.

### Core Philosophy

- **Discover, then act.** Every detail page has one primary CTA above the fold. The CTA is specific to the content type — not a generic "Learn more".
- **Curated, not exhaustive.** Quality over quantity. Each entry is chosen because it is genuinely interesting or impressive.
- **Celebrate the maker.** Every piece of content is linked back to the person or company that made it.
- **Spark interest, then get out of the way.** The site is a launchpad, not a destination.

### Primary CTA by Content Type

| Content type     | Primary CTA    | Source field                    |
| ---------------- | -------------- | ------------------------------- |
| App              | Download       | `storeLinks`                    |
| Open-source repo | Contribute     | `repositoryLinks`               |
| Person           | Follow / Visit | `socials` or `website`          |
| Company          | Visit          | `website`                       |
| YouTube channel  | Subscribe      | `channelUrl`                    |
| Product          | Buy            | `buyUrl` or `website`           |
| Blog             | Read           | `url`                           |
| Community        | Join           | `joinUrl`                       |
| Podcast          | Listen         | `platforms[0]`                  |
| Initiative       | Get Involved   | `howToHelp[0].url` or `website` |

---

## Tech Stack

- **Astro 5.x** with MDX integration
- **Tailwind CSS** for styling (with `@tailwindcss/typography` plugin)
- **TypeScript**
- Build output deploys to `/docs` for GitHub Pages

---

## Project Structure

```
planning/              # Strategy & architecture docs (see links above)
src/
├── content/
│   ├── apps/          # App entries (MDX)
│   ├── persons/       # Person profiles (MDX)
│   ├── companies/     # Company profiles (MDX)
│   └── config.ts      # Content collection schemas (Zod)
├── components/        # Astro components
│   ├── ContentCard.astro      # Compact card for scroll rows
│   ├── ContentCardFull.astro  # Rich card for listing grids
│   ├── ContentLayout.astro    # Detail page layout
│   ├── CollectionHero.astro   # Hero banner for listing pages
│   ├── Engage.astro           # Contribute / community / web links
│   ├── Header.astro
│   ├── Footer.astro
│   ├── LeftSidebar.astro      # Navigation sidebar
│   ├── MobileNav.astro        # Mobile navigation drawer
│   ├── RightSidebar.astro     # Related content sidebar
│   ├── SidebarNav.astro       # Nav links with collection counts
│   ├── StoreBadges.astro      # Store download badges
│   ├── YouMightLike.astro     # Related items grid
│   ├── RelatedItem.astro      # Single related item card
│   ├── Screenshots.astro
│   ├── SEO.astro
│   ├── YouTubeEmbed.astro
│   └── ThemeToggle.astro
│   └── ThemeToggle.astro
├── layouts/
│   ├── BaseLayout.astro       # Shell: header + left sidebar + main slot
│   └── ContentLayout.astro    # Detail page: article + right sidebar
├── pages/
│   ├── index.astro            # Homepage
│   ├── apps/
│   │   ├── index.astro        # Apps listing
│   │   └── [slug].astro       # App detail
│   ├── people/
│   │   ├── index.astro        # People listing
│   │   └── [slug].astro       # Person detail
│   ├── companies/
│   │   ├── index.astro        # Companies listing
│   │   └── [slug].astro       # Company detail
│   ├── categories/
│   │   └── [category].astro   # Category landing pages
│   ├── tags/
│   │   └── [tag].astro        # Tag landing pages
│   └── rss.xml.ts
├── styles/
│   └── global.css
└── utils/
    ├── ctaUtils.ts            # CTA label/URL resolution per content type
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
npm run check        # Fast validation: astro check + eslint (no build)
npm run preview      # Preview production build
npm run lint         # ESLint
npm run format       # Prettier
npm run scaffold     # New MDX draft: scaffold -- <type> <slug> [--title] [--logo]
npm run graphify     # Rebuild knowledge graph (AST, no API key)
npm run test:e2e     # Playwright UI smoke tests
```

### Search (Pagefind)

Search uses [Pagefind](https://pagefind.app/), a static search library. The search index is generated during `postbuild` via `npx pagefind --site docs`.

- **Production**: After `npm run build`, the pagefind index lives in `docs/pagefind/`. The `Search.astro` component loads pagefind's custom elements and works normally.
- **Dev mode**: In `npm run dev`, no pagefind index exists. The search component shows a clear helper message: *"Search is available after npm run build (generates pagefind search index)"* — no silent failures.

No additional build step is needed; `postbuild` handles index generation automatically.

---

## Image Handling

Images live in `src/assets/images/` and must be registered in `src/utils/imageRegistry.ts` before use. The `resolveLogo(slug, logo?)` function resolves in this order:

1. Explicit `logo` filename if registered
2. Slug-based lookup
3. Default fallback image

**Important:** Astro's `<Image>` component only optimizes imported assets. Do not pass plain string paths like `"/images/foo.svg"` — import the asset or use the registry.

---

## Adding New Content

1. Optionally scaffold: `npm run scaffold -- app my-app --title "My App"` (or use `skills/add-content-entry`)
2. Fill in frontmatter following the schema in `src/content/config.ts`
3. If the entry has a logo/avatar, add the image to `src/assets/images/` and register it in `src/utils/imageRegistry.ts` (`--logo` on scaffold stubs the registry)
4. Run `npm run check` mid-task; `npm run build` to verify no schema errors

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

### Related Content Only Matches Tags

`relatedContent.ts` only scores on `tags`. Apps would benefit from also matching `categories` and `authors`.

---

## Build Output

Production build outputs to `./docs` for GitHub Pages. Configured with `site: 'https://awesomebharat.com'` in `astro.config.mjs`.

---

## Agent Context

**Skip these directories** — they are stale, reference-only, or build output. Do not read or modify them:

- `docs/` — Build output (regenerated on every build)
- `OLD-INSTRUCTIONS/` — Archived instructions, no longer authoritative
- `implementation-plan/` — Superseded by `planning/`
- `only-reference/` — Reference material, not part of the active codebase

### When to use what

| Task type                 | Before coding                                                               | While coding                   | Before declaring done                           |
| ------------------------- | --------------------------------------------------------------------------- | ------------------------------ | ----------------------------------------------- |
| **Content (new entry)**   | `skills/add-content-entry`; optionally `npm run scaffold` to generate draft | —                              | `npm run check`                                 |
| **UI / layout change**    | `skills/ui-layout-change`; `npm run graphify update` if graph is stale      | `npm run dev` for visual check | `npm run test:e2e && npm run build`             |
| **Schema change**         | `skills/schema-change`                                                      | `npm run dev`                  | `npm run build` (validates all MDX against Zod) |
| **Architecture question** | `python -m graphify query "..."` (if `graphify-out/graph.json` exists)      | —                              | —                                               |
| **Cold-start handoff**    | `npm run pack` to produce `repomix-output.md`                               | —                              | —                                               |

### Task cards

Use `planning/current_task.md` as the session task card (goal, files-in-scope, do-not-touch, done-criteria). Fill it before multi-step work; clear or rewrite when the task ends.

### Agent skills

Load the matching skill under `skills/` for repetitive workflows (short checklists; full docs stay in `planning/`):

| Skill                      | When                               |
| -------------------------- | ---------------------------------- |
| `skills/add-content-entry` | New MDX entries (any collection)   |
| `skills/ui-layout-change`  | Components, layouts, Tailwind, nav |
| `skills/schema-change`     | Changes to `src/content/config.ts` |

### Cold-start pack (Repomix)

```bash
npm run pack
```

Writes a compressed repo summary to `repomix-output.md` (gitignored). Config: `repomix.config.json` (excludes `docs/`, stale dirs, lockfiles).

### Knowledge graph (Graphify)

Requires `graphifyy` (`pip install graphifyy`). Prefer `python -m graphify` if `graphify.exe` is blocked on Windows.

```bash
npm run graphify          # AST extract → graphify-out/ (no API key)
npm run graphify:update   # re-extract after code changes
python -m graphify query "what uses resolveLogo?"
python -m graphify explain "ContentLayout"
python -m graphify path "ctaUtils" "ContentLayout"
```

Output is gitignored under `graphify-out/`. Skill trigger: `/graphify`. Ignore patterns: `.graphifyignore`.

**Collaborators using other tools** — graphify installs natively into the project for Claude Code (`~/.claude/CLAUDE.md`). To enable it for other agents (Kilo, OpenCode, Aider, Codex, Devin, Kiro, etc.):

```bash
python -m graphify <tool> install       # skill + always-on instructions for that tool
python -m graphify <tool> uninstall     # remove
```

Replace `<tool>` with one of: `claude | kilo | opencode | aider | codex | devin | kiro | copilot | gemini | cursor | hermes | pi | claw | droid | trae | agents`. The `agents` target is a platform-agnostic option (writes to `.agents/`). All supported platforms: `claude, codex, opencode, kilo, aider, copilot, claw, droid, trae, trae-cn, hermes, kiro, pi, codebuddy, antigravity, agents, devin, gemini, cursor`.

After install, each tool's agent context file (e.g. `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`) gets a `## graphify` section instructing the agent to query the graph before grepping raw files.

### Content scaffold CLI

```bash
npm run scaffold -- app my-app --title "My App"
npm run scaffold -- person jane-doe --title "Jane Doe" --logo
```

Creates draft MDX under `src/content/{collection}/` with schema-shaped frontmatter + body TODOs. `--logo` stubs `imageRegistry.ts`. Then fill content and follow `skills/add-content-entry`.

### UI smoke tests (Playwright)

```bash
npm run test:e2e          # starts dev server if needed; Chromium + mobile project
npm run test:e2e:ui       # Playwright UI mode
```

Specs in `e2e/` cover homepage, apps listing/detail, domains, and narrow viewport. Config: `playwright.config.ts`. After UI/layout work, run e2e before considering the task done.

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

When the user types `/graphify`, use the installed graphify skill or instructions before doing anything else.

Rules:

- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- Dirty graphify-out/ files are expected after hooks or incremental updates; dirty graph files are not a reason to skip graphify. Only skip graphify if the task is about stale or incorrect graph output, or the user explicitly says not to use it.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
