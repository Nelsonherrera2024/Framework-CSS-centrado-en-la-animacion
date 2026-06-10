## Summary

This PR replaces **7,700+ standalone hardcoded hex color values** across **879 CSS files** with their equivalent **existing CSS variable tokens** from `core/variables.css`.

**Closes #4261**

## Impact

| Metric | Value |
|--------|-------|
| Files changed | **879** |
| Insertions | **7,739** |
| Deletions | **7,660** |
| Directories covered | `core/`, `docs/`, `examples/`, `submissions/`, `submission/` |

## Color Mapping

All replacements use the existing design tokens from `core/variables.css`:

| Hex Color | CSS Variable |
|:---------:|--------------|
| `#1e293b` | `var(--ease-color-neutral-800)` |
| `#0f172a` | `var(--ease-color-neutral-900)` |
| `#f8fafc` | `var(--ease-color-neutral-50)` |
| `#f1f5f9` | `var(--ease-color-neutral-100)` |
| `#e2e8f0` | `var(--ease-color-neutral-200)` |
| `#cbd5e1` | `var(--ease-color-neutral-300)` |
| `#94a3b8` | `var(--ease-color-neutral-400)` |
| `#64748b` | `var(--ease-color-neutral-500)` |
| `#475569` | `var(--ease-color-neutral-600)` |
| `#334155` | `var(--ease-color-neutral-700)` |
| `#6c63ff` | `var(--ease-color-primary)` |
| `#8b5cf6` | `var(--ease-color-secondary)` |
| `#22c55e` | `var(--ease-color-success)` |
| `#ef4444` | `var(--ease-color-danger)` |
| `#f59e0b` | `var(--ease-color-warning)` |
| `#3b82f6` | `var(--ease-color-info)` |

## What Was NOT Changed

- **`core/variables.css`** — This is the source-of-truth token definition file. Hex values here define the variables themselves.
- **`scss/`** — SCSS variable definitions kept intact.
- **`easemotion.min.css`** — Auto-generated build artifact.
- **`var(--name, #HEX)` fallback patterns** — These are intentional backward-compatibility fallbacks and were preserved.
- **`#ffffff` / `#fff`** — Intentionally kept as-is (used for text-on-colored-background patterns that must remain pure white regardless of theme).

## Verification

- [x] `core/variables.css` is unmodified (verified with `git diff`)
- [x] SCSS variable definition files are untouched
- [x] `var()` fallback patterns preserved (script uses regex protection)
- [x] All `core/`, `components/`, `easemotion/` source files validated
- [x] `easemotion.css` bundle is unchanged

## Commits

1. `61a2673` — refactor(core): replace hardcoded scrollbar colors with CSS variable tokens
2. `159971d` — chore: add hex-to-var conversion script
3. `61f29e9` — refactor(docs): replace hardcoded hex colors with CSS variable tokens
4. `0bae890` — refactor(examples): replace hardcoded hex colors with CSS variable tokens
5. `fddd9d7` — refactor(submissions): replace hardcoded hex colors with CSS variable tokens
6. `83b834f` — refactor(submission): replace hardcoded hex colors with CSS variable tokens
7. `f7ef499` — fix(script): exclude variable definition files from hex conversion
