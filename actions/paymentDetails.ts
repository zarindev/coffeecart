import { expect, type Locator, type Page } from "@playwright/test";

export class PaymentDetails {
    readonly page: Page;
    readonly cartBtn: Locator;
    readonly nameField: Locator;
    readonly emailField: Locator;
    readonly termCheckbox: Locator;
    readonly submitButton: Locator;

constructor(page: Page) {
    this.page = page;
    this.cartBtn = page.locator('[data-test="checkout"]');
    this.nameField = page.getByLabel('Name');
    this.emailField = page.getByLabel('Email');
    this.termCheckbox = page.getByLabel('Promotion checkbox');
    this.submitButton = page.getByRole('button', { name: 'Submit' });
}

async paymentDetails() {
    await this.cartBtn.click();
    await this.nameField.fill('Zarin');
    await this.emailField.fill('mdzarinjerry@gmail.com');
    await this.termCheckbox.check();
    await this.submitButton.click();
}
}