// Immediately invoked Function Expressions


(function chai(){                               //named IFFE because it has a name :-)
    console.log(`DB connected `)  
})();                                                     // here the semi colon is mandatory to stop this involed function

// ()() // here the first parenthisis is used for function and another is used for execution
// used to remove the pollution from the global scope declaration

( function aurcode (name) {
    console.log(`Db Connected ${name}`)
} )('Malav')

//semi-colon is mandatory if we are creating two IFFE