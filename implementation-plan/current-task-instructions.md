## Task 2.4 — RelatedItem: remove orange glow + weird hover-shrink; fix title field 🔵

**File:** `src/components/RelatedItem.astro`

**Find** the `<a>` (~line 20):

```
    class="w-24 h-30 group block m-2 p-3 overflow-hidden rounded-lg hover:scale-95 shadow-xl shadow-primary-200 dark:shadow-primary-800/50 hover:shadow-primary-400/50 dark:hover:shadow-primary-900/50 transition-all duration-200"
```

**Replace with:**

```
    class="group block w-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-3 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover"
```

**Fix the title field.** For `persons`/`companies` the data field is `name`, not `title`, so `item.data.title` is `undefined` for them. **Find** (~lines 27, 34):

```
                alt={item.data.title}
```

```
        {item.data.title}
```

Replace both `item.data.title` with:

```
{('title' in item.data ? item.data.title : item.data.name)}
```

For the `alt`, write `alt={'title' in item.data ? item.data.title : item.data.name}`.

**Find** the `<h4>` (~lines 34–37) and remove the duplicated `line-clamp-2`:

```html
<h4
    class="text-xs font-small text-gray-900 dark:text-gray-100 line-clamp-2 transition-colors line-clamp-2"
></h4>
```

**Replace with:**

```html
<h4 class="mt-2 text-xs font-medium text-neutral-900 dark:text-neutral-100 line-clamp-2"></h4>
```

**Test:** `npm run build` → open an app detail page (`/apps/mindful`); the "More by …" tiles in the right sidebar are neutral rounded cards that lift on hover (no orange glow, no shrink), and their titles render.

---
