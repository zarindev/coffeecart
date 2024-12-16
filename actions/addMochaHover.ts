import { expect, type Locator, type Page } from "@playwright/test";

export class AddMochaHover {
    readonly page: Page;
    readonly mochaHoverBtn: Locator;
    readonly plusBtn: Locator;


constructor(page: Page) {
    this.page = page;
    this.mochaHoverBtn = page.locator('[data-test="checkout"]');
    this.plusBtn = page.getByLabel('Add one Mocha');
}

async addMochaHover() {
    await this.mochaHoverBtn.hover();
    await this.plusBtn.click();
}
}