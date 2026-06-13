# Cards Text Dark Fallback

Demonstrates a bug where card components use hardcoded dark text colors for light backgrounds, which fail in dark mode when CSS variables are not properly cascaded.

**Issue:** [#5945 — Cards text dark fallback](https://github.com/anomalyco/easemotion/issues/5945)

---

## What does this show?

Card text in dark mode relies on hardcoded color fallbacks that don't properly reference theme-aware CSS variables. In dark mode, cards may show light text on light backgrounds (invisible text) when the fallback value is wrong.

---

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Compares broken vs fixed card text in dark mode |
| `style.css` | Card styles with hardcoded vs token-based text colors |
| `README.md` | This file |
