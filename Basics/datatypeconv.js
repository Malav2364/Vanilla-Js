let score  =  'Malav'

// console.log(typeof score);
// console.log(typeof (score));

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// if we convert a '33' (number in a string) it will convert in number like 33
// if we convert '33abc' then it will convert in number but will return NaN(Not a Number)
/*
    "33" => 33
    "33abc" => NaN (not a number)
    true  => 1
    false => 0
*/

// let isLoggedIn = 'Malav'

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

//conversion in boolean 

/*
    1 => true
    0 => false
    "Malav" => true
*/

// let aNumber = 33

// let Snumber = String(aNumber)
// console.log(Snumber);
// console.log(typeof Snumber);


//******************* Operations *********************
// let value = 3
// let negValue = -value
// console.log(negValue)
// console.log(2+2)
// console.log(2-2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)

let str1 = 'hello'
let str2 = ' Malav'

let str3 = str1 + str2

// console.log(str3);
// console.log(1 + 2);
// console.log('1' + 2);
// console.log(1 + '2');
// console.log('1' + '2' + 3 + 2);
// console.log(1 + 2 + '3');
// console.log((1+2) * (4-2));

console.log(+true); //op is 1 
// console.log(true+); //op is error

console.log(+"");

// let num1, num2, num3

// num1 = num2 = num3 = 2+2             //bakwas bhangar bekar

// console.log(num3);

let gameCounter = 100

++gameCounter;

console.log(gameCounter);

let x = 3;
const y = x++;
console.log(y);