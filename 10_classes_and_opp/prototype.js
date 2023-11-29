// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ['Thar','SpiderMan']

let heroPowers = {

    Thar: 'hammer',
    spiderMan: 'sling',

    getSpiderPower: function (){
        console.log(`The Spider Power is : ${this.spiderMan}`);
    }
}

Object.prototype.hitesh = function (){
    console.log('Hitesh Present in all object');
}

Array.prototype.heyHitesh = function () {
    
    console.log(`Hey Hitesh How are you`);

}

// heroPowers.hitesh() 
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPowers.heyHitesh()

// => Note: See the Images which Save In Folder 

/*________________________________Inheritecnce_________________________________________ */


const user = {
     name: "Chai",
     email: "chai@google.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false,
   // __proto__: teacherAssistent
}

const teacherAssistent = {
    makeAssingment: "Js Assingment",
    fulltime: true, 
    __proto__: teachingSupport
}

console.log(teacherAssistent.isAvailable);

teacher.__proto__ = user

console.log(teacher.email);



/*__________________________Modern Inheritecnce Technique____________________________________ */

Object.setPrototypeOf(teacher, user )
console.log(teacher.name);

/*___________________________________String TrueLength Method________________________________ */

const anOtherName = "         Mujtaba Mubasher          "

String.prototype.trueLength = function(){

    console.log(`${this}`);
    console.log(`Modify String is ${this.trim()} & True Length is: ${ this.trim().length}  `);
    

}

anOtherName.trueLength()