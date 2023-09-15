const user  = {
    _email:'h@mc.com',
    _password:"abcdefgh",


    get email(){
        return this._email.toUpperCase()
    },

    set email (value){
        this._email = value
    },

    get password(){
        return this._password.toUpperCase()
    },

    set password (value){
        this._password = value
    }
}

// console.log(user.email)
// console.log(user.password)


const tea = Object.create(user)  //create a new object and access the data from the other object
console.log(tea.email)
