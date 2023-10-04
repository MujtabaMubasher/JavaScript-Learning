/*let score ="true"
console.log(typeof score);
console.log(typeof(score));
let valInNumber = Number(score)
console.log(typeof(valInNumber));
console.log(valInNumber);
*/


/*

// "33" => 33
// 33avc => NaN
// null => 0
// undefined => NaN
// true => 1 & false => 0
//"true" => NaN


*/

let isLogedIn = "Mujtaba"
let booleanIsLogedIn = Boolean(isLogedIn)
//console.log(typeof booleanIsLogedIn);
//console.log(booleanIsLogedIn);

/*

// 1 => true & 0 => false & 100 => true
//"" => false
// "Mujtaba" => true

*/

let someNumber = 33
let stringNumber = String(someNumber)
//console.log(typeof someNumber);
//console.log(typeof stringNumber);
//console.log(stringNumber);

/*

//

*/

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

//  console.log(+true);
//  console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++; // postfix
//console.log(gameCounter);
++gameCounter; // Prefix
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion


/****************************Prefix & Postfix **************************** */

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
