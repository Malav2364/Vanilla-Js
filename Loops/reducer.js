const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc : ${acc}, and currval: ${currval}`)
//     return acc + currval
// }, 3) //simple reduce using function

const myTotal = myNums.reduce( (acc, currval) => acc + currval , 0 )


// console.log(myTotal)

const shoppingCart = [
    {
        itemName:"Js course",
        price:2999
    },
    {
        itemName:"Py Course",
        price:999
    },
    {
        itemName:"mobile Dev Course",
        price:5999
    },
    {
        itemName:"Data Scientist",
        price:12999
    }
]

const total = shoppingCart.reduce( (acc, item) =>acc + item.price , 0 )
console.log(`Total Price To Pay : ${total}`)