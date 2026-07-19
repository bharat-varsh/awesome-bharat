## Task 6 — Add "Domains" to the sidebar navigation

**File (edit):** [src/components/SidebarNav.astro](../src/components/SidebarNav.astro)

The `collections` array (around line 17) drives the nav. Add a standalone "Explore by Domain" link. Insert this **static** link right after the closing `</Divider>` that precedes the dynamic collections (around line 70), before the `{collections.map(...)}` block:

```astro
<a
    href="/domains"
    class:list={[
        'flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors',
        isActive('/domains')
            ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 font-semibold'
            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800',
    ]}
>
    <div class="flex items-center gap-3">
        <span class="w-5 h-5 grid place-items-center text-base" aria-hidden="true">🧭</span>
        <span>Domains</span>
    </div>
</a>
```

`isActive` is already defined in the file (line 40) and already matches by prefix, so `/domains/space` will also highlight this link.

---