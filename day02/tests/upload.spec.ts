import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://nervgh.github.io/pages/angular-file-upload/examples/simple/');
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).setInputFiles('1.txt');
  await page.getByRole('button', { name: ' Upload', exact: true }).click();
  await page.getByRole('progressbar').nth(1).click();
});