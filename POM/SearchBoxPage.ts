export default class SearchBoxClass{
    page: any;
    searchbox: any;
    autosuggestion: any;

    constructor(page:any)
    {
        this.page=page;
        this.searchbox=page.locator("input[placeholder='Search Patient or Sender']");
        this.autosuggestion=page.locator(".chakra-text.css-1wmkpwr");
        
    }

    async searchboxFunc(){
        await this.searchbox.click();
        await this.searchbox.fill("j");
        // await this.autosuggestion.click();   
    }
}