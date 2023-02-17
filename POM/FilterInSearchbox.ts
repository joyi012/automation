export default class FilterInSearchboxClass{
    page: any;
    filter: any;
    typeFilter: any;


    constructor(page:any)
    {
        this.page=page;
        this.filter=page.locator('.css-11dqbsu');
        this.typeFilter=page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > button:nth-child(1)');
    }

    async filterInSearchboxFunc(){
         this.filter.click()
         this.typeFilter.click();
    }
}