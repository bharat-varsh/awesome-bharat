# Awesome Bharat — Task Dispatch Guide (With Model Assignments)

> **How to use this document**: Tell your AI agent: "Do task X.Y" and point it to this file. Each task is self-contained with everything the agent needs — context, files to read, what to produce, how to verify, and **which AI models to use**.
>
> **Task types**: `Code` | `Research` | `Design+Code` | `Content`
>
> **Model recommendation format**: Each task lists models ranked **cheapest/smallest capable model first**. Rank 1 is the least powerful model that can still complete the task correctly without assistance. Only escalate to higher ranks if rank 1 genuinely fails or the task requirements exceed its capability.
>
> **Before any code task**, the agent should read: `AGENTS.md` (project overview) + relevant planning doc noted in each task.

---

## Quick Reference

| ID                                           | Task                              | Type             | Effort | Depends On | Recommended Models (cheapest capable → escalation)                    |
| -------------------------------------------- | --------------------------------- | ---------------- | ------ | ---------- | --------------------------------------------------------------------- |
| **Phase 1 — Polish & Gaps**                  |
| 1.1                                          | ContentCardFull component         | Design+Code      | M      | —          | GPT-OSS-120B, MiniMax M2.5, DeepSeek V3.2, Qwen3.6 Plus, Kimi K2.6    |
| 1.2                                          | "By Same Author" sidebar          | Code             | S      | —          | Qwen3-Coder 30B, GPT-OSS-120B, MiniMax M2.5, DeepSeek V3.2            |
| 1.3                                          | Homepage multi-section layout     | Design+Code      | M      | —          | GPT-OSS-120B, MiniMax M2.5, DeepSeek V3.2, Gemini 3 Flash, Kimi K2.6  |
| 1.4                                          | Pagefind search integration       | Code             | M      | —          | GPT-OSS-120B, MiniMax M2.5, DeepSeek V3.2, Kimi K2.5                  |
| 1.5                                          | Mobile nav background fix         | Code             | XS     | —          | Qwen3.5-9B, Gemma 4-26B, GPT-OSS-20B                                  |
| **Phase 2 — Content Type Expansion**         |
| 2.1                                          | Add new collection schemas        | Code             | S      | —          | Qwen3-Coder 30B, GPT-OSS-120B, MiniMax M2.5, DeepSeek V3.2            |
| 2.2                                          | Collection folders + examples     | Content+Research | M      | 2.1        | Hy3 Preview, Gemini 3.1 Pro, Kimi K2.6, DeepSeek V4-Pro, MiniMax M2.7 |
| 2.3                                          | Listing pages for new collections | Code             | M      | 2.1, 2.2   | Qwen3-Coder 30B, GPT-OSS-120B, MiniMax M2.5, DeepSeek V3.2            |
| 2.4                                          | Detail pages for new collections  | Code             | L      | 2.1-2.3    | MiniMax M2.7, GLM-5.1, GPT-OSS-120B, DeepSeek V4-Pro, Kimi K2.6       |
| 2.5                                          | Extend ctaUtils for all types     | Code             | S      | 2.1        | Qwen3-Coder 30B, GPT-OSS-120B, MiniMax M2.5, DeepSeek V3.2            |
| 2.6                                          | Update sidebar navigation         | Code             | XS     | 2.1        | Qwen3.5-9B, Gemma 4-26B, GPT-OSS-20B                                  |
| 2.7                                          | Update tag/category pages         | Code             | S      | 2.1, 2.2   | Qwen3-Coder 30B, GPT-OSS-120B, MiniMax M2.5, DeepSeek V3.2            |
| **Phase 3 — Domain Pages & Dual Navigation** |
| 3.1                                          | Domain enum + display config      | Code             | S      | 2.1        | Qwen3-Coder 30B, GPT-OSS-120B, MiniMax M2.5, DeepSeek V3.2            |
| 3.2                                          | Research domain content           | Research         | L      | —          | Hy3 Preview, Gemini 3.1 Pro, Kimi K2.6, DeepSeek V4-Pro, GLM-5.1      |
| 3.3                                          | Domain landing pages              | Design+Code      | L      | 3.1        | MiniMax M2.7, GLM-5.1, GPT-OSS-120B, DeepSeek V4-Pro, Kimi K2.6       |
| 3.4                                          | Domain index page                 | Design+Code      | M      | 3.1        | GPT-OSS-120B, MiniMax M2.5, Gemini 3 Flash, Kimi K2.6                 |
| 3.5                                          | Homepage domain wiring            | Code             | S      | 3.3        | Qwen3-Coder 30B, GPT-OSS-120B, MiniMax M2.5, DeepSeek V3.2            |
| 3.6                                          | Domain navigation in sidebar      | Code             | S      | 3.1        | Qwen3-Coder 30B, GPT-OSS-120B, MiniMax M2.5, DeepSeek V3.2            |
| **Phase 4 — Opportunities & Engagement**     |
| 4.1                                          | Domain content schema + MDX       | Code             | M      | 3.1        | Qwen3-Coder 30B, GPT-OSS-120B, MiniMax M2.5, DeepSeek V3.2            |
| 4.2                                          | AchievementCard component         | Design+Code      | M      | —          | MiniMax M2.5, GPT-OSS-120B, Gemini 3 Flash, Qwen3.6 Plus, Kimi K2.6   |
| 4.3                                          | ComparisonWidget component        | Design+Code      | M      | —          | GPT-OSS-120B, MiniMax M2.5, Gemini 3 Flash, Qwen3.6 Plus, Kimi K2.6   |
| 4.4                                          | ActionCard component              | Design+Code      | S      | —          | GPT-OSS-120B, Qwen3-Coder 30B, MiniMax M2.5, DeepSeek V3.2            |
| 4.5                                          | MilestoneCard component           | Design+Code      | S      | —          | GPT-OSS-120B, Qwen3-Coder 30B, MiniMax M2.5, DeepSeek V3.2            |
| 4.6                                          | Opportunities section layout      | Design+Code      | M      | 4.1-4.5    | MiniMax M2.7, GPT-OSS-120B, GLM-5.1, DeepSeek V4-Pro, Kimi K2.6       |
| 4.7                                          | Opportunities: Space              | Research+Content | M      | 4.1        | Hy3 Preview, Gemini 3.1 Pro, Kimi K2.6, DeepSeek V4-Pro, GLM-5.1      |
| 4.8                                          | Opportunities: Environment        | Research+Content | M      | 4.1        | Hy3 Preview, Gemini 3.1 Pro, Kimi K2.6, DeepSeek V4-Pro, GLM-5.1      |
| 4.9                                          | Opportunities: Technology         | Research+Content | M      | 4.1        | Hy3 Preview, Gemini 3.1 Pro, Kimi K2.6, DeepSeek V4-Pro, GLM-5.1      |
| 4.10                                         | Opportunities: Education          | Research+Content | M      | 4.1        | Hy3 Preview, Gemini 3.1 Pro, Kimi K2.6, DeepSeek V4-Pro, GLM-5.1      |
| 4.11                                         | Opportunities: Social Impact      | Research+Content | M      | 4.1        | Hy3 Preview, Gemini 3.1 Pro, Kimi K2.6, DeepSeek V4-Pro, GLM-5.1      |
| **Phase 5 — Discovery & Scale**              |
| 5.1                                          | Pagefind optimization             | Code             | S      | 1.4        | Qwen3-Coder 30B, GPT-OSS-120B, MiniMax M2.5, DeepSeek V3.2            |
| 5.2                                          | Build performance audit           | Code             | M      | —          | MiniMax M2.7, GPT-OSS-120B, GLM-5.1, DeepSeek V4-Pro                  |
| 5.3                                          | SEO: structured data + meta       | Code             | M      | —          | GPT-OSS-120B, Qwen3-Coder 30B, MiniMax M2.5, DeepSeek V3.2            |
| 5.4                                          | Dynamic OG image generation       | Code             | M      | —          | GPT-OSS-120B, DeepSeek V3.2, Qwen3.6 Plus, Kimi K2.6                  |
| 5.5                                          | Analytics integration             | Code             | S      | —          | GPT-OSS-20B, Qwen3-Coder 30B, MiniMax M2.5, DeepSeek V3.2             |
| **Phase 6 — Polish & Growth**                |
| 6.1                                          | Accessibility audit + fixes       | Code             | M      | —          | MiniMax M2.7, GPT-OSS-120B, GLM-5.1, DeepSeek V3.2                    |
| 6.2                                          | Animation & micro-interactions    | Design+Code      | M      | —          | GPT-OSS-120B, MiniMax M2.5, Qwen3.6 Plus, Kimi K2.6                   |
| 6.3                                          | Dark mode audit + polish          | Design+Code      | S      | —          | GPT-OSS-120B, MiniMax M2.5, Kimi K2.6, Qwen3-VL-235B                  |
| 6.4                                          | Contributor workflow tooling      | Code             | M      | —          | GPT-OSS-120B, Qwen3-Coder 30B, MiniMax M2.5, DeepSeek V3.2            |
| 6.5                                          | Performance budget + Lighthouse   | Code             | S      | —          | MiniMax M2.7, GPT-OSS-120B, GLM-5.1, DeepSeek V3.2                    |
| **Research (Ongoing)**                       |
| R.1                                          | Research Indian Apps (x10)        | Research+Content | M      | —          | Hy3 Preview, Gemini 3.1 Pro, Kimi K2.6, DeepSeek V4-Pro, GLM-5.1      |
| R.2                                          | Research YouTube Channels (x10)   | Research+Content | M      | —          | Hy3 Preview, Gemini 3.1 Pro, Kimi K2.6, DeepSeek V4-Pro, GLM-5.1      |
| R.3                                          | Research OSS Projects (x10)       | Research+Content | M      | —          | Hy3 Preview, Gemini 3.1 Pro, Kimi K2.6, DeepSeek V4-Pro, GLM-5.1      |
| R.4                                          | Research Initiatives/NGOs (x10)   | Research+Content | M      | —          | Hy3 Preview, Gemini 3.1 Pro, Kimi K2.6, DeepSeek V4-Pro, GLM-5.1      |
| R.5                                          | Research Podcasts (x10)           | Research+Content | M      | —          | Hy3 Preview, Gemini 3.1 Pro, Kimi K2.6, DeepSeek V4-Pro, GLM-5.1      |
| R.6                                          | Research Communities (x10)        | Research+Content | M      | —          | Hy3 Preview, Gemini 3.1 Pro, Kimi K2.6, DeepSeek V4-Pro, GLM-5.1      |

**Effort**: XS = <1hr, S = 2-4hr, M = 1-2 days, L = 3+ days

---

## Model Selection Rationale

### Why these models for each task type

> **Core principle**: Start with the cheapest/smallest model that can complete the task correctly and independently. Only escalate to a more powerful (and expensive) model when the smaller one genuinely cannot handle the requirement — not as a default for "better results."

| Task Pattern                                    | Model Selection Logic                                                                                                                                                                                                                                                 |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Frontend / Design+Code (explicit spec)**      | GPT-OSS-120B (free, A-) handles spec-driven Tailwind components correctly — all the classes are spelled out. Only escalate to MiniMax M2.5 → DeepSeek V3.2 → Kimi K2.6 if the free model fails or multi-pass iteration is needed.                                     |
| **Frontend / Design+Code (creative/ambiguous)** | MiniMax M2.5 (Kiro 0.25cr, A-tier) is the cheapest model with genuine frontend design sense. Escalate to Qwen3.6 Plus → Kimi K2.6 only when the design brief is deliberately open-ended and you need "feel" not just "correctness."                                   |
| **Multi-file refactor / Large Code (L effort)** | MiniMax M2.7 (A+ tier, Ollama daily-reset — effectively free) handles multi-file agentic work well. Escalate to GLM-5.1 → DeepSeek V4-Pro → Kimi K2.6 only if the first attempt falls short.                                                                          |
| **Single-file code / Schema work (S effort)**   | Qwen3-Coder 30B (free on Ollama, B+ code specialist) is sufficient for most schema definitions, switch/case logic, and template-following. Escalate to GPT-OSS-120B → MiniMax M2.5 → DeepSeek V3.2 if the coder model misses edge cases.                              |
| **Trivial fixes (XS effort)**                   | Qwen3.5-9B (free, tiny) first — it handles CSS class swaps correctly. Gemma 4-26B or GPT-OSS-20B as fallbacks. Never use A/S-tier models for XS tasks.                                                                                                                |
| **Research + Content (verifiable facts)**       | Hy3 Preview (daily-reset, A-tier with web browsing) is the cheapest model that can produce verifiable content. Escalate to Gemini 3.1 Pro for stricter fact-checking. Models without web browsing **will hallucinate** on research tasks — do not use them as rank 1. |
| **Performance / Debugging / Audit**             | MiniMax M2.7 (A+ tier, Ollama daily-reset) is free and strong enough for most audits. Escalate to GLM-5.1 only for complex iterative optimization.                                                                                                                    |
| **Visual audit (dark mode, screenshots)**       | GPT-OSS-120B can review code for dark mode patterns without any image input. Only reach for Kimi K2.6 or Qwen3-VL when you literally need to analyze visual screenshots.                                                                                              |

### Quota-Efficient Defaults

For routine daily work, prefer these **daily-reset providers** to preserve scarce monthly quotas:

| Priority    | Provider                        | Why                                                     |
| ----------- | ------------------------------- | ------------------------------------------------------- |
| 1st         | Ollama Cloud                    | Largest catalog, daily+weekly reset, covers most models |
| 2nd         | OpenRouter                      | ~25 free models, daily reset                            |
| 3rd         | Nvidia NIM                      | ~40+ models, daily reset                                |
| 4th         | Kilo Gateway                    | 8 free models, daily reset                              |
| 5th         | Groq                            | Ultra-fast inference, daily reset (RPD+TPD limits)      |
| Last resort | Kiro (50 credits/month)         | Reserve for high-value tasks only                       |
| Last resort | Fireworks AI ($6 one-time)      | Reserve for long-context or specialty tasks             |
| Last resort | GitHub Copilot (2000 req/month) | Reserve for IDE code completion, not batch work         |

---

## Phase 1 — Polish & Gaps

---

### Task 1.1 — ContentCardFull Component

**Type**: Design+Code
**Effort**: M (1-2 days)
**Depends on**: Nothing

#### Recommended Models

| Rank | Model             | Provider(s)                                     | Why                                                                                                       |
| ---- | ----------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 1    | **GPT-OSS-120B**  | Ollama, Groq, OpenRouter, Nvidia NIM, Fireworks | Free, A- tier. The spec lists every Tailwind class explicitly — no creative guesswork needed. Start here. |
| 2    | **MiniMax M2.5**  | Kiro (0.25cr), Ollama, OpenCode Zen, OpenRouter | A-tier full-stack. Escalate if rank 1 misses the dark mode or hover transitions.                          |
| 3    | **DeepSeek V3.2** | Kiro (0.25cr), Ollama, Nvidia NIM, Fireworks    | A-tier. Solid fallback if the above produce incorrect Astro syntax.                                       |
| 4    | **Qwen3.6 Plus**  | Fireworks ($0.50/M in)                          | S-tier vibe-coding. Only needed if you want design iteration beyond the spec.                             |
| 5    | **Kimi K2.6**     | Ollama Cloud, Kilo Gateway, Fireworks           | S-tier. Overkill for a spec-driven component; reserve for multi-day iteration cycles.                     |

#### Context

The existing `ContentCard.astro` is a compact 60-120px card for scroll rows. Listing pages, tag pages, and category pages need a richer card that shows description, domain badge, and CTA hint.

#### Read First

- `planning/DESIGN-SYSTEM.md` -> section "ContentCardFull (Listing)"
- `src/components/ContentCard.astro` — existing compact card (for pattern reference)
- `src/components/ContentCardFull.astro` — may already exist as a stub
- `src/pages/apps/index.astro` — where it will be used

#### What to Build

Create `src/components/ContentCardFull.astro` with:

**Props**:

```typescript
interface Props {
    title: string;
    description?: string;
    slug: string;
    collection: string; // 'apps' | 'persons' | 'companies' | etc.
    logoSrc?: ImageMetadata;
    domains?: string[];
    categories?: string[];
    ctaLabel?: string | null;
    ctaUrl?: string | null;
    featured?: boolean;
}
```

**Layout**:

```
+--------------------------------------+
|  [Logo 56px]  Title (2 lines max)    |
|               Description (2 lines)  |
|                                      |
|  [Domain badge]  [Category badge]    |
|                         [CTA hint ->]|
+--------------------------------------+
```

**Requirements**:

- Min width: 280px, uses `rounded-xl`, `p-4`
- Background: `bg-white dark:bg-secondary-800`
- Border: `border border-gray-200 dark:border-secondary-600`
- Hover: `shadow-md` + `translate-y-[-2px]` with 200ms transition
- Title: `font-semibold`, 2-line clamp (`line-clamp-2`)
- Description: `text-sm text-gray-600 dark:text-gray-400`, 2-line clamp
- CTA hint: `text-sm text-primary-500` with right arrow, bottom-right
- Featured: add gold border `border-yellow-400` + small star badge
- Entire card is a clickable `<a>` linking to `/{collection}/{slug}`
- Logo uses `resolveLogo()` from `@/utils/imageResolvers`
- Domain badges: `bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200`, rounded-full, text-xs
- Max 1 domain badge + 1 category badge shown (don't overflow)

#### Then Update

- `src/pages/apps/index.astro` — replace `ContentCard` with `ContentCardFull` in the grid
- `src/pages/tags/[tag].astro` — use `ContentCardFull` if currently using compact cards
- `src/pages/categories/[category].astro` — same

#### Verify

```bash
npm run build
```

- Card renders on `/apps/` listing page
- Card shows title, description, and CTA hint
- Hover effect works
- Dark mode looks correct
- Featured card has gold border

---

### Task 1.2 — "By Same Author" Sidebar Section

**Type**: Code
**Effort**: S (2-4 hours)
**Depends on**: Nothing

#### Recommended Models

| Rank | Model               | Provider(s)                                     | Why                                                                                                 |
| ---- | ------------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 1    | **Qwen3-Coder 30B** | Ollama, OpenRouter                              | Free, B+ code specialist. Single-file filter/slice logic is well within its capability. Start here. |
| 2    | **GPT-OSS-120B**    | Ollama, Groq, OpenRouter, Nvidia NIM, Fireworks | Free, A- tier. Escalate if rank 1 misses the Astro prop-passing pattern.                            |
| 3    | **MiniMax M2.5**    | Kiro (0.25cr), Ollama, OpenCode Zen, OpenRouter | A-tier full-stack. Good Astro component work.                                                       |
| 4    | **DeepSeek V3.2**   | Kiro (0.25cr), Ollama, Nvidia NIM, Fireworks    | A-tier. Only needed if smaller models can't handle the author-slug matching logic.                  |

#### Context

The right sidebar on detail pages shows "You might also like" (tag-based related content). There's no "More by this author" section. When an author has multiple apps/content, users should see it.

#### Read First

- `src/pages/apps/[slug].astro` — current detail page (see how related items are fetched)
- `src/components/RightSidebar.astro` — the sidebar wrapper
- `src/components/YouMightLike.astro` — existing related items section
- `src/components/RelatedItem.astro` — individual item in sidebar

#### What to Build

In `src/pages/apps/[slug].astro`:

1. After fetching related apps, add a query for "same author" apps:

```typescript
const currentAuthors = entry.data.authors.map((a) => a.slug);
const byAuthor = allApps
    .filter(
        (app) =>
            app.id !== entry.id && app.data.authors.some((a) => currentAuthors.includes(a.slug))
    )
    .slice(0, 4);
```

2. Pass this data to the right sidebar. The right sidebar needs a new section below "You might also like":

```astro
{
    byAuthor.length > 0 && (
        <div class="mt-8">
            <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                More by {authorName}
            </h3>
            <div class="grid grid-cols-2 gap-2">
                {byAuthor.map((item) => (
                    <RelatedItem
                        title={item.data.title}
                        slug={item.slug}
                        collection="apps"
                        logoSrc={resolveLogo(item.slug, item.data.logo)}
                    />
                ))}
            </div>
        </div>
    )
}
```

3. Get the author name for the heading:

```typescript
const authorName = resolvedAuthors?.[0]?.name || 'this author';
```

#### Verify

```bash
npm run build
```

- Visit `/apps/mindful` — should show "More by Pawan Nagar" if he has other apps
- If author has no other apps, section doesn't render
- Section appears below "You might also like"

---

### Task 1.3 — Homepage Multi-Section Layout

**Type**: Design+Code
**Effort**: M (1-2 days)
**Depends on**: Nothing

#### Recommended Models

| Rank | Model              | Provider(s)                                     | Why                                                                                                                 |
| ---- | ------------------ | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| 1    | **GPT-OSS-120B**   | Ollama, Groq, OpenRouter, Nvidia NIM, Fireworks | Free, A- tier. The section pattern is fully specified — pattern-following code generation. Start here.              |
| 2    | **MiniMax M2.5**   | Kiro (0.25cr), Ollama, OpenCode Zen, OpenRouter | A-tier. Good at planning layout architecture before coding. Escalate if rank 1 misses Astro data-fetching patterns. |
| 3    | **DeepSeek V3.2**  | Kiro (0.25cr), Ollama, Nvidia NIM, Fireworks    | A-tier. Solid for Astro page composition.                                                                           |
| 4    | **Gemini 3 Flash** | Google Antigravity, Gemini CLI                  | B+ fallback for layout work when other options are exhausted.                                                       |
| 5    | **Kimi K2.6**      | Ollama Cloud, Kilo, Fireworks                   | S-tier. Only needed for open-ended design decisions, not for following a written spec.                              |

#### Context

Homepage currently only shows "Latest Apps" in a scroll row. Should show multiple content sections.

#### Read First

- `planning/DESIGN-SYSTEM.md` -> section "Homepage"
- `src/pages/index.astro` — current homepage
- `src/components/ContentCard.astro` — used in scroll rows

#### What to Build

Update `src/pages/index.astro` to have this structure:

1. **Hero** (keep existing, already has stat strip)
2. **"Latest Apps"** — horizontal scroll row (keep existing)
3. **"Featured People"** — new horizontal scroll row
    - Fetch from `persons` collection, filter non-draft, sort featured first
    - Use `ContentCard` (compact) with avatar instead of logo
    - "View all" link to `/people/` (or `#` if page doesn't exist yet)
4. **"Featured Companies"** — new horizontal scroll row
    - Fetch from `companies` collection, filter non-draft
    - Use `ContentCard` with company logo
    - "View all" link to `/companies/` (or `#`)
5. **"Explore by Category"** — grid of category pills
    - Collect all unique categories from apps
    - Render as clickable pills: `bg-primary-100 text-primary-800 rounded-full px-4 py-2`
    - Each links to `/categories/{category}`
    - Grid: `flex flex-wrap gap-2`
6. **"Explore Everything" CTA** (keep existing)

Each section follows this pattern:

```astro
<section class="space-y-4">
    <div class="flex items-center justify-between">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Section Title</h2>
        <a href="/collection/" class="text-sm text-primary-500 hover:text-primary-600">View all</a>
    </div>
    <!-- scroll row or grid -->
</section>
```

Section spacing: `space-y-12` between sections.

#### Verify

```bash
npm run build
```

- Homepage shows multiple sections
- Each section has heading + "View all" link
- Scroll rows scroll horizontally with arrow buttons
- Category pills link to correct pages
- Responsive on mobile (sections stack, pills wrap)

---

### Task 1.4 — Pagefind Search Integration

**Type**: Code
**Effort**: M (1-2 days)
**Depends on**: Nothing

#### Recommended Models

| Rank | Model             | Provider(s)                                     | Why                                                                                     |
| ---- | ----------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------- |
| 1    | **GPT-OSS-120B**  | Ollama, Groq, OpenRouter, Nvidia NIM, Fireworks | Free, A- tier. Config + component wiring is pattern-following work. Start here.         |
| 2    | **MiniMax M2.5**  | Kiro (0.25cr), Ollama, OpenCode Zen, OpenRouter | A-tier. Full-stack capability handles search UI + build config together.                |
| 3    | **DeepSeek V3.2** | Kiro (0.25cr), Ollama, Nvidia NIM, Fireworks    | A-tier. Good at integration work — reading docs and wiring libraries.                   |
| 4    | **Kimi K2.5**     | Ollama, Fireworks                               | A+ tier. Only needed if multi-step tool-use agentic workflow is required for debugging. |

#### Context

No search exists. Pagefind is a client-side search that indexes static sites at build time — perfect for Astro.

#### Read First

- Pagefind docs (https://pagefind.app/docs/)
- `src/components/Header.astro` — where search input goes
- `astro.config.mjs` — may need post-build hook

#### What to Build

1. **Install Pagefind**:

```bash
npm install --save-dev pagefind
```

2. **Add post-build indexing** in `package.json` scripts:

```json
"postbuild": "npx pagefind --site docs"
```

3. **Create `src/components/Search.astro`**:

- Search input in the header area
- On focus/type: show results overlay
- Use Pagefind's UI library or custom markup
- Style to match site design (primary colors, rounded, dark mode)

4. **Add to Header.astro**: Import and place `<Search />` in the header bar.

5. **Add `data-pagefind-body`** attribute to the main content area in layouts so Pagefind only indexes content, not nav/sidebar.

#### Verify

```bash
npm run build
```

- `docs/pagefind/` directory is created with index files
- Search input appears in header
- Typing "Mindful" returns the Mindful app
- Results link to correct pages
- Works in dark mode

---

### Task 1.5 — Mobile Nav Background Fix

**Type**: Code
**Effort**: XS (<1 hour)
**Depends on**: Nothing

#### Recommended Models

| Rank | Model           | Provider(s)                                  | Why                                                                                                                |
| ---- | --------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| 1    | **Qwen3.5-9B**  | Ollama                                       | Free, tiny. Two-line Tailwind class swap is well within capability. Start here and don't escalate unless it fails. |
| 2    | **Gemma 4-26B** | Ollama, Kilo, OpenRouter                     | Free, B tier. Handles simple class swaps reliably.                                                                 |
| 3    | **GPT-OSS-20B** | Ollama, Groq (1K RPD), OpenRouter, Fireworks | Free, B+ tier. Only needed if the smaller models misidentify the right element.                                    |

> **Quota tip**: This is a 2-line CSS class change. Use the smallest model with remaining quota.

#### Context

Mobile nav drawer uses `bg-white dark:bg-gray-900` while desktop sidebar uses themed colors. They look like different sites.

#### Read First

- `src/components/MobileNav.astro`
- `src/components/LeftSidebar.astro` (for the desktop background classes to match)

#### What to Do

In `src/components/MobileNav.astro`, find the drawer container element and change:

- `bg-white` -> `bg-primary-50`
- `dark:bg-gray-900` -> `dark:bg-secondary-800`

#### Verify

```bash
npm run build
```

- Mobile nav (resize to <1024px) has same background color as desktop sidebar
- Dark mode mobile nav uses `secondary-800`

---

## Phase 2 — Content Type Expansion

---

### Task 2.1 — Add New Collection Schemas

**Type**: Code
**Effort**: S (2-4 hours)
**Depends on**: Nothing

#### Recommended Models

| Rank | Model               | Provider(s)                                     | Why                                                                                                      |
| ---- | ------------------- | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 1    | **Qwen3-Coder 30B** | Ollama, OpenRouter                              | Free, B+ code specialist. TypeScript/Zod schema definitions are structured, repeatable work. Start here. |
| 2    | **GPT-OSS-120B**    | Ollama, Groq, OpenRouter, Nvidia NIM, Fireworks | Free, A- tier. Good TypeScript. Escalate if rank 1 makes Zod pattern mistakes.                           |
| 3    | **MiniMax M2.5**    | Kiro (0.25cr), Ollama, OpenCode Zen, OpenRouter | A-tier. Spec-writing tendency helps with schema accuracy.                                                |
| 4    | **DeepSeek V3.2**   | Kiro (0.25cr), Ollama, Nvidia NIM, Fireworks    | A-tier. Only needed if the schema is producing hard-to-debug TypeScript errors.                          |

#### Context

The site currently has 3 collections (apps, persons, companies). Need to add 7 more.

#### Read First

- `planning/CONTENT-ARCHITECTURE.md` -> sections 4-10 (full schema specs for each type)
- `src/content/config.ts` — current schemas (apps, persons, companies)

#### What to Build

Update `src/content/config.ts` to add these collections:

1. **channels** (YouTube Channels)
2. **products** (Physical/digital products)
3. **blogs** (Blogs & Newsletters)
4. **projects** (Open-source projects, non-app)
5. **communities** (Discord/Telegram/Slack)
6. **podcasts** (Podcasts)
7. **initiatives** (NGOs, social movements)

Also add the `domains` field (as `z.array(domainEnum).default([])`) to existing collections (apps, persons, companies).

**Domain enum** to add:

```typescript
const domainEnum = z.enum([
    'technology',
    'space',
    'defense',
    'artificialIntelligence',
    'health',
    'mentalHealth',
    'environment',
    'agriculture',
    'cleanEnergy',
    'education',
    'research',
    'startups',
    'finance',
    'manufacturing',
    'socialImpact',
    'governance',
    'ruralDevelopment',
    'arts',
    'music',
    'cinema',
    'literature',
    'heritage',
    'sports',
    'fitness',
    'infrastructure',
    'transportation',
    'digitalIndia',
    'cybersecurity',
    'gaming',
]);
```

Copy the exact schema definitions from `planning/CONTENT-ARCHITECTURE.md`. Use the existing `linkSchema` and `authorSchema` patterns already in the file.

Export all collections in the `collections` object at the bottom.

#### Verify

```bash
npm run build
```

- No TypeScript errors
- No Zod schema errors
- Existing apps/persons/companies still work (no breaking changes)

---

### Task 2.2 — Create Collection Folders + Example Entries

**Type**: Content+Research
**Effort**: M (1-2 days)
**Depends on**: 2.1

#### Recommended Models

| Rank | Model               | Provider(s)                    | Why                                                                                                                                        |
| ---- | ------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 1    | **Hy3 Preview**     | OpenCode Zen, Kilo, OpenRouter | Daily-reset (effectively free), A-tier with web browsing. Can research and verify real Indian creators before writing entries. Start here. |
| 2    | **Gemini 3.1 Pro**  | Google Antigravity             | S-tier. Web browsing for stricter fact verification. Escalate when Hy3 Preview produces unverifiable claims.                               |
| 3    | **Kimi K2.6**       | Ollama Cloud, Kilo, Fireworks  | S-tier. Multimodal + strong instruction-following for structured content. Escalate if research quality needs to improve.                   |
| 4    | **DeepSeek V4-Pro** | Ollama, Fireworks              | S-tier reasoning. Good for researching complex Indian tech projects.                                                                       |
| 5    | **MiniMax M2.7**    | Ollama, Nvidia NIM, Fireworks  | A+ tier. Good at structured content but lacks web browsing — use only for formatting/writing passes after facts are verified elsewhere.    |

> **Important**: Research tasks need models that produce accurate, verifiable facts. Models without web browsing **must not be rank 1** here — they will hallucinate URLs and metrics.

#### Context

Each new collection needs a folder and at least 2 real example entries (not dummy data) to test the schema and serve as templates.

#### Read First

- `planning/CONTENT-GUIDELINES.md` — editorial voice, templates
- `planning/CONTENT-ARCHITECTURE.md` — schemas for reference
- `src/content/apps/mindful.mdx` — example of a well-written entry
- `src/content/config.ts` — the schemas you're writing entries for

#### What to Create

Create folders and 2 entries each. Research REAL Indian creators/projects:

| Collection  | Folder                     | Suggested Research Targets                         |
| ----------- | -------------------------- | -------------------------------------------------- |
| channels    | `src/content/channels/`    | Popular Indian tech/education YouTubers            |
| products    | `src/content/products/`    | Indian D2C products or made-in-India tech products |
| blogs       | `src/content/blogs/`       | Indian tech blogs, newsletters                     |
| projects    | `src/content/projects/`    | Indian-maintained OSS libraries/tools (not apps)   |
| communities | `src/content/communities/` | Indian dev communities on Discord/Telegram         |
| podcasts    | `src/content/podcasts/`    | Indian tech/business podcasts                      |
| initiatives | `src/content/initiatives/` | Indian NGOs or social movements                    |

**For each entry**:

1. Research the subject — verify it's real, active, Indian-made/led
2. Create MDX file with complete frontmatter (all available fields filled)
3. Write 150-400 word body following templates in `CONTENT-GUIDELINES.md`
4. Ensure slugs are kebab-case lowercase
5. If logo/image is available, add to `src/assets/images/` and register in `src/utils/imageRegistry.ts`

#### Verify

```bash
npm run build
```

- All 14 new entries (7 collections x 2) pass schema validation
- No build errors
- Frontmatter matches schema exactly

---

### Task 2.3 — Listing Pages for New Collections

**Type**: Code
**Effort**: M (1-2 days)
**Depends on**: 2.1, 2.2

#### Recommended Models

| Rank | Model               | Provider(s)                                     | Why                                                                                                                     |
| ---- | ------------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| 1    | **Qwen3-Coder 30B** | Ollama, OpenRouter                              | Free, B+ code specialist. Template-following across 7 files is exactly what code-specialist models do well. Start here. |
| 2    | **GPT-OSS-120B**    | Ollama, Groq, OpenRouter, Nvidia NIM, Fireworks | Free, A- tier. Escalate if rank 1 misses Astro-specific `getCollection` patterns.                                       |
| 3    | **MiniMax M2.5**    | Kiro (0.25cr), Ollama, OpenCode Zen, OpenRouter | A-tier. Good at consistent repetitive code generation.                                                                  |
| 4    | **DeepSeek V3.2**   | Kiro (0.25cr), Ollama, Nvidia NIM, Fireworks    | A-tier. Only needed if the template deviations per collection are tricky.                                               |

#### Context

Each new collection needs a listing page at its URL path, following the same pattern as `/apps/`.

#### Read First

- `src/pages/apps/index.astro` — template to follow
- `src/components/CollectionHero.astro` — hero banner component
- `src/components/ContentCardFull.astro` — card for grid (or `ContentCard` if 1.1 not done yet)
- `planning/DESIGN-SYSTEM.md` -> "Listing Page" layout

#### What to Build

Create these files, each following the `/apps/index.astro` pattern:

```
src/pages/channels/index.astro
src/pages/products/index.astro
src/pages/blogs/index.astro
src/pages/projects/index.astro
src/pages/communities/index.astro
src/pages/podcasts/index.astro
src/pages/initiatives/index.astro
```

Each page:

1. Imports `BaseLayout`, `CollectionHero`, and card component
2. Fetches collection with `getCollection('name', ({ data }) => !data.draft)`
3. Sorts by featured first, then by name/date
4. Renders `CollectionHero` with icon, title, description, count
5. Renders grid of cards: `grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4`

**Collection metadata**:

| Collection  | Emoji      | Title                | Description                                         |
| ----------- | ---------- | -------------------- | --------------------------------------------------- |
| channels    | (TV)       | YouTube Channels     | Indian creators making incredible content           |
| products    | (Shopping) | Products             | Made-in-India products worth knowing about          |
| blogs       | (Writing)  | Blogs & Newsletters  | Indian voices writing things worth reading          |
| projects    | (Wrench)   | Open Source Projects | Indian-maintained libraries, tools, and frameworks  |
| communities | (People)   | Communities          | Spaces where Indian builders connect and grow       |
| podcasts    | (Mic)      | Podcasts             | Indian podcasts worth your earbuds                  |
| initiatives | (Star)     | Initiatives          | Organizations and movements driving change in India |

#### Verify

```bash
npm run build
```

- Each listing page generates HTML in `docs/`
- Pages display entries in a grid
- CollectionHero shows correct icon, title, count
- Pages are accessible at their URLs

---

### Task 2.4 — Detail Pages for New Collections

**Type**: Code
**Effort**: L (3+ days)
**Depends on**: 2.1, 2.2, 2.3

#### Recommended Models

| Rank | Model               | Provider(s)                                     | Why                                                                                                                        |
| ---- | ------------------- | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 1    | **MiniMax M2.7**    | Ollama, Nvidia NIM, Fireworks                   | A+ tier, Ollama daily-reset (effectively free). Handles multi-file generation and CTA/routing edge cases well. Start here. |
| 2    | **GLM-5.1**         | Ollama, Fireworks                               | S-tier. Self-iterating — will revise each page until correct. Escalate if rank 1 leaves type-specific sections incomplete. |
| 3    | **GPT-OSS-120B**    | Ollama, Groq, OpenRouter, Nvidia NIM, Fireworks | Free, A- tier last resort. May need more hand-holding on type-specific sections.                                           |
| 4    | **DeepSeek V4-Pro** | Ollama, Fireworks                               | S-tier. Multi-file refactor strength + 1M context. Use if you need sustained focus across all 7 files at once.             |
| 5    | **Kimi K2.6**       | Ollama Cloud, Kilo, Fireworks                   | S-tier. 256K context. Reserve for cases where the other models produce subtly incorrect CTA logic.                         |

> **Context window note**: This task requires reading `apps/[slug].astro` + `ContentLayout.astro` + `ctaUtils.ts` + `relatedContent.ts` + schemas. Prefer models with 128K+ context.

#### Context

Each collection needs a `[slug].astro` detail page that shows the full entry with appropriate layout, CTA, and related content.

#### Read First

- `src/pages/apps/[slug].astro` — template to follow (most complete example)
- `src/layouts/ContentLayout.astro` — the detail page layout component
- `src/utils/ctaUtils.ts` — CTA resolution logic
- `src/utils/relatedContent.ts` — related items logic
- `planning/CONTENT-ARCHITECTURE.md` -> Primary CTA mapping table

#### What to Build

Create `[slug].astro` for each new collection:

```
src/pages/channels/[slug].astro
src/pages/products/[slug].astro
src/pages/blogs/[slug].astro
src/pages/projects/[slug].astro
src/pages/communities/[slug].astro
src/pages/podcasts/[slug].astro
src/pages/initiatives/[slug].astro
```

Each page must:

1. Use `getStaticPaths()` to generate routes for non-draft entries
2. Pass appropriate data to `ContentLayout`:
    - Title, description, logo
    - Correct primary CTA (see table below)
    - Tags, domains, categories (if applicable)
    - Type-specific fields
3. Fetch related content from same collection using `getRelatedContentSimple()`
4. Render MDX body content via `<Content />` component

**CTA by collection**:

| Collection  | CTA Label    | CTA URL Source                               |
| ----------- | ------------ | -------------------------------------------- |
| channels    | Subscribe    | `data.channelUrl`                            |
| products    | Buy / Visit  | `data.buyUrl` or `data.website`              |
| blogs       | Read         | `data.url`                                   |
| projects    | Contribute   | `data.repositoryUrl`                         |
| communities | Join         | `data.joinUrl`                               |
| podcasts    | Listen       | `data.platforms[0].url`                      |
| initiatives | Get Involved | `data.howToHelp?.[0]?.url` or `data.website` |

**Type-specific sections** (render conditionally if data exists):

- **Channels**: embed featured videos via `YouTubeEmbed`
- **Products**: screenshots gallery
- **Projects**: show license badge, programming languages
- **Podcasts**: list all platform links as badges
- **Initiatives**: render `howToHelp` as action items
- **Communities**: show platform badge (Discord/Telegram/Slack icon)

#### Verify

```bash
npm run build
```

- Each entry has a working detail page
- CTA button shows correct label and links correctly
- Related content appears in sidebar
- MDX body renders properly
- No broken links

---

### Task 2.5 — Extend ctaUtils for All Content Types

**Type**: Code
**Effort**: S (2-4 hours)
**Depends on**: 2.1

#### Recommended Models

| Rank | Model               | Provider(s)                                     | Why                                                                                                         |
| ---- | ------------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| 1    | **Qwen3-Coder 30B** | Ollama, OpenRouter                              | Free, B+ code specialist. Adding switch/case branches to an existing utility is its sweet spot. Start here. |
| 2    | **GPT-OSS-120B**    | Ollama, Groq, OpenRouter, Nvidia NIM, Fireworks | Free, A- tier. Escalate if rank 1 introduces TypeScript type errors.                                        |
| 3    | **MiniMax M2.5**    | Kiro (0.25cr), Ollama, OpenCode Zen, OpenRouter | A-tier.                                                                                                     |
| 4    | **DeepSeek V3.2**   | Kiro (0.25cr), Ollama, Nvidia NIM, Fireworks    | A-tier. Only needed for hard-to-resolve union type issues.                                                  |

#### Context

`src/utils/ctaUtils.ts` currently handles apps, persons, and companies. Need to extend for 7 new types.

#### Read First

- `src/utils/ctaUtils.ts` — current implementation
- `planning/CONTENT-ARCHITECTURE.md` -> "Primary CTA Mapping" table

#### What to Do

Update the three functions in `ctaUtils.ts`:

**`getCTALinks(collection, data)`** — add cases for: channels, products, blogs, projects, communities, podcasts, initiatives.

**`getPrimaryCTALabel(collection, data)`** — add return values for each type.

**`getPrimaryCTAUrl(collection, data)`** — add URL resolution for each type.

#### Verify

```bash
npm run build
```

- No TypeScript errors
- Existing app/person/company CTAs still work
- New types resolve correct labels and URLs

---

### Task 2.6 — Update Sidebar Navigation

**Type**: Code
**Effort**: XS (<1 hour)
**Depends on**: 2.1

#### Recommended Models

| Rank | Model           | Provider(s)                         | Why                                                                                     |
| ---- | --------------- | ----------------------------------- | --------------------------------------------------------------------------------------- |
| 1    | **Qwen3.5-9B**  | Ollama                              | Free, tiny. Adding items to an array config is trivially within capability. Start here. |
| 2    | **Gemma 4-26B** | Ollama, Kilo, OpenRouter            | Free, B tier. Handles simple nav config.                                                |
| 3    | **GPT-OSS-20B** | Ollama, Groq, OpenRouter, Fireworks | Free, B+ tier. Only needed if the smaller models miss the group separator pattern.      |

#### Context

The sidebar nav needs to show all 10 collections, grouped logically.

#### Read First

- `src/components/SidebarNav.astro` — current sidebar nav

#### What to Do

Update the collections array in `SidebarNav.astro` to include all 10 types, grouped:

**Content group**: Apps, Projects, Products, Channels, Blogs, Podcasts
**People & Orgs group**: People, Companies, Communities, Initiatives

Each nav item shows: emoji icon + name + count of non-draft entries. Add a subtle separator or group heading between the two groups.

#### Verify

```bash
npm run build
```

- Sidebar shows all 10 collections
- Counts are correct
- Links navigate to listing pages
- Groups are visually separated

---

### Task 2.7 — Update Tag/Category Pages for New Types

**Type**: Code
**Effort**: S (2-4 hours)
**Depends on**: 2.1, 2.2

#### Recommended Models

| Rank | Model               | Provider(s)                                     | Why                                                                                                                      |
| ---- | ------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| 1    | **Qwen3-Coder 30B** | Ollama, OpenRouter                              | Free, B+ code specialist. Adding more `getCollection()` calls and grouping results is straightforward pattern extension. |
| 2    | **GPT-OSS-120B**    | Ollama, Groq, OpenRouter, Nvidia NIM, Fireworks | Free, A- tier. Escalate if rank 1 misses the tab filtering logic.                                                        |
| 3    | **MiniMax M2.5**    | Kiro (0.25cr), Ollama, OpenCode Zen, OpenRouter | A-tier.                                                                                                                  |
| 4    | **DeepSeek V3.2**   | Kiro (0.25cr), Ollama, Nvidia NIM, Fireworks    | A-tier. Cross-collection query logic if edge cases arise.                                                                |

#### Context

Tag pages and category pages currently only show apps, persons, and companies. They need to include all 10 content types.

#### Read First

- `src/pages/tags/[tag].astro` — current implementation
- `src/pages/categories/[category].astro` — current implementation

#### What to Do

In both files:

1. Add `getCollection()` calls for all new collections
2. Filter each by matching tag or category/domain
3. Add new tab pills and grouped sections for each collection that has results
4. Use appropriate card component and CTA labels via `getPrimaryCTALabel()`

#### Verify

```bash
npm run build
```

- Tag pages include results from new collections
- Category pages show cross-collection results
- Tab navigation includes new types when they have matching entries
- No errors with empty collections

---

## Phase 3 — Domain Pages & Dual Navigation

---

### Task 3.1 — Domain Enum + Display Config

**Type**: Code
**Effort**: S (2-4 hours)
**Depends on**: 2.1

#### Recommended Models

| Rank | Model               | Provider(s)                                     | Why                                                                                                       |
| ---- | ------------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 1    | **Qwen3-Coder 30B** | Ollama, OpenRouter                              | Free, B+ code specialist. A typed record of 29 domain objects is structured, mechanical work. Start here. |
| 2    | **GPT-OSS-120B**    | Ollama, Groq, OpenRouter, Nvidia NIM, Fireworks | Free, A- tier. Escalate if rank 1 produces TypeScript interface errors.                                   |
| 3    | **MiniMax M2.5**    | Kiro (0.25cr), Ollama, OpenCode Zen, OpenRouter | A-tier.                                                                                                   |
| 4    | **DeepSeek V3.2**   | Kiro (0.25cr), Ollama, Nvidia NIM, Fireworks    | A-tier. Only if helper function signatures need non-trivial logic.                                        |

#### Read First

- `planning/CONTENT-ARCHITECTURE.md` -> "Domain Taxonomy" section
- `src/utils/textUtils.ts` — existing utility pattern

#### What to Build

Create `src/utils/domainUtils.ts` with all 29 domains from CONTENT-ARCHITECTURE.md. Include:

- `DomainInfo` interface (`id`, `name`, `emoji`, `description`, `group`)
- `DOMAINS` record mapping all domain IDs to their info
- `getDomainInfo()`, `getDomainsByGroup()`, `formatDomainName()` helpers

#### Verify

```bash
npm run build
```

- No TypeScript errors
- Functions return correct data

---

### Task 3.2 — Research Domain Content

**Type**: Research
**Effort**: L (3+ days)
**Depends on**: Nothing

#### Recommended Models

| Rank | Model               | Provider(s)                    | Why                                                                                                                              |
| ---- | ------------------- | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| 1    | **Hy3 Preview**     | OpenCode Zen, Kilo, OpenRouter | Daily-reset (effectively free), A-tier with web browsing. Sufficient for initial research with source URLs. Start here.          |
| 2    | **Gemini 3.1 Pro**  | Google Antigravity             | S-tier. Web browsing + 1M+ context. Escalate for stricter fact-checking and cross-referencing multiple sources.                  |
| 3    | **Kimi K2.6**       | Ollama Cloud, Kilo, Fireworks  | S-tier. Multimodal + long-horizon (13+ hours). Good for sustained research sessions requiring source verification.               |
| 4    | **DeepSeek V4-Pro** | Ollama, Fireworks              | S-tier reasoning + 1M context. Best for STEM/math comparisons requiring accuracy. Cross-verify its output with a browsing model. |
| 5    | **GLM-5.1**         | Ollama, Fireworks              | S-tier. Self-iterating — will revise and cross-check its own research.                                                           |

> **Critical**: This is pure research requiring VERIFIABLE facts with source URLs. Use models with web browsing (Hy3 Preview, Gemini 3.1 Pro) for the primary research pass. AVOID models without web browsing as rank 1 — they will hallucinate statistics and URLs.

#### Context

Domain pages need real data: Indian achievements, world comparisons, action links. This is pure research — no code.

#### What to Research

For each of the top 5 priority domains (Space, Environment, Startups, Education, Social Impact), gather:

- 5-8 India achievements with source URLs
- 3-4 comparisons with verifiable numbers
- 3-5 actions with working URLs
- 3-5 recent milestones with source URLs

Output as structured YAML/MDX-ready documents. All facts MUST be verifiable.

#### Verify

- Every achievement has a credible source URL
- All comparison numbers are from verifiable reports
- Action URLs are working
- Dates are accurate

---

### Task 3.3 — Domain Landing Pages

**Type**: Design+Code
**Effort**: L (3+ days)
**Depends on**: 3.1

#### Recommended Models

| Rank | Model               | Provider(s)                                     | Why                                                                                                                                                      |
| ---- | ------------------- | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | **MiniMax M2.7**    | Ollama, Nvidia NIM, Fireworks                   | A+ tier, Ollama daily-reset (effectively free). Strong production-quality code output for complex page layouts. Start here.                              |
| 2    | **GLM-5.1**         | Ollama, Fireworks                               | S-tier. Self-iterating approach ideal for getting complex page layouts with tabs and conditionals right. Escalate if rank 1 leaves tab logic incomplete. |
| 3    | **GPT-OSS-120B**    | Ollama, Groq, OpenRouter, Nvidia NIM, Fireworks | Free, A- last resort. Will need more hand-holding on cross-collection query patterns.                                                                    |
| 4    | **DeepSeek V4-Pro** | Ollama, Fireworks                               | S-tier. Multi-file refactor strength. Use if you need the whole domain system built coherently in one session.                                           |
| 5    | **Kimi K2.6**       | Ollama Cloud, Kilo, Fireworks                   | S-tier. Long-horizon focus for iterative design polish. Reserve for when visual design quality matters most.                                             |

#### Read First

- `planning/DESIGN-SYSTEM.md` -> "Domain Page" layout
- `planning/CONTENT-ARCHITECTURE.md` -> "Dual Navigation Model"
- `src/utils/domainUtils.ts`
- `src/pages/tags/[tag].astro` — similar cross-collection grouping pattern

#### What to Build

Create `src/pages/domains/[domain].astro` with:

1. `getStaticPaths()` for every domain in the enum
2. Cross-collection data fetching (filter by `data.domains`)
3. Hero + tab navigation + content grid layout
4. Fallback for empty domains

#### Verify

```bash
npm run build
```

- `/domains/technology/` renders correctly
- Tab navigation works
- Empty tabs hidden
- Dark mode looks good

---

### Task 3.4 — Domain Index Page

**Type**: Design+Code
**Effort**: M (1-2 days)
**Depends on**: 3.1

#### Recommended Models

| Rank | Model              | Provider(s)                                     | Why                                                                                       |
| ---- | ------------------ | ----------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 1    | **GPT-OSS-120B**   | Ollama, Groq, OpenRouter, Nvidia NIM, Fireworks | Free, A- tier. A grid of domain cards with counts is spec-driven layout work. Start here. |
| 2    | **MiniMax M2.5**   | Kiro (0.25cr), Ollama, OpenCode Zen, OpenRouter | A-tier. Good at card grid layouts.                                                        |
| 3    | **Gemini 3 Flash** | Google Antigravity, Gemini CLI                  | B+ quick fallback for straightforward grid pages.                                         |
| 4    | **Kimi K2.6**      | Ollama Cloud, Kilo, Fireworks                   | S-tier. Only needed if the card design requires significant creative iteration.           |

#### What to Build

Create `src/pages/domains/index.astro` with:

- Domain cards grouped by their `group` field
- Each card: emoji + name + description + item count
- Grid: `grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`
- Cards link to `/domains/{domainId}/`

#### Verify

```bash
npm run build
```

- Page renders at `/domains/`
- All 29 domains shown, grouped
- Counts accurate, cards link correctly

---

### Task 3.5 — Homepage "Explore by Domain" Wiring

**Type**: Code
**Effort**: S (2-4 hours)
**Depends on**: 3.3

#### Recommended Models

| Rank | Model               | Provider(s)                                     | Why                                                                                                         |
| ---- | ------------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| 1    | **Qwen3-Coder 30B** | Ollama, OpenRouter                              | Free, B+ code specialist. Importing a utility and rendering a pill list is simple pattern work. Start here. |
| 2    | **GPT-OSS-120B**    | Ollama, Groq, OpenRouter, Nvidia NIM, Fireworks | Free, A- tier. Escalate if rank 1 misses the Astro import syntax.                                           |
| 3    | **MiniMax M2.5**    | Kiro (0.25cr), Ollama, OpenCode Zen, OpenRouter | A-tier.                                                                                                     |
| 4    | **DeepSeek V3.2**   | Kiro (0.25cr), Ollama, Nvidia NIM, Fireworks    | A-tier. Only if ordering/filtering logic is non-trivial.                                                    |

#### What to Do

In `src/pages/index.astro`, add domain pills section using `DOMAINS` from `domainUtils`. Show top 8-12 domains, link to `/domains/{id}/`, add "View all domains" link.

#### Verify

```bash
npm run build
```

- Domain pills render on homepage, link correctly, wrap on mobile

---

### Task 3.6 — Domain Navigation in Sidebar

**Type**: Code
**Effort**: S (2-4 hours)
**Depends on**: 3.1

#### Recommended Models

| Rank | Model               | Provider(s)                                     | Why                                                                                                |
| ---- | ------------------- | ----------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 1    | **Qwen3-Coder 30B** | Ollama, OpenRouter                              | Free, B+ code specialist. Adding a nav section to an existing component is mechanical. Start here. |
| 2    | **GPT-OSS-120B**    | Ollama, Groq, OpenRouter, Nvidia NIM, Fireworks | Free, A- tier. Escalate if the collapsible list logic is needed.                                   |
| 3    | **MiniMax M2.5**    | Kiro (0.25cr), Ollama, OpenCode Zen, OpenRouter | A-tier.                                                                                            |
| 4    | **DeepSeek V3.2**   | Kiro (0.25cr), Ollama, Nvidia NIM, Fireworks    | A-tier. Only needed if styling deviations require iteration.                                       |

#### What to Do

Add "Domains" section to the left sidebar with emoji + name links to `/domains/{id}/`. Show top 8-10 or collapsible list. Match existing styling.

#### Verify

```bash
npm run build
```

- Domains section in sidebar, links work, not too long

---

## Phase 4 — Opportunities & Engagement

---

### Task 4.1 — Domain Content Collection Schema

**Type**: Code
**Effort**: M (1-2 days)
**Depends on**: 3.1

#### Recommended Models

| Rank | Model               | Provider(s)                                     | Why                                                                                                           |
| ---- | ------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| 1    | **Qwen3-Coder 30B** | Ollama, OpenRouter                              | Free, B+ code specialist. Complex Zod schemas with nested arrays are structured, repeatable work. Start here. |
| 2    | **GPT-OSS-120B**    | Ollama, Groq, OpenRouter, Nvidia NIM, Fireworks | Free, A- tier. Escalate if the nested schema types produce TypeScript errors.                                 |
| 3    | **MiniMax M2.5**    | Kiro (0.25cr), Ollama, OpenCode Zen, OpenRouter | A-tier.                                                                                                       |
| 4    | **DeepSeek V3.2**   | Kiro (0.25cr), Ollama, Nvidia NIM, Fireworks    | A-tier. Only if the example MDX file needs non-trivial content structuring.                                   |

#### What to Build

1. Add `domains` collection schema to `config.ts` (achievements, comparisons, actions, milestones arrays)
2. Create `src/content/domains/` folder
3. Create one example domain file (e.g., `space.mdx`) with real data

#### Verify

```bash
npm run build
```

- Schema validates, no TypeScript errors

---

### Task 4.2 — AchievementCard Component

**Type**: Design+Code
**Effort**: M (1-2 days)
**Depends on**: Nothing

#### Recommended Models

| Rank | Model              | Provider(s)                                     | Why                                                                                                                                                              |
| ---- | ------------------ | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | **MiniMax M2.5**   | Kiro (0.25cr), Ollama, OpenCode Zen, OpenRouter | A-tier full-stack. Cheapest model with genuine frontend design capability. Can produce gradient + glow components when the design brief is explicit. Start here. |
| 2    | **GPT-OSS-120B**   | Ollama, Groq, OpenRouter, Nvidia NIM, Fireworks | Free, A- tier. Worth trying first if you want to avoid any cost — the design spec in DESIGN-SYSTEM.md is detailed.                                               |
| 3    | **Gemini 3 Flash** | Google Antigravity, Gemini CLI                  | B+ fallback for quick visual iteration.                                                                                                                          |
| 4    | **Qwen3.6 Plus**   | Fireworks ($0.50/M in)                          | S-tier vibe-coding. Escalate if the cheaper models produce flat, uninspiring output.                                                                             |
| 5    | **Kimi K2.6**      | Ollama Cloud, Kilo, Fireworks                   | S-tier. Reserve for cases where iterative visual refinement is truly needed.                                                                                     |

> **Design note**: This component must feel celebratory — gradients, glow, badges. Think Xbox achievements, not generic cards. If rank 1 produces flat output, escalate rather than prompt-engineer your way through.

#### Read First

- `planning/DESIGN-SYSTEM.md` -> "AchievementCard (Gamification)" section

#### What to Build

Create `src/components/AchievementCard.astro` with gradient background, prominent badge, heading font, source link, glow/shadow depth. NOT flat. Responsive, dark mode.

#### Verify

- Looks distinctly different from regular cards
- Works in light and dark mode
- Readable at various widths

---

### Task 4.3 — ComparisonWidget Component

**Type**: Design+Code
**Effort**: M (1-2 days)
**Depends on**: Nothing

#### Recommended Models

| Rank | Model              | Provider(s)                                     | Why                                                                                                         |
| ---- | ------------------ | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| 1    | **GPT-OSS-120B**   | Ollama, Groq, OpenRouter, Nvidia NIM, Fireworks | Free, A- tier. Proportional bar widths are math (percentage calculations), not creative design. Start here. |
| 2    | **MiniMax M2.5**   | Kiro (0.25cr), Ollama, OpenCode Zen, OpenRouter | A-tier. Escalate if rank 1 misses the responsive label-above-bars mobile layout.                            |
| 3    | **Gemini 3 Flash** | Google Antigravity, Gemini CLI                  | B+ fallback for visual component iteration.                                                                 |
| 4    | **Qwen3.6 Plus**   | Fireworks ($0.50/M in)                          | S-tier. Only needed if the visual polish needs significant creative improvement.                            |
| 5    | **Kimi K2.6**      | Ollama Cloud, Kilo, Fireworks                   | S-tier. Overkill unless iterating on data visualization design.                                             |

#### Read First

- `planning/DESIGN-SYSTEM.md` -> "ComparisonWidget" section

#### What to Build

Create `src/components/ComparisonWidget.astro` with:

- Proportional horizontal bars (India in `bg-primary-500`, others in gray)
- Country flags as emoji prefixes
- Gap/insight text in muted italic
- Responsive: labels above bars on mobile

#### Verify

- Bar proportions accurate, works with 1-5 countries
- Responsive + dark mode

---

### Task 4.4 — ActionCard Component

**Type**: Design+Code
**Effort**: S (2-4 hours)
**Depends on**: Nothing

#### Recommended Models

| Rank | Model               | Provider(s)                                     | Why                                                                                       |
| ---- | ------------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 1    | **GPT-OSS-120B**    | Ollama, Groq, OpenRouter, Nvidia NIM, Fireworks | Free, A- tier. Five type-based color variants is a well-defined mapping task. Start here. |
| 2    | **Qwen3-Coder 30B** | Ollama, OpenRouter                              | Free, B+ code specialist. Good fallback for the color/icon mapping.                       |
| 3    | **MiniMax M2.5**    | Kiro (0.25cr), Ollama, OpenCode Zen, OpenRouter | A-tier. Only needed if rank 1/2 miss the optional CTA button edge case.                   |
| 4    | **DeepSeek V3.2**   | Kiro (0.25cr), Ollama, Nvidia NIM, Fireworks    | A-tier. Last resort.                                                                      |

#### Read First

- `planning/DESIGN-SYSTEM.md` -> "ActionCard (CTA)" section

#### What to Build

Create `src/components/ActionCard.astro` with type-based colors (volunteer=green, donate=amber, promote=blue, collaborate=purple, learn=cyan), emoji icons, optional CTA button.

#### Verify

- All 5 types render with correct colors/icons
- Works without URL
- Dark mode

---

### Task 4.5 — MilestoneCard Component

**Type**: Design+Code
**Effort**: S (2-4 hours)
**Depends on**: Nothing

#### Recommended Models

| Rank | Model               | Provider(s)                                     | Why                                                                                                  |
| ---- | ------------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| 1    | **GPT-OSS-120B**    | Ollama, Groq, OpenRouter, Nvidia NIM, Fireworks | Free, A- tier. Left border accent + conditional thumbnail is spec-driven component work. Start here. |
| 2    | **Qwen3-Coder 30B** | Ollama, OpenRouter                              | Free, B+ code specialist. Good for simple component patterns.                                        |
| 3    | **MiniMax M2.5**    | Kiro (0.25cr), Ollama, OpenCode Zen, OpenRouter | A-tier. Escalate if rank 1/2 miss the subtle gradient aesthetic.                                     |
| 4    | **DeepSeek V3.2**   | Kiro (0.25cr), Ollama, Nvidia NIM, Fireworks    | A-tier. Last resort.                                                                                 |

#### Read First

- `planning/DESIGN-SYSTEM.md` -> "MilestoneCard (News)" section

#### What to Build

Create `src/components/MilestoneCard.astro` with left border accent, domain emoji badge, source link, optional thumbnail, achievement aesthetic (subtle gradient, not flat).

#### Verify

- Renders with and without thumbnail
- Fits in scroll row
- Dark mode

---

### Task 4.6 — Opportunities Section Layout

**Type**: Design+Code
**Effort**: M (1-2 days)
**Depends on**: 4.1, 4.2, 4.3, 4.4, 4.5

#### Recommended Models

| Rank | Model               | Provider(s)                                     | Why                                                                                                                            |
| ---- | ------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| 1    | **MiniMax M2.7**    | Ollama, Nvidia NIM, Fireworks                   | A+ tier, Ollama daily-reset (effectively free). Strong at composing multiple sub-components into a section layout. Start here. |
| 2    | **GPT-OSS-120B**    | Ollama, Groq, OpenRouter, Nvidia NIM, Fireworks | Free, A- tier. Worth trying if rank 1 is unavailable. May need guidance on wiring all 4 sub-components together.               |
| 3    | **GLM-5.1**         | Ollama, Fireworks                               | S-tier. Self-iterating — good for getting complex layout composition right across multiple passes.                             |
| 4    | **DeepSeek V4-Pro** | Ollama, Fireworks                               | S-tier. Multi-file refactor to wire everything together if the layout needs cross-page integration.                            |
| 5    | **Kimi K2.6**       | Ollama Cloud, Kilo, Fireworks                   | S-tier. Long-horizon focus. Reserve for extended design iteration sessions.                                                    |

#### What to Build

Create `src/components/OpportunitiesSection.astro` composing all 4 sub-components. Integrate into `src/pages/domains/[domain].astro`.

Layout: Achievement carousel -> ComparisonWidgets (max 3) -> Action cards (3-col grid) -> Milestone row.

#### Verify

```bash
npm run build
```

- Domain page shows complete Opportunities section
- All sub-sections render, empty ones hidden
- Responsive + dark mode

---

### Tasks 4.7–4.11 — Research + Write Opportunities Content

**Type**: Research+Content
**Effort**: M each (1-2 days per domain)
**Depends on**: 4.1

#### Recommended Models (same for all 5 tasks)

| Rank | Model               | Provider(s)                    | Why                                                                                                                         |
| ---- | ------------------- | ------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| 1    | **Hy3 Preview**     | OpenCode Zen, Kilo, OpenRouter | Daily-reset (effectively free), A-tier with web browsing. Sufficient for research with source URL verification. Start here. |
| 2    | **Gemini 3.1 Pro**  | Google Antigravity             | S-tier. Web browsing + fact-checking at scale. Escalate when Hy3 Preview's output needs stricter source verification.       |
| 3    | **Kimi K2.6**       | Ollama Cloud, Kilo, Fireworks  | S-tier. Strong instruction-following for structured MDX content. Good for the editorial writing pass.                       |
| 4    | **DeepSeek V4-Pro** | Ollama, Fireworks              | S-tier. STEM reasoning for accurate comparisons. Use for structuring data — cross-verify all facts with a browsing model.   |
| 5    | **GLM-5.1**         | Ollama, Fireworks              | S-tier. Self-iterating research and cross-checking.                                                                         |

> **Warning**: DeepSeek V4-Pro has ~94% hallucination rate on facts. Use it for reasoning/structuring, but cross-verify every statistic with Gemini 3.1 Pro or manual spot-checks before publishing.

**Domains to produce**:

- 4.7: Space (`src/content/domains/space.mdx`)
- 4.8: Environment (`src/content/domains/environment.mdx`)
- 4.9: Technology/Startups (`src/content/domains/startups.mdx`)
- 4.10: Education (`src/content/domains/education.mdx`)
- 4.11: Social Impact (`src/content/domains/socialImpact.mdx`)

Each file needs: 5-8 achievements, 3-4 comparisons, 3-5 actions, 3-5 milestones, all with source URLs. Plus 200-400 words of editorial MDX body.

#### Verify

- Schema validation passes
- Source URLs accessible (spot-check 5+ per domain)
- Tone is inspiring, not shaming

---

## Phase 5 — Discovery & Scale

---

### Task 5.1 — Pagefind Optimization

**Type**: Code | **Effort**: S | **Depends on**: 1.4

#### Recommended Models

| Rank | Model               | Provider(s)                                     | Why                                                                                                             |
| ---- | ------------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 1    | **Qwen3-Coder 30B** | Ollama, OpenRouter                              | Free, B+ code specialist. Adding `data-pagefind-meta` attributes is straightforward attribute work. Start here. |
| 2    | **GPT-OSS-120B**    | Ollama, Groq, OpenRouter, Nvidia NIM, Fireworks | Free, A- tier. Escalate if the filter pill UI needs more complex wiring.                                        |
| 3    | **MiniMax M2.5**    | Kiro (0.25cr), Ollama, OpenCode Zen, OpenRouter | A-tier.                                                                                                         |
| 4    | **DeepSeek V3.2**   | Kiro (0.25cr), Ollama, Nvidia NIM, Fireworks    | A-tier. Only for complex Pagefind config edge cases.                                                            |

Add `data-pagefind-meta` and `data-pagefind-filter` attributes. Update Search UI with filter pills. Ensure sidebar/nav excluded from indexing.

---

### Task 5.2 — Build Performance Audit

**Type**: Code | **Effort**: M | **Depends on**: Nothing

#### Recommended Models

| Rank | Model               | Provider(s)                                     | Why                                                                                                                                      |
| ---- | ------------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | **MiniMax M2.7**    | Ollama, Nvidia NIM, Fireworks                   | A+ tier, Ollama daily-reset (effectively free). Production debugging and SRE strength — excellent for performance profiling. Start here. |
| 2    | **GPT-OSS-120B**    | Ollama, Groq, OpenRouter, Nvidia NIM, Fireworks | Free, A- tier. Worth trying if MiniMax M2.7 is unavailable on Ollama.                                                                    |
| 3    | **GLM-5.1**         | Ollama, Fireworks                               | S-tier. Iterative optimization specialist. Escalate when root cause is hard to isolate.                                                  |
| 4    | **DeepSeek V4-Pro** | Ollama, Fireworks                               | S-tier reasoning for complex root-cause analysis. Last resort.                                                                           |

Profile build time, identify bottlenecks, implement shared data loading if needed. Target: builds under 60s.

---

### Task 5.3 — SEO: Structured Data + Meta

**Type**: Code | **Effort**: M | **Depends on**: Nothing

#### Recommended Models

| Rank | Model               | Provider(s)                                     | Why                                                                                                     |
| ---- | ------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 1    | **GPT-OSS-120B**    | Ollama, Groq, OpenRouter, Nvidia NIM, Fireworks | Free, A- tier. JSON-LD is a well-known schema format — GPT-class models know it thoroughly. Start here. |
| 2    | **Qwen3-Coder 30B** | Ollama, OpenRouter                              | Free, B+ code specialist. Good fallback for the structured data markup.                                 |
| 3    | **MiniMax M2.5**    | Kiro (0.25cr), Ollama, OpenCode Zen, OpenRouter | A-tier. Escalate if OG tag coverage is inconsistent across page types.                                  |
| 4    | **DeepSeek V3.2**   | Kiro (0.25cr), Ollama, Nvidia NIM, Fireworks    | A-tier. Last resort.                                                                                    |

Add JSON-LD, OG tags, Twitter cards, canonical URLs, sitemap updates, per-collection RSS feeds.

---

### Task 5.4 — Dynamic OG Image Generation

**Type**: Code | **Effort**: M | **Depends on**: Nothing

#### Recommended Models

| Rank | Model             | Provider(s)                                     | Why                                                                                                    |
| ---- | ----------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 1    | **GPT-OSS-120B**  | Ollama, Groq, OpenRouter, Nvidia NIM, Fireworks | Free, A- tier. `satori` JSX templates are code — a capable coding model handles them fine. Start here. |
| 2    | **DeepSeek V3.2** | Kiro (0.25cr), Ollama, Nvidia NIM, Fireworks    | A-tier. Can implement `@vercel/og` / `satori` pipelines with per-page-type templates.                  |
| 3    | **Qwen3.6 Plus**  | Fireworks ($0.50/M in)                          | S-tier. Escalate if template visual design needs iteration. Image-aware coding helps.                  |
| 4    | **Kimi K2.6**     | Ollama Cloud, Kilo, Fireworks                   | S-tier. Multimodal. Only needed if you need to preview and iterate on OG image visual output.          |

Generate OG images at build time using `satori` or `@vercel/og`. Different templates per page type.

---

### Task 5.5 — Analytics Integration

**Type**: Code | **Effort**: S | **Depends on**: Nothing

#### Recommended Models

| Rank | Model               | Provider(s)                                     | Why                                                                                           |
| ---- | ------------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 1    | **GPT-OSS-20B**     | Ollama, Groq (1K RPD), OpenRouter, Fireworks    | Free, B+ tier. Adding a script tag to a layout is trivially within capability. Start here.    |
| 2    | **Qwen3-Coder 30B** | Ollama, OpenRouter                              | Free, B+ code specialist. Escalate if outbound CTA click tracking needs event listener logic. |
| 3    | **MiniMax M2.5**    | Kiro (0.25cr), Ollama, OpenCode Zen, OpenRouter | A-tier. Only if the analytics integration has non-trivial configuration.                      |
| 4    | **DeepSeek V3.2**   | Kiro (0.25cr), Ollama, Nvidia NIM, Fireworks    | A-tier. Last resort.                                                                          |

Add Plausible or Umami analytics script to `BaseLayout.astro`. Track page views and outbound CTA clicks. No cookies, no personal data.

---

## Phase 6 — Polish & Growth

---

### Task 6.1 — Accessibility Audit + Fixes

**Type**: Code | **Effort**: M | **Depends on**: Nothing

#### Recommended Models

| Rank | Model             | Provider(s)                                     | Why                                                                                      |
| ---- | ----------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 1    | **MiniMax M2.7**  | Ollama, Nvidia NIM, Fireworks                   | A+ tier, Ollama daily-reset (effectively free). Systematic audit capability. Start here. |
| 2    | **GPT-OSS-120B**  | Ollama, Groq, OpenRouter, Nvidia NIM, Fireworks | Free, A- tier. Escalate if rank 1 misses ARIA pattern edge cases.                        |
| 3    | **GLM-5.1**       | Ollama, Fireworks                               | S-tier. Self-iterating — good for "find and fix all issues" across many components.      |
| 4    | **DeepSeek V3.2** | Kiro (0.25cr), Ollama, Nvidia NIM, Fireworks    | A-tier. Last resort for complex interactive component accessibility.                     |

Run Lighthouse, fix all Critical/Serious issues. Ensure keyboard navigation, ARIA labels, color contrast. Target WCAG 2.1 AA.

---

### Task 6.2 — Animation & Micro-interactions

**Type**: Design+Code | **Effort**: M | **Depends on**: Nothing

#### Recommended Models

| Rank | Model            | Provider(s)                                     | Why                                                                                                                                                        |
| ---- | ---------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | **GPT-OSS-120B** | Ollama, Groq, OpenRouter, Nvidia NIM, Fireworks | Free, A- tier. CSS transitions and GPU-composited animations are well-understood patterns. `prefers-reduced-motion` is a standard media query. Start here. |
| 2    | **MiniMax M2.5** | Kiro (0.25cr), Ollama, OpenCode Zen, OpenRouter | A-tier. Escalate if the AchievementCard glow pulse needs creative design iteration.                                                                        |
| 3    | **Qwen3.6 Plus** | Fireworks ($0.50/M in)                          | S-tier vibe-coding. Good for polishing visual feel when you want the animations to feel premium.                                                           |
| 4    | **Kimi K2.6**    | Ollama Cloud, Kilo, Fireworks                   | S-tier. Reserve for extended animation design refinement sessions.                                                                                         |

Add consistent hover effects, dropdown/tab animations, AchievementCard glow pulse. All GPU-composited (`transform` + `opacity`). Respect `prefers-reduced-motion`.

---

### Task 6.3 — Dark Mode Audit + Polish

**Type**: Design+Code | **Effort**: S | **Depends on**: Nothing

#### Recommended Models

| Rank | Model             | Provider(s)                                     | Why                                                                                                                                            |
| ---- | ----------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | **GPT-OSS-120B**  | Ollama, Groq, OpenRouter, Nvidia NIM, Fireworks | Free, A- tier. Reviewing Tailwind dark: classes across components is code review, not visual review. Sufficient for the code pass. Start here. |
| 2    | **MiniMax M2.5**  | Kiro (0.25cr), Ollama, OpenCode Zen, OpenRouter | A-tier. Escalate if the badge/gradient readability issues need more systematic component-by-component fixes.                                   |
| 3    | **Kimi K2.6**     | Ollama Cloud, Kilo, Fireworks                   | S-tier multimodal. Only needed when you want to feed actual screenshots into the model and have it identify visual contrast problems.          |
| 4    | **Qwen3-VL-235B** | Ollama                                          | Vision model. Use for screenshot-based dark mode review as an alternative to Kimi K2.6.                                                        |

> **Tip**: Code-only review (ranks 1-2) covers most issues. Only reach for a multimodal model (Kimi K2.6 or Qwen3-VL) if you want to verify visual output from actual screenshots.

Review every component in dark mode. Fix gradients, bar visibility, badge readability. No white flash on load.

---

### Task 6.4 — Contributor Workflow Tooling

**Type**: Code | **Effort**: M | **Depends on**: Nothing

#### Recommended Models

| Rank | Model               | Provider(s)                                     | Why                                                                                                      |
| ---- | ------------------- | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 1    | **GPT-OSS-120B**    | Ollama, Groq, OpenRouter, Nvidia NIM, Fireworks | Free, A- tier. Scripts, GitHub templates, and validation logic are well-understood patterns. Start here. |
| 2    | **Qwen3-Coder 30B** | Ollama, OpenRouter                              | Free, B+ code specialist. Good fallback for the Node.js script scaffolding.                              |
| 3    | **MiniMax M2.5**    | Kiro (0.25cr), Ollama, OpenCode Zen, OpenRouter | A-tier. Escalate if the validation script needs complex Zod-based logic.                                 |
| 4    | **DeepSeek V3.2**   | Kiro (0.25cr), Ollama, Nvidia NIM, Fireworks    | A-tier. Last resort.                                                                                     |

Create: GitHub issue templates, entry scaffolding script (`scripts/new-entry.mjs`), validation script (`scripts/validate.mjs`), update CONTRIBUTING.md.

---

### Task 6.5 — Performance Budget + Lighthouse

**Type**: Code | **Effort**: S | **Depends on**: Nothing

#### Recommended Models

| Rank | Model             | Provider(s)                                     | Why                                                                                                                                                   |
| ---- | ----------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | **MiniMax M2.7**  | Ollama, Nvidia NIM, Fireworks                   | A+ tier, Ollama daily-reset (effectively free). SRE and production quality strength — good at Lighthouse interpretation and config fixes. Start here. |
| 2    | **GPT-OSS-120B**  | Ollama, Groq, OpenRouter, Nvidia NIM, Fireworks | Free, A- tier. Escalate if rank 1 misses font-loading or render-blocking resource fixes.                                                              |
| 3    | **GLM-5.1**       | Ollama, Fireworks                               | S-tier. Iterative optimization specialist.                                                                                                            |
| 4    | **DeepSeek V3.2** | Kiro (0.25cr), Ollama, Nvidia NIM, Fireworks    | A-tier. Last resort.                                                                                                                                  |

Lighthouse audit on 3 page types. Target: 95+ on all scores. Fix render-blocking resources, image optimization, fonts. Set <500KB page weight budget.

---

## Content Research Tasks (Ongoing)

These can be done at ANY time, parallel with any phase.

#### Recommended Models (same for all R.x tasks)

| Rank | Model               | Provider(s)                    | Why                                                                                                                                              |
| ---- | ------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1    | **Hy3 Preview**     | OpenCode Zen, Kilo, OpenRouter | Daily-reset (effectively free), A-tier with web browsing. Cheapest model that can discover and verify real Indian creators/projects. Start here. |
| 2    | **Gemini 3.1 Pro**  | Google Antigravity             | S-tier. Web browsing for stricter discovery and fact-checking. Escalate when Hy3 output needs verification or coverage is thin.                  |
| 3    | **Kimi K2.6**       | Ollama Cloud, Kilo, Fireworks  | S-tier. Strong instruction-following for structured MDX output. Multimodal for verifying screenshots/logos.                                      |
| 4    | **DeepSeek V4-Pro** | Ollama, Fireworks              | S-tier reasoning. Good for comprehensive research compilation. Cross-verify all facts with a browsing model.                                     |
| 5    | **GLM-5.1**         | Ollama, Fireworks              | S-tier. Self-iterating research quality.                                                                                                         |

> **Quality gate**: For all research tasks, the final output should be cross-verified by a second model or manual spot-check. All URLs must be tested. All facts must have sources.

---

### Task R.1 — Research Indian Apps (batch of 10)

**Type**: Research+Content | **Effort**: M per batch

Find 10 notable Indian-made apps. For each: verify active + Indian-made, gather screenshots/links, write MDX entry, create author entries if needed, register logos.

**Sources**: Product Hunt (filter India), IndieHackers, GitHub trending (India), Play Store "Made in India".

---

### Task R.2 — Research Indian YouTube Channels (batch of 10)

**Type**: Research+Content | **Effort**: M per batch

Find 10 notable Indian YouTube channels across varied domains. For each: channel URL, subscribers, topics, languages, 2-3 featured video IDs. Write MDX.

---

### Task R.3 — Research Indian Open Source Projects (batch of 10)

**Type**: Research+Content | **Effort**: M per batch

Find 10 Indian-maintained OSS projects (NOT end-user apps). For each: repo URL, stars, license, languages, what it does. Write MDX.

**Sources**: GitHub, awesome lists, FOSS India community.

---

### Task R.4 — Research Indian Initiatives/NGOs (batch of 10)

**Type**: Research+Content | **Effort**: M per batch

Find 10 Indian NGOs/social initiatives. Diverse domains. For each: mission, impact metrics, `howToHelp` array with working URLs. Write MDX.

---

### Task R.5 — Research Indian Podcasts (batch of 10)

**Type**: Research+Content | **Effort**: M per batch

Find 10 Indian podcasts across domains. For each: platforms, topics, language, frequency. Write MDX.

---

### Task R.6 — Research Indian Communities (batch of 10)

**Type**: Research+Content | **Effort**: M per batch

Find 10 active Indian dev/creator communities. For each: platform, join URL, member count range, topics. Write MDX.
