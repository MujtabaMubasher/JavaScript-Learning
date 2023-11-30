class user{
    constructor(userName){
        this.userName = userName
    }

    logMe(){
        return `UserName: ${this.userName}`
    }

    static createId(){
        return 123
    }
}

const User =  new user("Mujtaba Mubasher")

// console.log(User.logMe());
// console.log(User.createId());

class teacher extends user{
    constructor(userName, email){
        super(userName)
        this.email = email
    }
}

const Teacher = new teacher("Mujtaba Mubasher" ,  "mujtabamubasher11@gmail.com")
console.log(Teacher);
console.log(typeof Teacher);
console.log(Teacher.logMe());
console.log(Teacher.createId());