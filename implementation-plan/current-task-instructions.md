## Task 2.1 — ContentCard: give the carousel card a real, rounded card affordance 🟡

**File:** `src/components/ContentCard.astro` — **biggest single visual win.**

Replace the markup block (everything from `<a` to the closing `</a>`, lines 19–42) with:

```astro
<a
    href={href}
    class={`group flex-shrink-0 w-[140px] sm:w-[160px] rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-3 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover ${extraClass}`}
>
    <div class="overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800">
        <Image
            class="aspect-square w-full object-contain transition-transform duration-300 group-hover:scale-105"
            src={resolvedImage}
            alt={title}
            format="webp"
            widths={[120, 140, 160, 180]}
            sizes="(min-width:640px) 160px, 140px"
        />
    </div>

    <div class="mt-3 text-left">
        <h3
            class="text-sm font-semibold leading-snug line-clamp-2 text-neutral-900 dark:text-neutral-100"
        >
            {title}
        </h3>
        {
            tags?.[0] && (
                <p class="mt-1 text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1">
                    {tags[0]}
                </p>
            )
        }
    </div>
</a>
```

Key changes: wider card (140–160px), rounded container + border + `shadow-card`, hover lift + `shadow-card-hover`, **rounded masked icon** on a subtle tile, `object-contain` (was `object-cover`, which cropped logos). The `Props` interface and frontmatter are unchanged.

> **Coordination note:** the homepage scroll rows (Task 3.1) reference these cards. The wider card still works in the existing `flex gap-5 overflow-x-auto snap-x` rows — no change needed there beyond Task 3.1's own edits. If doing 2.1 before 3.1, the rows simply show larger cards.

**Test:** `npm run build` → homepage carousels show rounded, bordered cards with soft shadows that lift on hover; logos are fully visible (not cropped). Both themes look clean.

---
