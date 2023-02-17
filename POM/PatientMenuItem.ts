export default class PatientMenuItemClass{
    page: any;
    PatientMenuItem: any;
    
    constructor(page:any)
    {
        this.page=page;
        this.PatientMenuItem=page.getByRole('menuitem', { name: 'Patient' });

    }

    async PatientMenuItemFunc(){
       await this.PatientMenuItem.click();
    }
}   