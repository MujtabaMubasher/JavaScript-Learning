//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100 // type => Number
const scoreValue = 100.3 // type => Number

const isLoggedIn = false // type => Boolean
const outsideTemp = null // type => Object
let userEmail;  // type => undefined

const id = Symbol('123') // type => symbol
const anotherId = Symbol('123') // type => symbol

//console.log(id === anotherId);

const bigNumber = 3456543576654356754n // type => bigint



// Reference (Non primitive)

// array, Objectt, function 

const rolemodel = ["Muhammad SAW", "Ali", "Umar"] // type => object

let obj ={   // type => object
    name:"Mujtab",    
    Fname:"Mubasher",
    age: 23,

}

const myfun = function() {  // type => function OR Object Function
   // console.log("Hello World");

}

console.log(typeof myfun);


//https://262.ecma-international.org/5.1/#sec-11.4.3