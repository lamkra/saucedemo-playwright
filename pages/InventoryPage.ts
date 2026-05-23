import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {

  page: Page;

  inventoryItems: Locator;
  inventoryNames: Locator;
  inventoryPrices: Locator;
  sortDropdown: Locator;
  cartBadge: Locator;

  constructor(page: Page) {

    this.page = page;

    this.inventoryItems = page.locator('.inventory_item');

    this.inventoryNames = page.locator('.inventory_item_name');

    this.inventoryPrices = page.locator('.inventory_item_price');

    this.sortDropdown = page.locator('.product_sort_container');

    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async verifyInventoryLoaded() {

    await expect(this.inventoryItems)
      .toHaveCount(6);
  }

  async sortLowToHigh() {

    await this.sortDropdown.selectOption('lohi');
  }

  async verifyFirstProductIsCheapest() {

    const prices = await this.inventoryPrices.allTextContents();

    const numericPrices = prices.map(price =>
      Number(price.replace('$', ''))
    );

    expect(numericPrices[0]).toBe(
      Math.min(...numericPrices)
    );
  }

  async addTwoCheapestProducts() {

    await this.page.locator('.btn_inventory')
      .nth(0)
      .click();

    await this.page.locator('.btn_inventory')
      .nth(1)
      .click();
  }

  async verifyCartBadge(count: string) {

    await expect(this.cartBadge)
      .toHaveText(count);
  }

  async goToCart() {

    await this.page.locator('.shopping_cart_link')
      .click();
  }
}