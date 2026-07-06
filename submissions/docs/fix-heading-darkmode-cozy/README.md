# Dark Mode Headings & Table Headers Fix

This submission fixes a bug in `core/base.css` where headings (`h1`–`h6`) and table headers (`th`) were hardcoded to `var(--ease-color-neutral-900)`. In dark mode, this caused the text to be nearly invisible against the dark background.

## Usage
No new classes are introduced. This is a core bug fix that ensures headings and table headers adapt to the active theme using the semantic `var(--ease-color-text)` variable.

## Why is it useful?
It restores readability in dark mode, which is a core accessibility requirement. By using `var(--ease-color-text)`, the typography automatically adapts to both light and dark themes correctly.
