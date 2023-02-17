import { test, expect } from '@playwright/test';
import POManager from '../POM/POManager';

test('Name search inside searchbar in INBOX', async ({ page }) => {
    const poManager=new POManager(page);
    const loginPage=poManager.getLoginPage();
    const searchboxSpec=poManager.getsearchbox();
    const needSignatureSpec=poManager.getneedSignature();
    const filterInSearchboxSpec=poManager.getFilterInSearchbox();
    const TypeInFilterMedicalNecessitySpec=poManager.getTypeInFilterMedicalNecessity();
    const TypeInFilterHomeHealthSpec=poManager.getTypeInFilterHomeHealth();
    const locator = page.locator('.chakra-text.css-1wmkpwr')

    await loginPage.goTo();
    await loginPage.validLogin();
    await expect(page).toHaveURL(/sign/);
    // await searchboxSpec.searchboxFunc();
    // await needSignatureSpec.needSignatureFunc();
     filterInSearchboxSpec.filterInSearchboxFunc();
    await TypeInFilterMedicalNecessitySpec.TypeInFilterMedicalNecessityFunc();
    await TypeInFilterHomeHealthSpec.TypeInFilterHomeHealthFunc();
    // await page.locator("//button[normalize-space()='Sign Selected']").click()
    //await expect(locator).toBeVisible();
    // console.log(locator);
    
    
      
    await page.pause();
});