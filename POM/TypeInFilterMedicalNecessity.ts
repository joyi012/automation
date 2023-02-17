export default class TypeInFilterMedicalNecessityClass{

    page: any;
    CertificateofMedicalNecessity: any;

    constructor(page:any)
    {
        this.page=page;
        this.CertificateofMedicalNecessity=page.locator("//span[normalize-space()='Certificate of Medical Necessity']")
        
    }

    async TypeInFilterMedicalNecessityFunc(){
      
        await this.CertificateofMedicalNecessity.click();
           
    }
}