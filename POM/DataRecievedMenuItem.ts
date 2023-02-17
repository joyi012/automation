export default class DataRecievedMenuItemClass{
    page: any;
    DataRecievedMenuItem: any;
    
    constructor(page:any)
    {
        this.page=page;
        this.DataRecievedMenuItem=page.getByRole('menuitem', { name: 'Date Received' });

    }

    async DataRecievedMenuItemFunc(){
       await this.DataRecievedMenuItem.click();
    }
}   