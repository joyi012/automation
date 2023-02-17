export default class UnapprovedRadioClass{
    
    page: any;
    UnapprovedRadio: any;
    
    constructor(page:any)
    {
        this.page=page;
        this.UnapprovedRadio=page.locator("//span[normalize-space()='Unapproved']")
    }

    async UnapprovedRadioFunc(){
       await this.UnapprovedRadio.click()
    }
}