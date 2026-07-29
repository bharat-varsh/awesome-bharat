# Code Report

Codebase: Awesome Bharat
Assessed: 2026-07-25
Scope: Configuration validity, package completeness, code quality, and library conformance. The `planning/` folder was excluded from analysis by instruction.

---

## Table of Contents

1. [Tech Stack Overview](#1-tech-stack-overview)
2. [Package Configuration](#2-package-configuration)
3. [Tailwind v4 Configuration](#3-tailwind-v4-configuration)
4. [shadcn/ui Configuration and Component Usage](#4-shadcnui-configuration-and-component-usage)
5. [TypeScript and Path Aliases](#5-typescript-and-path-aliases)
6. [Astro Configuration](#6-astro-configuration)
7. [ESLint Configuration](#7-eslint-configuration)
8. [Content Collections Schema vs. File System](#8-content-collections-schema-vs-file-system)
9. [Page Routes vs. Navigation Links](#9-page-routes-vs-navigation-links)
10. [CTA and Cross-Cutting Utilities Coverage](#10-cta-and-cross-cutting-utilities-coverage)
11. [Image Handling](#11-image-handling)
12. [SEO and Public Assets](#12-seo-and-public-assets)
13. [Search (Pagefind)](#13-search-pagefind)
14. [Component Architecture](#14-component-architecture)
15. [Previously Documented Bugs -- Current State](#15-previously-documented-bugs----current-state)
16. [Other Notable Observations](#16-other-notable-observations)
17. [Summary Table](#17-summary-table)

---

## 1. Tech Stack Overview

| Layer         | Library / Version                                         |
| ------------- | --------------------------------------------------------- |
| Framework     | Astro 5.x (`^5.16.6`)                                     |
| Styling       | Tailwind CSS v4 (`^4.3.3`) via `@tailwindcss/vite` plugin |
| UI components | shadcn/ui (style: `radix-nova`) + Radix UI v1 monorepo    |
| Interactivity | React 19 (`^19.2.8`) via `@astrojs/react`                 |
| Icons         | Lucide React (`^1.26.0`)                                  |
| Content       | Astro Content Collections with Zod schemas                |
| Search        | Pagefind (`^1.5.2`) - Component UI (web components)       |
| E2E tests     | Playwright (`^1.61.1`)                                    |
| Build output  | `/docs` directory (GitHub Pages)                          |

---

## 2. Package Configuration

### `package.json`

The dependency list is coherent and up-to-date. All declared packages serve an identifiable purpose in the codebase with one exception.

**Unused dependency:**
`@fontsource-variable/geist` is declared in `dependencies` but is never imported anywhere in `src/`. The active typefaces are `@fontsource-variable/inter` and `@fontsource-variable/fraunces`, both imported in `BaseLayout.astro`. Geist has no import site in any component, layout, or CSS file.

**`radix-ui` vs. `@radix-ui/*` packages:**
The codebase correctly uses `radix-ui ^1.6.5` -- the new unified monorepo package -- rather than the individual `@radix-ui/*` scoped packages. The import `import { Slot } from "radix-ui"` in `button.tsx` confirms this is used as intended.

**`shadcn` CLI as a runtime dependency:**
`shadcn ^4.14.1` is in `dependencies` rather than `devDependencies`. The shadcn CLI is a code-generation tool and has no runtime presence in the built output. It should be in `devDependencies`.

**`pagefind` placement:**
`pagefind ^1.5.2` is correctly in `devDependencies` since it is a build-time postprocessor.

**Script notes:**

- `"build"` runs `astro check && astro build`, which validates TypeScript before building. This is correct.
- `"prebuild"` runs `format && lint`. This means every `npm run build` reformats and lints the entire project first. This is effective for CI but can be slow locally.
- `"postbuild"` runs `npx pagefind --site docs`, which builds the search index after Astro outputs to `./docs`. This is the correct wiring for Pagefind.

---

## 3. Tailwind v4 Configuration

Tailwind v4 uses a CSS-first configuration model. There is no `tailwind.config.mjs` or `tailwind.config.ts` file, which is correct for v4.

**`global.css` structure:**

```
@import 'tailwindcss';        -- core (correct)
@import 'tw-animate-css';     -- animation utilities (correct)
@import 'shadcn/tailwind.css'; -- shadcn base layer (correct)
@plugin '@tailwindcss/typography'; -- prose plugin (correct v4 syntax)
@custom-variant dark (...);   -- class-based dark mode (correct)
@theme { ... }                -- custom brand tokens (correct)
@theme inline { ... }         -- shadcn semantic token bridge (correct)
:root { ... }                 -- light mode CSS variables
.dark { ... }                 -- dark mode CSS variables
@layer base { ... }           -- global resets
@layer components { ... }     -- custom component classes (.ab-card, etc.)
@layer utilities { ... }      -- custom utility classes
```

This is a well-structured and valid Tailwind v4 configuration. All v4-specific syntax (`@theme`, `@theme inline`, `@plugin`, `@custom-variant`) is used correctly.

**Dual color scale coexistence:**
The file defines both a numbered ramp (`--color-primary-50` through `--color-primary-950`) and semantic shadcn tokens (`--color-primary: var(--primary)`). This is intentional -- the numbered ramp supports Tailwind utility classes like `text-primary-600` while the semantic tokens support shadcn component classes like `bg-primary`. This dual system is valid and consistent throughout the file.

**`components.json` alignment:**
The `"config": ""` field (empty string) in `components.json` is correct for Tailwind v4 -- no external config file is needed. The `"css"` field correctly points to `src/styles/global.css`.

---

## 4. shadcn/ui Configuration and Component Usage

### `components.json`

```json
{
    "style": "radix-nova",
    "rsc": false,
    "tsx": true,
    "tailwind": { "config": "", "css": "src/styles/global.css", ... },
    "aliases": { "components": "@/components", "ui": "@/components/ui", ... }
}
```

- `rsc: false` is correct -- this is not a Next.js RSC project.
- `tsx: true` is correct -- React components use `.tsx`.
- All path aliases match `tsconfig.json` paths. Consistent.

### Installed Components

The following 10 shadcn components exist under `src/components/ui/`:

| Component       | Used Where                                                               |
| --------------- | ------------------------------------------------------------------------ |
| `badge.tsx`     | `ContentCardFull.astro`, `CollectionHero.astro`, `ContentLayout.astro`   |
| `button.tsx`    | `ThemeToggle.tsx`, `CardRow.astro`, `AppSidebarLayout.tsx` (via sidebar) |
| `card.tsx`      | **Not used anywhere**                                                    |
| `input.tsx`     | Internally by `sidebar.tsx` only                                         |
| `label.tsx`     | Internally by `sidebar.tsx` only                                         |
| `separator.tsx` | `AppSidebarLayout.tsx`, `Engage.astro`                                   |
| `sheet.tsx`     | Internally by `sidebar.tsx` only                                         |
| `sidebar.tsx`   | `AppSidebarLayout.tsx`, `AppSidebar.tsx`                                 |
| `skeleton.tsx`  | Internally by `sidebar.tsx` only                                         |
| `tooltip.tsx`   | `AppSidebarLayout.tsx` (via `TooltipProvider`)                           |

**`card.tsx` is installed but never used.**
All content card UI in this project is built with the custom `.ab-card` CSS class defined in `global.css`. The shadcn `Card`, `CardHeader`, `CardContent`, `CardFooter` components from `card.tsx` are not imported or rendered anywhere.

**`input.tsx`, `label.tsx`, `sheet.tsx`, `skeleton.tsx`:**
These are present only because `sidebar.tsx` imports them. They do not have standalone usage outside the sidebar. This is fine -- they are transitive requirements of the sidebar component.

**`"use client"` in `sidebar.tsx`:**
The shadcn CLI generated `"use client"` as the first line of `sidebar.tsx`. In a Next.js RSC context this directive marks a client component. In this Astro + React project, this directive is parsed by React but has no effect. It is harmless but semantically meaningless. Since `rsc: false` in `components.json`, this directive could be removed without impact.

**shadcn-eligible components that remain custom:**
The following UI elements in this codebase are implemented without shadcn but have direct shadcn equivalents that were available to install:

| Custom implementation                        | Equivalent shadcn component        |
| -------------------------------------------- | ---------------------------------- |
| `ContentCard.astro` (compact card)           | `Card` (already installed, unused) |
| `ContentCardFull.astro` (grid card)          | `Card` (already installed, unused) |
| Inline CTA dropdown in `ContentLayout.astro` | `DropdownMenu`                     |
| `screenshots` horizontal scroller            | `Carousel`                         |
| `YouTubeEmbed.astro` horizontal scroller     | `Carousel`                         |

This is an editorial choice and not necessarily wrong -- the `.ab-card` class applies brand-specific hover effects (gradient wash, shadow transition) that a bare shadcn Card would not. It is noted here for completeness.

---

## 5. TypeScript and Path Aliases

`tsconfig.json` extends `astro/tsconfigs/strict`, which is the correct and recommended base for Astro projects.

```json
{
    "compilerOptions": {
        "module": "ESNext",
        "moduleResolution": "bundler",
        "baseUrl": ".",
        "paths": { "@/*": ["./src/*"] },
        "jsx": "react-jsx",
        "jsxImportSource": "react"
    }
}
```

- `"moduleResolution": "bundler"` is correct for Vite-based Astro projects.
- `"jsx": "react-jsx"` and `"jsxImportSource": "react"` correctly configure React JSX transform for `.tsx` files.
- The `@/` alias maps to `./src/`, matching `astro.config.mjs` which also sets `resolve.alias["@"] -> ./src`. Both are consistent.
- `include: ["src", "astro.config.mjs"]` and `exclude: ["node_modules", "docs"]` are correct.

---

## 6. Astro Configuration

`astro.config.mjs` is well-formed and complete for the project's needs.

```js
export default defineConfig({
    site: 'https://awesomebharat.com',
    integrations: [mdx(), react(), sitemap()],
    vite: {
        plugins: [tailwindcss()],
        resolve: { alias: { '@': ... } },
        build: { cssMinify: 'lightningcss' }
    }
});
```

- `site` is set, which is required for sitemap generation and canonical URL resolution.
- Sitemap integration is present. The build output contains `sitemap-index.xml` and `sitemap-0.xml` in `docs/`.
- `lightningcss` is declared as the CSS minifier and is present in `devDependencies`. This is correct.
- MDX integration is present. Content entries in `src/content/` use `.mdx` extension.
- `outDir` is not set in `astro.config.mjs` -- it is passed as a CLI flag (`--outDir ./docs`) in the `build` script. This is valid but means running `astro build` directly (without the npm script) would output to the default `./dist` instead of `./docs`.

**Markdown config note:**
`shikiConfig` is set with `theme: 'github-dark'`. This only applies to fenced code blocks in MDX content. Content entries in this project do not appear to use code blocks, making this a no-op configuration.

---

## 7. ESLint Configuration

`eslint.config.js` uses ESLint v9 flat config format, which is correct for the declared `eslint: ^9.18.0`.

- `@eslint/js` recommended rules
- `typescript-eslint` recommended rules
- `eslint-plugin-astro` recommended rules for `.astro` files
- `docs/**`, `.astro/**`, `node_modules/**` correctly ignored

The only custom rules are:

- `@typescript-eslint/no-unused-vars`: warn (not error), with pattern ignores for `_` prefixes
- `@typescript-eslint/no-explicit-any`: warn (not error)

No Prettier or formatting rules are in the ESLint config -- Prettier is run independently via the `format` script, which avoids rule conflicts. This is correct.

---

## 8. Content Collections Schema vs. File System

`src/content/config.ts` defines 10 collections and exports them all:

```
apps, persons, companies, channels, products, blogs,
projects, communities, podcasts, initiatives
```

The actual directories that exist under `src/content/`:

| Collection    | Directory exists | Content files present                   |
| ------------- | ---------------- | --------------------------------------- |
| `apps`        | Yes              | Yes (at least: mindful, neend, linkora) |
| `persons`     | Yes              | Present (not inspected individually)    |
| `companies`   | Yes              | Present (not inspected individually)    |
| `channels`    | **No**           | --                                      |
| `products`    | **No**           | --                                      |
| `blogs`       | **No**           | --                                      |
| `projects`    | **No**           | --                                      |
| `communities` | **No**           | --                                      |
| `podcasts`    | **No**           | --                                      |
| `initiatives` | **No**           | --                                      |

Seven collections have complete Zod schemas but no corresponding content directories, no MDX entries, and no page routes. Astro silently returns an empty array for `getCollection('channels')` etc., so there is no build error. However, these collections are entirely invisible in the running application.

**Schema completeness:**
All 10 schemas are well-formed. Each uses appropriate Zod types, has `draft` and `featured` boolean flags with defaults, and uses the shared `domainEnum`, `authorSchema`, and `linkSchema` where applicable. The `apps` schema is the most detailed and is internally consistent with what `ContentLayout.astro` expects.

**Cross-schema field naming inconsistency:**
There is no shared `title` vs. `name` convention. `apps` uses `title`, all other collections use `name`. This asymmetry is handled in `collectionsToScan.ts` via `getEntryTitle()`, but any code that directly accesses `.data.title` on a non-app entry will be incorrect. The `ContentLayout.astro` Props interface accepts `title: string` and all currently routed content (apps only) uses `app.data.title` correctly.

---

## 9. Page Routes vs. Navigation Links

The left sidebar navigation (defined in `BaseLayout.astro`) exposes these links:

| Nav label | href         | Page file exists                      |
| --------- | ------------ | ------------------------------------- |
| Home      | `/`          | Yes - `src/pages/index.astro`         |
| Domains   | `/domains`   | Yes - `src/pages/domains/index.astro` |
| Apps      | `/apps`      | Yes - `src/pages/apps/index.astro`    |
| People    | `/people`    | **No**                                |
| Companies | `/companies` | **No**                                |

There are no files at `src/pages/people/index.astro`, `src/pages/people/[slug].astro`, `src/pages/companies/index.astro`, or `src/pages/companies/[slug].astro`.

**Impact:**

- Clicking "People" in the nav produces a 404.
- Clicking "Companies" in the nav produces a 404.
- `ContentCard` components on the homepage link persons to `/people/{slug}` -- all produce 404s.
- `ContentCard` components link companies to `/companies/{slug}` -- all produce 404s.
- Domain pages (`/domains/{domain}`) render person and company entries via `ContentCardFull`, which links to `/{collection}/{slug}`, i.e., `/persons/{slug}` and `/companies/{slug}`. The collection name used in routing is `persons` (not `people`), so this particular path would also 404 since there is no route at `/persons/`.

**Note on collection name vs. route name:**
The schema collection is named `persons` but the intended route is `/people`. This mismatch means `ContentCardFull` uses `collection` as the path prefix, generating links to `/persons/{slug}` on domain pages. The homepage manually constructs `/people/{slug}`. There is no single consistent path for person entries.

---

## 10. CTA and Cross-Cutting Utilities Coverage

### `ctaUtils.ts`

Implements `getCTALinks`, `getPrimaryCTALabel`, and `getPrimaryCTAUrl`. The logic covers only three cases:

```
apps     -> storeLinks / repositoryLinks
persons  -> website
companies -> website
```

The other 7 defined collection types (channels, products, blogs, projects, communities, podcasts, initiatives) have no CTA logic. Each of these has semantically distinct primary CTAs (e.g., "Subscribe" for channels, "Listen" for podcasts, "Buy" for products, "Join" for communities), none of which are implemented.

### `collectionsToScan.ts`

Defines `SCANNED_COLLECTIONS = ['apps', 'persons', 'companies']`. This constant controls which collections are indexed for:

- Domain pages (`/domains/[domain].astro`)
- Tag pages (`/tags/[tag].astro`)
- Category pages (`/categories/[category].astro`)

The other 7 collections are excluded from all cross-cutting discovery surfaces. This is internally consistent with their absence from the file system, but any future content in those collections would not appear on these pages without updating `SCANNED_COLLECTIONS`.

### `relatedContent.ts`

`SupportedCollection` type is `'apps' | 'persons' | 'companies'`. Matching fields are configured per collection:

- `apps`: tags, categories, authors
- `persons`: tags only
- `companies`: tags only

The related content logic is functionally correct for its covered scope.

---

## 11. Image Handling

### `imageRegistry.ts`

```
default  -> brand-logo.svg  (fallback)
linkora  -> linkora.png
mindful  -> mindful.png
neend    -> neend.webp
```

**Unused assets in `src/assets/images/`:**

- `default-card-image.png` -- a dedicated default card image exists but is commented out, replaced by `brand-logo.svg`. This means content cards fall back to displaying the brand logo when no specific image is available.
- `mindful-banner.png` and `mindful.webp` -- two additional variants of the Mindful images are on disk but not registered.

**Commented-out registrations:**
Three page-level images (`linkora-hero`, `linkora-architecture`, `linkora-flow`) are commented out in both the import statements and the registry object. These suggest planned detail page usage that was not implemented.

**`resolveLogo` resolution order:**
The function resolves: explicit `logo` filename -> slug-based lookup -> `default`. This is safe. The default fallback (brand-logo.svg) is always present and Astro's `<Image>` component receives a proper `ImageMetadata` object in all cases.

**`format="webp"` on SVG assets:**
`Engage.astro` passes `format="webp"` when rendering SVG icons (e.g., `addIcon`, `bugIcon`). Astro will attempt to convert SVGs to WebP, which either fails silently or outputs an unexpected result. SVG files should be rendered with `<Image>` without a `format` override, or as plain `<img>` tags.

---

## 12. SEO and Public Assets

### Default OG Image

`SEO.astro` defaults to:

```js
image = '/og-image.jpg';
```

There is no `og-image.jpg` in the `public/` directory. When a page does not pass an explicit `image` prop, the generated `<meta property="og:image">` tag will point to a broken URL.

### Twitter Handle

`SEO.astro` has:

```js
const twitterHandle = '@';
```

The `<meta property="twitter:creator">` tag will render as `content="@"`. This is a placeholder value that has not been filled.

### `public/` Directory

Contents:

- `favicon.ico` -- present and linked in BaseLayout
- `favicon-old.ico` -- stale file, no longer referenced
- `CNAME` -- GitHub Pages custom domain config, correct
- `.nojekyll` -- prevents GitHub Pages from processing with Jekyll, correct
- `images/` -- directory present (build output mirrors this)

No `robots.txt` is present in `public/`. The `<meta name="robots" content="index, follow">` tag in SEO.astro handles basic crawler guidance but `robots.txt` is the standard machine-readable mechanism.

---

## 13. Search (Pagefind)

Search is implemented using the newer Pagefind Component UI (web components: `<pagefind-config>`, `<pagefind-searchbox>`) rather than the older `@pagefind/default-ui` JavaScript API.

**Build-time dependency:**
Pagefind only works after `npm run build`. The postbuild script runs `npx pagefind --site docs`, which crawls the built HTML and writes the search index to `docs/pagefind/`. In development (`npm run dev`), there is no Pagefind index, so search produces no results.

**Dev mode fallback:**
`Search.astro` contains a fallback element:

```html
<div class="pagefind-ui-placeholder ... hidden"></div>
```

The `hidden` class means this fallback is invisible in both dev and production. The comment says "Fallback for dev mode" but the element is never shown.

**`data-pagefind-body`:**
`BaseLayout.astro` adds `data-pagefind-body` to the main content wrapper. `ContentLayout.astro` also adds it to the `<article>` element. Both are correct -- Pagefind indexes only content within these elements.

---

## 14. Component Architecture

### `.astro` vs. `.tsx` split

The project uses a correct hybrid model:

- `.astro` components: static/server-rendered layout, content display, SEO
- `.tsx` components: interactive UI (sidebar, theme toggle) rendered with `client:load` or `client:idle`

Astro components that need shadcn components import and use them correctly. For example, `CollectionHero.astro` and `ContentCardFull.astro` import `{ Badge }` from `@/components/ui/badge` -- which works because Astro can render React components in a static context as long as they have no client-side hooks.

### `BaseLayout.astro` -- `getCollection` calls

`BaseLayout.astro` fetches `apps`, `persons`, and `companies` on every page render to compute nav item counts. Astro memoizes `getCollection` calls within a single build, so this does not cause redundant file reads. It is correct behavior.

### `CardRow.astro` scroll script

The horizontal scroll logic for `CardRow` is a `<script>` block in `src/pages/index.astro`, not inside `CardRow.astro` itself. `CardRow` uses `data-scroll-container` attributes on its buttons. The event listener that reads these attributes is only attached by the homepage script.

If `CardRow` were ever used on a page other than `index.astro`, the scroll buttons would render but clicking them would do nothing. Currently `CardRow` is only used on the homepage, so this does not cause a visible bug.

### `particles.ts` loading

`BaseLayout.astro` loads particles via:

```html
<script src="../scripts/particles.ts"></script>
```

Astro processes this TypeScript file and bundles it. The script runs on `DOMContentLoaded` and respects `prefers-reduced-motion`. This is correct.

---

## 15. Previously Documented Bugs -- Current State

The codebase had several documented issues. Their current state:

| Documented issue                                                 | Current state                                                                                                        |
| ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Footer not rendered                                              | Fixed -- `Footer.astro` is imported and rendered in `BaseLayout.astro`                                               |
| `ContentLayout` uses `items-center` causing sidebar scroll issue | Fixed -- layout uses `items-start`                                                                                   |
| Store badges duplicated in `ContentLayout`                       | Fixed -- `StoreBadges` is rendered once, after the prose slot                                                        |
| Homepage carousel uses inline `onclick` scroll handlers          | Fixed -- uses `data-scroll-container` attributes and proper event listeners                                          |
| `aspectRatio` prop on `<Image>`                                  | No instances found -- resolved                                                                                       |
| Secondary color scale documented as inverted                     | The scale in the current `global.css` is correctly ordered (50 = lightest, 950 = darkest) -- documentation was stale |

---

## 16. Other Notable Observations

**`prose-dark` class:**
`ContentLayout.astro` applies `prose prose-lg dark:prose-dark`. The `prose-dark` modifier was a custom addition in Tailwind Typography v0.4 and was removed in v0.5+. In Tailwind v4 with the typography plugin, dark mode prose is handled via the `dark:` variant and CSS variable overrides in `global.css`. The `dark:prose-dark` class is a no-op but harmless.

**`formatCategoryName` output:**
The `formatCategoryName` function in `textUtils.ts` converts camelCase to "title case" but then calls `.toLowerCase()` on the entire result after capitalizing the first character. This means "booksAndReference" becomes "Booksandreference" rather than "Books And Reference". The intermediate split on uppercase chars produces the correct spaced version but the final `toLowerCase()` call eliminates the inter-word capitalization.

Example: "booksAndReference" -> split produces "books And Reference" -> `.charAt(0).toUpperCase() + .slice(1).toLowerCase()` produces "Books and reference".

**`CollectionHero` in `apps/index.astro`:**
The apps listing passes `ctaLabel="View More"` to `ContentCardFull` rather than the actual CTA label ("Download", "Contribute"). The `getPrimaryCTAUrl` is called to get the URL, but the label is hardcoded to a generic string.

**RSS feed scope:**
`rss.xml.ts` generates a feed that only includes `apps`. Persons and companies are not included, and the feed description says "Latest content from all areas" -- which is inaccurate given only apps are present.

**`domain/[domain]/rss.xml.ts`:**
A per-domain RSS feed route exists at `src/pages/domains/[domain]/rss.xml.ts`. This means every domain has its own feed. However, these feeds also only pull from whatever collections the domain logic covers. The consistency of this with the root RSS feed is unchecked.

**`@ts-expect-error` / type assertions:**
`apps/[slug].astro` uses `as Array<CollectionEntry<'apps'>>` type assertions throughout. These are necessary because Astro's `getCollection` return type inference can be ambiguous in some configurations. This is a minor style point but is consistent across the codebase.

---

## 17. Summary Table

| Area                        | Status                           | Notes                                                                             |
| --------------------------- | -------------------------------- | --------------------------------------------------------------------------------- |
| `package.json` dependencies | Mostly valid                     | `@fontsource-variable/geist` unused; `shadcn` CLI should be `devDependency`       |
| Tailwind v4 config          | Valid and complete               | CSS-first config is correct                                                       |
| `components.json`           | Valid                            | Aligned with Tailwind v4 and path aliases                                         |
| shadcn component coverage   | Partial                          | `card.tsx` installed but unused; 7 collection types have no CTA logic             |
| TypeScript config           | Valid                            | Correct base, aliases consistent across configs                                   |
| Astro config                | Valid                            | `outDir` passed via CLI flag, not config                                          |
| ESLint config               | Valid                            | Flat config, appropriate rules                                                    |
| Content schemas             | Complete for 3 of 10 collections | 7 collections have schemas but no content or routes                               |
| Page routes                 | Incomplete                       | `/people` and `/companies` nav links produce 404s                                 |
| Image registry              | Functional but minimal           | Fallback is brand-logo; `default-card-image.png` unused; some images unregistered |
| OG image                    | Missing                          | `/og-image.jpg` default does not exist in `public/`                               |
| Twitter handle SEO          | Placeholder                      | Value is `'@'`                                                                    |
| Search (Pagefind)           | Build-only                       | Dev mode fallback element is hidden                                               |
| `CardRow` scroll script     | Scoped to homepage               | Script is in `index.astro`, not in `CardRow.astro`                                |
| SVG image format override   | Issue                            | `Engage.astro` passes `format="webp"` to SVG assets                               |
| `formatCategoryName`        | Bug                              | `.toLowerCase()` strips inter-word capitalization                                 |
| RSS feed accuracy           | Inaccurate label                 | Says "all areas" but only covers apps                                             |
