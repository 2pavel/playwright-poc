import { Page } from "@playwright/test";
import { LandingPage } from "./landingPage";
import { LoginPage } from "./loginPage";

export class PageManager {

  readonly page: Page
  readonly landingPage: LandingPage
  readonly loginPage: LoginPage

  constructor(page: Page) {
    this.page = page
    this.landingPage = new LandingPage(page)
    this.loginPage = new LoginPage(page)
  }
}