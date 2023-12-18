// Example 1
// var ans = new Promise((Res, Rej) => {
//     if(true){           //if false then output will be rejected the condition
//         return Res();
//     }
//     else{
//         return Rej();
//     }
// })
// ans.then(function() {
//     console.log("Resolve the condition");
// })
// .catch(function() {
//     console.log("Rejected the condition");
// })


// Example 2
// 1. user will ask for a number between 0 to 9 and if the number is below 5 resolve of not reject
// 2.   1. reach the house
//      2. open the gate
//      3. prepare food and have that
//      4. scroll instagram reels

// ans 1:-
// var a = 6;
// var ans = new Promise((Res, Rej) => {
//     if(a<5){           //if false then output will be rejected the condition
//         return Res();
//     }
//     else {
//         return Rej();
//     }
// })
// ans.then(function() {
//     console.log("Resolve the condition");
// })
// .catch(function() {
//     console.log("Rejected the condition");
// })

// Ans 2:-
// var ans = new Promise(function(res,rej) {
//     return res("reach the house");
// })
// var p2 = ans.then(function(data) {
//     console.log(data);
//     return new Promise(function(res,rej) {
//         return res("open the gate")
//     })
// })
// var p3 = p2.then(function(data) {
//     console.log(data);
//     return new Promise(function(res,rej) {
//         return res("prepare food and have that")
//     })
// })
// var p4 = p3.then(function(data) {
//     console.log(data);
//     return new Promise(function(res,rej) {
//         return res("scroll instagram reels")
//     })
// })
// var p5 = p4.then(function(data) {
//     console.log(data);
// })

// Another Example
// const promiseEx3 = new Promise(function(res,rej) {
//     setTimeout(function() {
//         let error = true
//         if(!error){
//             res({username: "Nibedita", password: "1234"})
//         }
//         else {
//             rej("ERROR: something went wrong! Page not found")
//         }
//     },2000)
// })

// NewpromiseEx3()
// async function NewpromiseEx3(){
//     try {
//     const response = await promiseEx3
//     console.log(response);
// }catch(error) {
//     console.log(error);
// }
// }

// promiseEx3.then((user) =>{
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch(function(error) {
//     console.log(error);
// })


// Another Example
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     }catch(error){
//         console.log("E: ",error);
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users').then(response => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))