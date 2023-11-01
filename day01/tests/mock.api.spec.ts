import { test, expect } from '@playwright/test';

test("mocks a fruit and doesn't call api @mock ", async ({ page }) => {
    // Mock the api call before navigating
    await page.route('*/**/api/v1/fruits', async route => {
      const json = [{ name: 'Mock', id: 21 }];
      const data = `<result>Data</result>`
      await route.fulfill({ 
        status: 200,
        contentType: 'application/xml',
        body: data });
    });
    // Go to the page
    await page.goto('https://demo.playwright.dev/api-mocking');
  
    // Assert
    await expect(page.getByText('Mock')).toBeVisible();
  });
  
  