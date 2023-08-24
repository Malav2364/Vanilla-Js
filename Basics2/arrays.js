// Arrays


const myArr = [0,1,2,3,4,5]
// console.log(myArr); //indexing is done in  square bracket

// const mHeros = ["Malav", "Malav", "Malav"]
// console.log(mHeros);

// Arrays Methods

// myArr.push(6) //to add value in array
// myArr.push(7)
// myArr.pop()// to remove last element of an array 
// console.log(myArr);

// myArr.unshift(-1) //it adds the element to the 0th index of the array
// myArr.shift()// removes the first element of the array shifted earlier

// console.log(myArr.includes(15));// shows weather the array includes a particular element or not answers in boolean that is true or false 
// console.log(myArr.indexOf(5));// used to show the index of the particular element in the array if not than returns -1 

// const nArr = myArr.join()
// console.log(nArr);

// slice. splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3) //removes the elements given in the syntax from the array and prints them 
console.log("C", myArr); 
console.log(myn2);






