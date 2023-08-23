/*                          Numbers                                 */

// const score = 400
// const balance = new Number(100.123)

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));              //fixed number 

// const OtherNumber = 23.456

// console.log(OtherNumber.toPrecision(5));  //to focus on the value to get precise value like 13.45 if we set to 2 we get 13 like this 


// const hundreds = 100000
// console.log(hundreds.toLocaleString('en-IN')); //to convert the value in specific number system of a country

/*                          Maths                                 */



// console.log(Math.round(145.6));
// console.log(Math.ceil(4.6));
// console.log(Math.min(4, 5, 6, 7));
// console.log(Math.max(4, 5, 6, 7));
// console.log(Math.random()*10);

let Num = (Math.random()*1000000) + 1;

console.log(Num.toPrecision(6));

const min  = 1
const max = 6
// Dice numbers using math.floor and math.random
console.log(Math.floor(Math.random() * (max - min + 1)) + min) 