
export default class LoginPageClass {
    signInbutton: any;
    username: any;
    password: any;
    page: any;
    goto: string;
    constructor(page:any)
    {
        this.page=page;
        this.goto=page.goto('https://app.qa.suturehealth.com/');
        this.username=page.locator('#Input_Username');
        this.password=page.locator('#Input_Password');
        this.signInbutton=page.locator('text=Let\'s Go');
        
    }

    async goTo()
    {
        await this.goto;
    }

    async validLogin()
    {
        await this.username.fill("vgurjar-Asst")
        await this.password.fill("Suture@3212")
        await this.signInbutton.click();
    }
}