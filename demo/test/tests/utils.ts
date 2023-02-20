import { Page, expect } from '@playwright/test'
import { readdirSync, readFileSync } from 'fs'
import { basename, join as pathJoin } from 'path'
import { LoginPage } from './pages/login'
import config from './config'

export async function login(page: Page) {
  const loginPage = new LoginPage(page)
  await loginPage.goto()
  await loginPage.authenticate(config.user.email, config.user.password)
}