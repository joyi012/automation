
export default class AllRadioClass{

    page: any;
    AllRadio: any;
    
    constructor(page:any)
    {
        this.page=page;
     
        this.AllRadio = page.locator("//span[normalize-space()='All']");

    }

    async AllRadioFunc(){
       await this.AllRadio.click();
    }
}