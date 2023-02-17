export default class DataRecievedDropdownClass{
    page: any;
    DataRecievedDropdown: any;
    
    constructor(page:any)
    {
        this.page=page;
        this.DataRecievedDropdown=page.getByRole('button', { name: 'Date Received' });

    }

    async DataRecievedDropdownFunc(){
       await this.DataRecievedDropdown.click();
    }
}