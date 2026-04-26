# Implementation Plan

## Bugfix Tasks for P0 Bugfixes

This document contains implementation tasks for three P0 bugs in the Awesome Bharat website. Each bug has exploration, preservation, and implementation tasks following the bug condition methodology.

---

## Bug 1.1: Right Sidebar Does Not Scroll

### Exploration Phase

- [ ] 1.1.1 Verify bug condition in ContentLayout.astro
    - **Property 1: Bug Condition** - Sidebar Scroll Bug Verification
    - **IMPORTANT**: Inspect the current code to confirm the bug exists
    - Open `src/layouts/ContentLayout.astro` and locate the flex container (around line 68)
    - Verify it uses `items-center` which causes the sidebar to stretch
    - Document the current code: `<div class="flex flex-col lg:flex-row gap-0 justify-center items-center">`
    - _Requirements: 2.1_

### Preservation Phase

- [ ] 1.1.2 Verify preservation requirements for mobile layout
    - **Property 2: Preservation** - Mobile Sidebar Layout
    - **IMPORTANT**: Verify that the fix does not affect mobile/tablet layout
    - Confirm that the flex container uses `lg:flex-row` which only applies at lg breakpoint (1024px+)
    - Mobile layout (below lg) uses single column and should be unaffected
    - _Requirements: 3.1_

### Implementation Phase

- [ ] 1.1.3 Fix ContentLayout.astro sidebar scroll issue
    - [x] 1.1.3.1 Change `items-center` to `items-start` in ContentLayout.astro
        - File: `src/layouts/ContentLayout.astro`
        - Line: ~68
        - Current: `<div class="flex flex-col lg:flex-row gap-0 justify-center items-center">`
        - Fixed: `<div class="flex flex-col lg:flex-row gap-0 justify-center items-start">`
        - _Bug_Condition: isBugCondition_1_1 - flex container uses items-center causing sidebar stretch_
        - _Expected_Behavior: Sidebar scrolls independently when content exceeds viewport height_
        - _Preservation: Mobile layout (viewport < 1024px) remains unchanged_
        - _Requirements: 2.1, 3.1_

- [ ] 1.1.4 Verify the fix works
    - [ ] 1.1.4.1 Verify code change was applied correctly
        - **Property 1: Expected Behavior** - Sidebar Scroll Fix Verification
        - Re-inspect `src/layouts/ContentLayout.astro` line ~68
        - Confirm `items-start` is now used instead of `items-center`
        - _Requirements: 2.1_

    - [ ] 1.1.4.2 Verify mobile layout is preserved
        - **Property 2: Preservation** - Mobile Layout Still Works
        - Confirm `lg:flex-row` breakpoint is still in place
        - Mobile layout should still display sidebar below article
        - _Requirements: 3.1_

---

## Bug 1.2: Footer Never Renders

### Exploration Phase

- [ ] 1.2.1 Verify bug condition in BaseLayout.astro
    - **Property 1: Bug Condition** - Footer Not Rendering Verification
    - **IMPORTANT**: Inspect the current code to confirm the bug exists
    - Open `src/layouts/BaseLayout.astro` and check the frontmatter (imports)
    - Verify there is NO import for Footer component
    - Check the template body - verify there is NO `<Footer />` component
    - Document the missing import and component usage
    - _Requirements: 2.2_

### Preservation Phase

- [ ] 1.2.2 Verify preservation requirements for existing layout
    - **Property 2: Preservation** - Header and Sidebar Layout
    - **IMPORTANT**: Verify that adding Footer does not affect existing layout
    - Confirm Header, LeftSidebar, and main content area are properly structured
    - The Footer should be added after the main content, not interfere with it
    - _Requirements: 3.2_

### Implementation Phase

- [ ] 1.2.3 Fix BaseLayout.astro to render Footer
    - [x] 1.2.3.1 Add Footer import to BaseLayout.astro
        - File: `src/layouts/BaseLayout.astro`
        - Frontmatter section (top of file)
        - Add: `import Footer from '@components/Footer.astro';`
        - Place after MobileNav import
        - _Bug_Condition: isBugCondition_1_2 - Footer not imported in BaseLayout_
        - _Expected_Behavior: Footer component is available for use in template_
        - _Preservation: Other imports remain unchanged_
        - _Requirements: 2.2_

    - [x] 1.2.3.2 Add Footer component to BaseLayout template
        - File: `src/layouts/BaseLayout.astro`
        - Template section (end of body, before closing `</div>` and `</body>`)
        - Add: `<Footer />` after the main content flex container
        - Place it inside the main container div, after `<LeftSidebar />` and `<main>` elements
        - _Bug_Condition: isBugCondition_1_2 - Footer not included in template_
        - _Expected_Behavior: Footer renders at bottom of page below main content_
        - _Preservation: Header, sidebar, and main content positions unchanged_
        - _Requirements: 2.2, 3.2_

- [ ] 1.2.4 Verify the fix works
    - [ ] 1.2.4.1 Verify Footer import was added
        - **Property 1: Expected Behavior** - Footer Import Verification
        - Re-inspect `src/layouts/BaseLayout.astro` frontmatter
        - Confirm `import Footer from '@components/Footer.astro';` exists
        - _Requirements: 2.2_

    - [ ] 1.2.4.2 Verify Footer component is in template
        - **Property 1: Expected Behavior** - Footer Template Verification
        - Re-inspect `src/layouts/BaseLayout.astro` template body
        - Confirm `<Footer />` appears after main content area
        - _Requirements: 2.2_

    - [ ] 1.2.4.3 Verify existing layout is preserved
        - **Property 2: Preservation** - Header/Sidebar Still Work
        - Confirm Header, LeftSidebar, and main content still render correctly
        - Footer is added without disrupting existing layout
        - _Requirements: 3.2_

---

## Bug 1.3: Footer Copyright Div Inside Grid

### Exploration Phase

- [ ] 1.3.1 Verify bug condition in Footer.astro
    - **Property 1: Bug Condition** - Copyright Grid Position Verification
    - **IMPORTANT**: Inspect the current code to confirm the bug exists
    - Open `src/components/Footer.astro` and locate the grid container (around lines 100-115)
    - Verify the copyright div is INSIDE the grid container div
    - Document: `<div class="grid grid-cols-1 md:grid-cols-3 gap-8">` contains 4 children
    - _Requirements: 2.3_

### Preservation Phase

- [ ] 1.3.2 Verify preservation requirements for mobile footer
    - **Property 2: Preservation** - Mobile Footer Layout
    - **IMPORTANT**: Verify that the fix does not affect mobile footer layout
    - Confirm the grid uses `md:grid-cols-3` breakpoint (768px)
    - Mobile layout (below md) uses single column and should be unaffected
    - _Requirements: 3.3_

### Implementation Phase

- [ ] 1.3.3 Fix Footer.astro copyright position
    - [x] 1.3.3.1 Move copyright div outside the grid container
        - File: `src/components/Footer.astro`
        - Lines: ~100-130 (grid container and copyright)
        - Current: Copyright div is inside `<div class="grid grid-cols-1 md:grid-cols-3 gap-8">`
        - Fixed: Close grid div (`</div>`) after the Socials section, then add copyright div as sibling
        - _Bug_Condition: isBugCondition_1_3 - copyright div is child of grid container_
        - _Expected_Behavior: Copyright spans full width below the three columns_
        - _Preservation: Mobile footer layout (viewport < 768px) remains unchanged_
        - _Requirements: 2.3, 3.3_

- [ ] 1.3.4 Verify the fix works
    - [ ] 1.3.4.1 Verify code change was applied correctly
        - **Property 1: Expected Behavior** - Copyright Position Fix Verification
        - Re-inspect `src/components/Footer.astro`
        - Confirm grid div closes after Socials section (3 children only)
        - Confirm copyright div is now a sibling to the grid, not a child
        - _Requirements: 2.3_

    - [ ] 1.3.4.2 Verify mobile footer is preserved
        - **Property 2: Preservation** - Mobile Footer Still Works
        - Confirm `md:grid-cols-3` breakpoint is still in place
        - Mobile footer should still display in single column layout
        - _Requirements: 3.3_

---

## Checkpoint

- [ ] 2.1 Verify all three bugs are fixed
    - [ ] Bug 1.1: ContentLayout.astro uses `items-start` (not `items-center`)
    - [ ] Bug 1.2: BaseLayout.astro imports and includes `<Footer />`
    - [ ] Bug 1.3: Footer.astro has copyright outside the grid container

- [ ] 2.2 Verify all preservation requirements are met
    - [ ] Mobile sidebar layout (viewport < 1024px) is unchanged
    - [ ] Header, sidebar, and main content in BaseLayout are unchanged
    - [ ] Mobile footer layout (viewport < 768px) is unchanged

- [ ] 2.3 Build and test the application
    - Run `npm run build` to verify no build errors
    - If possible, start dev server and manually verify fixes work correctly

---

## Summary

| Bug | File                | Fix Description                           | Requirements |
| --- | ------------------- | ----------------------------------------- | ------------ |
| 1.1 | ContentLayout.astro | Change `items-center` to `items-start`    | 2.1, 3.1     |
| 1.2 | BaseLayout.astro    | Import and add `<Footer />` component     | 2.2, 3.2     |
| 1.3 | Footer.astro        | Move copyright div outside grid container | 2.3, 3.3     |
