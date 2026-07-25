---
name: collection-surface-shipping
description: Ship the seven schema-only collections into live product surface by adding seed content, listing routes, detail routes, and navigation exposure with CTA and routing consistency checks.
---

# Collection Surface Shipping

Use this skill for the collection-surface expansion task group when task instructions are provided as pasted text.

Collections in scope:
- channels
- products
- blogs
- projects
- communities
- podcasts
- initiatives

## Required Inputs

- Selected task IDs for this collection-surface group (for example: 4.1, 4.2, 4.3, 4.4)
- Whether to run single task or multi-task batch
- Whether AGENTS.md post-task-group updates are required in this run

## Read First

1. Pasted global execution rules
2. Pasted selected task blocks for collection-surface work
3. CODE_REPORT.md (collection coverage, CTA, routing findings)
4. src/content/config.ts
5. src/utils/ctaUtils.ts
6. src/utils/collectionsToScan.ts
7. src/components/ContentCard.astro
8. src/components/ContentCardFull.astro
9. src/components/RelatedItem.astro
10. src/pages/apps/index.astro
11. src/pages/apps/[slug].astro
12. src/components/AppSidebar.tsx
13. src/pages/index.astro

## Implementation Tracks

### Track A - Seed Content (Task 4.1)

1. Create folders under src/content/ for all seven collections if missing.
2. Add at least 2 non-draft entries per collection.
3. Ensure frontmatter matches src/content/config.ts exactly.
4. Keep body concise and action-oriented.
5. Validate all links are real and reachable.

### Track B - Listing Pages (Task 4.2)

1. Add index routes for all seven collections under src/pages/{collection}/index.astro.
2. Reuse apps listing pattern (hero + grid cards).
3. Filter draft entries.
4. Sort featured first, then schema-appropriate field (date or name).
5. Use CTA label and URL utilities for card actions.

### Track C - Detail Pages (Task 4.3)

1. Add [slug].astro routes for all seven collections.
2. Reuse shared detail layout patterns; avoid app-only assumptions.
3. Show primary CTA above the fold.
4. Render type-specific metadata and external links.
5. Include related content where supported.

### Track D - Navigation and Homepage Exposure (Task 4.4)

1. Add sidebar links for the new routed collections.
2. Add homepage sections so new types are discoverable.
3. Keep responsive behavior aligned with existing components.
4. Ensure no links rely on raw collection-to-route assumptions that break persons -> people mapping.

## Cross-Cutting Rules

- Do not modify docs/.
- Keep route generation centralized through route utility logic.
- Keep CTA mapping aligned with ctaUtils behavior.
- Keep tags/categories/domains scans aligned with collectionsToScan when activating new types.
- Preserve existing design language from src/styles/global.css.

## Validation

```bash
npm run check
npm run build
npm run test:e2e
```

## Done Criteria

- Seven collections each have valid seed content.
- Listing and detail routes exist and resolve.
- Primary CTA is visible and functional on each new type.
- New collections are discoverable via nav and homepage.
- AGENTS.md update bullets are fully applied when this task group is completed.
