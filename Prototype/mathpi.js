const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor)
// console.log(typeof Math.PI) //cannnot overwrite the value of PI

const chai = {
    name:"Ginger Chai",
    price:250,
    isAvailalble: true,

    orderChai: function(){
        console.log('chai nahi bani!')
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name")) //we can make changes in our own objects

Object.defineProperty(chai, 'name', {  //change the  property if of the object
    // writable: false,
    enumerable: true
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

for (const [key, value] of Object.entries(chai)) {
    if (typeof value != 'function') {
        console.log(`${key}`, `${value}`)
    }
}
