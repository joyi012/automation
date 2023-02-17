import { test, expect } from '@playwright/test';
import POManager from '../POM/POManager';

test('Name search inside searchbar in INBOX', async ({ page }) => {
    const poManager=new POManager(page);
    const loginPage=poManager.getLoginPage();
   const NeedsFillingOutSpec=poManager.getNeedsFillingOut();
   const needSignatureSpec=poManager.getneedSignature();
   const SortDirectionSpec=poManager.getSortDirection();
   

    await loginPage.goTo();
    await loginPage.validLogin();
    await expect(page).toHaveURL(/sign/);
    await page.waitForLoadState('load');
    await needSignatureSpec.needSignatureFunc();
    // await NeedsFillingOutSpec.NeedsFillingOutFunc();
    await SortDirectionSpec.SortDirectionFunc();
    
    // await searchboxSpec.searchboxFunc();
    
    // await FirstSelectorCheckBoxSpec.FirstSelectorCheckBoxFunc();
    // await TeamSpec.TeamFunc();
    // await PersonalSpec.PersonalFunc();
    // await allRadioSpec.AllRadioFunc();
    // await approvedRadioSpec.ApprovedRadioFunc();
    // await UnapprovedRadioSpec.UnapprovedRadioFunc();
    // await expect(page.locator('#document-virtuoso-container').getByText('Signer')).toBeVisible()
    // await SelectAllSelectorSpec.SelectAllSelectorFunc();
    
    
      
    await page.pause();
});