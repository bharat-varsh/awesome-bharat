# Current Task Card

Copy this template for each agent session. Keep it short. Update status as you go.

---

## Goal

<!-- One sentence: what done looks like -->


## Type

<!-- Content | UI | Schema | Infra | Research -->


## Files in scope

<!-- Only these paths (and new files under them) -->

- 

## Do not touch

<!-- Hard off-limits -->

- `docs/` (build output)
- `OLD-INSTRUCTIONS/`, `only-reference/`, `implementation-plan/` (stale)
- 

## Done criteria

<!-- Checkboxes — task is not done until all pass -->

- [ ] 
- [ ] `npm run check` passes
- [ ] `npm run build` passes (if content/schema/UI changed)

## Read first

<!-- 2–5 paths max -->

- `AGENTS.md`
- 

## Skill / workflow

<!-- Optional: load one skill -->

- `skills/add-content-entry` | `skills/ui-layout-change` | `skills/schema-change` | —

## Notes

<!-- Blockers, decisions, links -->


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
