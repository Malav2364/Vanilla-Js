// Dates

let myDate = new Date()
console.log(myDate.toDateString());  //redable complete format
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());   //time and date 

// let myCreatedDate = new Date(2023, 0, 23) //the format is like YYYY-MM-DD
// let myCreatedDate = new Date(2023, 0, 23, 11, 59, 23)// for date and time also
let myCreatedDate = new Date("2023-01-14") //here month starts from the january from 1st month
console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Date.now()/1000000);
console.log(Math.round(Date.now()/1000000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
console.log(newDate.getFullYear());

// also use `` for it 

newDate.toLocaleString('default', {
    weekday: "long"
})
