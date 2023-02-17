export default class FirstSelectorCheckBoxClass{
    page: any;
    selectorCheckBox: any;
   
    constructor(page:any)
    {
        this.page=page;
        this.selectorCheckBox=page.locator("(//span[@class='chakra-checkbox__control css-1lbzi78'])[2]");

    }

    async FirstSelectorCheckBoxFunc(){
       await this.selectorCheckBox.click()
    }
}