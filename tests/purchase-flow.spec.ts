import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('successful purchase flow', async ({ page }) => {

  const loginPage = new LoginPage(page);

  const inventoryPage = new InventoryPage(page);

  const cartPage = new CartPage(page);

  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();

  await loginPage.verifyLoginPageLoaded();

  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  await expect(page).toHaveURL(/inventory/);

  await inventoryPage.verifyInventoryLoaded();

  await inventoryPage.sortLowToHigh();

  await inventoryPage.verifyFirstProductIsCheapest();

  await inventoryPage.addTwoCheapestProducts();

  await inventoryPage.verifyCartBadge('2');

  await inventoryPage.goToCart();

  await cartPage.verifyCartItems(2);

  await cartPage.verifyProductPresent('Sauce Labs Onesie');

  await cartPage.verifyProductPresent('Sauce Labs Bike Light');

  await cartPage.proceedToCheckout();

  await checkoutPage.fillCheckoutInfo();

  await checkoutPage.finishPurchase();

  await checkoutPage.verifyOrderSuccess();
});