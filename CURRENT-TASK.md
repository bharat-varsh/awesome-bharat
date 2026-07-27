### Task 6.2 - Accessibility and dark-mode audit pass (✅ COMPLETED)

**Changes implemented:**

**Keyboard navigation:**
- Added skip-to-content link at top of BaseLayout.astro
- CTA dropdown menus now support Escape to close, Enter/Space to toggle, aria-expanded, and focus return
- CardRow scroll containers support ArrowRight/ArrowLeft keyboard navigation
- Screenshots and YouTube scroll containers support ArrowRight/ArrowLeft keyboard navigation
- Added `tabindex="0"` and `role="region"` to all scrollable containers

**ARIA & semantic HTML:**
- Added `role="main"` to the main content wrapper in BaseLayout
- Added `aria-pressed` state and dynamic `aria-label` to ThemeToggle
- Added `aria-hidden="true"` to all decorative SVGs (Footer, CardRow, Screenshots, YouTubeEmbed, DomainOpportunities)
- Improved Screenshots alt text: "App screenshot" → "{title} screenshot {i+1} of {n}"
- Improved YouTube iframe titles: generic → "YouTube Video {index} of {total}"
- Added `aria-live="polite"` to "swipe to see more" hint

**Dark mode contrast:**
- Strengthened DomainOpportunities badges: `dark:bg-amber-900/60` → `dark:bg-amber-800/70`, `dark:text-amber-300` → `dark:text-amber-200`
- Lightened action CTAs: `dark:bg-emerald-700` → `dark:bg-emerald-600` with hover `dark:bg-emerald-500`
- Improved dark mode link contrast: `dark:text-primary-400` → `dark:text-primary-300`
- Strengthened DomainOpportunities borders: `dark:border-amber-800/40` → `dark:border-amber-700/50`, `dark:border-emerald-800/40` → `dark:border-emerald-700/50`
- Fixed status chip dot colors in dark mode: `dark:bg-neutral-500` for off states
- Normalized Engage card background: `dark:bg-gray-800` → `dark:bg-neutral-800` (design token consistency)

**Validation:**
- ✅ `npm run build` — clean (no lint, type, or build errors)
- ✅ `npm run test:e2e` — 8/8 tests passed
