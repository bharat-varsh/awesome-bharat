### Task 6.3 - Contributor workflow hardening (✅ COMPLETED)

**Changes implemented:**

**CONTRIBUTING.md (rewritten):**
- Per-collection required/recommended/editorial fields tables (collapsible `<details>` sections)
- Body content guidelines (length, structure, closing CTA pattern)
- Quality checklist with 10 verification items
- Validation sequence (validate script → check → build)
- Common pitfalls table with fixes
- Per-type mapping: collection folder, route prefix, primary CTA, schema key

**scripts/validate-entry.mjs (new):**
- Frontmatter completeness & quality checker for all 10 collections
- Custom YAML parser handling nested objects (authors, members, platforms, howToHelp), block scalars, inline arrays
- Checks: schema-required fields, editorial requirements, author/member slug validity, logo/avatar file existence, body quality, CTA readiness, URL validity
- Slug caching for cross-collection validation
- Exit code 0 = clean, 1 = errors found
- Usage: `node scripts/validate-entry.mjs`, `npm run validate`

**AGENTS.md (updated):**
- Added `## Quality Gates` section: Code, Content, SEO, Accessibility gates
- Added `## Contributor Workflow` section with scaffold → fill → validate → verify flow
- Added `## Maintenance Checklist` section: Route Mapping, CTA Mapping, Feeds & SEO, Validation Script
- Quality gates reference in existing task-type table

**package.json:**
- Added `"validate"` script: `node scripts/validate-entry.mjs`

**Validation:**
- ✅ `npm run check` — clean (no new errors)
- ✅ `npm run validate` — 0 errors across 20 entries, 45 editorial warnings

### AGENTS.md update after completing the task

Already completed — see AGENTS.md changes above.
