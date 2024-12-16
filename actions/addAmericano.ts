import { expect, type Locator, type Page } from "@playwright/test";

export class AddAmericano {
    readonly page: Page;
    readonly americanoBtn: Locator;


constructor(page: Page) {
    this.page = page;
    this.americanoBtn = page.locator('[data-test="Americano"]');
}

async addAmericano() {
    await this.americanoBtn.click();
}
}