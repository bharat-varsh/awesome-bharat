---
name: seo-feed-search-hardening
description: Fix SEO metadata, RSS scope accuracy, and Pagefind dev/prod clarity based on provided task instructions and CODE_REPORT.md findings.
---

# SEO Feed Search Hardening

Use this skill for metadata, feed, and search consistency tasks.

## Read First

1. src/components/SEO.astro
2. src/pages/rss.xml.ts
3. src/pages/domains/[domain]/rss.xml.ts
4. src/components/Search.astro
5. package.json (postbuild pagefind command)

## Track A - OG and Twitter Metadata

1. Ensure default OG asset exists in public/ and matches SEO.astro default path.
2. Replace placeholder twitter creator value.
3. If no confirmed handle exists, render twitter:creator only when value is defined.
4. Verify generated meta tags in built output.

## Track B - RSS Scope Accuracy

Choose one complete approach:

- Option A: Keep apps-only feed and update title/description copy to match.
- Option B: Expand feed entries to include additional routed collections.

After implementing, confirm item scope matches feed copy.

## Track C - Search UX Clarity

1. Detect missing Pagefind index in development.
2. Show visible helper text in dev mode.
3. Keep production behavior unchanged when index exists.

## Validation

```bash
npm run check
npm run build
npm run dev
```

In dev, verify helper text appears when index is unavailable. In build output, verify metadata and rss contents are correct.

## Done Criteria

- OG default URL resolves.
- No twitter creator placeholder remains.
- RSS description matches actual feed scope.
- Search no longer fails silently in dev.
