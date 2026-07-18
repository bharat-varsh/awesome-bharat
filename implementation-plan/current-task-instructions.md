## Task 1.3 — Footer: fix bracket brand + neutral surface 🟢

**File:** `src/components/Footer.astro`

**Find** (~line 28):

```html
<footer class="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800"></footer>
```

**Replace with:**

```html
<footer
    class="bg-neutral-100 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800"
></footer>
```

**Find** (~line 88):

```html
© {currentYear} [ Awesome ] Bharat. All rights reserved.
```

**Replace with:**

```html
© {currentYear} AwesomeBharat. All rights reserved.
```

**Test:** `npm run build` → footer renders (it is already wired into `BaseLayout`), neutral background, copyright reads "AwesomeBharat" with no brackets.

---
