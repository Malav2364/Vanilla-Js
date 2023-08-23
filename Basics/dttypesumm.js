//  Primitive Data Types

// 7 Types : String, Number, Boolean, Null, Undefined, Symbol, BigInt



let score;
console.log(typeof score);

const id = Symbol('123')
const anotherId = Symbol('121')

console.log(id === anotherId);

// const bigNumber = 123456789146456n          //use n to make a number a big int
console.log(typeof bigNumber);

const heros = ['shaktiman', 'naagraj', 'doga']

let Obj = {
    uName:'Malav',
    lName:'Patel',
    age:19,
}

const myFunction = function(){
    console.log('Hello World!!');
}

console.log(typeof myFunction);


//Reference Types or Non Primitive (direct reference in the memory)

// Types :  Arrays, Objects, Functions 


// Types of memory Stack (Primitive) and Heap (Non-Primitive)

let myName = "My Name is Malav Patel"
                                                                                        // its creates a copy and assigns it to the other variable
let anotherName = myName
anotherName = 'Coding is bekar !!!!!!!!'

console.log(anotherName);
console.log(myName);

let user = {
    email : 'abc@gmail.com',      //heap
    upi : 'user@sbi'
}

let user2 = user      //stack
                                        // here in this case we are giving refrence of user1 init it is not creating any copy of the user1 
console.log(user2);

user2.email = 'ms@google.com'

console.log(user2.email);                       //here it gives the same refernce to both the parameters in the objects 
console.log(user.email);

