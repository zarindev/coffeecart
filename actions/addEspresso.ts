import { expect, type Locator, type Page } from "@playwright/test";

export class AddEspresso {
    readonly page: Page;
    readonly espressoBtn: Locator;


constructor(page: Page) {
    this.page = page;
    this.espressoBtn = page.locator('[data-test="Espresso"]');
}

async addEspresso() {
    await this.espressoBtn.click();
}
}