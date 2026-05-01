# Awesome Bharat — Development Roadmap

This is the phased delivery plan. Each phase is independently deployable. AI agents pick tasks from the current active phase. Phases are sequential — complete Phase N before starting Phase N+1 (though content can be added continuously in parallel with any phase).

---

## Phase Summary

| Phase | Name | Focus | Status |
|-------|------|-------|--------|
| 0 | Foundation | Core site architecture & bug fixes | ✅ Complete |
| 1 | Polish & Gaps | Remaining backlog items from IMPROVEMENTS.md | 🔄 In Progress |
| 2 | Content Type Expansion | Add 7 new content collections | Not Started |
| 3 | Domain Pages & Dual Nav | Domain taxonomy, domain landing pages | Not Started |
| 4 | Opportunities & Engagement | The unique differentiator feature | Not Started |
| 5 | Discovery & Scale | Search, performance, SEO at 500+ entries | Not Started |
| 6 | Polish & Growth | Animations, accessibility, contributor tooling | Not Started |

---

## Phase 0 — Foundation ✅ Complete

Everything checked off in IMPROVEMENTS.md priority table:

- [x] Right sidebar scroll fix (items-start)
- [x] Load custom font (Plus Jakarta Sans)
- [x] Wire up Footer
- [x] Fix YouMightLike grid conflict
- [x] Fix footer copyright layout
- [x] Extract StoreBadges component
- [x] Primary CTA above the fold
- [x] Redesign header card badges
- [x] Fix secondary color scale
- [x] Hero section visual weight
- [x] Redesign Engage section
- [x] Improve related content scoring
- [x] Remaining bug fixes (scroll, images, aspectRatio)
- [x] Code quality items (path aliases, unused exports)
- [x] Listing page hero banner (CollectionHero)
- [x] Tag landing pages (`/tags/[tag]`)
- [x] Category landing pages (`/categories/[category]`)

---

## Phase 1 — Polish & Gaps 🔄 In Progress

Complete the remaining items from the original IMPROVEMENTS.md that weren't finished in Phase 0.

### 1.1 ContentCardFull Component
**Status**: Not Started
**Priority**: P1
**Effort**: M (1-2 days)

Create `ContentCardFull.astro` variant for listing grids. Currently listing pages use the compact `ContentCard` which shows minimal info.

**Requirements**:
- Logo: 64px
- Title: medium weight, 2-line clamp
- Description: 2-line clamp
- Primary domain/category badge
- CTA hint label (Download, Visit, etc.)
- Hover: lift shadow animation
- Used on: listing pages, tag pages, category pages, domain pages

**Files**: `src/components/ContentCardFull.astro`, update `src/pages/apps/index.astro`

---

### 1.2 "By Same Author" Sidebar Section
**Status**: Not Started
**Priority**: P2
**Effort**: S (half day)

Add a "More by [Author Name]" section to the right sidebar on detail pages.

**Requirements**:
- Query all content where `authors` array contains any of the current entry's authors
- Display below "You might also like"
- Use `RelatedItem` component
- Max 4 items

**Files**: `src/pages/apps/[slug].astro`, `src/components/RightSidebar.astro`

---

### 1.3 Homepage Multi-Section Layout
**Status**: Not Started
**Priority**: P2
**Effort**: M (1-2 days)

The homepage currently only shows "Latest Apps". Expand to show all content types.

**Requirements**:
- Hero (existing, with stat strip)
- "Latest Apps" — horizontal scroll row (existing)
- "Featured People" — horizontal scroll row
- "Featured Companies" — horizontal scroll row
- "Explore by Domain" — grid of domain pills (links to domain pages, Phase 3)
- "Explore by Category" — grid of category pills
- Each section has "View all →" link

**Files**: `src/pages/index.astro`

**Note**: The "Explore by Domain" section can link to domain pages once Phase 3 is complete. Until then, link to filtered tag pages or disable.

---

### 1.4 Search (Pagefind)
**Status**: Not Started
**Priority**: P3
**Effort**: M (1-2 days)

Implement client-side search using Pagefind.

**Requirements**:
- Integrates with Astro static builds
- Zero server needed
- Search input in the header
- Results overlay/modal
- Indexes all content automatically at build time
- Handles 500+ entries performantly

**Files**: `astro.config.mjs`, `src/components/Header.astro`, new `src/components/Search.astro`

---

### 1.5 Mobile Nav Background Alignment
**Status**: Not Started
**Priority**: P3
**Effort**: XS (< 1 hour)

Mobile nav drawer uses different background colors than desktop sidebar.

**Fix**: Align `bg-primary-50 dark:bg-secondary-800` with desktop sidebar.

**Files**: `src/components/MobileNav.astro`

---

### Phase 1 Exit Criteria
- [ ] ContentCardFull renders on all listing/tag/category pages
- [ ] "By same author" section appears on detail pages with authors
- [ ] Homepage shows sections for apps, people, and companies
- [ ] Pagefind search functional in header
- [ ] `npm run build` passes cleanly

---

## Phase 2 — Content Type Expansion

Add 7 new content collections with full support (schema, listing page, detail page, integration into tags/categories).

### 2.1 Schema Definitions
**Effort**: S (half day)

Add to `src/content/config.ts`:
- YouTube Channels (`channels`)
- Products (`products`)
- Blogs/Newsletters (`blogs`)
- Open-source Projects (`projects`)
- Communities (`communities`)
- Podcasts (`podcasts`)
- Initiatives (`initiatives`)

Also add `domains` field to existing collections (apps, persons, companies).

See `planning/CONTENT-ARCHITECTURE.md` for full schema specifications.

**Files**: `src/content/config.ts`

---

### 2.2 Collection Folders & Example Entries
**Effort**: M (1-2 days)

Create folders and at least 1-2 example entries per new collection type:
- `src/content/channels/`
- `src/content/products/`
- `src/content/blogs/`
- `src/content/projects/`
- `src/content/communities/`
- `src/content/podcasts/`
- `src/content/initiatives/`

---

### 2.3 Listing Pages
**Effort**: M (1-2 days)

Create listing pages for each new collection:
- `/channels/` → `src/pages/channels/index.astro`
- `/products/` → `src/pages/products/index.astro`
- `/blogs/` → `src/pages/blogs/index.astro`
- `/projects/` → `src/pages/projects/index.astro`
- `/communities/` → `src/pages/communities/index.astro`
- `/podcasts/` → `src/pages/podcasts/index.astro`
- `/initiatives/` → `src/pages/initiatives/index.astro`

All use `CollectionHero` + `ContentCardFull` grid pattern from `/apps/`.

---

### 2.4 Detail Pages
**Effort**: L (3+ days)

Create `[slug].astro` detail pages for each new collection. Each uses `ContentLayout` with type-appropriate:
- Header card with correct primary CTA
- Relevant badges/metadata
- Right sidebar with related items
- Type-specific content sections (e.g., platform links for podcasts, video embeds for channels)

---

### 2.5 CTA Utils Extension
**Effort**: S (half day)

Extend `src/utils/ctaUtils.ts` to handle all 10 content types. See CTA mapping in `CONTENT-ARCHITECTURE.md`.

---

### 2.6 Sidebar Navigation Update
**Effort**: XS (< 1 hour)

Add new collections to `SidebarNav.astro`. Group into:
- **Content**: Apps, Projects, Products, Channels, Blogs, Podcasts
- **People & Orgs**: Persons, Companies, Communities, Initiatives

---

### 2.7 Tag & Category Page Updates
**Effort**: S (half day)

Update `/tags/[tag].astro` and `/categories/[category].astro` to include new content types in their grouped results.

---

### Phase 2 Exit Criteria
- [ ] All 10 collections defined in `config.ts` with Zod schemas
- [ ] Each collection has at least 2 example entries
- [ ] Each collection has a listing page and detail page
- [ ] Sidebar shows all collections
- [ ] Tag/category pages include all content types
- [ ] `npm run build` passes cleanly

---

## Phase 3 — Domain Pages & Dual Navigation

Implement the domain taxonomy axis — the second way users browse the site.

### 3.1 Domain Enum & Display Config
**Effort**: S (half day)

Add `domainEnum` to `config.ts`. Create `src/utils/domainUtils.ts` with:
- Domain display names
- Domain emojis
- Domain descriptions (one-liner)

---

### 3.2 Domain Landing Pages
**Effort**: L (3+ days)

Create `/domains/[domain].astro`:
- Dynamic routes from domain enum
- Hero banner with domain name, emoji, description, item count
- Tab navigation: grouped by content type (Apps, People, Channels, etc.)
- Each group shows `ContentCardFull` items filtered by domain
- Featured items pinned to top

**Structure**:
```
/domains/space/     → All content tagged with domain: space
/domains/health/    → All content tagged with domain: health
```

---

### 3.3 Domain Index Page
**Effort**: M (1-2 days)

Create `/domains/index.astro`:
- Grid of all domains with emoji, name, item count
- Visual cards linking to each domain page
- Grouped by meta-category (Science & Tech, Social Impact, Arts & Culture, etc.)

---

### 3.4 Homepage "Explore by Domain" Section
**Effort**: S (half day)

Wire up the domain grid on the homepage (from Phase 1.3) to actually link to domain pages.

---

### 3.5 Domain Navigation in Sidebar
**Effort**: S (half day)

Add a "Domains" section to the left sidebar with expandable domain list.

---

### Phase 3 Exit Criteria
- [ ] `domains` field populated on at least 50% of existing entries
- [ ] Domain pages render with grouped content
- [ ] Domain index shows all domains
- [ ] Homepage "Explore by Domain" links work
- [ ] Sidebar includes domain navigation
- [ ] `npm run build` passes cleanly

---

## Phase 4 — Opportunities & Engagement

The unique differentiator. Requires editorial content per domain.

### 4.1 Domain Content Collection
**Effort**: M (1-2 days)

Create `src/content/domains/` collection with MDX files per domain. Schema includes:
- Achievements array
- Comparisons array (India vs World)
- Actions array (Volunteer, Donate, Promote, Collaborate)
- Milestones array (recent news)
- Editorial prose (MDX body)

See `CONTENT-ARCHITECTURE.md` → Opportunities Section for full schema.

---

### 4.2 Achievement Card Component
**Effort**: M (1-2 days)

Design and build `AchievementCard.astro`:
- Gamification-inspired design (NOT a plain card)
- Badge icon, achievement title, one-liner, date
- Visual flourishes: subtle gradients, glow effects, celebratory colors
- Responsive carousel layout on domain pages

---

### 4.3 Comparison Widget Component
**Effort**: M (1-2 days)

Design and build `ComparisonWidget.astro`:
- India vs World leaders (bar chart style or stat grid)
- Respectful, factual tone
- Shows gap + growth trajectory
- Optional "opportunity" callout

---

### 4.4 Action Card Component
**Effort**: S (half day)

Design and build `ActionCard.astro`:
- Bold CTA with icon + action verb + target
- Types: Volunteer, Donate, Promote, Collaborate, Learn
- Links to specific organizations/initiatives
- Visually prominent — these drive real-world action

---

### 4.5 Milestone Card Component
**Effort**: S (half day)

Design and build `MilestoneCard.astro`:
- Achievement/gamification aesthetic (not plain news card)
- Source badge, date, thumbnail, domain tag
- Links to external news article

---

### 4.6 Opportunities Section Layout
**Effort**: M (1-2 days)

Compose all components into the Opportunities section on domain pages:
1. Section heading
2. Achievement cards carousel
3. Comparison widget(s)
4. Action cards grid
5. Recent milestones row

---

### 4.7 Seed Editorial Content
**Effort**: L (3+ days, ongoing)

Write Opportunities content for at least 5 domains:
- Space
- Environment
- Technology/Startups
- Education
- Social Impact

Each requires research for achievements, comparisons, and action links.

---

### Phase 4 Exit Criteria
- [ ] All 4 card components built and visually polished
- [ ] Opportunities section renders on domain pages
- [ ] At least 5 domains have full Opportunities content
- [ ] Action cards link to real initiatives/organizations
- [ ] Comparisons cite sources
- [ ] `npm run build` passes cleanly

---

## Phase 5 — Discovery & Scale

Optimize for 500+ entries and discoverability.

### 5.1 Pagefind Optimization
**Effort**: S (half day)

Fine-tune Pagefind indexing:
- Custom meta tags for better search results
- Filter by content type in search UI
- Domain/tag facets

---

### 5.2 Build Performance
**Effort**: M (1-2 days)

At 500+ entries, ensure:
- Build time stays under 60 seconds
- No memory issues with `getStaticPaths()`
- Image optimization doesn't bottleneck
- Incremental build strategies if needed

---

### 5.3 SEO Optimization
**Effort**: M (1-2 days)

- Structured data (JSON-LD) for all content types
- Open Graph + Twitter cards with dynamic images
- Canonical URLs
- Sitemap includes all new page types
- Per-collection RSS feeds

---

### 5.4 Social Sharing Cards
**Effort**: M (1-2 days)

Dynamic OG images generated at build time:
- Entry title + logo on branded background
- Domain pages: domain name + stats
- Tag pages: tag name + item count

---

### 5.5 Analytics Integration
**Effort**: S (half day)

Privacy-respecting analytics (no cookies):
- Plausible, Umami, or similar
- Track outbound link clicks (CTAs working?)
- Domain/type popularity

---

### Phase 5 Exit Criteria
- [ ] Search returns relevant results across all types
- [ ] Build completes in < 60s with 500+ entries
- [ ] All pages have proper OG/Twitter meta
- [ ] RSS feeds available per collection
- [ ] Analytics tracking outbound CTA clicks
- [ ] `npm run build` passes cleanly

---

## Phase 6 — Polish & Growth

Final polish and community tooling.

### 6.1 Accessibility Audit
**Effort**: M (1-2 days)

- WCAG 2.1 AA compliance
- Keyboard navigation for all interactive elements
- Screen reader testing
- Color contrast verification (especially dark mode)
- Focus indicators

---

### 6.2 Animation & Micro-interactions
**Effort**: M (1-2 days)

- Page transition animations (subtle)
- Card hover effects (consistent across all card types)
- Scroll-triggered reveals for Opportunities section
- Achievement card celebration animation (confetti/glow on first view)

---

### 6.3 Dark Mode Polish
**Effort**: S (half day)

- Audit all components in dark mode
- Ensure Opportunities cards look good in both modes
- Achievement badges/gradients work in dark

---

### 6.4 Contributor Workflow
**Effort**: M (1-2 days)

- Entry submission template (GitHub issue template)
- Detailed CONTRIBUTING.md with per-type guides
- Validation script: `npm run validate` checks schema compliance
- Entry scaffolding script: `npm run new:app` generates template MDX

---

### 6.5 Performance Budget
**Effort**: S (half day)

- Lighthouse score targets: 95+ across all metrics
- Total page weight budget
- Image optimization audit
- Font loading strategy (preload critical, async rest)

---

### Phase 6 Exit Criteria
- [ ] WCAG 2.1 AA compliant
- [ ] Lighthouse scores 95+ on all pages
- [ ] Dark mode polished across all components
- [ ] Contributor can add an entry without dev guidance
- [ ] `npm run build` passes cleanly

---

## Continuous (Parallel with All Phases)

These activities happen continuously regardless of which phase is active:

### Content Addition
- Research and add new entries across all available content types
- Maintain balance across domains (don't over-index on tech)
- Ensure image registry stays updated
- Verify builds after each batch of entries

### Content Quality
- Review and improve existing entry descriptions
- Add missing screenshots/logos
- Fix broken external links
- Update entries when apps get new features/milestones

---

## Effort Key

| Label | Time Estimate |
|-------|---------------|
| XS | < 1 hour |
| S | Half day (2-4 hours) |
| M | 1-2 days |
| L | 3+ days |

---

## Dependencies

```
Phase 0 ✅ → Phase 1 → Phase 2 → Phase 3 → Phase 4
                                         ↘
                                    Phase 5 (can start after Phase 2)
                                         ↘
                                    Phase 6 (can start after Phase 5)
```

- Phase 1 depends on Phase 0 (needs existing architecture)
- Phase 2 depends on Phase 1 (needs ContentCardFull, search)
- Phase 3 depends on Phase 2 (needs content types to populate domains)
- Phase 4 depends on Phase 3 (needs domain pages to host Opportunities)
- Phase 5 can start after Phase 2 (needs content at scale)
- Phase 6 can start after Phase 5 (needs full site to polish)
- Content addition is continuous and parallel with everything
