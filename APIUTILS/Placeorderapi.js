class Placeorderapi{

constructor(APIcontext){

this.APIcontext = APIcontext;
//this.APIcontextone = APIcontextone;

}


async gettoken(){

    const responsetoken = await this.APIcontext.post("https://rahulshettyacademy.com/api/ecom/auth/login",{
    
    data:{userEmail:"satishreddy07@gmail.com",userPassword:"Sa@123456"},

    // Headers:{

    //     "Content-Type":"applicatoin/json"

    // }
    

},
    
    )

    const responsetokenjson =await responsetoken.json();

    console.log(responsetokenjson.token);

    return responsetokenjson.token;

}


async placeorder(){

    const token = await this.gettoken();
    const Response = await this.APIcontext.post("https://rahulshettyacademy.com/api/ecom/order/create-order", {

    data:{"orders":[{"country":"India","productOrderedId":"6581ca979fd99c85e8ee7faf"}]},

    headers:{

        
        "Authorization": token,

    },

    }


    
    
    );

    const Responsejson =await Response.json();

    console.log(Responsejson);

    return Responsejson.orders[0];

    

}


}

module.exports = Placeorderapi;