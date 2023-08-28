 //if statement
const isUserlogin = true
const temprature  = 41

 if (temprature < 50) {   //if condition is true then codeis been executed or false than vice versa 
    // console.log("Less than 50")
 }else{
    // console.log("Temprature is greater than 50")
 }
 console.log("Executed") //it will execute compulsaryily
 //comparison operator
 // <, >, <=, >=, = means operator assignment, == checking the equivalence, != not equal operator, === strict equal

 const score = 200

 if (score > 100) {
    const power = "fly"
    // console.log(`User power: ${power}`)
 }
//  console.log(`User power: ${power}`) //here the if condition cannnot access the variable from global to functional scope but the functional can access global one ;-)
 
const balance = 1000

// if (balance > 500)  console.log("test"), // #bekar practise 
// console.log("test 2") //implicit scope

if (balance < 500) {
    // console.log("less than 500")
}else if(balance < 750){
    // console.log("less than 750")
}else if (balance < 900) {                        //nested if else
    // console.log("less than 900")
} else{
    // console.log("less than 1200")
}

 const userLoggedIn = true
 const debitCard = true
 const loggedInFromGoogle = false
 const loggedInFromEmail = true

 if (userLoggedIn && debitCard && 2 == 2) {          //&& and operator 
    console.log("Allowed To buy courses")
 }
                                                                                    //logical operator
 if (loggedInFromGoogle || loggedInFromEmail) {     // || this is OR operator 
    console.log("User LoggedIn")
 }

 //nullish coalescing operator (??)

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? null
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20  // here the first value is assigned to the var if there is nested colesence operator
console.log(val1);

//terniary operator
// condition ? true : false

const Price = 100

Price <= 80 ? console.log("Less than 80") : console.log("More than 80");