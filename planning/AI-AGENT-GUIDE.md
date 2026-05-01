# Awesome Bharat — AI Agent Development Guide

The primary reference for AI agents doing daily work on Awesome Bharat. Covers code conventions, content creation workflows, feature development workflows, and quality checklists.

---

## Table of Contents

1. [Project Setup](#project-setup)
2. [Commands](#commands)
3. [Code Conventions](#code-conventions)
4. [Content Creation Workflow](#content-creation-workflow)
5. [Feature Development Workflow](#feature-development-workflow)
6. [Quality Checklist](#quality-checklist)
7. [Common Pitfalls](#common-pitfalls)
8. [File Naming Conventions](#file-naming-conventions)
9. [Cross-References Between Entries](#cross-references-between-entries)

---

## Project Setup

```bash
# Clone and install
git clone <repo-url>
cd awesome-bharat
npm install

# Development
npm run dev          # Start dev server (http://localhost:4321)

# Verification
npm run build        # Full build: format → lint → astro check → astro build → ./docs
npm run preview      # Preview production build locally
```

**Requirements**: Node.js 18+, npm

---

## Commands

| Command            | Purpose                                               | When to Use                     |
| ------------------ | ----------------------------------------------------- | ------------------------------- |
| `npm run dev`      | Start dev server with hot reload                      | During active development       |
| `npm run build`    | Full production build (format + lint + check + build) | Before committing ANY change    |
| `npm run preview`  | Preview built site locally                            | After build, to visually verify |
| `npm run lint`     | ESLint check                                          | Quick syntax/style check        |
| `npm run lint:fix` | ESLint auto-fix                                       | Fix lint issues                 |
| `npm run format`   | Prettier formatting                                   | Auto-format all files           |

**Critical**: Always run `npm run build` before considering any task complete. This catches TypeScript errors, schema validation failures, and broken imports.

---

## Code Conventions

### Path Aliases

Use `@/` prefix consistently for all imports from `src/`:

```typescript
// ✅ Correct
import BaseLayout from '@/layouts/BaseLayout.astro';
import { resolveLogo } from '@/utils/imageResolvers';
import ContentCard from '@/components/ContentCard.astro';

// ❌ Wrong
import BaseLayout from '../../layouts/BaseLayout.astro';
import { resolveLogo } from '@utils/imageResolvers';
```

### Component Structure

Astro components follow this order:

```astro
---
// 1. Imports (external packages first, then internal)
import { getCollection } from 'astro:content';
import BaseLayout from '@/layouts/BaseLayout.astro';
import { formatDate } from '@/utils/dateUtils';

// 2. Props interface
interface Props {
    title: string;
    description?: string;
}

// 3. Props destructuring
const { title, description } = Astro.props;

// 4. Data fetching and computation
const apps = await getCollection('apps', ({ data }) => !data.draft);
const sortedApps = apps.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
---

<!-- 5. Template markup -->
<div class="...">
    <h1>{title}</h1>
</div>

<!-- 6. Script (if needed) -->
<script>
    // Client-side interactivity
</script>

<!-- 7. Scoped styles (if needed, prefer Tailwind classes) -->
<style>
    /* Component-specific styles only */
</style>
```

### TypeScript

- Use explicit types for function parameters and return values
- Use Zod schemas from `config.ts` as the source of truth for types
- Avoid `any` — use `unknown` + type narrowing if needed
- Export utility functions from `src/utils/` — no inline logic in templates

### Tailwind CSS

- Prefer utility classes over custom CSS
- Use component extraction for repeated patterns (Astro components, not `@apply`)
- Class ordering: layout → sizing → spacing → typography → colors → effects → responsive
- Always include dark mode variants for visible elements: `dark:bg-secondary-800 dark:text-gray-100`
- Use semantic color tokens (see `planning/DESIGN-SYSTEM.md`)

### Astro Image Handling

```astro
---
// ✅ Import from imageRegistry
import { resolveLogo } from '@/utils/imageResolvers';
const logoSrc = resolveLogo(slug, data.logo);
---

<!-- ✅ Use Astro Image component with imported asset -->
<Image src={logoSrc} alt={title} width={96} height={96} format="webp" />

<!-- ❌ NEVER use plain string paths -->
<Image src="/images/logo.png" ... />
```

### Script Blocks for Interactivity

```astro
<!-- ✅ Use data attributes for DOM queries -->
<button data-scroll-left>←</button>
<div data-scroll-container class="overflow-x-auto">...</div>
<button data-scroll-right>→</button>

<script>
    document.querySelectorAll('[data-scroll-left]').forEach((btn) => {
        btn.addEventListener('click', () => {
            const container = btn
                .closest('[data-scroll-wrapper]')
                ?.querySelector('[data-scroll-container]');
            container?.scrollBy({ left: -300, behavior: 'smooth' });
        });
    });
</script>

<!-- ❌ NEVER use inline onclick handlers -->
<button onclick="this.nextElementSibling.scrollBy(...)"></button>
```

---

## Content Creation Workflow

Use this workflow when adding new entries (apps, people, companies, channels, etc.).

### Step 1: Research

- Identify the subject (app, person, company, etc.)
- Gather: name, description, website, social links, images
- Verify: Is it genuinely Indian-made/led? Is it impressive/noteworthy?
- Check: Does it already exist in the collection?

### Step 2: Create MDX File

Create in the appropriate collection folder with the correct slug:

```
src/content/apps/app-name.mdx
src/content/persons/person-name.mdx
src/content/companies/company-name.mdx
src/content/channels/channel-name.mdx
...
```

### Step 3: Write Frontmatter

Follow the schema exactly as defined in `src/content/config.ts`. All required fields must be present. Reference `planning/CONTENT-ARCHITECTURE.md` for field documentation.

```yaml
---
title: App Name
description: >
    One paragraph (2-3 sentences) explaining what this is and why it's notable.
    Hook the reader. Be specific about what makes it special.
authors:
    - slug: creator-name
      type: person
type: app
devices:
    - mobile
source: open-source
paid: false
ads: false
offline: true
categories:
    - productivity
domains:
    - technology
tags:
    - relevant-tag
    - another-tag
website: https://...
storeLinks:
    - label: Play Store
      url: https://play.google.com/store/apps/details?id=...
date: 2024-01-15
draft: false
---
```

### Step 4: Write Body Content

The MDX body is a **teaser** — spark interest, don't write an encyclopedia.

- **150–400 words maximum**
- Lead with the most compelling hook
- Use 2-4 short sections with bold headings
- Highlight what makes it unique/special
- End with a punchy one-liner
- Include emoji sparingly for visual energy
- No generic filler text

See `planning/CONTENT-GUIDELINES.md` for full editorial guidelines.

### Step 5: Handle Images

If the entry has a logo/avatar:

1. Add the image file to `src/assets/images/` (WebP preferred, PNG acceptable)
2. Register it in `src/utils/imageRegistry.ts`:

```typescript
// In the imageMap object:
'app-slug': import('@/assets/images/app-slug.webp'),
```

3. The `resolveLogo(slug)` function will automatically find it by slug

### Step 6: Create Cross-References

- If the app has an author, ensure the person/company entry exists
- If the entry references another entry, verify slugs match
- Add relevant tags that connect to other entries

### Step 7: Verify

```bash
npm run build
```

Must pass with zero errors. Common failures:

- Missing required frontmatter fields
- Invalid enum values (typo in category/domain)
- Slug reference to non-existent person/company
- Unregistered image

---

## Feature Development Workflow

Use this workflow when building new features or UI components.

### Step 1: Check Roadmap

Read `planning/ROADMAP.md` to identify:

- Which phase is currently active
- What task to work on next
- Dependencies and prerequisites

### Step 2: Understand Requirements

Read the task description in ROADMAP.md. Cross-reference:

- `planning/DESIGN-SYSTEM.md` for visual patterns
- `planning/CONTENT-ARCHITECTURE.md` for data structures
- Existing similar components for implementation patterns

### Step 3: Implement

Follow these patterns:

**New Component**:

1. Create `src/components/ComponentName.astro`
2. Define `Props` interface
3. Implement markup with Tailwind classes
4. Include dark mode variants
5. Add to relevant pages

**New Page Type**:

1. Create `src/pages/[type]/index.astro` (listing)
2. Create `src/pages/[type]/[slug].astro` (detail)
3. Implement `getStaticPaths()` for dynamic routes
4. Use existing layouts (`BaseLayout`, `ContentLayout`)
5. Add to sidebar navigation

**New Utility**:

1. Create in `src/utils/` with descriptive name
2. Export typed functions
3. Add JSDoc for non-obvious logic
4. Import where needed

### Step 4: Verify

```bash
npm run build
```

Additionally:

- Check visually in dev mode (`npm run dev`)
- Test responsive behavior (mobile, tablet, desktop)
- Verify dark mode appearance
- Check that existing pages aren't broken

---

## Quality Checklist

Before considering ANY task complete, verify all items:

### For Content Entries

- [ ] `npm run build` passes
- [ ] All required frontmatter fields present and valid
- [ ] Description is 2-3 sentences, hook-style
- [ ] MDX body is 150-400 words
- [ ] At least one CTA-relevant link exists (storeLinks, website, etc.)
- [ ] Author slug references valid person/company entry (or create one)
- [ ] Tags are lowercase kebab-case
- [ ] Domains use valid enum values
- [ ] Logo/images registered in imageRegistry (if provided)
- [ ] `draft: false` (unless intentionally drafting)

### For Feature/Component Work

- [ ] `npm run build` passes
- [ ] Component works in light mode AND dark mode
- [ ] Component is responsive (mobile → desktop)
- [ ] No inline `onclick` handlers (use `<script>` blocks)
- [ ] Images use `imageRegistry` / Astro `<Image>`, not plain strings
- [ ] Path aliases use `@/` consistently
- [ ] No TypeScript `any` types
- [ ] Tailwind classes include dark mode variants for visible elements
- [ ] No duplicate/redundant CSS
- [ ] Accessibility: proper `alt` texts, semantic HTML, keyboard navigable

---

## Common Pitfalls

### Image Registry

**Problem**: Adding an image file but forgetting to register it.
**Fix**: Always add to `src/utils/imageRegistry.ts` after placing the file in `src/assets/images/`.

### Schema Validation

**Problem**: Build fails with cryptic Zod errors.
**Fix**: Check `src/content/config.ts` for the exact field types. Common issues:

- Using `"open"` instead of `"open-source"` for source
- Missing `date` field (required for apps)
- Using array for single-value field or vice versa

### Draft vs Published

**Problem**: New entry doesn't appear on site.
**Fix**: Check `draft` field. Set to `false` to publish. All collection queries filter out drafts.

### Slug Matching

**Problem**: Author reference doesn't resolve.
**Fix**: The `slug` in `authors: [{ slug: 'name', type: 'person' }]` must exactly match the filename (without `.mdx`) of the person/company entry.

### Related Content

**Problem**: "You might also like" shows nothing.
**Fix**: Add meaningful tags. The related content system scores by matching tags, categories, and authors. Entries need at least one shared tag.

### Build Output

**Problem**: Changes not appearing in deployed site.
**Fix**: Build outputs to `./docs/`. Run `npm run build` and verify the HTML files in `docs/` reflect changes.

### Astro Image Component

**Problem**: `<Image>` renders broken or unoptimized.
**Fix**:

- Never pass plain string paths (`"/images/foo.png"`)
- Always use imported assets or the imageRegistry
- Set explicit `width` and `height`
- Don't use deprecated `aspectRatio` prop

---

## File Naming Conventions

### Content Entries (MDX)

| Collection  | Naming Pattern                         | Example                               |
| ----------- | -------------------------------------- | ------------------------------------- |
| Apps        | `app-name.mdx` (lowercase, kebab-case) | `mindful.mdx`, `google-pay.mdx`       |
| Persons     | `first-last.mdx`                       | `pawan-nagar.mdx`, `priya-sharma.mdx` |
| Companies   | `company-name.mdx`                     | `last-hope-devs.mdx`, `razorpay.mdx`  |
| Channels    | `channel-name.mdx`                     | `fireship.mdx`, `code-with-harry.mdx` |
| Products    | `product-name.mdx`                     | `boat-rockerz.mdx`                    |
| Blogs       | `blog-name.mdx`                        | `daily-dev-tips.mdx`                  |
| Projects    | `project-name.mdx`                     | `upi-spec.mdx`                        |
| Communities | `community-name.mdx`                   | `reactjs-india.mdx`                   |
| Podcasts    | `podcast-name.mdx`                     | `the-ken.mdx`                         |
| Initiatives | `initiative-name.mdx`                  | `clean-india-movement.mdx`            |

**Rules**:

- Always lowercase
- Use hyphens (kebab-case), never underscores or spaces
- Keep short but descriptive
- The filename IS the slug — it appears in the URL

### Components

| Type      | Pattern            | Example                                      |
| --------- | ------------------ | -------------------------------------------- |
| Layout    | `PascalCase.astro` | `BaseLayout.astro`, `ContentLayout.astro`    |
| Component | `PascalCase.astro` | `ContentCard.astro`, `AchievementCard.astro` |
| Utility   | `camelCase.ts`     | `ctaUtils.ts`, `domainUtils.ts`              |

### Images

| Type    | Pattern                  | Example                     |
| ------- | ------------------------ | --------------------------- |
| Logo    | `{slug}.{ext}`           | `mindful.png`, `neend.webp` |
| Badge   | `badge-{store}.svg`      | `badge-playstore.svg`       |
| Generic | `descriptive-name.{ext}` | `brand-logo.svg`            |

---

## Cross-References Between Entries

### Person ↔ App

The app references the person via `authors`:

```yaml
# In apps/mindful.mdx
authors:
    - slug: pawan-nagar # Must match persons/pawan-nagar.mdx filename
      type: person
```

### Company ↔ Person

The company references members:

```yaml
# In companies/last-hope-devs.mdx
members:
    - slug: pawan-nagar # Must match persons/pawan-nagar.mdx filename
      role: owner
```

### App ↔ Company

The app references the company as author:

```yaml
# In apps/neend.mdx
authors:
    - slug: purple-bot # Must match companies/purple-bot.mdx filename
      type: company
```

### Cross-Type via Tags

Entries across different collections connect through shared tags:

```yaml
# All these entries share the tag 'digital-detox' and will appear together on /tags/digital-detox/
# apps/mindful.mdx → tags: [digital-detox, focus]
# persons/digital-wellness-expert.mdx → tags: [digital-detox]
# channels/tech-detox.mdx → tags: [digital-detox, screen-time]
```

### Cross-Type via Domains

Entries connect through shared domains:

```yaml
# All these appear together on /domains/health/
# apps/neend.mdx → domains: [health]
# persons/sleep-researcher.mdx → domains: [health]
# initiatives/mental-health-india.mdx → domains: [health, mentalHealth]
```

---

## Reference Documents

| Document                           | When to Reference                                         |
| ---------------------------------- | --------------------------------------------------------- |
| `planning/VISION.md`               | Understanding project mission and boundaries              |
| `planning/CONTENT-ARCHITECTURE.md` | Schema details, taxonomy, Opportunities spec              |
| `planning/ROADMAP.md`              | What to work on next, phase dependencies                  |
| `planning/DESIGN-SYSTEM.md`        | UI patterns, colors, card designs, layouts                |
| `planning/CONTENT-GUIDELINES.md`   | How to write content, editorial voice, inclusion criteria |
| `src/content/config.ts`            | Source of truth for Zod schemas                           |
| `AGENTS.md`                        | Quick project overview (entry point)                      |
