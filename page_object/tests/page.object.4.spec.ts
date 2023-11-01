import { test } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { TopMenuPage } from '../pages/topmenu-page';

const URL = 'https://playwright.dev/';
let homePage: HomePage;
let topMenuPage: TopMenuPage;
const pageUrl = /.*intro/;

test.beforeEach(async ({ page }) => {
  await page.goto(URL);
  homePage = new HomePage(page);
});

test.describe('Playwright website', () => {

  test('Check title in home page', async () => {
    await homePage.assertPageTitle();
  });

  test('Check started link', async ({ page }) => {
    await homePage.clickGetStarted();
    topMenuPage = new TopMenuPage(page);
    await topMenuPage.assertPageUrl(pageUrl);
  });

  test('Check Java page', async ({ page }) => {
    await test.step('Act', async () => {
      await homePage.clickGetStarted();
      topMenuPage = new TopMenuPage(page);
      await topMenuPage.hoverNode();
      await topMenuPage.clickJava();
    });

    await test.step('Assert', async () => {
      await topMenuPage.assertPageUrl(pageUrl);
      await topMenuPage.assertNodeDescriptionNotVisible();
      await topMenuPage.assertJavaDescriptionVisible();
    });
  });
});