### Task 1.1 - Fix category name formatting bug

Context:

- CODE_REPORT confirms formatCategoryName lowercases words incorrectly.
- Current bad output example: booksAndReference -> Books and reference.
- Required output: Books And Reference.

Read first:

- src/utils/textUtils.ts
- src/pages/categories/[category].astro

Files to change:

- src/utils/textUtils.ts

Implementation steps:

1. Locate formatCategoryName().
2. Keep camelCase split logic.
3. Remove final blanket lowercasing.
4. Ensure each token is capitalized.

Short snippet pattern:

```ts
return splitWords
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
```

Validation:

- npm run check
- npm run build

Done criteria:

- Category headings show proper title case for all camelCase categories.
