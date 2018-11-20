
//ADD
let curryingAdd = (a) => 
                      (b) =>
                          (c) => {
                            console.log( a+b+c);
                          }


curryingAdd(1)(2)(3)

//Real example

let discountforProd = (discount) =>
                          (price) =>{console.log(price * discount)}


let tenPercentDiscount = discountforProd(0.1);

tenPercentDiscount(500);
tenPercentDiscount(1000);
