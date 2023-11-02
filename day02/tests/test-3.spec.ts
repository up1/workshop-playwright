import { test, expect } from '@playwright/test';
import HomePage from '../pages/homepage';

test('Case 03 @page', async ({ page }) => {

  const homepage = new HomePage(page);

  await test.step('Go to home page', async () => {
    homepage.accepted();
  }, { box: true });

  await test.step('Click ติดต่อเรา', async () => {
    const contactLink = await page.locator('xpath=//*[@id="form"]/div[4]/div/div/div[1]/div[4]/div[1]/a[5]');
    await expect(contactLink).toBeVisible()
    await contactLink.click();
    const title = await page.locator('xpath=//*[@id="p_lt_ctl07_pageplaceholder_p_lt_ctl04_KSX_ContactUs_lblTitle"]');
    await expect(title).toBeVisible()
    await expect(title).toContainText('แบบฟอร์มการติดต่อ')
  }, { box: true });

  await test.step('กรอกแบบฟอร์มการติดต่อ', async () => {
    await expect(page.getByText('แบบฟอร์มการติดต่อ')).toBeVisible()
    const zoneTopic = await page.locator('xpath=//*[@id="zoneTopic"]/div');
    await expect(zoneTopic).toBeVisible()
    await zoneTopic.click();
  
    const topic = await page.locator('xpath=//*[@id="zoneTopic"]/div/div[2]');
    await expect(topic).toBeVisible()
    const topic3 = await page.locator('xpath=//*[@id="zoneTopic"]/div/div[2]/div[4]');
    await expect(topic3).toBeVisible()
    await topic3.click();
    
  }, { box: true });

});