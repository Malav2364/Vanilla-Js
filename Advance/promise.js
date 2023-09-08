const promiseOne = new Promise(function(resolve, reject){ //two parts of promise resolve and reject
    //do an async task
    //here
    setTimeout(function(){
        console.log('Async task is Complete')
        resolve()
    },1000)
})

promiseOne.then(function(){ //at last only
   console.log('Promise Consumed')
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2')
        resolve()                                    //completed in one part of the code 
    },1000)
}).then(function(){
    console.log('promise 2 Consumed')
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: 'Malav', email: 'malav@.com'})
    },1000)
}).then(function(user){
    console.log(user)        //data consumption
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username:'Malav', password:'123'})
        }else{
            reject('ERROR: something went wrong')
        }
    },1000)
})

const username = promiseFour.then((user) => {
    console.log(user)
    return user.password
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(() => {
    console.log('The Promise is either resolved or rejected !'); //final message after resolved or other
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username:'Javascript', password:'123'})
        }else{
            reject('ERROR: Js Went Wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {               //try catch error handling
        console.log(error);
    }
}
consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://api.github.com/users/malav2364')
//         const data = await response.json()
//         // console.log(data.name);
//         // console.log(response);          //api response 
//     } catch (error) {
//         // console.log( 'E:' , error);
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/malav2364')
.then((response) => {
    return response.json()
})                                               //no need to get async or await
.then((data) => console.log(data))
.catch((error) => console.log(error))

