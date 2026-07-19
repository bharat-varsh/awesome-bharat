## Task 7 — Link domains from the detail page header

Make each detail page's header show its domains as clickable chips linking to the domain pages. The app detail page renders via [src/layouts/ContentLayout.astro](../src/layouts/ContentLayout.astro).

**7a — Pass domains into the layout.** In [src/pages/apps/[slug].astro](../src/pages/apps/[slug].astro), add a prop to the `<ContentLayout ...>` tag:

```astro
domains={app.data.domains}
```

**7b — Accept and render it.** In [src/layouts/ContentLayout.astro](../src/layouts/ContentLayout.astro):

1. Add to `Props` interface (after `tags?: string[];`):
    ```ts
    domains?: string[];
    ```
2. Add to the destructuring (after `tags,`):
    ```ts
    domains = [],
    ```
3. Import the helper at the top of the frontmatter:
    ```ts
    import { getDomainMeta } from '../utils/domainMeta.ts';
    ```
4. Render domain chips. Immediately **before** the existing category-chips block (the `categories.length > 0 && (...)` block near line 153), insert:
    ```astro
    {
        domains.length > 0 && (
            <div class="flex flex-wrap gap-2 mt-1">
                {domains.map((domain) => {
                    const dm = getDomainMeta(domain);
                    return (
                        <a
                            href={`/domains/${domain}`}
                            class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-primary-100 dark:bg-primary-900/40 text-primary-800 dark:text-primary-200 hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors"
                        >
                            <span aria-hidden="true">{dm.icon}</span>
                            {dm.label}
                        </a>
                    );
                })}
            </div>
        )
    }
    ```

---
