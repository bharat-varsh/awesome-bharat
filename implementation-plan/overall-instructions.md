# Awesome Bharat — Implementation Plan ("Premium Editorial" Redesign)

This is a **self-contained, followable** execution guide. Each task lists the exact files, the exact current code to find, the exact replacement, and how to test. **A model executing any single task should not need to explore the codebase** — everything needed is inline.

---

## How to use this document

- Tasks are grouped into **Phases**. Do phases in order. Within a phase, tasks marked _(parallel-safe)_ touch disjoint files and can be done concurrently.
- **Phase 0 is BLOCKING** — nothing else works until it is done and the build passes.
- After finishing a task, run its **Test** block before moving on.
- All paths are relative to the repo root `awesome-bharat/`.

### Model-tier legend (which model can do a task)

| Tier              | Example model | Use for                                                                                                    |
| ----------------- | ------------- | ---------------------------------------------------------------------------------------------------------- |
| 🟢 **Nano**       | GPT-5.4-nano  | Trivial mechanical edits: typo fixes, single-token class swaps, find-and-replace with exact strings given. |
| 🔵 **Mini/Flash** | Haiku         | Straightforward single-file edits where full before/after is provided; no cross-file reasoning.            |
| 🟡 **Mid**        | Sonnet        | Multi-file components, layout judgment, extracting a shared component, careful edits in large files.       |
| 🔴 **Large**      | Opus          | Framework migration, cross-cutting token-system design, build debugging.                                   |

### Global rules for every task

- **Do not** introduce hardcoded hex colors in components. Use token classes (`primary-*`, `neutral-*`/`gray-*`, `secondary-*`, `accent-*`) which are defined in Phase 0.
- **Do not** change any content files (`src/content/**`) — this is a visual redesign only.
- Preserve all existing `id`, `data-*`, and `<script>` behavior unless a task explicitly says to change it.
- After each task, run `npm run build` and confirm no console/build errors.

### Design tokens available after Phase 0 (reference)

- Fonts: `font-sans` (Inter, body/UI), `font-serif` (Fraunces, display/headings). `h1/h2/h3` are serif by default.
- Colors (all have `50→950`): `primary-*` = refined **saffron/terracotta** accent; `secondary-*`, `gray-*`, `neutral-*` = warm **stone** neutral (identical values, cohesive). `accent-*` = alias of primary.
- Shadows: `shadow-card`, `shadow-card-hover` (neutral, layered — use instead of colored glows).
- Radius: `rounded-card` (1rem) available; `rounded-xl`/`rounded-2xl`/`rounded-full` as usual.
- Semantic CSS vars (if needed in raw CSS): `--surface`, `--surface-page`, `--surface-elevated`, `--border-subtle`, `--ink`, `--ink-muted`.

---
