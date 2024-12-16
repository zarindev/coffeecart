import { expect, type Locator, type Page } from "@playwright/test";

export class FreeMocha {
    readonly page: Page;
    readonly freeMochaBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.freeMochaBtn = page.getByRole('button', { name: 'Yes, of course!' });
    }

    async clickFreeMochaBtn() {
        await this.freeMochaBtn.click();
    }
}