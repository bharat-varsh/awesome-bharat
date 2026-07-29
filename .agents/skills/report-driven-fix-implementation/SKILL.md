---
name: report-driven-fix-implementation
description: Implement concrete fixes from CODE_REPORT.md by mapping each finding to target files, patch steps, and verification. Use for integrity, routing, SEO, image, and search issues.
---

# Report Driven Fix Implementation

Use this skill when addressing findings from CODE_REPORT.md.

## Priority Order

1. Broken routes and user-facing 404s
2. Data or rendering correctness bugs
3. SEO and metadata breakage
4. Build/search behavior clarity
5. Dependency hygiene and cleanup

## Mapping Template

For each finding, capture:

- Finding ID or heading in CODE_REPORT.md
- User-visible impact
- Files to modify
- Minimal fix strategy
- Validation commands
- Regression checks

## Common Fix Tracks

- Routing mismatches:
    - Add missing pages under src/pages/
    - Normalize href generation in shared utility
- Formatting/data bugs:
    - Fix utility logic in src/utils/
    - Add focused checks where data is consumed
- SEO:
    - Ensure referenced assets exist in public/
    - Remove placeholder tags when value unknown
- Search:
    - Keep prod behavior
    - Add explicit dev helper text when index unavailable
- Package hygiene:
    - Move tooling packages to devDependencies
    - Remove unused runtime dependencies

## Validation Matrix

```bash
npm run check
npm run build
npm run test:e2e
```

Use all three for route, layout, or navigation changes. Use check + build for utility-only or metadata-only changes unless task requires e2e.

## Done Criteria

- Original finding is no longer reproducible.
- No new lint/type/content schema errors.
- Navigation and generated links resolve correctly.
- Behavior matches expected output documented in the provided task instructions.
