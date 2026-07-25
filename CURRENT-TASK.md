### Task 2.1 - Add valid default OG image and fix twitter creator placeholder

Context:

- CODE_REPORT confirms SEO.astro default image is /og-image.jpg, but file is missing.
- twitter:creator is currently "@" placeholder.

Read first:

- src/components/SEO.astro
- public/

Files to change:

- public/og-image.jpg (new)
- src/components/SEO.astro

Implementation steps:

1. Add a real 1200x630 og-image.jpg in public.
2. Keep default OG image path in SEO.astro pointing to that file.
3. Replace twitter handle placeholder with real account or remove twitter:creator tag when unknown.
4. Ensure no broken meta URL values are emitted.

Short snippet pattern:

```astro
const twitterHandle = "@awesomebharat";
```

Or:

```astro
{twitterHandle && <meta property="twitter:creator" content={twitterHandle} />}
```

Validation:

- npm run build
- Inspect built HTML meta tags in docs/ for one page

Done criteria:

- Default OG URL resolves.
- No twitter:creator content="@" remains.
