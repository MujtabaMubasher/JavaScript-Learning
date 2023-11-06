/******************************** reduce Method **********************************/

// its a Array Method
// its a CallBack Function
// CallBack Functions doesn't have Any Name
// Mostlty it is use for shopping Cart

const arr = [1,5,41,20,35]

let initialize = 0

let sumArr = arr.reduce((accmulator, currentvalue) => accmulator + currentvalue,initialize) 

                                     //OR
    
sumArr = arr.reduce((accmulator, currentvalue) => {
    
    //console.log(`accumulator: ${accmulator} currentvalue: ${currentvalue}`);

    //return accmulator + currentvalue

},0) 

                                     //OR

sumArr = arr.reduce((accmulator, currentvalue) => accmulator + currentvalue,0) 

//console.log(sumArr);

                                     //OR

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

let cartTotal = shoppingCart.reduce((accu,calVal)=> accu + calVal.price,0)

console.log(cartTotal);

