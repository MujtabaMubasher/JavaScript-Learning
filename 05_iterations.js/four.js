/******************************** forIn Loop **********************************/

const myObj = {
    L1: "C++",
    L2: "Java",
    L3: "JavaScript",
    L4: "Python"
}

for (const i in myObj) {
    
     // console.log(i); // => its only Prints 'Keys of Object'
      //console.log(`${i} : ${myObj[i]}`);
                     //OR
      //console.log(i ," : ", myObj[i]);

}


/*----------------------------Use With Array-------------------------------- */

const programming = ["C++","Java","Ruby","C#","Js","Python"]

for (const i in programming) {
    //console.log(i);  // => its only Prints 'Index of Given Array'
    //console.log(i , " : ", programming[i]);
}


/*----------------------------Use With map()-------------------------------- */

const map1 = new Map()  // => Note: 'Map()' can't be Iterateable  

map1.set('A','a')
map1.set('B','b')
map1.set('C','c')
map1.set('D','d')
map1.set('E','e')

for (const key in map1) {
    console.log(key); // => Note: We can't Iterate 'Map()' from "ForIn Loop" 
}