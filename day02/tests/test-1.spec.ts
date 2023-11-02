import { test, expect } from '@playwright/test';

test.beforeEach(async ({ context }) => {
  await context.route(/getmedia/, route => route.abort());
});

test('Case 01 @testing', async ({ page }) => {
  await page.goto('https://www.krungsri.com/th/personal');
  await expect(page).toHaveScreenshot();
});