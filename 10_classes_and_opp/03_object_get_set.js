const user = {
    _email: 'mujtabamubasher11@gmail.com',
    _password: '123ab',
    
    get email(){
        return this._email.toUpperCase()
    },

    set email(email){
        this._email = email
    },

    get password(){
        return  `!^#!${this._password}%^)(&_@)`
    },

    set email(pass){
        this._password = pass
    }
}

const User =  Object.create(user)
console.log(User.email);
console.log(User.password);