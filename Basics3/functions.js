//functions
function myFunction(){
    console.log("M");
    console.log("A");
    console.log("L");
    console.log("A");
    console.log("V");
}
myFunction //Reference
myFunction() //execute function

// function addTwoNumbers(number1, number2) { //parameters
//     console.log(number1 + number2) //no console log
// }

function addTwoNumbers(number1, number2) { //parameters
    return number1 + number2 //another method to solve this 
    // let result = number1 + number2
    // return result
    // console.log("Malav")//cant execute anything after rteurn
}

// const result = addTwoNumbers(3, 5) //arguments     //if no number given than NaN op will be there

// console.log("Result: ", result);  //the value will be undefiened

function loginUserMsg (username = "Unknown User Podre") {    //we pass a default value so that it doesnt get undefiened anytime 
    if(!username){ //! is a not operator by default undefiened is a false value so ! is used to convert it to a true value
        console.log("Please Enter a Username");
        return
    }
    return `${username} Just Logged in`
}

// console.log(loginUserMsg("Malav"))
console.log(loginUserMsg())