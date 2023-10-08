const name = "Mujtaba"
const profession= "I am Developer"

//console.log(name + profession); => Outdated 

console.log(`My name is ${name} and ${profession}`); // => string Interpolation

const gameName = new String ('Mujtaba-hc-cncs-cck-vkvv')
// console.log(gameName);

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('a'));

const newString = gameName.slice(-9,6) // Always Gives the maxIndex - 1 Value 
// console.log(newString);

const otherString=gameName.substring(2,5)  // Ignore Negative Integer or Index Valuve 
// console.log(otherString);

const str1 = "              dfghdhdfhd hdhdfhd  dfhdfhdhd  hdhdh    "

// console.log(str1);
// console.log(str1.trim());


const url ="https://wish2ship.pk/hand%20gripper"

console.log(url.replace('%20' , '-'));

console.log(url.includes("Gripper"));
console.log(gameName.split('-'));