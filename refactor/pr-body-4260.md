## Summary

This PR replaces **400+ inline `style="..."` attributes** across **166 HTML files** with existing CSS utility classes or new demo-* utility classes.

**Closes #4260**

## Impact

| Metric | Value |
|--------|-------|
| Files changed | **167** |
| Insertions | **512** |
| Deletions | **429** |
| Directories covered | `docs/`, `examples/`, `submissions/`, `submission/` |

## Pattern Replacements

| Pattern | Replacement | Occurrences |
|---------|-------------|:-----------:|
| `style="margin-bottom: 3rem;"` | `class="ease-mb-12"` | 58 |
| `style="width: 100%"` | `class="ease-w-full"` | 31 |
| `style="text-align:center;"` | `class="ease-text-center"` | 31 |
| `style="display:none;"` | `class="ease-hidden"` | 29 |
| `style="text-align: center"` | `class="ease-text-center"` | 28 |
| `style="font-size: 0.75rem;"` | `class="ease-text-xs"` | 22 |
| `style="margin-top: 1rem;"` | `class="ease-mt-4"` | 19 |
| `style="margin: 0;"` | `class="ease-m-0"` | 18 |
| `style="min-height:100px"` | `class="ease-min-h-100"` | 22 |
| Multi-property patterns | `class="demo-*"` | ~160 |

## Edge Case Handling

Elements that already had a `class="existing"` attribute alongside the inline style are handled correctly — the new class is **appended** rather than overwriting.

**Before:** `<div class="ease-card" style="width: 100%">`
**After:** `<div class="ease-card ease-w-full">`

Closes #4260
