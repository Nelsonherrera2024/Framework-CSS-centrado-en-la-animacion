// ============================================
// EaseMotion CSS — Playwright Visual Regression Tests
// Issue #30323 — Visual regression testing
// ============================================
import { test, expect } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SUBMISSIONS_DIR = path.resolve(__dirname, '../submissions/docs');

// --- Helper: screenshot a demo page ---
async function screenshotDemo(page, issueDir, name) {
  const demoPath = `file://${path.join(SUBMISSIONS_DIR, issueDir, 'demo.html')}`;
  await page.goto(demoPath, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500); // allow animations to settle
  await expect(page).toHaveScreenshot(`${name}.png`, {
    fullPage: true,
    threshold: 0.02,
  });
}

test.describe('Visual Regression — Components', () => {
  test.beforeEach(async ({ page }) => {
    page.setViewportSize({ width: 1280, height: 720 });
  });

  test('Carousel renders correctly', async ({ page }) => {
    await screenshotDemo(page, 'core_changes-issue-30302', 'carousel');
  });

  test('Dropdown renders correctly', async ({ page }) => {
    await screenshotDemo(page, 'core_changes-issue-30305', 'dropdown');
  });

  test('Star rating renders correctly', async ({ page }) => {
    await screenshotDemo(page, 'core_changes-issue-30307', 'star-rating');
  });

  test('Data table renders correctly', async ({ page }) => {
    await screenshotDemo(page, 'core_changes-issue-30308', 'data-table');
  });

  test('Image comparison renders correctly', async ({ page }) => {
    await screenshotDemo(page, 'core_changes-issue-30309', 'image-compare');
  });

  test('Pricing table renders correctly', async ({ page }) => {
    await screenshotDemo(page, 'core_changes-issue-30310', 'pricing-table');
  });

  test('Stepper renders correctly', async ({ page }) => {
    await screenshotDemo(page, 'core_changes-issue-30306', 'stepper');
  });

  test('Accordion renders correctly', async ({ page }) => {
    await screenshotDemo(page, 'core_changes-issue-30304', 'accordion');
  });

  test('Timeline renders correctly', async ({ page }) => {
    await screenshotDemo(page, 'core_changes-issue-30303', 'timeline');
  });

  test('RTL utilities render correctly', async ({ page }) => {
    await screenshotDemo(page, 'core_changes-issue-30318', 'rtl');
  });

  test('Scroll stagger renders correctly', async ({ page }) => {
    await screenshotDemo(page, 'core_changes-issue-30315', 'scroll-stagger');
  });
});

test.describe('Visual Regression — Mobile Viewport', () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test('Pricing table mobile renders correctly', async ({ page }) => {
    await screenshotDemo(page, 'core_changes-issue-30310', 'pricing-table-mobile');
  });

  test('Stepper mobile renders correctly', async ({ page }) => {
    await screenshotDemo(page, 'core_changes-issue-30306', 'stepper-mobile');
  });
});
