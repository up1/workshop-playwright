import { test } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { TopMenuPage } from '../pages/topmenu-page';

const URL = 'https://playwright.dev/';
const pageUrl = /.*intro/;
let homePage: HomePage;
let topMenuPage: TopMenuPage;

test.beforeEach(async ({ page }) => {
  await page.goto(URL);
  homePage = new HomePage(page);
});

test.describe('Playwright website', () => {

  test('Check title in home page', async ({ page }) => {
    await homePage.assertPageTitle();
  });

  test('Check started link', async ({ page }) => {
    await homePage.clickGetStarted();
    topMenuPage = new TopMenuPage(page);
    await topMenuPage.assertPageUrl(pageUrl);
  });
  

});