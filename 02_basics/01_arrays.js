const myArray = [1,5,6,4,8,9,0,"Mujtaba", true]
// console.log(typeof myArray);
// console.log(typeof myArray[0]);
// console.log(typeof myArray[7]);
// console.log(typeof myArray[8]);
// console.log(myArray[7]);
// console.log(myArray[8]);

let valinArrayIndex = Number (myArray[8])
// console.log(valinArrayIndex);

const myHeors = ["Muhammad SAW", "Ali RAZ"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr2[3]);

/******************************  Array Methods **********************************/

// myArray.push("Mubasher")

// console.log(myArray);

// myArray.pop()

// console.log(myArray);


/**********************************************************************/
// console.log(myArray);
// myArray.unshift(0)
// console.log(myArray);
// myArray.unshift(1)
// console.log(myArray);
//******************************************************************** */

// console.log(myArray);
// myArray.shift()
// console.log(myArray);
// myArray.shift()
// console.log(myArray);

/********************************************************************* */   


// console.log(myArray.includes('Mujtaba'));
// console.log(myArray.includes('Irtaza'));
// console.log(myArray.indexOf('Mujtaba'));
// console.log(myArray.indexOf('Irtaza'));

/**********************************************************************/


// const newArr = myArray.join()
// console.log(myArray);
// console.log(newArr);
// console.log(typeof newArr);

/***********************************************************************/

// Importent 

// => slice & splice 
//-------------------

console.log("A ", myArray);
/*__________________Slice Method_____________________*/
const myNa1 = myArray.slice(1 , 4)
console.log(myNa1);
console.log("B ", myArray);

/*__________________Splice Method_____________________*/

const myNa2 = myArray.splice(1 , 4)
console.log(myNa2);
console.log("C ", myArray);
