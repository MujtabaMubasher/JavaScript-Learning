
var c = 100 // => Var has No scope in JS
let a = 40
const b = 50


{

    let a = 10
    const b = 20
    var c = 30
    c = 10 // => has No scope in JS

    // console.log("inner a: " , a);
    // console.log("inner b: " , b);
    // console.log("inner c: " , c);


}


// console.log(a);
// console.log(b);
// console.log(c) // => Var has No scope in JS


/****************Nested Scope Or Nested Functions Scope***************** */


                    /****** Nested Function***** */

function one(){
    let name = "Mujtaba"
    function two(){
      let website ="youtube"
        console.log(name);
    }
    //console.log(website);
    two()
}
//one()

/****************Nested Scope Or Nested If & Else Scope***************** */

if (true) {

    let username = "Irtaza"
    if (username==="Irtaza") {
        let website = "youtube"
        //console.log(username+ " " + website);
    }
   // console.log(website);   
}
//console.log(username);



// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addOne(25));
function addOne(num){
    return num + 1

}

//console.log(addOne(25));


//addTwo(5) // => Important 

const addTwo = function(num){
    return num + 2

}

console.log(addTwo(10));
console.log(typeof addTwo);



