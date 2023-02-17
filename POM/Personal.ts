    export default class PersonalClass{
        page: any;
        personal: any;
        
        constructor(page:any)
        {
            this.page=page;
            this.personal=page.getByText('Personal');

        }

        async PersonalFunc(){
        await this.personal.click();
        }
    }