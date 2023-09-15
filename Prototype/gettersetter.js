//getter setter
class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()  //get and set are used always together ALWAYS
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password.toUpperCase()}Malav`
    }

    set password(value){
        this._password = value
    }
}

const malav = new User("m@l@v.ai", "abc")
console.log(malav.email)