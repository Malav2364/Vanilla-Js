// for of loop 

const arr = [1, 5, 3, 4, 5]

for (const num of arr) {
    // console.log(num)
}

const greetings = "Hello World !"
for (const greet of greetings) {
    // console.log(`Each Char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('US', "United States Of America")   //are iteratable 
map.set('FR', "France")

// console.log(map)

for (const [key, value] of map) {
    console.log(key, ':-' ,value)
}

const myObj = {
    game1: "NFS",
    game2: "Spiderman",   //not iteratable like maps 
    game3: "Minecraft"
}

for (const [key, value] of myObj) {
    console.log(key, value)
}