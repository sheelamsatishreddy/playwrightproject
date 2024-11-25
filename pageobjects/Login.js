class Login{

constructor(page){

    this.page=page;

    this.url = "https://rahulshettyacademy.com/client";

    this.useremail = page.locator("#userEmail");

    this.userpassword = page.locator("#userPassword");

    this.login = page.locator("#login")

}

async loogin(username, password){

    await this.page.goto(this.url);

    await this.useremail.fill(username);

    await this.userpassword.fill(password);

    await this.login.click();

}

}

module.exports = Login;