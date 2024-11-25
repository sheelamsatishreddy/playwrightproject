class Dashboard{

    constructor(page){

        this.page = page;

        this.Addtocart = this.page.locator(".card").filter({hasText:'ADIDAS ORIGINAL'}).locator("button >> nth =1");

        this.products = this.page.locator(".card");

        this.count = this.page.locator(".card")

        this.producttitles = page.locator(".card b");

        this.cartbutton = this.page.locator("button[routerlink='/dashboard/cart']");



    }

    async searchProductionAndAddToCart(productname){

       

       await this.producttitles.nth(1).waitFor();

       for(let i =0; i<await this.producttitles.count();i++){

        console.log(await this.producttitles.count());

        if(await this.producttitles.nth(i).textContent()==productname){

            console.log(await this.producttitles.nth(i).textContent());

            console.log(productname);
         
           await this.products.nth(i).locator("text=Add To Cart").click();

        }
       }

       await this.cartbutton.click();



    }


}

module.exports = Dashboard;