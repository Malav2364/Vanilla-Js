const coding = ["java", "ruby", "python", "cpp", "js"]

// coding.forEach(function (item){
//     console.log(item)                       //for each loop
// })

// coding.forEach(  (item) => {
//     console.log(item)                       //for each using arrow function
// }  )

function printMe(item) {
    // console.log(item)
}

// coding.forEach(printMe)    //giving reference of the function

// coding.forEach(  (item, index, arr) => {
//     console.log(item, index, arr)
// } )

const myCoding = [
    {
        languageName:"Javascript",
        languageFileName:"Js",
    },
    {
        languageName:"Python",
        languageFileName:"Py",
    },
    {
        languageName:"c++",
        languageFileName:"cpp",
    }
]

myCoding.forEach(   (item) => {

    console.log(item.languageFileName)
}  )