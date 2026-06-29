# axe-core Accessibility Tests — Issue #30324

Automated accessibility test suite using axe-core and Playwright.

## Files

- `accessibility.test.js` — Test suite

## Setup

```bash
npm install -D @axe-core/playwright @playwright/test
npx playwright install chromium
```

## Running

```bash
npx playwright test accessibility.test.js
```

## Coverage

- All component demo pages scanned with axe-core
- Tests fail on any violation (color contrast, ARIA, landmarks, etc.)
