import { test, expect } from '@playwright/test';
import path from 'path';

test('Upload 3 files @upload', async ({ page }) => {
    // Arrange
    await page.goto('http://nervgh.github.io/pages/angular-file-upload/examples/simple/');
    await page.screenshot({ path: '1.png' });
    // Act
    const fileChooserPromise = page.waitForEvent('filechooser');
    const uploadFile = page.locator('xpath=//*[@id="ng-app"]/body/div/div[2]/div[1]/input[2]')
    await expect(uploadFile).toBeVisible();
    await uploadFile.click()
    const fileChooser = await fileChooserPromise;
    const dataPath = process.env.DATA_PATH || '';
    await fileChooser.setFiles(`${dataPath}/data/1.txt`);
    await page.screenshot({ path: '2.png' });
    await fileChooser.setFiles(path.join(__dirname, 'data/2.txt'));
    await page.screenshot({ path: '3.png' });
    await fileChooser.setFiles(path.join(__dirname, 'data/3.txt'));
    await page.screenshot({ path: '4.png' });

    // Assert
    // TODO: Add assertion

});