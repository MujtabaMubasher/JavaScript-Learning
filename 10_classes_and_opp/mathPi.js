// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI)

/*________________________________________________________________________________________ */


const descriptor = Object.getOwnPropertyDescriptor(Math , "PI")
//console.log(descriptor);

const user = {
    name: 'Mujtaba Mubasher',
    age: 26,
    greeting: function(){
        console.log(`Hi.. ${this.name}`);
    } 
}

const descriptor1 = Object.getOwnPropertyDescriptors(user)
let descriptor2 = Object.getOwnPropertyDescriptor(user , 'name')
// console.log(descriptor1);
// console.log(descriptor2);

Object.defineProperty(user , 'age',{
    //writable: false,
   // configurable: false,       
    enumerable: false  // => This property of Object is not Iterable through Loops
})

descriptor2 = Object.getOwnPropertyDescriptor(user , 'age')

//console.log(descriptor2);

for (const [key , value] of Object.entries(user)) {

    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`);
    }
   
}