import { test, expect } from '@playwright/test';
import POManager from '../POM/POManager';

test('Name search inside searchbar in INBOX', async ({ page }) => {
    const poManager=new POManager(page);
    const loginPage=poManager.getLoginPage();
    const allRadioSpec=poManager.getAllRadio();
    const approvedRadioSpec=poManager.getApprovedRadio();
    const UnapprovedRadioSpec=poManager.getUnapprovedRadio();
    const needSignatureSpec=poManager.getneedSignature();
    const FirstSelectorCheckBoxSpec=poManager.getFirstSelectorCheckBox();
    const SelectAllSelectorSpec=poManager.getSelectAllSelector();
    const PersonalSpec=poManager.getPersonal();
    const TeamSpec=poManager.getTeam();

    await loginPage.goTo();
    await loginPage.validLogin();
    await expect(page).toHaveURL(/sign/);
    await page.waitForLoadState('load');
    
    
    // await searchboxSpec.searchboxFunc();
    
    // await FirstSelectorCheckBoxSpec.FirstSelectorCheckBoxFunc();
    await TeamSpec.TeamFunc();
    // await PersonalSpec.PersonalFunc();
    // await allRadioSpec.AllRadioFunc();
    // await approvedRadioSpec.ApprovedRadioFunc();
    await UnapprovedRadioSpec.UnapprovedRadioFunc();
    await needSignatureSpec.needSignatureFunc();
    // await expect(page.locator('#document-virtuoso-container').getByText('Signer')).toBeVisible()
    // await SelectAllSelectorSpec.SelectAllSelectorFunc();
    
    
      
    await page.pause();
});