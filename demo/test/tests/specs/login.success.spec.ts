import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login'
import { MailPage } from '../pages/mail'
import { login } from '../utils'

test.describe('session', () => {

  test('logs in', async ({ page }) => {
    await page.context().clearCookies()
    await login(page)
    const mailPage = new MailPage(page)
    await expect(mailPage.recipientInput).toBeVisible()
    await expect(page).toHaveTitle('Send mail')
  })

  test('logs out', async ({ page }) => {
    const mailPage = new MailPage(page)
    await mailPage.goto()
    await mailPage.logoutButton.click()
    const loginPage = new LoginPage(page)
    await expect(loginPage.passwordInput).toBeVisible()
    await expect(page).toHaveTitle('Login')
  })
})
