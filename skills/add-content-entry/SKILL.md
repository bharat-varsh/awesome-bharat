---
name: add-content-entry
description: Add a curated app, person, company, channel, product, blog, project, community, podcast, or initiative MDX entry. Use when creating new content, filling frontmatter, registering logos, or verifying schema-compliant entries.
---

# Add Content Entry

Short workflow for new curated entries. Full editorial rules: `planning/CONTENT-GUIDELINES.md`. Schemas: `src/content/config.ts`.

## Steps

1. **Research** — Confirm Indian-made/led, noteworthy, active; collect name, URLs, socials, logo. Check collection for duplicates.
2. **Pick collection** — `src/content/{apps|persons|companies|channels|products|blogs|projects|communities|podcasts|initiatives}/`
3. **Slug** — kebab-case lowercase filename: `my-app.mdx`
4. **Frontmatter** — Match schema exactly. Fill every field you can. Required by type:
   - Apps: title, description, authors, type, devices, source, paid, ads, offline, categories, tags
   - Persons: name · Companies: name · Channels: name, description, channelUrl, topics, tags
   - Products: name, description, tags · Blogs: name, description, url, topics, tags
   - Projects: name, description, repositoryUrl, tags · Communities: name, description, platform, joinUrl, tags
   - Podcasts: name, description, platforms, topics, tags · Initiatives: name, description, tags
5. **Authors** — App/product authors need existing `persons/` or `companies/` slugs (create those first if missing).
6. **Body** — 150–400 words: hook → 2–4 short sections → punchy closer. Templates in CONTENT-GUIDELINES.
7. **Logo** (optional) — File → `src/assets/images/` → import + key in `src/utils/imageRegistry.ts` (key = slug). Set `logo` frontmatter if filename ≠ slug.
8. **Verify** — `npm run check` mid-task; `npm run build` before done.

## Reference entry

`src/content/apps/mindful.mdx` — complete frontmatter + body pattern.

## Do not

- Invent URLs, metrics, or unverified claims
- Use plain string image paths with Astro `<Image>`
- Skip `domains` / CTA links when they exist
- Leave `draft: true` unless intentionally hidden
