let a  = 300  //ye achi baat kahi aap ne
if (true) {
    let a = 10     //block scope
    const  b = 20    //scopes
    // console.log("INNER: "  ,  a)
}

//global scope



// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username = "Malav"

    function nTwo(){
        const website = "youtube"             //the function nested in another function can access the data from the outer function but the outer cannot access inner function
        console.log(username)
    }
    // console.log(username)

    // nTwo()
}

// one()

// if (true) {
//     const username = "Malav"
//     if (username === "Malav") {
//         const website = " youtube"                    //same as above situation
//         console.log(username + website);
//     }
//     // console.log(website)
//     // console.log(username);
// }


// ++++++++++++++++++++++ intresting  ++++++++++++++++++


function addone(num){
    return num + 1
}

addone(5)


// called hoisting


const addTwo = function (num1){
    return num1 + 2                             //so if we give value before declaration it will give an error 
}

console.log(addTwo(5))