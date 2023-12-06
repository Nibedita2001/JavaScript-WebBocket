/*
-->Object are super important for grouping the data and functionalities. so we can do a lot of things in object of js.
-->Object are constructed in key and value pair.
ex:- myCars = {                 //myCars :- name of the object
    BMW : "series 7",           //BMW, Audi :- key
    Audi : "Q7",                //series 7, Q7 :- value
}
*/

// const jsUser = {
//     name : "Nibedita",
//     email : "nibedita@gmail.com",
//     "full name" : "Nibedita Kerketta",
//     age : 22,
//     location : "Odisha",
//     isLoggedIn : "false",
//     lastLoggedInDays : ["monday", "wednesday", "friday"],
// }
// console.log(jsUser);
// console.log(jsUser.name);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// jsUser.email = "webbocket@gmail.com";
// console.log(jsUser.email);
// console.log(jsUser);
// Object.freeze(jsUser);

// jsUser.email = "gift@gmail.com";
// console.log(jsUser.email);
// console.log(jsUser);

// jsUser.greeting = function() {
//     console.log("Hello future Elon Musk");
// }
// jsUser.greetingTwo = function(){
//     console.log(`Hello jsUser, ${this.name}`);
// }
// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());

//another example
// const tinderUser = {}
//     tinderUser.id = "1234",
//     tinderUser.email = "Nibedita@gmail.com",
//     tinderUser.name = "Nibedita",
//     console.log(tinderUser);
//     console.log(tinderUser.id);
//     console.log(tinderUser.email);
//     console.log(tinderUser.name);

//another example
// const regularUser = {
//     email : "Nibedita@gmail.com",
//     fullName : {
//         userFullName : {
//             firstName : "Nibedita",
//             lastName : "Kerketta",
//         }
//     }
// }
// console.log(regularUser.fullName.userFullName.firstName);
// console.log(regularUser.email);

//add 2 objects
// const obj1 = {
//     1 : 'a',
//     2 : 'b',
// }
// const obj2 = {
//     3 : 'a',
//     4 : 'b',
// }
// const obj3 = {
//     5 : 'a',
//     6 : 'b',
// }
// const obj4 = {obj1,obj2,obj3}
// console.log(obj4);

// const obj5 = {...obj1,...obj2,...obj3}
// console.log(obj5);

//object destructuring
const course = {
    courseName : "Last minute placement",
    price : 9999,
    courseInstructor : "Rajeev",
}
const{courseInstructor : teacher} = course      //courseInstructor : teacher -> de-structure the object
console.log(teacher);

/*
json :- JavaScript Object Notation 
to help for storing data in our local disk and we can manipulate these data also in one place to another place.

API :- Application Programming Interface 
It is a mechanism that enables two software components to communicate with each other using a set of defination and protocols.
*/


