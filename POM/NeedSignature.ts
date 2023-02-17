export default class NeedSignatureClass{
    page: any;
    needSignature: any;
    
    constructor(page:any)
    {
        this.page=page;
        this.needSignature=page.getByRole('tab', { name: 'Needs Signature' });

    }

    async needSignatureFunc(){
       await this.needSignature.click();
    }
}