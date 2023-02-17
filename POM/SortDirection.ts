export default class SortDirectionClass{
    page: any;
    SortDirection: any;
    
    constructor(page:any)
    {
        this.page=page;
        this.SortDirection=page.getByRole('button', { name: 'sort direction' });

    }

    async SortDirectionFunc(){
    await this.SortDirection.click();
    }
}