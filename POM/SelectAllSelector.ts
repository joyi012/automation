export default class SelectAllSelectorClass{
    page: any;
    selectAllSelector: any;
    
    constructor(page:any)
    {
        this.page=page;
        this.selectAllSelector=page.getByText('Select All');

    }

    async SelectAllSelectorFunc(){
       await this.selectAllSelector.click();
    }
}