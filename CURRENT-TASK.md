### Task 2.2 - Correct RSS scope or copy

Context:

- CODE_REPORT notes rss.xml.ts description claims all content, but feed currently contains apps only.

Read first:

- src/pages/rss.xml.ts
- src/content/config.ts

Files to change:

- src/pages/rss.xml.ts

Implementation options (pick one and finish fully):

- Option A: Keep apps-only feed and rewrite title/description to explicitly say apps.
- Option B: Expand feed entries to include other routed collections (at minimum apps, persons, companies once their pages exist).

Short snippet pattern for Option A:

```ts
description: 'Latest apps from Awesome Bharat';
```

Validation:

- npm run check
- npm run build
- Open docs/rss.xml and verify copy and items align.

Done criteria:

- Feed scope and feed copy are consistent.
