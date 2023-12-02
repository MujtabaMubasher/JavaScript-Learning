function user(email,password){
    this._email = email
    this._password = password

    Object.defineProperty(this , 'email',{
        get:function(){
            return this._email.toUpperCase()
        },
        set: function(email){
            this._email = email
        } 
    })

    Object.defineProperty(this , 'password', {
        get: function(){
            return  `!^#!${this._password}%^)(&_@)`
        },
        set: function (pass){
              this._password = pass
        }
    })
}

const  tea  = new user("info.xeven@gmail.com", '1232eg')
console.log(tea.email);
console.log(tea.password);