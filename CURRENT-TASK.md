### Task 4.4 - Expand navigation and homepage sections for new collections

Context:

- Planning docs expect dual discovery by type and domain.
- After new routes exist, navigation must expose them.

Read first:

- src/components/AppSidebar.tsx
- src/pages/index.astro
- planning/ROADMAP.md (Phase 1 and 2 intent)

Files to change:

- src/components/AppSidebar.tsx
- src/pages/index.astro

Implementation steps:

1. Add sidebar nav entries for all newly routed collections.
2. Add homepage sections beyond latest apps where useful (featured people/companies plus at least one new type section).
3. Keep layout responsive and consistent with existing card rows/grid style.

Validation:

- npm run check
- npm run build
- npm run test:e2e

Done criteria:

- New collections are discoverable from primary navigation and homepage.

### AGENTS.md update after completing the task

Update AGENTS.md with these exact changes:

1. In Project Structure, add all new collection route folders and content folders.
2. In Content Collections section, mark the seven collections as active (not planned).
3. In Primary CTA table, ensure implemented labels and source fields match final ctaUtils behavior.
4. In Key Commands, keep scaffold command examples for these collection types.
