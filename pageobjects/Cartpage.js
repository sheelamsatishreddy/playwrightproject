const {expect} = require("@playwright/test");

class Cartpage{

    constructor(page){

    this.page = page;

    this.productname = page.locator(".items").filter({hasText:'ADIDAS ORIGINAL'}).locator("h3");

    this.checkout = page.locator("button").nth(7);

}

async Checkout(){

    await expect(this.productname).toHaveText("ADIDAS ORIGINAL");


    await this.checkout.click();

}
}

module.exports = Cartpage;


