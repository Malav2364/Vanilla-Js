const appUser = new Object () //singelton object

const mappUser = {} //non singleton
mappUser.id = "123abc"
mappUser.Name = "Op in the chat"
mappUser.isLoggedIn = false

// console.log(mappUser); // this is the real method to call an element from the object

const regularUser = {
    email: "abc@google.com",
    fullName:{
        userfullname:{
            firstname: "Malav",               //nested object
            lastname:"Patel"
        }
    }
}

// console.log(regularUser.fullName.userfullname.lastname);

const obj1 = {
    1:"a",
    2:"b",
}

const obj2 = {
    3:"c",
    4:"d"
}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2) //to combine two objects //the parenthisis used at starting is an empty object and the combined object is stored in that parenthisis
const obj3 = {...obj1, ...obj2} //spread operator used to combine two strings
// console.log(obj3);

const Users = [
    {
        id: "1",
        email:"abc@gogogle.com"
    },
    {
        id: "2",
        email:"def@gogogle.com"
    },
    {
        id: "3",
        email:"ghi@gogogle.com"
    },
    {
        id: "4",
        email:"jkl@gogogle.com"
    }
]

// console.log(Users[0].email);

console.log(mappUser);
console.log(Object.keys(mappUser)); //to get keys of the objects
console.log(Object.values(mappUser)); //to get values of the objects
console.log(Object.entries(mappUser)); //to get key value pairs  of the objects

console.log(mappUser.hasOwnProperty('isLogged'));// to check weather the property is there or not on the object