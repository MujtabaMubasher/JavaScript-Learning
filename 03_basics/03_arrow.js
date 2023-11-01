const user = {
    username:"Mujtaba",
    price: 199,
    welcomeMessage: function(){
        // console.log(`${this.username}, Welcome to Website`); 
        // console.log(this); // => "this" Reffer the Current Context
    }

}

user.welcomeMessage()
user.username ="Mubasher"
user.welcomeMessage()
//console.log(this); // => In Node Envirment Current Context is Empty {}
                     // => But In Browser Current Context is Windows Globle Object  

/***************************************************************************** */

function one(){
    let username = "IrtazaMbasher"
    // console.log(this.username);
    // console.log(this);  // => In Function "this" Keyword Give Context of Object
}
// console.log(this);

one()

/*******************************Arrow Function****************************** */

const chai = () => {

    let username = "MujtabaMubasher"
    // console.log(this.username);
    // console.log(this); // => In Arrow Function "this" Keyword Give Empty Object
}
// console.log(this);
chai()

/*__________________________________________________________________________ */

// const adddTwoNum = (num1 , num2) =>{
//     return num1 + num2                         // => Explicit Return  

// } 

                                     //OR

// const adddTwoNum = (num1 , num2) => num1 + num2  // => Implicit Return

                                      //OR    
                                      
//const adddTwoNum = (num1 , num2) => (num1 + num2)   // => Implicit Return   

                                      //OR    

 const adddTwoNum = (num1 , num2) => ({name:"Mujtaba Mubasher"}) // => Implicit Object Return                                        

console.log(adddTwoNum(4,6));



                                    
