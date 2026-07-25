# Current Task Card

Copy this template for each agent session. Keep it short. Update status as you go.

---

## Goal

Phase C complete: Graphify, Playwright smoke tests, content scaffold CLI.

## Type

Infra

## Files in scope

- `package.json`, `.gitignore`, `.graphifyignore`, `repomix.config.json`
- `playwright.config.ts`, `e2e/`
- `scripts/scaffold-content.mjs`
- `AGENTS.md`, `skills/*`, `frebuff-suggestions.md`

## Do not touch

- `docs/` (build output)
- `OLD-INSTRUCTIONS/`, `only-reference/`, `implementation-plan/` (stale)

## Done criteria

- [x] Graphify installed + graph built (`graphify-out/`, gitignored)
- [x] Playwright e2e smoke tests pass (`npm run test:e2e`)
- [x] Content scaffold CLI works (`npm run scaffold`)
- [x] AGENTS.md documents graphify / scaffold / e2e
- [ ] `npm run check` passes

## Read first

- `AGENTS.md`
- `frebuff-suggestions.md` (Phase C)

## Skill / workflow

- —

## Notes

- Prefer `python -m graphify` on Windows if `graphify.exe` is blocked by App Control.
- Browser MCP not added (Playwright covers UI verification for agents).

---

## Example (filled)

### Goal

Add two real YouTube channel entries under `channels` to validate the schema.

### Type

Content

### Files in scope

- `src/content/channels/`
- `src/utils/imageRegistry.ts` (if logos added)
- `src/assets/images/` (if logos added)

### Do not touch

- `docs/`
- `OLD-INSTRUCTIONS/`, `only-reference/`, `implementation-plan/`
- Unrelated apps/persons MDX

### Done criteria

- [ ] Two non-draft channel MDX files with complete frontmatter + 150–400 word bodies
- [ ] Logos registered if used
- [ ] `npm run check` passes
- [ ] `npm run build` passes

### Read first

- `AGENTS.md`
- `planning/CONTENT-GUIDELINES.md`
- `src/content/config.ts` (channels schema)
- `src/content/apps/mindful.mdx` (quality bar)

### Skill / workflow

- `skills/add-content-entry`

### Notes

Research must use real channels; no invented subscriber counts.
