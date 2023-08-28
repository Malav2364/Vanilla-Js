// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log(`5 is the best number`)
    }
    // console.log(element)

}

//first variable than condition check then increment op
// console.log(element) //not accessible 

for (let i = 0; i <= 75; i++) { 
    // console.log(`Outer Loop: ${i}`) //it runs 1 time
    for (let j = 1; j <= 10; j++) { //it runs full wit hcondition
        // console.log(`Outer Loop: ${j} and inner loop ${i}`)
        // console.log(i + '*' + j + ' = ' + i*j)//table print loop
    }    
}

let myArray = ["Ms", "Virat", "Rohit", "Rahul"]
console.log(myArray.length)                           //for loop for arrays and increment operator is mandatory
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element)
}

//break and continue 

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`Detected 5`)
//         break                            //used to stop the loop at a specific point
//     }
//     console.log(`Value of i is ${i}`)    
// }
for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`)
        continue                            //will check the break but the loop will complete it 
    }
    console.log(`Value of i is ${i}`)    
}