import { expect, type Locator, type Page } from "@playwright/test";


export class CoffeeCart {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async coffeeCart() {
        await this.page.goto(`https://coffee-cart.app/`);
    }
}