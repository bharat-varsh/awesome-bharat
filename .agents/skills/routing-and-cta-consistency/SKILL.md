---
name: routing-and-cta-consistency
description: Centralize and enforce cross-collection URL and primary CTA behavior across cards, listings, and detail pages. Use when adding new collections or fixing link/CTA drift.
---

# Routing And CTA Consistency

Use this skill for route prefix rules and CTA completeness across all collections.

## Core Rules

- Collection key persons maps to public route /people.
- All other collections map to /{collection}/{slug}.
- Cross-collection cards must use one shared href resolver utility.
- Primary CTA label and URL must be deterministic per collection.

## Read First

1. src/utils/ctaUtils.ts
2. src/utils/collectionsToScan.ts
3. src/components/ContentCard.astro
4. src/components/ContentCardFull.astro
5. src/components/RelatedItem.astro
6. src/pages/domains/[domain].astro

## Implementation Pattern

1. Create or update src/utils/routeUtils.ts with getEntryHref(collection, slug).
2. Replace inline href construction in all card-like components.
3. Extend CTA utilities for all configured collections.
4. Ensure mixed-collection pages call the same route and CTA utilities.
5. Expand collectionsToScan.ts to include all active collections when required.

## CTA Coverage Checklist

- apps -> Download or Contribute (existing behavior)
- persons -> Follow/Visit
- companies -> Visit
- channels -> Subscribe
- products -> Buy
- blogs -> Read
- projects -> Contribute
- communities -> Join
- podcasts -> Listen
- initiatives -> Get Involved

## Validation

```bash
npm run check
npm run build
npm run test:e2e
```

## Done Criteria

- No links point to /persons/\*.
- Card, listing, and related-item links are consistent.
- Every active collection has a primary CTA label and URL strategy.
