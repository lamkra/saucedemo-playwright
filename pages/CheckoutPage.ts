import { Page, Locator, expect } from '@playwright/test';

export class CheckoutPage {

  page: Page;

  firstNameInput: Locator;
  lastNameInput: Locator;
  postalCodeInput: Locator;

  continueButton: Locator;
  finishButton: Locator;

  confirmationMessage: Locator;

  constructor(page: Page) {

    this.page = page;

    this.firstNameInput = page.locator('#first-name');

    this.lastNameInput = page.locator('#last-name');

    this.postalCodeInput = page.locator('#postal-code');

    this.continueButton = page.locator('#continue');

    this.finishButton = page.locator('#finish');

    this.confirmationMessage = page.locator('.complete-header');
  }

  async fillCheckoutInfo() {

    await this.firstNameInput.fill('Lampros');

    await this.lastNameInput.fill('Kranitsas');

    await this.postalCodeInput.fill('11635');

    await this.continueButton.click();
  }

  async finishPurchase() {

    await this.finishButton.click();
  }

  async verifyOrderSuccess() {

    await expect(this.confirmationMessage)
      .toHaveText('Thank you for your order!');
  }
}