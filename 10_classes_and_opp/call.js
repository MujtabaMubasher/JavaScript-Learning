
function setUserName(userName){

    this.userName = userName
    console.log("Called")

}

function createUser(userName,email,password){
    
    setUserName.call(this, userName) // => Note: Without "Call & This" only function will call but function will not pass the refrence when They leave the execution contex. 
    
    this.email= email
    this.password = password
}



const UserDetails = new createUser("Mujtaba Muabsher", "someone@gmail.com",123)
console.log(UserDetails);