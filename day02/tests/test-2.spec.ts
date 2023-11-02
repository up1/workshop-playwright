import { test, expect } from '@playwright/test';

test('Case 02 @contact', async ({ page }) => {

  await test.step('Go to https://www.krungsri.com/th/personal', async () => {
    await page.goto('https://www.krungsri.com/th/personal');
    // await page.locator('#cmp-btn-granted').getByText('ตกลงทั้งหมด').click();
  }, { box: true });

  await test.step('Click ติดต่อเรา', async () => {
    const contactLink = await page.locator('xpath=//*[@id="form"]/div[4]/div/div/div[1]/div[4]/div[1]/a[5]');
    await contactLink.click();

    await expect(page.getByRole('heading', { name: 'ติดต่อเรา' })).toBeVisible()
    await page.getByText('แบบฟอร์มการติดต่อ').click();
    await page.locator('#zoneTopic').getByText('กรุณาเลือกหัวข้อที่ต้องการสอบถาม').nth(1).click();
    await page.locator('div').filter({ hasText: /^ผลิตภัณฑ์ด้านการลงทุน$/ }).click();
    await page.getByText('กรุณาเลือกหัวข้อที่ต้องการสอบถาม').nth(3).click();
    await page.locator('div').filter({ hasText: /^ทั่วไป$/ }).click();
    await page.locator('#zoneTitle i').click();
    await page.locator('div').filter({ hasText: /^นาย$/ }).click();
    await page.getByPlaceholder('กรุณากรอกชื่อ').fill('fff');
    await page.getByPlaceholder('กรุณากรอกนามสกุล').click();
    await page.getByPlaceholder('กรุณากรอกนามสกุล').fill('hhhh');
    await page.getByText('Drop files here to upload').click();
    await page.getByRole('button', { name: 'ส่งข้อมูล' }).click();
  }, { box: true });

});