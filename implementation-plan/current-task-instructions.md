## Task 1.6 — Search: swap hardcoded Pagefind hex for token values 🟢

**File:** `src/components/Search.astro`

**Find** (~lines 29–43):

```css
:root {
    --pagefind-ui-primary: #ea580c;
    --pagefind-ui-text: #111827;
    --pagefind-ui-background: #ffffff;
    --pagefind-ui-border: #e5e7eb;
    --pagefind-ui-tag: #f3f4f6;
}

.dark {
    --pagefind-ui-primary: #fb923c;
    --pagefind-ui-text: #f9fafb;
    --pagefind-ui-background: #111827;
    --pagefind-ui-border: #374151;
    --pagefind-ui-tag: #1f2937;
}
```

**Replace with:**

```css
:root {
    --pagefind-ui-primary: #b8541f;
    --pagefind-ui-text: #1c1917;
    --pagefind-ui-background: #ffffff;
    --pagefind-ui-border: #e7e5e4;
    --pagefind-ui-tag: #f5f5f4;
}

.dark {
    --pagefind-ui-primary: #e08445;
    --pagefind-ui-text: #fafaf9;
    --pagefind-ui-background: #1c1917;
    --pagefind-ui-border: #292524;
    --pagefind-ui-tag: #292524;
}
```

(These hex values equal `primary-600`/`neutral-*` tokens; Pagefind's shadow-DOM can't read Tailwind classes, so hex is required here.)

**Test:** `npm run build`

---
