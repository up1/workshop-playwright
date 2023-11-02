import { type Locator, type Page, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly grantButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grantButton = page.locator('#cmp-btn-granted');
    }

    async accepted() {
        await expect(this.grantButton).toBeVisible()
        await this.grantButton.click();
    }

}

export default HomePage;