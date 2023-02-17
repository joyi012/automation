export default class TypeInFilterHomeHealthClass{

    page: any;
    HomeHealthCertification: any;

    constructor(page:any)
    {
        this.page=page;
        this.HomeHealthCertification=page.locator("//span[normalize-space()='Home Health Certification']")
        
    }

    async TypeInFilterHomeHealthFunc(){

        await this.HomeHealthCertification.click();
        
    }
}