// const coding = ["js", "ruby", "java", "python"]

// const values = coding.forEach( (item) => {
//     console.log(item);       //for each doesnt return values
//     return item
// } )

// console.log(values)

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num)  => num > 4)    //filter basics
// console.log(newNums)

// const newNums = myNums.filter( (num) => {
//     return num > 4                                                 // if scope opened then return is mandatory else no 
// })   

// console.log(newNums)

//to get the same with for each loop

const newNum = []

myNums.forEach( (items) =>{
    if (items > 4) {
    newNum.push(items)
    }
} )

// console.log(newNum)

const books = [
    {
        title: 'Book One',
        genre: 'Fiction',
        publish: 1999,
        edition: 2001
    },

    {
        title: 'Book Two',
        genre: 'History',
        publish: 1996,
        edition: 2000
    },

    {
        title: 'Book Three',
        genre: 'Non-Fiction',
        publish: 2012,
        edition: 2019
    },


    {
        title: 'Book Four',
        genre: 'Science',
        publish: 2000,
        edition: 2012
    },

    {
        title: 'Book Five',
        genre: 'History',
        publish: 2011,
        edition: 2016
    },

    {
        title: 'Book Six',
        genre: 'Fiction',
        publish: 1911,
        edition: 2001
    }
]

let userBooks = books.filter( (bks) => bks.genre === 'History' ) //filters

userBooks = books.filter( (bks) => {                                                   //filters need to practise more functions
    return bks.publish >= 1995  &&  bks.genre === "History"
} )

console.log(userBooks)
