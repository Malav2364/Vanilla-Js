const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map( (num) => {return num + 10} )  //by using map filters
const newNums = myNums
.map( (num) => num * 10)    //chaining process 
.map( (num) => num + 1 )    //means that to chain maps filters one after other
.filter( (num) => num >=40 )    //also can add filters in the chain 

console.log(newNums)