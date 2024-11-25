const { expect } = require("@playwright/test");

class Placeorder{

    constructor(page){

        this.page = page;

        this.shippingemail =  page.locator("div label+input");

        this.selectcountry = page.locator("input[placeholder = 'Select Country']");

        this.countrydropdown = page.locator(".ta-item span");


    }

  async placeOrder(){

     console.log(await this.shippingemail.inputValue());

   await expect(await this.shippingemail).toHaveValue("satishreddy07@gmail.com")

      //  this.page.inputTex;

      await this.selectcountry.focus();

       await this.selectcountry.fill("India");

       await this.selectcountry.press('Enter');

       await this.selectcountry.focus();
        //await this.countrydropdown.waitFor();

        // for(let i=0; i<this.countrydropdown; i++ ){

        //     if (this.page.locator(".ta-item i").nth(i)==India){

        //         await this.page.locator(".ta-item i").nth(i).click();

        //         break;

        //     }

        // }



        await this.page.locator("text=PLACE ORDER").click();
    }

}

module.exports = Placeorder;