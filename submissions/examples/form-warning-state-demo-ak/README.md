# Form Warning State Demo

Demonstrates a bug where form input warning states do not display correctly due to missing or incorrect CSS variable fallbacks for warning colors.

**Issue:** [#5875 — Form warning state demo](https://github.com/anomalyco/easemotion/issues/5875)

---

## What does this show?

Form inputs with a warning state (e.g. invalid input that is not yet an error) should use `--ease-color-warning-500` but instead fall back to hardcoded colors or error-state styling.

---

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Compares broken vs fixed form warning states |
| `style.css` | Form warning styles with and without proper tokens |
| `README.md` | This file |
