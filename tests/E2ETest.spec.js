const {test,expect,request} = require("@playwright/test");

const {Placeorderapi} = require("../APIUTILS/Placeorderapi");

const POManager = require("../pageobjects/POManager");

const dataset = JSON.parse(JSON.stringify(require("../Testdata/E2ETestdata.json")));

for(const data of dataset){

test(`Order a product ${data.productname}`, async({page})=>{

    /* const login = new Login(page);

       await login.loogin();

    
     const dashboard = new Dashboard(page);

        await dashboard.addToCart();

    
     const cartpage = new Cartpage(page);

        await cartpage.Checkout();

     const placeorder = new Placeorder(page);

       await placeorder.placeOrder();


    await page.pause();



    // const APIcontext = await request.newContext();

    // const placeorder = new Placeorderapi(APIcontext);

    // await placeorder.placeorder();

    // await page.pause();*/


   const pomanager = new POManager(page);

   const login = await pomanager.getlogin();

   await login.loogin(data.username, data.password);

   const dashboard = pomanager.getdashboard();

   await dashboard.searchProductionAndAddToCart(data.productname);

   const cartpage = pomanager.getcartpage();

   await cartpage.Checkout();

   await page.screenshot({path: 'C:/EndtoEndWebTesting/screenshots/screenshot1.png'})

   const placeorder = pomanager.getplaceorder();

   await placeorder.placeOrder();
   
   




});

};