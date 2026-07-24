# Agentic Vibe-Coding: Tooling Suggestions for Awesome Bharat

Practical toolkit for agentic vibe-coding on a repo like **Awesome Bharat** — Astro + MDX content, schemas, dual taxonomy, lots of planning docs, multi-agent use (Claude/Grok/etc.). Focused on real ROI at this size, not “install everything.”

---

## What actually burns tokens in this codebase

This repo is **not** a 500k-line monorepo. Waste usually comes from:

1. **Agents re-exploring** — grepping `src/`, re-reading schemas, re-deriving “how domains/tags work”
2. **Doc sprawl** — `AGENTS.md` + `Claude.md` (near-duplicates) + `planning/*` + `implementation-plan/*` + `OLD-INSTRUCTIONS/`
3. **Build output** — `docs/` (HTML, `_astro`, pagefind) pulled into context
4. **Vague tasks** — agents wander instead of hitting the few files that matter (`config.ts`, layouts, one page template)

Graphify-style tools help **(1)** and **(2)**. Hygiene + ignore rules often beat fancy tools for **(3)** and **(4)**.

---

## 1. Context / navigation (token reduction)

| Tool                                                               | What it does                                                                       | Fit for Awesome Bharat                                                                                                                          | Priority                 |
| ------------------------------------------------------------------ | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| **[Graphify](https://graphify.net/)**                              | Knowledge graph from code + docs; agent queries subgraphs instead of dumping files | Strong for “how does X connect to Y?” across `src/` + `planning/`. Claimed ~71× is on big mixed corpora; expect **solid but smaller** wins here | **High once repo grows** |
| **[Stacklit](https://github.com/glincker/stacklit)**               | Tree-sitter module map (~hundreds of tokens), commitable artifact                  | Cheap “map of the codebase” for any agent; good baseline                                                                                        | **High, low cost**       |
| **[Repomix](https://github.com/yamadashy/repomix)** (`--compress`) | Pack repo into one AI-friendly file                                                | Great for **one-shot** ChatGPT/Claude web, handoffs, PR reviews — not every interactive turn                                                    | **Medium**               |
| **Aider repo-map**                                                 | PageRank + tree-sitter tags                                                        | Only if you use Aider; same idea as Stacklit                                                                                                    | Optional                 |
| **Codebase-Memory / Axon (MCP)**                                   | Live call graphs via MCP server                                                    | Overkill for a static Astro site today                                                                                                          | Skip for now             |

### Honest take on Graphify

Graphify shines when agents ask _relational_ questions (“what uses `resolveLogo`?”, “how do domains relate to categories?”, “blast radius of changing the content schema”). It does **not** replace:

- schema validation (`astro check`)
- a tight `AGENTS.md`
- ignoring `docs/` and `node_modules/`

### Practical order

1. **Ignore + slim agent entry docs** (free, immediate)
2. **Stacklit or Graphify** once exploration noise is annoying
3. **Repomix** for paste-into-web / cold-start handoffs

```bash
# Graphify (package name is graphifyy)
pip install graphifyy && graphify install
# then in agent: /graphify .

# Repomix — exclude build noise
npx repomix --ignore "docs/**,node_modules/**,OLD-INSTRUCTIONS/**"
```

---

## 2. Agent instruction engineering (often bigger ROI than Graphify)

You already have strong planning docs. The upgrade is **progressive disclosure**, not more prose.

| Practice                                        | Why                                                                                   |
| ----------------------------------------------- | ------------------------------------------------------------------------------------- |
| **One short root `AGENTS.md`** (~100–200 lines) | Always loaded; links out to deep docs                                                 |
| **Kill / generate `Claude.md` from one source** | Duplicate instructions = double tokens + drift                                        |
| **Topic skills / skills files**                 | e.g. `content-entry`, `design-system`, `new-collection` — load only when needed       |
| **`.cursorignore` / agent ignore**              | Always exclude `docs/`, `node_modules/`, `only-reference/`, `OLD-INSTRUCTIONS/`       |
| **Task cards**                                  | `planning/current_task.md` style: goal, files in scope, done criteria, “do not touch” |

Pattern that works well on content sites:

```text
AGENTS.md              → identity, stack, commands, “read X when doing Y”
planning/              → vision/architecture (human + agent, on demand)
.skills/ or .claude/   → workflows: add-app, fix-layout, new-domain
```

**Rule of thumb:** If the agent must read 5k tokens of philosophy to add one MDX app, the doc layout is wrong — not the model.

---

## 3. Verification loop (makes vibe-coding safe)

Agents ship more when **checks are cheap and automatic**.

| Tool / practice                            | Role                                                                    |
| ------------------------------------------ | ----------------------------------------------------------------------- |
| **`npm run build`** as done-gate           | Already encoded in project docs; keep it non-negotiable                 |
| **Split scripts**                          | `check` (astro check + lint) vs full `build` — faster mid-task feedback |
| **Playwright MCP / browser MCP**           | Click through layouts, mobile nav, domain pages after UI work           |
| **Pagefind + schema**                      | Content/search correctness without manual hunting                       |
| **TypeScript strict + Zod in `config.ts`** | Best “agent guardrails” you have — treat schema as source of truth      |

For UI-heavy work (sidebar, cards, themes), a browser tool pays for itself in fewer “looks fine in code, broken in DOM” loops.

---

## 4. Workflow / multi-agent orchestration

| Approach                      | When                                                                    |
| ----------------------------- | ----------------------------------------------------------------------- |
| **Plan → implement → review** | Feature work: plan agent (read-only) → implement → separate review pass |
| **Worktree isolation**        | Parallel agents (layout vs content vs docs) without stomping each other |
| **Graphite / stacked PRs**    | If shipping multi-step features as reviewable slices                    |
| **Session resume skills**     | When bouncing Claude ↔ Grok; resume tools reduce re-briefing cost       |

Avoid infinite multi-agent theater on a small site. **Two roles** (implementer + verifier) beat five personas.

---

## 5. Content-site-specific accelerators

These matter more for this project than for a typical SaaS backend:

| Tool / idea                                                     | Why                                                                            |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| **Content scaffolds / generators**                              | Script or skill: “new app” → MDX frontmatter + image registry stub + checklist |
| **Zod schema as single source of truth**                        | Point agents at `src/content/config.ts` first, always                          |
| **Image registry skill**                                        | “Add logo” workflow: file → `imageRegistry.ts` → resolve path                  |
| **Editorial checklist skill**                                   | From `CONTENT-GUIDELINES.md` — short, not the full essay                       |
| **Repomix of _only_ `src/content/config.ts` + one example MDX** | Fastest onboarding for content-only tasks                                      |

A 30-line “add app” skill will save more tokens than Graphify on pure content tasks.

---

## 6. IDE / agent clients — pick a primary, don’t collect them

| Client                             | Strength                                          |
| ---------------------------------- | ------------------------------------------------- |
| **Claude Code / Codex / Grok CLI** | Deep multi-step repo work, skills, shell          |
| **Cursor**                         | Fast UI iteration, inline edits                   |
| **Aider**                          | Git-native, repo-map, cheap models for bulk edits |
| **Continue.dev**                   | Open, local-friendly                              |

**Recommendation:** one **deep agent** (CLI) + one **IDE assistant**. Switching every hour costs more than any graph tool saves.

---

## 7. What to skip (or defer) for this repo size

- Full **vector RAG** over your own `src/` — search/grep + graph is enough
- Heavy **Neo4j** setups — Graphify’s local graph is enough if you need graphs
- **Repomix every turn** — too fat for interactive coding
- Indexing **`docs/`** or **`node_modules/`** — pure noise
- Obsessing over **71.5×** marketing numbers — the win is “fewer wrong files,” not that multiplier

---

## Suggested stack for Awesome Bharat (phased)

### Phase A — this week (highest ROI)

1. **Unify agent entry docs** — one `AGENTS.md`, generate or drop `Claude.md`
2. **Ignore lists** — `docs/`, `node_modules/`, `OLD-INSTRUCTIONS/`, `only-reference/`
3. **Keep `npm run build` as the definition of done**
4. **Short skills:** `add-content-entry`, `ui-layout-change`, `schema-change`

### Phase B — when exploration feels expensive

5. **Graphify** on `src/` + `planning/` for architecture questions
6. **Stacklit** (or Graphify report) as a committed map for cold starts
7. **Playwright / browser MCP** for layout/sidebar work

### Phase C — scale / content factory

8. **Scaffold CLI** for new apps/persons/companies
9. **Repomix presets** per task type (content-only vs full UI)
10. **Multi-agent only** for large features (new collection type, redesign)

---

## Decision guide

```text
Task is "add an app / person"?
  → skill + schema + example MDX  (not Graphify)

Task is "why is related content wrong?" / "refactor image resolution"?
  → Graphify or Stacklit map + targeted files

Task is "paste whole project into ChatGPT"?
  → Repomix --compress with ignores

Task is "sidebar looks broken on mobile"?
  → browser MCP + build  (not more docs)
```

---

## Bottom line

- **Graphify is a good idea** for structural understanding and cutting exploratory grepping — especially as content types and planning docs grow.
- For _this_ repo **today**, bigger wins are usually: **doc progressive disclosure, ignore build output, schema-first skills, and a hard verify loop**.
- Treat Graphify/Stacklit as **navigation accelerators**, not as a substitute for clear agent instructions and `astro check`.
