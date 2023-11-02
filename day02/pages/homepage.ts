import { type Locator, type Page, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly grantButton: Locator;
    readonly contactMenu: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grantButton = page.locator('#cmp-btn-granted');
        this.contactMenu = page.locator('xpath=//*[@id="form"]/div[4]/div/div/div[1]/div[4]/div[1]/a[5]');
    }

    async accepted() {
        await expect(this.grantButton).toBeVisible()
        await this.grantButton.click();
    }

    async clickContactMenu() {
        await expect(this.contactMenu).toBeVisible()
        await this.contactMenu.click();
    }

}

export default HomePage;