const  heros =  ["thor", "IronMan", "Spidey"]
const  dC =  ["superman", "batman", "flash"]

// heros.push(dC) //push means that the array pushed is been added  in the main array and the length of the pushed array is counted as 1 for the whole array !

// console.log(heros);
// console.log(heros[3][1]); // it prints the array element stated at that particular address

// const allHeros = heros.concat(dC)// this can also be used to concate both arrays (but we need to make them in a variable)

// console.log(allHeros);

const allNewHeros = [...heros, ...dC] //this is most commonly used to concat two arrays ... these dots are used to make them individual elements 
console.log(allNewHeros);

const anArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const aUsable = anArray.flat(Infinity) // used to flat the array
console.log(aUsable);

console.log(Array.isArray("Malav"))// to check weather it is an array or not 
console.log(Array.from("Malav"))// to create an array form the given object or anything
console.log(Array.from({name: "Malav", surname: "Patel"}))// interview


let score1 = 100
let score2 = 200
let score3 = 400

console.log(Array.of(score1, score2, score3)); //to convert set of elements into arrays