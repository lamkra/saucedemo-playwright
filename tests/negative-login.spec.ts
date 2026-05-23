import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';

test('locked out user cannot login', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.login(
    'locked_out_user',
    'secret_sauce'
  );

  await expect(
    page.locator('[data-test="error"]')
  ).toContainText(
    'Sorry, this user has been locked out.'
  );
});