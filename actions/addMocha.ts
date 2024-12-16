import { expect, type Locator, type Page } from "@playwright/test";

export class AddMocha {
    readonly page: Page;
    readonly mochaBtn: Locator;


constructor(page: Page) {
    this.page = page;
    this.mochaBtn = page.locator('[data-test="Mocha"]');
}

async addMocha() {
    await this.mochaBtn.click();
}
}