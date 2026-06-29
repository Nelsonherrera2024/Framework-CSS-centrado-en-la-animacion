// ============================================
// EaseMotion CSS — axe-core Accessibility Tests
// Issue #30324 — Automated a11y test suite
// ============================================
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SUBMISSIONS_DIR = path.resolve(__dirname, '../submissions/docs');

// --- Helper: run axe on a demo page ---
async function checkA11y(page, issueDir, name) {
  const demoPath = `file://${path.join(SUBMISSIONS_DIR, issueDir, 'demo.html')}`;
  await page.goto(demoPath, { waitUntil: 'networkidle' });
  await page.waitForTimeout(300);

  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations, `${name} — ${results.violations.length} a11y violations found`).toEqual([]);
}

test.describe('Accessibility — Components', () => {
  test.beforeEach(async ({ page }) => {
    page.setViewportSize({ width: 1280, height: 720 });
  });

  test('Carousel has no a11y violations', async ({ page }) => {
    await checkA11y(page, 'core_changes-issue-30302', 'Carousel');
  });

  test('Dropdown has no a11y violations', async ({ page }) => {
    await checkA11y(page, 'core_changes-issue-30305', 'Dropdown');
  });

  test('Star rating has no a11y violations', async ({ page }) => {
    await checkA11y(page, 'core_changes-issue-30307', 'StarRating');
  });

  test('Data table has no a11y violations', async ({ page }) => {
    await checkA11y(page, 'core_changes-issue-30308', 'DataTable');
  });

  test('Pricing table has no a11y violations', async ({ page }) => {
    await checkA11y(page, 'core_changes-issue-30310', 'PricingTable');
  });

  test('Stepper has no a11y violations', async ({ page }) => {
    await checkA11y(page, 'core_changes-issue-30306', 'Stepper');
  });

  test('Accordion has no a11y violations', async ({ page }) => {
    await checkA11y(page, 'core_changes-issue-30304', 'Accordion');
  });

  test('Timeline has no a11y violations', async ({ page }) => {
    await checkA11y(page, 'core_changes-issue-30303', 'Timeline');
  });

  test('Dark mode demo has no a11y violations', async ({ page }) => {
    await checkA11y(page, 'core_changes-issue-30312', 'DarkMode');
  });

  test('Scroll stagger has no a11y violations', async ({ page }) => {
    await checkA11y(page, 'core_changes-issue-30315', 'ScrollStagger');
  });
});
