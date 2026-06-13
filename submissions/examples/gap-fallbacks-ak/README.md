Gap Fallbacks AK

What does this do?

Demonstrates CSS gap fallback strategies for flexbox and grid layouts when the gap property is not supported in older browsers.

---

How is it used?

.flex-row {
  display: flex;
  gap: var(--gap, 16px);
  margin: calc(var(--gap, 16px) * -0.5);
}

Use margin-based gap fallback for older browsers.

---

Why is it useful?

Ensures consistent spacing in flex and grid layouts across browsers that don't yet support the `gap` property in flexbox contexts.

Features

- CSS custom property gap values
- Margin-based gap fallback for flex
- Grid gap with margin fallback
- Consistent spacing across all items
- Works with any gap size
- Easy to maintain with custom properties
- Progressive enhancement approach
