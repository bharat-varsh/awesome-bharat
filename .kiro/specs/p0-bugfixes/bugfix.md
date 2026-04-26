# Bugfix Requirements Document

## Introduction

This document captures the requirements for fixing three P0 bugs in the Awesome Bharat website:

1. **Right Sidebar Does Not Scroll** - The right sidebar in ContentLayout.astro is supposed to scroll independently while the article scrolls separately, but the flex wrapper uses `items-center` which stretches the sidebar to match the full article height.

2. **Footer Never Renders** - Footer.astro is a complete component but is never imported or used in BaseLayout.astro, so no page on the site has a footer.

3. **Footer Copyright Div Is Inside the Grid** - In Footer.astro, the copyright div is a child of the grid container, causing it to become a fourth column on desktop instead of spanning the full width.

## Bug Analysis

### Current Behavior (Defect)

1.1 WHEN the ContentLayout page has content that exceeds the viewport height AND the user views it on a desktop screen (lg breakpoint and above) THEN the right sidebar is stretched to match the full article height and never overflows, so `overflow-y-auto` never activates and the sidebar does not scroll independently

1.2 WHEN any page is rendered using BaseLayout.astro THEN the Footer component is not rendered because it is never imported or included in the layout

1.3 WHEN Footer.astro is rendered on a desktop screen (md breakpoint and above) THEN the copyright div is positioned as a fourth column in the 3-column grid rather than spanning the full width below the three columns

### Expected Behavior (Correct)

2.1 WHEN the ContentLayout page has content that exceeds the viewport height AND the user views it on a desktop screen (lg breakpoint and above) THEN the right sidebar SHALL scroll independently while the article scrolls separately, allowing users to see all sidebar content without affecting the main article scroll position

2.2 WHEN any page is rendered using BaseLayout.astro THEN the Footer component SHALL be rendered at the bottom of the page, below the main content area

2.3 WHEN Footer.astro is rendered on a desktop screen (md breakpoint and above) THEN the copyright div SHALL span the full width below the three columns, displaying as a single full-width row

### Unchanged Behavior (Regression Prevention)

3.1 WHEN the ContentLayout page is viewed on mobile or tablet screens (below lg breakpoint) THEN the layout SHALL CONTINUE TO display the sidebar below the article in a single column, as it currently does

3.2 WHEN pages are rendered using BaseLayout.astro without the Footer fix THEN the header, left sidebar, and main content area SHALL CONTINUE TO render in the same positions and with the same styling

3.3 WHEN Footer.astro is rendered on mobile screens (below md breakpoint) THEN the footer SHALL CONTINUE TO display in a single column layout as it currently does

## Bug Condition and Property Specification

### Bug Condition Functions

**Bug 1.1 - Sidebar Scroll**

```pascal
FUNCTION isBugCondition_1_1(layoutProps)
  INPUT: layoutProps containing viewport width and content height
  OUTPUT: boolean

  // Returns true when the sidebar scroll bug is triggered
  RETURN layoutProps.viewportWidth >= 1024 AND layoutProps.contentHeight > layoutProps.viewportHeight
END FUNCTION
```

**Bug 1.2 - Footer Not Rendered**

```pascal
FUNCTION isBugCondition_1_2(layoutType)
  INPUT: layoutType (string)
  OUTPUT: boolean

  // Returns true when the footer is not included in the layout
  RETURN layoutType = "BaseLayout" AND NOT footerIncluded(layoutType)
END FUNCTION
```

**Bug 1.3 - Footer Copyright Layout**

```pascal
FUNCTION isBugCondition_1_3(viewportWidth)
  INPUT: viewportWidth (number)
  OUTPUT: boolean

  // Returns true when the copyright div is inside the grid on desktop
  RETURN viewportWidth >= 768 AND copyrightInsideGrid()
END FUNCTION
```

### Property Specifications

**Property: Fix Checking - Sidebar Scroll**

```pascal
// Property: Fix Checking - Sidebar Scroll
FOR ALL X WHERE isBugCondition_1_1(X) DO
  result ← renderContentLayout'(X)
  ASSERT sidebarScrollsIndependently(result) = true
  ASSERT articleScrollPositionIndependentFromSidebar(result) = true
END FOR
```

**Property: Fix Checking - Footer Rendering**

```pascal
// Property: Fix Checking - Footer Rendering
FOR ALL X WHERE isBugCondition_1_2(X) DO
  result ← renderBaseLayout'(X)
  ASSERT footerRendered(result) = true
  ASSERT footerPosition(result) = "below main content"
END FOR
```

**Property: Fix Checking - Footer Copyright Layout**

```pascal
// Property: Fix Checking - Footer Copyright Layout
FOR ALL X WHERE isBugCondition_1_3(X) DO
  result ← renderFooter'(X)
  ASSERT copyrightSpansFullWidth(result) = true
  ASSERT copyrightNotInGridColumn(result) = true
END FOR
```

**Property: Preservation Checking**

```pascal
// Property: Preservation Checking - Non-buggy layouts
FOR ALL X WHERE NOT isBugCondition_1_1(X) DO
  ASSERT renderContentLayout(X) = renderContentLayout'(X)
END FOR

// Property: Preservation Checking - Footer on mobile
FOR ALL X WHERE viewportWidth(X) < 768 DO
  ASSERT renderFooter(X) = renderFooter'(X)
END FOR
```
