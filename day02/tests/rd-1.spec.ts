import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://efiling.rd.go.th/rd-cms/');
  await page.getByText('แจ้งข่าวสาร ×').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'รายละเอียด' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('heading', { name: 'ช่วงเวลาการให้บริการของแต่ละช่องทาง' }).click();
  await page.getByLabel('Close').click();
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'ยื่นแบบออนไลน์' }).getByRole('link').click();
  const page2 = await page2Promise;
  await page2.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
});