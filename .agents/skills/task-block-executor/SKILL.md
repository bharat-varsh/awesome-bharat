---
name: task-block-executor
description: Execute one or more selected task blocks end-to-end with strict scope control, validation gates, and done-criteria checks. Use when tasks are provided as pasted instructions.
---

# Task Block Executor

Use this skill when implementing selected task blocks from pasted instructions.

## Inputs

- Task group and task IDs (example: 1.2, 2.3, 3.1)
- Whether to run single task or bundled tasks
- Whether AGENTS.md update instructions are required in this run

## Read First

1. Pasted global execution rules
2. Pasted selected task blocks
3. CODE_REPORT.md (if referenced by the pasted task blocks)
4. AGENTS.md
5. Task-specific files listed in the selected task block

## Workflow

1. Copy the selected task block into working notes.
2. Confirm files-in-scope from the task block only.
3. Implement exactly the requested behavior.
4. Run required validation commands from the task block.
5. Verify done criteria explicitly, item by item.
6. If the task group includes AGENTS.md update instructions, apply them before completion.

## Execution Rules

- Do not modify docs/.
- Keep changes small and reviewable.
- Use src/content/config.ts as schema source of truth.
- Preserve design language in src/styles/global.css.
- Do not silently skip any validation command listed in task.

## Completion Checklist

- Selected task behavior is implemented.
- All listed validations were run successfully.
- Done criteria are confirmed with concrete checks.
- AGENTS.md updates are applied when required.
- No unrelated files were changed.

## Suggested Command Sequence

```bash
npm run check
npm run build
npm run test:e2e
```

Run only the commands required by the selected task. If test:e2e is not part of the task, do not force it.
