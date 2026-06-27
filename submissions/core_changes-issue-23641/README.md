# Tooltip Viewport Overflow Fixes — Issue #23641

## What does this do?

This submission proposes enhancements to the Tooltip component (`components/tooltips.css`) to prevent text wrapping constraints from causing viewport overflows, and introduces alignment modifiers (`.ease-tooltip-edge-right`) to prevent tooltips from extending past the right edge of the screen.

## How is it used?

By default, long tooltip content now automatically wraps onto multiple lines when it exceeds the maximum size boundary:

```html
<span
  class="ease-tooltip"
  data-tooltip="This is an extremely long tooltip description that wraps automatically."
>
  Hover Me
</span>
```

For tooltips positioned near the right-hand edge of the viewport, apply the `.ease-tooltip-edge-right` alignment class:

```html
<span
  class="ease-tooltip ease-tooltip-edge-right"
  data-tooltip="Aligned to the right edge."
>
  Right Edge Trigger
</span>
```

## Why is it useful?

It addresses a critical visual and usability bug in the layout where tooltips positioned near the screen edges cause horizontal overflow scrollbars, maintaining responsive design guidelines without requiring custom JavaScript viewport math.

---

## Proposed Changes in Core Code

To resolve this issue, the following updates are proposed for `components/tooltips.css`:

### File: `components/tooltips.css`

Replace and add these rules inside the `@layer easemotion-components` block:

```css
  /* Prevent tooltip viewport overflow */
  .ease-tooltip::after {
    content: attr(data-tooltip);
    position: absolute;
    background: var(--ease-tooltip-bg);
    color: var(--ease-tooltip-text);
    font-size: var(--ease-tooltip-font-size);
    padding: var(--ease-tooltip-padding);
    border-radius: var(--ease-tooltip-radius);

    /* Constraint dimensions and wrapping properties */
    width: max-content;
    max-width: min(300px, 90vw);
    overflow-wrap: break-word;
    word-break: break-word;
    white-space: normal;

    z-index: var(--ease-tooltip-z-index);
    ...
  }

  /* Right-Edge Alignment Helper */
  .ease-tooltip-edge-right[data-position="top"]::after,
  .ease-tooltip-edge-right:not([data-position])::after {
    left: auto;
    right: 0;
    transform: translateY(4px);
  }

  .ease-tooltip-edge-right[data-position="top"]:hover::after,
  .ease-tooltip-edge-right:not([data-position]):hover::after,
  .ease-tooltip-edge-right[data-position="top"]:focus-within::after,
  .ease-tooltip-edge-right:not([data-position]):focus-within::after {
    transform: translateY(0);
  }

  .ease-tooltip-edge-right[data-position="top"]::before,
  .ease-tooltip-edge-right:not([data-position])::before {
    left: auto;
    right: 12px;
    margin-left: 0;
  }

  .ease-tooltip-edge-right[data-position="bottom"]::after {
    left: auto;
    right: 0;
    transform: translateY(-4px);
  }

  .ease-tooltip-edge-right[data-position="bottom"]:hover::after,
  .ease-tooltip-edge-right[data-position="bottom"]:focus-within::after {
    transform: translateY(0);
  }

  .ease-tooltip-edge-right[data-position="bottom"]::before {
    left: auto;
    right: 12px;
    margin-left: 0;
  }
```

Fixes #23641
