// let myName = 'Malav             '
// let myLname = 'Patel             '

// console.log(myName.trim().length);

let myheros  = ["Thor", "Spiderman", "Iron Man"]
let heroPower = {
    thor:"Hammer",
    spiderman:"sling",

    getSpiderPower: function () {
        console.log(`Spidey Power is : ${this.spiderman}`)
    }
}

Object.prototype.malav = function () {
    console.log('Malav is op in the chat !')
}

// heroPower.malav()
myheros.malav() //the property goes to all
//called inheritance

const user= {
    name : "Malav",
    company :  "Googli"
}


const teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "Js Assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

// Teacher.__proto__ = user//old syntax
//modern syntax

// Object.setPrototypeOf(TeachingSupport, Teacher)

let anotheruserName = 'Malav Patel       '

String.prototype.trueLength = function () {
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True Length is : ${this.trim().length}`);
}

anotheruserName.trueLength()

"malav".trueLength()
"icetea".trueLength()