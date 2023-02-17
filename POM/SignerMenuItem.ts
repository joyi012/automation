export default class SignerMenuItemClass{
    page: any;
    SignerMenuItem: any;
    
    constructor(page:any)
    {
        this.page=page;
        this.SignerMenuItem=page.getByRole('menuitem', { name: 'Signer' });

    }

    async SignerMenuItemFunc(){
       await this.SignerMenuItem.click();
    }
}   