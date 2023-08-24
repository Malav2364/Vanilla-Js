// objects (Non-Singleton)

// objects literals


const mySym= Symbol("key1")

const  mName = {
    "aName" : "Malav",
    sName: "Patel",
    [mySym]: "myKey1",     //keys are called using square bracket
    age: 19,
    location: "Vadodara",
    isloggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Sunday"]
}
// Object.freeze(mName) // important to mark as freeze so that no one can change the value of the object

// console.log(mName.aName); //bad practise 
console.log(typeof(mName[mySym]));//good practice

mName.aName = "MALAV" //we can overwrite the values
console.log(mName["aName"]);

console.log(mName);

mName.greeting = function(){
    console.log("Howdy!");
}


mName.greeting2 = function(){
    console.log(`Howdy! ${this.aName}`); //this is called string interpolation usingbackticks
}

console.log(mName.greeting2());
