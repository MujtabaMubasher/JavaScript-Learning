class user {
    constructor(userName,email,password){
        this.userName = userName
        this.email = email
        this.password = password
    }

    encryptPassword(){

       return console.log(`Encrypted Password is: %$a*!@${this.password}%$aBgh^&*  `);
    }

    changeUserName(){

        return this.userName.toUpperCase()
    }
}

//const User = new user("Mujtaba Mubasher","someone@gmail.com", 132491)
// User.encryptPassword()
// console.log(User.changeUserName());

/*______________________ behind the scene___________________________ */

function newUser(userName , email, password){
    this.userName = userName
    this.email = email
    this.password = password
}

newUser.prototype.encryptPassword = function(){
    return console.log(`Encrypted Password is: %$a*!@${this.password}%$aBgh^&*`)
}

newUser.prototype.changeUserName = function(){
    return this.userName.toUpperCase()
}

const User = new newUser("Irtaza Mubasher","someone@gmail.com", 132491)

User.encryptPassword()
console.log(User.changeUserName());