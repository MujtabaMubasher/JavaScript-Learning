const user = {

    userName:'Mujtaba',
    logedIncount: 8,
    isLogedIn: true,
    getAllUser: function(){
        console.log(this.userName);
        console.log(this);
}

}

//console.log(user.name);
//console.log(user.getAllUser());

/*-----------------------------------------------------------------------------------*/

function User(userName,logedInCount,isLogedIn){

    this.userName = userName
    this.logedInCount = logedInCount
    this.isLogedIn = isLogedIn

    this.greeting = function(){

        //console.log(`Welcome: ${this.userName}`);

        return `Welcome: ${this.userName}`;

    }
   
    return this
}


const userOne = new User('Mujtaba Mubasher', 10 , true)
const userTwo = new User('Irtaza Mubasher' , 20 , false)
console.log(userOne.greeting());
console.log(userTwo);
console.log(userOne.constructor);