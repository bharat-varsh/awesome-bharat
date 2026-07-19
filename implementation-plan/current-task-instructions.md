## Task 4.1 — Motion, accessibility, and token audit 🟡

**Multiple files.**

1. **Entrance motion:** In `src/pages/apps/index.astro`, add `animate-fade-in` to the grid container class. In `src/pages/index.astro`, add `animate-fade-in` to each `CardRow` usage via a wrapper or the section — keep it subtle (respect users who prefer reduced motion by adding to `global.css`):

```css
@media (prefers-reduced-motion: reduce) {
    .animate-fade-in {
        animation: none;
    }
}
```

(Append this to the end of `src/styles/global.css`.)

2. **Accessibility:**
    - Confirm all icon-only buttons have `aria-label` (carousel arrows do; theme toggle does).
    - Verify text contrast in both themes on the hero, chips, and muted text (`neutral-500` on `neutral-50` passes AA for normal text; `neutral-400` on `neutral-950` passes for dark).

3. **Token audit:** Search the codebase for leftover values that should now be tokens:

```bash
grep -rn "secondary-" src/ || true
grep -rniE "#(ea580c|f97316|fb923c|14b8a6|0d9488|2dd4bf)" src/ || true
grep -rn "font-display" src/ || true
grep -rn "shadow-primary" src/ || true
```

- `secondary-*` classes are fine (they map to warm neutral now) but prefer migrating high-traffic ones to `neutral-*` for clarity — optional.
- Any remaining old orange/teal hex or `shadow-primary-*` outside `global.css`/`Search.astro` should be replaced with tokens.
- `font-display` should no longer appear (replaced by `font-serif` in Task 2.3).

**Test (full regression):**

```bash
npm run build
```

Must pass.

---
