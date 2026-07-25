---
name: agents-doc-sync
description: Apply required AGENTS.md updates after each completed task group so project docs stay aligned with implemented behavior.
---

# AGENTS Doc Sync

Use this skill immediately after completing a task group that includes AGENTS.md update instructions.

## Purpose

Keep AGENTS.md aligned with real routes, collections, CTA mappings, and workflow gates.

## Read First

1. Pasted AGENTS.md update instructions from the selected task group
2. AGENTS.md current content
3. Files changed in the completed task group

## Procedure

1. Copy the exact AGENTS update bullets from the provided task instructions.
2. Confirm each bullet reflects current code state.
3. Update only the relevant AGENTS.md sections.
4. Remove stale known-issue entries that were fixed.
5. Add new route or utility references required by the completed task group.

## Quality Gates

- Every AGENTS.md statement must be verifiable in code.
- Do not leave contradictory notes in Known Issues.
- Do not add speculative future-state claims.

## Validation

```bash
npm run check
npm run build
```

If AGENTS changes mention routing or CTA behavior, also run:

```bash
npm run test:e2e
```

## Done Criteria

- Required AGENTS updates are fully applied.
- No stale warnings remain for already-fixed items.
- New contributors can follow AGENTS.md without conflicting guidance.
