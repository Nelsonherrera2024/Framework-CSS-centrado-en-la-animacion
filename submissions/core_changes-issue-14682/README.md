# Documentation Light Mode Subheading Visibility Fix

## What does this do?

This submission demonstrates and fixes a documentation accessibility issue where `.docs-h3` subheadings become difficult to read in Light Mode.

The issue occurs because a hardcoded light text color overrides the existing theme aware color system, causing subheadings to blend into the page background when Light Mode is enabled.

The fix replaces the hardcoded color with the existing theme variable:

```css
.docs-h3 {
  color: var(--heading-sub-color);
}
```

This allows the subheading color to automatically adapt to both Dark Mode and Light Mode.

---

## How is it used?

Open `demo.html` in a browser and switch between Dark Mode and Light Mode.

The subheading should remain clearly visible in both themes because it uses the theme aware variable:

```css
--heading-sub-color
```

instead of a fixed white color value.

---

## Why is it useful?

* Improves readability and accessibility.
* Maintains proper text contrast in Light Mode.
* Preserves existing Dark Mode appearance.
* Reuses the project's existing theme variables.
* Prevents future theme related visibility issues caused by hardcoded text colors.
