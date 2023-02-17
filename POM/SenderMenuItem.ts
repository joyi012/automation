export default class SenderMenuItemClass{
    page: any;
    SenderMenuItem: any;
    
    constructor(page:any)
    {
        this.page=page;
        this.SenderMenuItem=page.getByRole('menuitem', { name: 'Sender' });

    }

    async SenderMenuItemFunc(){
       await this.SenderMenuItem.click();
    }
}   