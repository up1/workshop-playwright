import { test, expect } from '@playwright/test';
import path from 'path';

test('Search data from google @xyz', async ({ page }) => {
    // Arrange
    await page.goto('http://nervgh.github.io/pages/angular-file-upload/examples/simple/');
    // Act
    const fileChooserPromise = page.waitForEvent('filechooser');
    const uploadFile = page.locator('xpath=//*[@id="ng-app"]/body/div/div[2]/div[1]/input[2]')
    await expect(uploadFile).toBeVisible();
    await uploadFile.click()
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles(path.join(__dirname, 'data/1.txt'));
    await fileChooser.setFiles(path.join(__dirname, 'data/2.txt'));
    await fileChooser.setFiles(path.join(__dirname, 'data/3.txt'));

    // Assert
    // TODO: Add assertion

});