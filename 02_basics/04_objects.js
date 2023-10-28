 // const tinderUser = new Object() // => Singolton Object\

tinderUser = {}      // => Non Singleton Object

tinderUser.name ="Mujtaba MUbahser"
tinderUser.email="someone@gmail.com"
tinderUser.isLogedIn = true
tinderUser.lastLogedIn = ["Monday" , "Wednesday"]


//console.log(tinderUser);


const anOtherUser = {
    fullName:{
        userFullName: {
            firstName: "Mujtaba",
            lastName: "Mubasher"
        }
    }
}

//console.log(anOtherUser.fullName.userFullName.firstName);

/****************************************************************** */


const obj1 ={1:'a', 2:'b'}
const obj2 = {4:'c', 5:'d'}
const obj4 = {6:'e', 7:'f'}


//const obj3 ={obj1,obj2} //=> Wrong Methonds To combine Objects


/*_________________________Objects Combining Methods_______________________*/

//const obj3 = Object.assign({}, obj1, obj2, obj4)

                    //OR

const obj3 = {...obj1 , ...obj2 , ...obj4}         

//console.log(obj3);

/**________________________________________________________________________ */

const user =[
    {
        id: "133dds"
    },

    {
        name: "Mujtaba"
    },

    {
        email:"someone@gmail.com"
    }
]

//console.log(user[2].email);


console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLogedIn"));


/****************************Object Destructuring************************************ */

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);


/****************************API & Json Talk********************************* */

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]