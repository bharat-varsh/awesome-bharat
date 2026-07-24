# Analysis of grok-suggestions.md — Current State vs. Recommendations

## What the file recommends

The file proposes a phased approach to reduce AI agent token waste and improve workflow on this Astro + MDX content site. Here's my assessment:

## Advantages Table

| # | Suggestion | Category | Key Advantage | Effort | Priority |
|---|------------|----------|---------------|--------|----------|
| 1 | Unify AGENTS.md / claude.md — kill the duplicate, keep one canonical doc | Hygiene | Eliminates ~1.2K tokens loaded every turn; removes doc drift between two nearly-identical files | 🟢 Low | 🔴 High |
| 2 | Add agent ignore files (.cursorrules, .gitignore additions) — exclude docs/, node_modules/, OLD-INSTRUCTIONS/, only-reference/ from agent context | Hygiene | Prevents agents from re-reading build output and stale docs; biggest free token savings | 🟢 Low | 🔴 High |
| 3 | Add a check script — astro check + lint separate from full build | Verification | Faster mid-task feedback loops (5s vs 30s+); agents iterate faster | 🟢 Low | 🔴 High |
| 4 | Create short agent skills — add-content-entry, ui-layout-change, schema-change | Agent Instructions | 30-line skill saves more tokens than Graphify for repetitive content tasks | 🟡 Medium | 🟡 Medium |
| 5 | Task cards — structured planning/current_task.md with goal, files-in-scope, done-criteria | Agent Instructions | Keeps agents from wandering; reduces "vague task" token waste | 🟡 Medium | 🟡 Medium |
| 6 | Stacklit or Graphify — knowledge graph / module map of src/ + planning/ | Navigation | Agents ask relational questions ("what uses resolveLogo?") without grepping every file | 🟡 Medium | 🟡 Medium |
| 7 | Repomix with --compress — pack repo into one AI-friendly file for handoffs | Navigation | Great for cold-start handoffs (paste into ChatGPT/Claude web) and PR reviews | 🟡 Medium | 🟡 Medium |
| 8 | Playwright / browser MCP — click through layouts after UI work | Verification | Catches "looks fine in code, broken in DOM" bugs before they ship | 🟡 Medium | 🟡 Medium |
| 9 | Content scaffold CLI — script to generate new app/person/company MDX + image registry stub | Content Factory | Saves 5-10 min per content entry; enforces schema compliance | 🟡 Medium | 🟢 Low |
| 10 | Repomix presets per task type — content-only vs full UI presets | Navigation | Fine-grained context loading; avoids dumping irrelevant files | 🟢 Low | 🟢 Low |
| 11 | Multi-agent worktree isolation — parallel agents on separate branches | Orchestration | Prevents agents from stomping each other on large features | 🟢 Low | 🟢 Low |

## What's already done vs. what needs work

| Area | Status | Notes |
|------|--------|-------|
| AGENTS.md exists | ✅ Done | But claude.md is a near-duplicate — needs consolidation |
| planning/ docs | ✅ Done | 11 well-structured files |
| npm run build as done-gate | ✅ Done | Already the standard |
| Zod schemas in config.ts | ✅ Done | Comprehensive — 10 collection types |
| Image registry | ✅ Done | imageRegistry.ts + imageResolvers.ts |
| Agent ignore files | ❌ Missing | No .cursorrules, no .gitignore for docs/, OLD-INSTRUCTIONS/ |
| Split check script | ❌ Missing | No separate fast-feedback script |
| Agent skills | ✅ Done | `skills/{add-content-entry,ui-layout-change,schema-change}/SKILL.md` |
| Task card template | ✅ Done | `planning/current_task.md` — goal, scope, do-not-touch, done-criteria |
| Graphify / Stacklit | ✅ Done | `graphifyy` + `npm run graphify` → `graphify-out/`; `.graphifyignore` |
| Repomix | ✅ Done | `repomix.config.json` + `npm run pack` → `repomix-output.md` |
| Browser testing | ✅ Done | Playwright `e2e/smoke.spec.ts` + `npm run test:e2e` |
| Content scaffold CLI | ✅ Done | `scripts/scaffold-content.mjs` + `npm run scaffold` |
| OLD-INSTRUCTIONS/ cleanup | ⚠️ Stale | Contains only IMPROVEMENTS.md and empty future-planning/ |
| implementation-plan/ | ⚠️ Stale | 4 files that may overlap with planning/ |

## My Recommended Implementation Plan

### Phase A — This session (highest ROI, lowest effort):

1. Consolidate `claude.md` into `AGENTS.md` — Delete `claude.md`, keep `AGENTS.md` as the single source of truth. This saves ~1.2K tokens per agent turn.
2. Add agent ignore rules — Update `.gitignore` to exclude `docs/` (build output) from agent context, and add notes to `AGENTS.md` about what agents should skip (`OLD-INSTRUCTIONS/`, `only-reference/`, `implementation-plan/`).
3. Add a `check` script to `package.json` — `astro check && eslint .` for fast mid-task validation without a full build.
4. Clean up stale directories — Archive or remove `OLD-INSTRUCTIONS/` and `implementation-plan/` if they're no longer referenced.

### Phase B — Next session (medium effort):

5. Create agent skills — 3 short workflow files in a new `skills/` directory:
   - `add-content-entry.md` — step-by-step for adding apps/persons/companies
   - `ui-layout-change.md` — how to modify components safely
   - `schema-change.md` — how to modify `config.ts` and what to update
6. Structure `planning/current_task.md` — Rewrite as a task card template with: goal, files-in-scope, done-criteria, "do not touch" list.
7. Install Repomix — `npx repomix --ignore "docs/**,node_modules/**,OLD-INSTRUCTIONS/**,only-reference/**,implementation-plan/**"` for cold-start handoffs.

### Phase C — Later (when exploration feels expensive):

8. ~~Install Graphify~~ ✅ — `pip install graphifyy`; skill via `graphify install`; graph via `npm run graphify` (`python -m graphify . --code-only`). Output: `graphify-out/`.
9. ~~Add Playwright/browser MCP~~ ✅ — Playwright smoke tests in `e2e/`; `npm run test:e2e` (starts Astro dev server). Browser MCP optional later for interactive agent browsing.
10. ~~Build content scaffold CLI~~ ✅ — `npm run scaffold -- <type> <slug> [--title] [--logo]`.
