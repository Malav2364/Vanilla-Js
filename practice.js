
// // // // // // const mySym = Symbol("Key1")
// // // // // // const mySym2 = Symbol("Key2")
// // // // // // const mySym3 = Symbol("Key3")
// // // // // // const mySym4 = Symbol("Key4")

// // // // // // const Course = {                 //non singlton object
// // // // // //     cName : "CSE",
// // // // // //     fees: "$100",
// // // // // //     [mySym]: 1,
// // // // // //     [mySym2]: "myKey2",
// // // // // //     [mySym3]: "myKey3",
// // // // // //     [mySym4]: "myKey4",
// // // // // //     CourseInst: "Apun"
// // // // // // }

// // // // // // // console.log(Course);// simple method

// // // // // // const {cName: nme, fees: fe, CourseInst: ins} = Course // here the value of the object is stord in the variable ins so not need to change the name of the variable
// // // // // // // console.log(nme, fe, ins);
// // // // // // // console.log(typeof(Course[mySym]))
// // // // // // // console.log(typeof(mySym))

// // // // // // // console.log(`The name of the course is ${nme} and the fees for the course is ${fe} , the instructor name is ${ins} `) //string interpolation


// // // // // // //singleton object

// // // // // // const mProfile = {}

// // // // // // mProfile.name ="Popatlal"
// // // // // // mProfile.age = '65'
// // // // // // mProfile.aCrse ="CSE"
// // // // // // mProfile.University = "Parul University"

// // // // // // const {name: nm, age: ag, aCrse: cr, University: uni} = mProfile
// // // // // // // console.log(nm, ag, cr)
// // // // // // console.log(`This is ${nm} and at the age of ${ag} is persuing ${cr} from ${uni} badi sharm ki baat hai `);//string interpolation in singleton object



// // // // // // console.log(greetUser(username))


// // // // // // const myArr = [100, 200, 300, 400, 500]

// // // // // // function retSecond(getArr){                            //function to get value of the array  
// // // // // //     return getArr[1]
// // // // // // }

// // // // // // console.log(retSecond(myArr));

// // // // // // const user = {
// // // // // //     username:"Malav",
// // // // // //     price:199
// // // // // // }

// // // // // // function obj(anyObj){
// // // // // //     console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`)
// // // // // // }

// // // // // // // obj(user)

// // // // // // // obj({
// // // // // // //     username:"Aarav",                        //functions in objects to fetch values
// // // // // // //     price:799
// // // // // // // })

// // // // // // function cartPrice(...num1){      //here rest operator is used to get all values from a var in function
// // // // // //     return num1
// // // // // // }

// // // // // // console.log(cartPrice(100, 200, 300, 400))

// // // // // // const myArr = [100, 200, 300, 400, 500, 600]

// // // // // // function gtSec(recArr){                       //second array valueget using function
// // // // // //     return recArr[1]
// // // // // // }
// // // // // // console.log(gtSec(myArr));



// // // // // // function shCart(...num1){  //rest operator for getting all values from a var in function
// // // // // //     return num1
// // // // // // }

// // // // // // console.log(shCart(100, 200, 400, 700, 800))


// // // // // // const user = {
// // // // // //     username:"Malav",
// // // // // //     price:199
// // // // // // }

// // // // // // function gtDtls(myObj){
// // // // // //     console.log(`The Username is ${myObj.username} and price is ${myObj.price}`);
// // // // // // }

// // // // // // gtDtls(user)

// // // // // // gtDtls({
// // // // // //     username:"Op",
// // // // // //     price :999999
// // // // // // })

// // // // // // if (true) {
// // // // // //     const username = "Malav"
// // // // // //     if (username === "Malav") {
// // // // // //         const website = "youtube"
// // // // // //         console.log(username +  website)                                                  //accesing the variable
// // // // // //     }
// // // // // //     console.log(username)
// // // // // // }

// // // // // // console.log(website)

// // // // // // function addOne(num){
// // // // // //     return num+ 1
// // // // // // }
// // // // // // console.log(addOne(5))


// // // // // // console.log(addTwo(5))
// // // // // // const addTwo = function(num){  //cannot access the variable before declaration in the function if it is in a variable
// // // // // //     return num + 2
// // // // // // }

// // // // // const user = {
// // // // //     username: 'Malav',
// // // // //     price:299,

// // // // //     welcomeMsg: function(){
// // // // //         // console.log(`The Username is ${this.username} and the price is ${this.price}`)
// // // // //     }
// // // // // }

// // // // // // user.welcomeMsg()
// // // // // user.username = "Aarav"  //contect changed 
// // // // // user.price = 599
// // // // // // user.welcomeMsg()


// // // // // // const code = function(){
// // // // // //     let name = "Malav"
// // // // // //     console.log(this.name)
// // // // // // }

// // // // // // code()

// // // // // function addTwo (num1, num2){
// // // // //     return num1 + num2
// // // // // }                                                                    //simple function with explicit return

// // // // // // console.log(addTwo(3,4))

// // // // // // const addThree = (num1, num2, num3) =>{
// // // // // //     return num1 +num2 +num3
// // // // // // }                                                                                       //arrow function

// // // // // // console.log(addThree(2,3,6))

// // // // // //lets try other methods

// // // // // const addFour = (num1, num2, num3)=> num1 + num2  + num3 //its and implicit return
// // // // // // console.log(addFour(2,3,6))

// // // // // const addFive = (num1, num2) => {return num1 + num2}     // explicit return in which we have to give return value 

// // // // // // console.log(addFive(2,3))

// // // // // //IIFE means for immidiate invoked function execution

// // // // // (function chai (){
// // // // // //     // console.log("Db Connected")
// // // // // // })();                                                       //here semi colon is required to run another function

// // // // // // (function aurcode(name){
// // // // // //     // console.log(`Db Connected ${name}`)
// // // // // // })("Malav")


// // // // // // //IIFE is used to remove the pollution form the global scope
// // // // // // //semi colon is used to run IIFE


// // // // // // const Months  = 10

// // // // // // switch (Months) {
// // // // // //     case 1:
// // // // // //         // console.log("January")
// // // // // //         break;
// // // // // //     case 2:
// // // // // //         // console.log("February")
// // // // // //         break;
// // // // // //     case 3:
// // // // // //         // console.log("March")
// // // // // //         break;
// // // // // //     case 4:
// // // // // //         // console.log("April")
// // // // // //         break;
// // // // // //     case 5:
// // // // // //         // console.log("May")
// // // // // //         break;

// // // // // //     default:
// // // // // //         // console.log("Not Found")
// // // // // //         break;
// // // // // // }

// // // // // // //switch Case

// // // // // // // for loop 

// // // // // // for (let i = 1; i <= 50; i++) {
// // // // // //     console.log(`This is table of ${i}`)
// // // // // //     for (let j = 1; j <=10; j++) {
// // // // // //         // console.log(`The value of j is ${j} and the value of  i is ${i}`)
// // // // // //         console.log(i + ' * ' + j + ' = ' +  i*j)
// // // // // //     }
    
// // // // // // }



// // // // // //loops done only for loop is done others are left 

// // // // //while do while loops
// // // // let score  = 1
// // // // while (score <= 10) {
// // // //     console.log(`${score}`)
// // // //     score++
// // // // }

// // // //for each loop

// // // const languaage = ["java", "python", "js", "c++", "c"]

// // // languaage.forEach(  (item) => {
// // //     // console.log(item)
// // // }  )

// // // function printMe(item){
// // //     console.log(item)
// // // }

// // // // languaage.forEach(printMe)


// // // const myCoding = [
// // //     {
// // //         languageName:"Javascript",
// // //         languageFileName:"Js",
// // //     },
// // //     {
// // //         languageName:"Python",
// // //         languageFileName:"Py",
// // //     },
// // //     {
// // //         languageName:"c++",
// // //         languageFileName:"cpp",
// // //     }
// // // ]

// // // myCoding.forEach( (items) => {
// // //     console.log(items.languageName)                      //for each for objects
// // // }  )


// // const num = ["Malav", "Patel", "Aarav", "Patel"]

// // // for (const [key, value] of num) {
// // //     console.log(key, value)           //cant display key value using for of in array
// // // }

// // for(const number of num){
// //     // console.log(number)               //here it prints the array but it prints it number of items present in it but if the array is called it prints only the content
// // }

// // const greetings  = "Hello World !"
// // for(const greet of greetings){
// //     // console.log(greet)                          //for of 
// // }

// // const myObj = {
// //     js:"javascript",
// //     py:"python",
// //     cpp:"c++",
// //     swift:"Apple"
// // }

// // for (const key in myObj) {
// //     // console.log(`${key} is shortcut for ${myObj[key]}`)                          //for in loop
// // }

// // const programming = ["js", "py", "cpp", "py"]

// // for (const key in programming) {
// //     // console.log(programming[key])     //for in loop for array
// // }

// // const map = new Map()

// // map.set("js", "javascript")
// // map.set("py", "python")             //for of
// // map.set("cpp", "c++")

// // for(const [key, value] of map){
// //     // console.log(key, ":-", value)
// // }


// // const myCoding = [
// //     {
// //         languageName:"Javascript",
// //         languageFileName:"Js",
// //     },
// //     {
// //         languageName:"Python",
// //         languageFileName:"Py",
// //     },
// //     {
// //         languageName:"c++",
// //         languageFileName:"cpp",
// //     }
// // ]

// // myCoding.forEach( (items) => {
// //     console.log(items.languageFileName)                      //for each for objects
// // } )

// //map filter 

// // const myNum = [199]

// // const newNum = myNum
// // .map( (num) => num / 500 )             //map filters
// // .map( (num) => num * 100 )

// // if (newNum >= 95) {
// //     console.log(`You got ${newNum} % First Class With Distinction`)
// // }else if (newNum >= 85) {
// //     console.log(`You got ${newNum} % First Class`)
// // }else if (newNum >= 75) {
// //     console.log(`You got ${newNum} % Second Class`)
// // }else if (newNum >= 65) {
// //     console.log(`You got ${newNum} % Good Result Needs Practise`)
// // }else if (newNum >= 55) {
// //     console.log(`You got ${newNum} % Average Result Needs Improvement`)
// // }else if (newNum >= 45) {
// //     console.log(`You got ${newNum} % You Failed The Exams`)
// // }else{
// //     console.log("Needs Improvement !! no need to tell marks ")
// // }

// //filters

// // const mNum = [10, 20, 30, 400, 500, 501, 150, 350]

// // const newNum  = []
                                                              
// // mNum.forEach( (num) => {    //filters
// //     if (num >= 100) {
// //         newNum.push(num)
// //     }
// //     console.log(num)
// // })

// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( (acc, currval) =>{
//     // console.log(`acc: ${acc} and currval: ${currval}`)              //by defaukt it starts from 0
//     return acc + currval                                                           //reduce function
// } ,10)

// // console.log(myTotal)

// const shoppingCart = [
//     {
//         itemName:"Js course",
//         price:2999
//     },
//     {
//         itemName:"Py Course",
//         price:999
//     },
//     {
//         itemName:"mobile Dev Course",
//         price:5999
//     },
//     {
//         itemName:"Data Scientist",
//         price:12999
//     }
// ]

// const total  = shoppingCart.reduce( (acc, item) => acc + item.price ,0 )
// // console.log(`Total Price to Pay is ${total}`)

// const books = [
//     {
//         title: 'Book One',
//         genre: 'Fiction',
//         publish: 1999,
//         edition: 2001
//     },

//     {
//         title: 'Book Two',
//         genre: 'History',
//         publish: 1996,
//         edition: 2000
//     },

//     {
//         title: 'Book Three',
//         genre: 'Non-Fiction',
//         publish: 2012,
//         edition: 2019
//     },


//     {
//         title: 'Book Four',
//         genre: 'Science',
//         publish: 2000,
//         edition: 2012
//     },

//     {
//         title: 'Book Five',
//         genre: 'History',
//         publish: 2011,
//         edition: 2016
//     },

//     {
//         title: 'Book Six',
//         genre: 'Fiction',
//         publish: 1911,
//         edition: 2001
//     }
// ]

// let newBks = books.filter( (bks) => bks.genre === "Fiction" )
// newBks = books.filter( (bks) => {                                           //filters using functions and arrow functions
//     return bks.publish = 2011 && bks.genre === "History"
// } )
// console.log(newBks)


//async await practice 

//create a promise

const promiseOne = new Promise(function name(resolve,reject) {  //create a function in a promise and give resolve and reject in the parameter
    //do async task here
    setTimeout(function(){
        // console.log('Malav Patel');
        resolve() //resolve mandatory to consume the promise
    },1000)
})
                                                            //here to consume a promise we need to write extra code
promiseOne.then(function () {
    // console.log('Promise Consumed'); 
})

new Promise(function(resolve,reject){
    setTimeout(function () {
        // console.log('Task-2')
        resolve()
    },1000)                                        //here we consumed the promise directly after the creation of the promise
}).then(function(){
    // console.log('Promise 2 consumed ! :-)')
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function () {
        resolve({username:'Malav Patel', email:'malav@gmail.com'})
    },1000)
}).then(function(user){
    // console.log(user)
    // console.log('Promise three Consumed !')
})

const promFour = new Promise(function(resolve, reject){
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve(
                {
                    username:"Malav Patel",
                    password:'123456789'
                }
            )
        }else{
            reject('ERROR : Something went wrong !')
        }
    })
})

const username = promFour.then( (user) => {
    // console.log(user)
    return user.username
} )

//then
.then((username) => {
    console.log(username)
}).catch( (error) => {                  //try catch block is used to catch the error and check the error is resolved or not 
    console.log(error)
}).finally( () => { //the last option
    console.log('The promise is either resolved or rejected !')
})
