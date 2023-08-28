// switch case 

// switch (key) {
//     case value:
        
//         break;          //basic switch statement

//     default:
//         break;
// }

const month = "jan"  //key used in switch

switch (month) {
    case "jan":           //can also compare string 
        console.log("January")
        break;
        
    case 2:
        console.log("February")
        break;
                                                                //break statement is used  to break the conrtol flow
                                                                //if break is not there than it will execute all the other code after matching the condition
    case 3:
        console.log("March")
        break;

    case 4:
        console.log("April")
        break;

    case 5:
        console.log("May")
        break;

    case 6:
        console.log("June")
        // break;

    case 7:
        console.log("July")
        break;

    case 8:
        console.log("August")
        break;

    case 9:
        console.log("September")
        break;

    case 10:
        console.log("October")
        break;

    case 11:
        console.log("November")
        break;

    case 12:
        console.log("December")
        break;

    default:
        console.log("Not a valid month")
        break;
}