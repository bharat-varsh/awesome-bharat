### Task 5.2 - Introduce domain opportunities content model and section shell

Context:

- planning/CONTENT-ARCHITECTURE.md and ROADMAP Phase 4 define opportunities as differentiator.
- Implement shell first, then fill content iteratively.

Read first:

- planning/CONTENT-ARCHITECTURE.md (Opportunities section)
- planning/CONTENT-GUIDELINES.md (Opportunities writing)
- src/content/config.ts

Files to change:

- src/content/config.ts (new domains collection schema if absent)
- src/content/domains/\*.mdx (new)
- src/components (new opportunities section component)
- src/pages/domains/[domain].astro

Implementation steps:

1. Add or finalize schema for domain opportunities data blocks.
2. Render section conditionally only when data exists.
3. Start with one domain pilot entry and verify rendering.

Validation:

- npm run check
- npm run build

Done criteria:

- At least one domain page shows an Opportunities section with real structured data.

### AGENTS.md update after completing the task

Update AGENTS.md with these exact changes:

1. Add a new section describing Opportunities data flow:
    - schema location,
    - content folder,
    - render component,
    - domain page integration point.
2. Add one short rule in Agent Context:
    - For domain work, verify both grouped content results and opportunities block rendering.
