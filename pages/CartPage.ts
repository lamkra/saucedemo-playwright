import { Page, Locator, expect } from '@playwright/test';

export class CartPage {

  page: Page;

  cartItems: Locator;
  checkoutButton: Locator;

  constructor(page: Page) {

    this.page = page;

    this.cartItems = page.locator('.cart_item');

    this.checkoutButton = page.locator('#checkout');
  }

  async verifyCartItems(count: number) {

    await expect(this.cartItems)
      .toHaveCount(count);
  }

  async verifyProductPresent(name: string) {

    await expect(
      this.page.locator('.inventory_item_name', {
        hasText: name
      })
    ).toBeVisible();
  }

  async proceedToCheckout() {

    await this.checkoutButton.click();
  }
}