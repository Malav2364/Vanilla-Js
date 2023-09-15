// //ES6

// class User {
//     constructor(username, email, password){
//         this.username =  username
//         this.email =  email
//         this.password =  password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}@infosys.com`
//     }
// }

// const ms = new User('Malav', 'ms@1232', '123')
// console.log(ms.encryptPassword())
// console.log(ms.changeUsername())

//BTS

function user (username, email, password){
    this.username =  username
    this.email =  email
    this.password =  password
}

const ms = new user('Malav', 'abc', '123')

user.prototype.encryptPassword = function () {
    return `${this.password}aafhiklughaldfki23456267`
}

console.log(ms.encryptPassword())