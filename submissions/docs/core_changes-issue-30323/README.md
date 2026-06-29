# Playwright Visual Regression Tests — Issue #30323

Playwright-based screenshot comparison tests for all components.

## Files

- `visual-regression.test.js` — Test suite

## Setup

```bash
npm install -D @playwright/test
npx playwright install chromium
```

## Running

```bash
npx playwright test visual-regression.test.js --update-snapshots  # first run
npx playwright test visual-regression.test.js                      # subsequent runs
```

## Coverage

- Desktop viewport (1280×720): all component demo pages
- Mobile viewport (375×812): pricing table, stepper
