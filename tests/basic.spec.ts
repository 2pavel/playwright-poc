import { test, expect } from '@playwright/test'

test.describe('test', () => {
  test.only('first test', async ({ page }) => {
    await page.goto('https://app.clickup.com/')

    console.log(await page.context().storageState())

    await expect(page).toHaveTitle('asd')


    // TODO: - storage authentication does not work
    //       - make sure that it is not possible to set it up this way
    //       - try beforeEach hook using the storageState (simply click Log In on landing page after setup)
    //       - if it does not work, set up login before each test
  })
})