class User {
    constructor(email , password){
           this.email = email
           this.password = password
    }

    get email()
    {
        return this._email.toUpperCase()
    }

    set email (email){
        this._email = email
    }

    get password(){

        return `!^#!${this._password}%^)(&_@)`
    }

    set password(pass){
        
        this._password = pass
    }
}

const chai =  new User("info.xeven@gmail.com", '1232eg')

console.log(chai.email);
console.log(chai.password);