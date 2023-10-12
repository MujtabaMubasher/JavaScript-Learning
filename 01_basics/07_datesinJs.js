let myDate = new Date()
// console.log(typeof myDate);
// console.log(myDate);
// console.log(myDate.toString() , "=> toString()");
// console.log(myDate.toDateString(), "=> toDateString()");
// console.log(myDate.toLocaleString(),  "=> toLocaleString() ");
// console.log(myDate.toISOString(), "=> toISOString()");
// console.log(myDate.toJSON(), "=> toJSON()" );
// console.log(myDate.toLocaleDateString(), "=> toLocaleDateString()");
// console.log(myDate.toLocaleTimeString(), "=> toLocaleTimeString()");
// console.log(myDate.toTimeString(), "=> toTimeString()");
// console.log(myDate.toUTCString(), "=> toUTCString()");
// console.log(myDate.getTime(), "=> getTime()");
// console.log(myDate.getTimezoneOffset(), "=> getTimezoneOffset()");

/*********************** Methods For Declaring Dates******************* */

//let myCreatedDate = new Date(2023, 0, 23)  // => in Js Months in Dates satrt with 0
//let myCreatedDate = new Date(2023, 11, 12, 10, 24)
// let myCreatedDate = new Date("2023-01-14") // => in Js Months in Dates Start with 01 in "yy-mm-dd" Formate
let myCreatedDate = new Date("01-14-2023") // => mm-dd-yy Formate

// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleString())

/*********************** Time Stamp in Dates ******************* */


let myTimeStamp = Date.now()

console.log(typeof myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.round(Date.now()/1000)); // => Convert Date in to Seconds

                    /* OR */
console.log(Math.floor(Date.now()/1000));

/**************************************************************************/

let date = new Date()
console.log(typeof Date());
console.log(typeof date);
console.log(date);
console.log(date.getMonth());
console.log(date.getMonth() + 1);
console.log(date.getDay());


// // `${newDate.getDay()} and the time `

// newDate.toLocaleString('default', {
//     weekday: "long",
    
// })