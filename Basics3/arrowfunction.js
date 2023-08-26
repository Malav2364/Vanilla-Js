const user = {
    username:"Malav",
    price:199,

    welcomeMsg: function(){
        console.log(`${this.username} , Welcome to the website`)         //this is used to refer current context
        console.log(this)
    }
}

// user.welcomeMsg() 
// user.username = "Ms"  //we changed the context
// user.welcomeMsg() 
// console.log(this) //it will not print anything because it doesnt have global context

// function code(){
//     let username = "malav"
//     console.log(this.username)
// }

// code()

// const code = function(){
//     let username = "malav"
//     console.log(this.username)
// }

// code()
const code = () =>{
    let username = "malav"
    console.log(this)
}

// code()

// const addTwo = (num1, num2) =>{         //simple arrow function           
//     return num1 + num2                           //wrapped in parenthisis so it is explicit return
// }



const addTwo = (num1, num2) =>  num1 + num2  //implicit return
const addtwo = (num1, num2) =>  (num1 + num2 )  //wrapped in brackets so it is implicit return
const addawo = (num1, num2) =>  {username = "Malav"}  // op is undefiened
console.log(addTwo(3, 4))
console.log(addtwo(3, 4))
console.log(addawo(3, 4))


