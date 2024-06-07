import { test as setup, expect } from '@playwright/test';
import { PageManager } from '../page-object/pageManager';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto('/');
  const pm = new PageManager(page)
  pm.landingPage.
  await page.getByRole('link', { name: 'Log in' }).click()
  await page.locator('[data-test="login-email-input"]').click()
  await page.locator('[data-test="login-password-input"]').click()
  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  await page.waitForURL('https://github.com/');
  // Alternatively, you can wait until the page reaches a state where all cookies are set.
  await expect(page.getByRole('button', { name: 'View profile and more' })).toBeVisible()

  // End of authentication steps.

  await page.context().storageState({ path: authFile })
});