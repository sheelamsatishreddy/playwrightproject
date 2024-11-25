const {Placeorderapi} = require("../APIUTILS/Placeorderapi");
const Login = require("../pageobjects/Login");
const Dashboard = require("../pageobjects/Dashboard");
const Cartpage = require("../pageobjects/Cartpage");
const Placeorder = require("../pageobjects/Placeorder");

class POManager{

    constructor(page){

        this.page = page;


    }

getcartpage(){

    return new Cartpage(this.page);

}

getdashboard(){

    return new Dashboard(this.page);

}

getlogin(){

    return new Login(this.page);
}

getplaceorder(){

    return new Placeorder(this.page);
}

}

module.exports = POManager;

