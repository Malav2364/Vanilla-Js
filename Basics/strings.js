const mName = 'Malav Patel'
const repo = 50

// console.log(mName + repo + 'Value');    //no use of this it is not appropriate

console.log(`My name is ${mName} and my repo counts are ${repo}`);   //Modern javascript logging syntax using backtigs string interpolation
let gamename = new String('Malav-Patel')

console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(0));              //find char from the index
console.log(gamename.indexOf('M'));              //find char from the index              //find char from the index

const newString = gamename.substring(0, 4)    //a substring 
// op will be Mala   0 to 4 characters
console.log(newString);

const anotherString = gamename.slice(8, 4) //slice
console.log(anotherString);

const newStr1 = "     Malav Patel      "
console.log(newStr1);                            //removes bekar space form the input
console.log(newStr1.trim());


const url = "https://google.com/Malav%20Patel"

url.replace('%20', '-')           //replace and change the words
console.log(url.replace('%20', '-'));
console.log(url.includes('Malav'));


console.log(gamename.split('-'));   //seprator using split