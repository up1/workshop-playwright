import { test, expect } from '@playwright/test';

test('Search data from google', async ({ page }) => {
    // Arrange
    await page.goto('https://google.com');
    // Act
    // const searchBox = page.getByRole('combobox', { name: 'ค้นหา' })
    // await searchBox.fill("Playwright");
    // await searchBox.press("Enter");

    await page.locator('xpath=//*[@name="q"]').fill("Playwright");
    await page.locator('xpath=//*[@name="q"]').press("Enter");


    // await page.locator("#APjFqb").click()
    // await page.locator("#APjFqb").fill("Playwright");
    // await page.locator("#APjFqb").press("Enter");

    // Assert
    const searchResult = page.locator('#result-stats');
    await expect(searchResult).toContainText('ผลการค้นหาประมาณ');
    await expect(searchResult).toContainText('รายการ');

    const regex = /ผลการค้นหาประมาณ ([\d,]+) รายการ \(([\d.]+) วินาที\)/;
    await expect(searchResult).toContainText(regex);

});