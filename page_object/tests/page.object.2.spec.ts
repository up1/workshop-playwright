import { test } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { TopMenuPage } from '../pages/topmenu-page';

const URL = 'https://playwright.dev/';
const pageUrl = /.*intro/;
let homePage: HomePage;
let topMenuPage: TopMenuPage;

test.describe('Playwright website', () => {

  test('Check title in home page', async ({ page }) => {
    await page.goto(URL);
    homePage = new HomePage(page);
    await homePage.assertPageTitle();
  });

  test('Check started link', async ({ page }) => {
    // Act
    await page.goto(URL);
    homePage = new HomePage(page);
    await homePage.clickGetStarted();
    topMenuPage = new TopMenuPage(page);
    // Assert
    await topMenuPage.assertPageUrl(pageUrl);
  });
  
});