/*
Function :- A javaScript function is a block of code designed to perform a particular task.
- A javaScript function is executed when something invoked it(call it).
*/

// function sayName() {
//     console.log("G");
//     console.log("I");
//     console.log("F");
//     console.log("T");
// }
// sayName();      //() :- execution
// sayName;        //sayName :- reference

// function addTwoNumber(number1, number2){    //parameter
//     console.log(number1 + number2)
// }
// addTwoNumber();         //undefined
// addTwoNumber(3,4);      //argument
// addTwoNumber(3, "a");   //3a

// function addTwoNumber1(number1,number2){
//     let result = number1 + number2;
//     return result;
// }
// const result = addTwoNumber1(3,5);
// console.log("result = " ,result );

// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("gift"));

// function loginUserMessage(username){
//     if(username ===undefined)
//     {
//         console.log("Please enter your username")
//     }
//     else 
//     {
//         return `${username} just logged in`;
//     }
// }
// loginUserMessage();

// function loginUserMessage(username = "Nibedita"){
//     if(!username)       // ! converts true to false or false to true
//     {
//         console.log("Please enter your username")
//         return 
//     }
//     else 
//     {
//         return `${username} just logged in`;
//     }
// }
// console.log(loginUserMessage("Nita"));       //Nita overrides Nibedita
// console.log(loginUserMessage("Khusi"));      //Nita and Khusi both prints

// function calculatePrice(val1,val2,...num1){       //... :- rest operator
//     return val1;        //multiple values can't return once a time
// }
// console.log(calculatePrice(200,300,400,500));

// const user = {
//     username : "gift",
//     price : 400,
// }
// function handleObject(anyObject){
//     console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
// }
// handleObject(user);


