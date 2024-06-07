import { Locator, Page } from "@playwright/test"
import { user } from "../playwright/.auth/user.json"

export class LoginPage {
  readonly page: Page
  readonly loginButton: Locator
  readonly emailField: Locator
  readonly passwordField: Locator

  constructor (page: Page) {
    this.page = page
    this.emailField = page.locator('[data-test="login-email-input"]')
    this.passwordField = page.locator('[data-test="login-password-input"]')
    this.loginButton = page.getByRole('link', { name: 'Log in' })
  }

  async loginAsUser() {
    this.emailField.fill(user.username)
    this.passwordField.fill(user.password)
    this.loginButton.click()
  }
}