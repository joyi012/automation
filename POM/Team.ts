export default class TeamClass{
    page: any;
    Team: any;
    
    constructor(page:any)
    {
        this.page=page;
        this.Team=page.getByText('Team');

    }

    async TeamFunc(){
       await this.Team.click();
    }
}