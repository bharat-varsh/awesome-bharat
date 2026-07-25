### Task 1.3 - Remove invalid SVG format override in Engage component

Context:

- CODE_REPORT flags format="webp" on SVG assets in Engage.astro.
- SVG should be rendered as SVG without forced conversion.

Read first:

- src/components/Engage.astro

Files to change:

- src/components/Engage.astro

Implementation steps:

1. Find Image usages where source is SVG.
2. Remove format="webp" for those usages.
3. Keep width/height/alt intact.

Validation:

- npm run check
- npm run build

Done criteria:

- No SVG image in Engage forces webp conversion.
