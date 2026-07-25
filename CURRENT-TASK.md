### Task 1.4 - Package hygiene cleanup

Context:

- CODE_REPORT identifies:
    - @fontsource-variable/geist unused.
    - shadcn CLI in dependencies instead of devDependencies.

Read first:

- package.json
- src/layouts/BaseLayout.astro (verify actual imported fonts)

Files to change:

- package.json

Implementation steps:

1. Remove unused @fontsource-variable/geist.
2. Move shadcn from dependencies to devDependencies.
3. Keep lockfile update in same commit.

Validation:

- npm install
- npm run check
- npm run build

Done criteria:

- Dependency sections reflect runtime vs tooling usage correctly.

### AGENTS.md update

Update AGENTS.md with these exact changes:

1. In Known Issues and Design Decisions, remove items fixed in this phase:
    - People/Companies route gap
    - /persons vs /people link mismatch
    - SVG format override issue
    - formatCategoryName capitalization bug
2. In Project Structure, add the new pages:
    - src/pages/people/index.astro
    - src/pages/people/[slug].astro
    - src/pages/companies/index.astro
    - src/pages/companies/[slug].astro
3. In Key Commands or workflow notes, keep npm run check as mandatory mid-task gate.
