# CSS Quality CI Pipeline

Adds automated CSS validation and bundle size checks to the EaseMotion CSS CI pipeline.
Five independent checks run on every push and pull request to `main`.

## Checks

| # | Check | What it does |
|---|-------|-------------|
| 1 | **CSS Lint** | Runs `stylelint` on all CSS files with project config |
| 2 | **Bundle Size** | Ensures `easemotion.min.css` ≤ 180 KB raw / 30 KB gzipped |
| 3 | **Custom Property Validation** | All `--ease-*` vars referenced are defined in `core/variables.css` |
| 4 | **Naming Convention** | All classes use the `ease-` prefix |
| 5 | **Nesting Depth** | Warns if CSS nesting exceeds 3 levels |

## Files

| File | Purpose |
|------|---------|
| `css-quality.yml` | GitHub Actions workflow (5 jobs, 1 per check) |
| `css-quality.sh` | Standalone shell script for local runs |
| `demo.html` | Interactive overview of all checks |

## Usage

```bash
# Run locally
chmod +x css-quality.sh
./css-quality.sh
```

## Affected Core Files

| File | Change |
|------|--------|
| `.github/workflows/css-quality.yml` | New workflow file (placed in submissions for review) |

Fixes #12704
