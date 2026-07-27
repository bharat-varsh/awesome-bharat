### Task 4.1 - Create collection folders and minimum seed content

Context:

- CODE_REPORT confirms these schemas exist but directories/content are missing.
- Without content, routes and discovery pages remain empty.

Read first:

- src/content/config.ts
- planning/CONTENT-GUIDELINES.md
- scripts/scaffold-content.mjs

Files to change:

- src/content/channels/\*.mdx (new)
- src/content/products/\*.mdx (new)
- src/content/blogs/\*.mdx (new)
- src/content/projects/\*.mdx (new)
- src/content/communities/\*.mdx (new)
- src/content/podcasts/\*.mdx (new)
- src/content/initiatives/\*.mdx (new)

Implementation steps:

1. Add at least 2 non-draft entries per collection.
2. Fill required frontmatter exactly as schema expects.
3. Keep body concise (150-400 words) and action-oriented.
4. Ensure links are valid and real.

Validation:

- npm run check
- npm run build

Done criteria:

- All seven collections have real, non-draft content entries passing schema checks.
