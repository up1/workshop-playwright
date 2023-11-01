import { test } from '@playwright/test';
import { HomePage } from '../pages/home-page';

const URL = 'https://playwright.dev/';
let homePage: HomePage;

test.describe('Playwright website', () => {

  test('Check title in home page', async ({ page }) => {
    await page.goto(URL);
    homePage = new HomePage(page);
    await homePage.assertPageTitle();
  });

});