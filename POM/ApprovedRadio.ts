export default class ApprovedRadioClass{
    
    page: any;
    ApprovedRadio: any;
    
    constructor(page:any)
    {
        this.page=page;
        this.ApprovedRadio=page.locator("//span[normalize-space()='Approved']")
    }

    async ApprovedRadioFunc(){
       await this.ApprovedRadio.click()
    }
}