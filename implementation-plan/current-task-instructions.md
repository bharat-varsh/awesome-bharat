### 3.2e — Replace the 4 status pills with a restrained chip system

**Find** the entire badges row (~lines 374–416, from `<!-- Badges row ...` through its closing `</div>` before `</div>` that closes the header card) and **replace** with:

```html
                    <!-- Status chips -->
                    <div class="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                        <div class="flex flex-wrap gap-2">
                            <span class="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 dark:border-neutral-700 px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300">
                                <span class={`h-1.5 w-1.5 rounded-full ${paid ? 'bg-neutral-400' : 'bg-emerald-500'}`} />
                                {paid ? 'Paid' : 'Free'}
                            </span>
                            <span class="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 dark:border-neutral-700 px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300">
                                <span class={`h-1.5 w-1.5 rounded-full ${ads ? 'bg-neutral-400' : 'bg-emerald-500'}`} />
                                {ads ? 'Has Ads' : 'No Ads'}
                            </span>
                            <span class="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 dark:border-neutral-700 px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300">
                                <span class={`h-1.5 w-1.5 rounded-full ${source === 'open-source' ? 'bg-emerald-500' : 'bg-neutral-400'}`} />
                                {source === 'open-source' ? 'Open Source' : 'Closed Source'}
                            </span>
                            <span class="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 dark:border-neutral-700 px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300">
                                <span class={`h-1.5 w-1.5 rounded-full ${offline ? 'bg-emerald-500' : 'bg-neutral-400'}`} />
                                {offline ? 'Works Offline' : 'Needs Internet'}
                            </span>
                        </div>
                    </div>
```

(Neutral outlined chips with a small status dot — replaces the red/green Bootstrap pills. A single accent color `emerald` dot signals "good"; everything else neutral.)

### 3.2f — Tokenize the tag chips + category chips + CTA button (find/replace within the header block)

- Category chip (~line 162): replace `bg-gray-100 dark:bg-secondary-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-secondary-700` → `bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700`.
- Tag chip (~line 178): already uses `primary-*` (now saffron) — leave as-is, it's fine.
- Author link (~line 147): `text-primary-600 dark:text-primary-400` — fine, leave.
- Primary CTA (~line 204): replace `bg-primary-600 hover:bg-primary-700 text-white dark:bg-primary-500 dark:hover:bg-primary-400 shadow-md hover:shadow-lg` → `bg-primary-600 hover:bg-primary-700 text-white dark:bg-primary-500 dark:hover:bg-primary-400 shadow-card hover:shadow-card-hover`.

### 3.2g — De-duplicate the store badges

The store badges render **twice** (once as the inline dropdown, and once via `<StoreBadges>` at line 458). Keep both — they serve different purposes (dropdown = quick action; `<StoreBadges>` block = full badges below content). **No change needed** unless you see a literal duplicate `<StoreBadges>` — there is only one, so leave it. (This sub-task exists to confirm; the CLAUDE.md "duplicated" note refers to the dropdown+block pattern, which is intentional here.)

**Test:** `npm run build` → open `/apps/mindful`: header card has a clean neutral border + soft shadow (no orange glow), logo sits on a rounded tile, status chips are neutral outlined with a small dot, page scrolls naturally as one column (no trapped inner scroll), right sidebar sticks. CTA dropdown still opens/closes. Check both themes.

---
