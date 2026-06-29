# Resolve Conflicting Margin Declarations in ease-card Component

## Analysis

The conflict is in `components/cards.css` where multiple margin declarations on `.ease-card-header`, `.ease-card-footer`, `.ease-card-title`, and `.ease-card-body p:last-child` can produce inconsistent spacing when card sections are combined.

### Conflicting Declarations

| Selector | Declaration | Source Branch A | Source Branch B |
|---|---|---|---|
| `.ease-card-header` | `margin-bottom: var(--ease-space-4, 1rem)` | ✅ Keep | ❌ Remove |
| `.ease-card-body p:last-child` | `margin-bottom: 0` | ❌ Remove | ✅ Keep |
| `.ease-card-footer` | `margin-top: var(--ease-space-4, 1rem)` | ❌ Change to `0.75rem` | ✅ Keep at `1rem` |

### Resolution

Combined both intents — keep all margin resets but use a common `--ease-card-section-gap` custom property so the value is defined once and overridable.

## Steps to Create Correct PR

1. **Branch**: Create from `main`: `feat/fix-card-margin-conflict-{your-initials}`
2. **Files to create** (under `submissions/docs/`):
   - `submissions/docs/core_changes-issue-30456/demo.html`
   - `submissions/docs/core_changes-issue-30456/style.css`
   - `submissions/docs/core_changes-issue-30456/README.md`
3. **Do NOT touch**: `components/cards.css`, `core/`, or any existing files
4. **Demo requirements** (per `submissions/README.md`):
   - Self-contained HTML (open directly, no server)
   - No CDN links, no external frameworks
   - Local `style.css` only
   - No `ease-` prefix in class names
5. **PR body**: Link issue #30456, describe the conflict and resolution approach, reference the demo
6. **Submit** to `SAPTARSHI-coder/EaseMotion-css`, branch `feat/fix-card-margin-conflict-{initials}` → base `main`
