const userEmail = [] //true value 

if (userEmail) {
    console.log("Got User Email")
}else{
    console.log("Email Not Found")
}

//falsy value
// false, 0 is a false value, -0 is a false value, BigInt is a falsy value, " " empty string is a falsy value, null, NaN, undefined

//all other are true value except them

//eg false is falsy but "false" is true function is true , [] truthy

if (userEmail.length === 0) {
    console.log("Array is Empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("is empty");
}