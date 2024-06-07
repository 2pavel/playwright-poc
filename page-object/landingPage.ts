import { Locator, Page } from "@playwright/test";

export class LandingPage {
  readonly page: Page
  readonly loginButton: Locator

  constructor (page: Page) {
    this.page = page
    this.loginButton = page.getByRole('link', { name: 'Log in' })
  }

  async goToLogin() {
    this.loginButton.click();
  }
}