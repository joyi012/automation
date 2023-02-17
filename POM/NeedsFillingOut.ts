export default class NeedsFillingOutClass{
    page: any;
    NeedsFillingOut: any;
    
    constructor(page:any)
    {
        this.page=page;
        this.NeedsFillingOut=page.getByRole('tab', { name: 'Needs Filling Out' });

    }

    async NeedsFillingOutFunc(){
    await this.NeedsFillingOut.click();
    }
}