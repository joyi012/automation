import { test, expect } from '@playwright/test';
import POManager from '../POM/POManager';

test('Name search inside searchbar in INBOX', async ({ page }) => {
    const poManager=new POManager(page);
    const loginPage=poManager.getLoginPage();
    const searchboxSpec=poManager.getsearchbox();
    //const locator = page.locator('.chakra-text.css-1wmkpwr')
    const locator = page.locator('#document-virtuoso-container').getByText('Signer');

    await loginPage.goTo();
    await loginPage.validLogin();
    await expect(page).toHaveURL(/sign/);
    //await expect(locator).toBeVisible();
    await expect(locator).toBeHidden();
    console.log(locator);
    
    
      
    //await page.pause();
});