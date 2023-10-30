function seyMyName() {
    console.log("M");
    console.log("U");
    console.log("J");
    console.log("T");
    console.log("A");
    console.log("B");
    console.log("A");

}

// seyMyName //=> Its a Fuction Refrence
// seyMyName() //=> Its Execute a Fuction 

/************************************************************ */

// function addTwoNumbers(number1,number2){
   
//     console.log(number1 +number2);
// }

/*_________________________________________________________________ */

                       // OR

// function addTwoNumbers(number1,number2){
   
//     let result = number1+number2
//     return result
//     console.log("Mujtaba"); // => unreachable code 
// }

/*_________________________________________________________________ */

                       // OR
            
function addTwoNumbers(number1,number2){
    return number1+number2
  }


// addTwoNumbers()            // => Important 
// addTwoNumbers(5,4)       // => Important 
// addTwoNumbers(5,"4")      // => Important 
// addTwoNumbers(5,"a")       // => Important 

const result = addTwoNumbers(8,10)

// console.log("Result: ",result);

/************************************************************************************ */

function loginUserMessage(username = "Sam"){
    if /*(username === undefined)*/ /*OR */ (!username) {

        console.log("Please Enter username");
        return
    }
    return `${username} Just LogedIn`

}

// console.log(loginUserMessage("Mujtaba"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());



/*****************Rest Operator, Use of Object & Array in Js Functions****************** */

                            /****** Rust Operator***** */

function calculateCartPrice(val1,val3,val4, ...num1){ //=> Important

    return num1

}

//console.log(calculateCartPrice(200,400,500,300,900,700));

                      /****** Use of Objects in Js Functions***** */

const user = {
    Name: "Mujtaba" ,
    Price: 199
}

function handelingObject(anyObject){

    return `Name is ${anyObject.Name} and Price is ${anyObject.Price}`

}

// handelingObject(user)
// console.log(handelingObject(user));
// console.log(handelingObject({
//     Name:"Irtaza",
//     Price:299
// }));


                        /****** Use of Array in Js Functions***** */

const myArray=[200,500,600,920,450,600]

function secondValueofArray(anyArray){
    return anyArray[2]
}

console.log(secondValueofArray(myArray));
console.log(secondValueofArray([200,500,600,920,450,600]));