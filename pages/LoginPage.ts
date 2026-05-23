import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {

  page: Page;

  usernameInput: Locator;
  passwordInput: Locator;
  loginButton: Locator;

  constructor(page: Page) {

    this.page = page;

    this.usernameInput = page.locator('#user-name');

    this.passwordInput = page.locator('#password');

    this.loginButton = page.locator('#login-button');
  }

  async goto() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {

    await this.usernameInput.fill(username);

    await this.passwordInput.fill(password);

    await this.loginButton.click();
  }

  async verifyLoginPageLoaded() {

    await expect(this.loginButton)
      .toBeVisible();
  }
}