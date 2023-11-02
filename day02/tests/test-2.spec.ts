import { test, expect } from '@playwright/test';

test('Case 02 @contact', async ({ page }) => {

  await test.step('Go to https://www.krungsri.com/th/personal', async () => {
    await page.goto('https://www.krungsri.com/th/personal');
    await expect(page.locator('#cmp-btn-granted')).toBeVisible()
    await page.locator('#cmp-btn-granted').click();

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