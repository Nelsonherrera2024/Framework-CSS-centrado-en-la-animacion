# CSS Quality CI Pipeline

Adds automated CSS quality checks to the EaseMotion CSS CI pipeline to prevent broken CSS, enforce style guidelines, and keep the framework lightweight.

## Pipeline Jobs

| Job | Check | Enforcement |
|-----|-------|-------------|
| **lint** | Stylelint syntax validation on all `.css` files | ❌ fail on error |
| **bundle-size** | Raw size ≤ 180 KB, GZip ≤ 32 KB for `easemotion.min.css` | ❌ fail on exceed |
| **validate-vars** | All `--ease-*` refs defined in `core/variables.css` | ❌ fail on missing |
| **naming-convention** | All classes use `ease-` prefix | ⚠️ warning |
| **nesting-depth** | CSS nesting ≤ 3 levels deep | ⚠️ warning |

## Files

| File | Purpose |
|------|---------|
| `css-quality.yml` | GitHub Actions workflow (place in `.github/workflows/`) |
| `css-quality.sh` | Local bash script to run same checks manually |
| `demo.html` | Documentation and pipeline overview page |

## Integration

1. Copy the workflow to enable CI:
   ```bash
   cp submissions/core_changes-issue-12704/css-quality.yml .github/workflows/
   ```

2. Run locally to verify:
   ```bash
   bash submissions/core_changes-issue-12704/css-quality.sh
   ```

3. The workflow triggers on:
   - `push` to `main`
   - `pull_request` to `main`

Fixes #12704
