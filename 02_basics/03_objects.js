// singletone
//object.create

/********************************************** */

// object Literals

/**************************Symbole***********************************/

mySym = Symbol("Key1")     // => Use Symbole As Key in Object (Important)

/*************************************************************/

const JsUser = {
    name: "Mujtaba",
    "fullName" : "Mujtaba Mubasher",
    "full Name" : "Mujtaba Mubasher Jamil",
    //mySym : "mykey1",
    // mySym: mySym,
    [mySym]: mySym, // => Correct Use of Symbole in Objects
    [mySym]: "mykey1", // => Correct Use of Symbole in Objects
    age: 23,
    location: "Pakistan",
    email: "mujtabamubasher000001@gmail.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Saturday"]

}

// console.log(JsUser.name);

// console.log(JsUser["location"]);
// console.log(JsUser.fullName);
// console.log(JsUser["full Name"]);
// console.log(typeof JsUser.mySym);
// console.log(JsUser.mySym);

// console.log(typeof JsUser[mySym]);
// console.log(JsUser[mySym]);       // => Use of Symbole in Js Objects


/**************************** Values  Change in Js Objects*********************** */
//console.log(JsUser.email);
JsUser.email = "mujtabamubasher001@gmail.com"
//  console.log(typeof JsUser.age);
//  console.log(JsUser.email);

 /*************************Freez Values Of Object*****************************/

 //Object.freeze(JsUser)
 JsUser.email = "mujtabamubahser03101@gamil.com"
//  console.log(JsUser.email);
//  console.log(JsUser);

/***********************Use Function in JS Objects*******************/

JsUser.greeting = function () {
    console.log("Hi.. JsUser");
    
}

JsUser.greetingTwo = function () {
   console.log(`Hi.. JsUser ${JsUser.fullName}`);
    console.log(`Hi.. JsUser ${this.fullName}`);

    
}

console.log(JsUser);

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());