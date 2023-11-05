/******************************** forOf Loops **********************************/


const arr =["Java", "python", "C++"]

for (const i of arr) {
     //console.log(i);
}

const str = "Mujtaba Mubasher"

for (const i of str) {
    //console.log(i);
}

/******************************** Map() **********************************/

const map1 = new Map()

map1.set("Name:" , "Mujtaba")
map1.set("Mobile No:" , '03124133546')
map1.set("Age:" , 24)
map1.set("Degree:" , 'BSCS')
map1.set("University:" , "UMT")
map1.set("Ending Year:" , 2024)

// console.log(map1);
// console.log(map1.keys());
// console.log(map1.values());
// console.log(map1.size);


for (const i of map1) {
    //console.log(i);        //=> it gives us an Array of Each 'Key:Value' pairs of Map()
}

                            //OR

for (const [key , value] of map1) {
    //console.log(`${key} :- ${value}`);
                    //OR
    // console.log(key, ':-', value);

}                            

/*---------------------------------------------------------------------------------- */

const myObj ={
    name: "Mujtaba Mubasher",
    age: 24
}

for (const i of myObj) {
    console.log(i);        // => Note: We can Iterate any object from "ForOf Loop" 
}