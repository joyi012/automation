export default class LogOutPageClass{
    page: any;
    logout: any;
    userProfile: any;
    constructor(page:any)
    {
        this.page=page;
        this.userProfile=page.locator("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > span:nth-child(5)");
        this.logout=page.locator("//a[normalize-space()='Log Out']");
    }

    async logoutbtn()
    {
        await this.userProfile.click();
        await this.logout.click();
    }
}