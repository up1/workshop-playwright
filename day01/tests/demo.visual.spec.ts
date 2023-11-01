import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
  await page.goto('https://google.com');
  await expect(page).toHaveScreenshot();
});