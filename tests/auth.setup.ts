import { test as setup, expect } from '@playwright/test';
import { PageManager } from '../page-object/pageManager';

const authFile = 'playwright/.auth/user-session.json';

setup('authenticate', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto('/');
  const pm = new PageManager(page)
  await pm.loginPage.loginAsUser()

  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  // Alternatively, you can wait until the page reaches a state where all cookies are set.

  await page.waitForLoadState('domcontentloaded')
  await page.waitForURL('https://app.clickup.com/9015725111/v/l/8cp231q-375')

  // End of authentication steps.

  await page.context().storageState({ path: authFile })
});