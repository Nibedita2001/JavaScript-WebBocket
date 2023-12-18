// console.log("one");
// console.log("two");
// setTimeout(() => {
//     console.log("hello");
// },4000);
// console.log("three");
// console.log("four");

// callback() :- a callback function passed as an argument to another function
// function sum(a,b) {
//     console.log(a + b);
// }
// function calculator(a, b, sumCallback) {
//     sumCallback(a,b);
// }
// // calculator(1,2,sum);
// calculator(1,2,(a,b) => {
//     console.log(a+ b);
// })

// const hello = () => {
//     console.log("hello");
// }
// setTimeout(hello,3000);

// Callback hell :- Nested callbacks stacked below one another forming a pyramid structure . (pyramid of doom)
// nested if-else
// let age = 19;
// if(age>=18) {
//     if(age>=60) {
//         setTimeout("senior");
//     }
//     else {
//         console.log("middle");
//     }
// }
// else {
//     console.log("child");
// }

//nested loops
// for(let i=0; i<5; i++) {
//     let str = "";
//     for(let j=0; j<5; j++)
//     {
//         str = str + j;
//     }
//     console.log(i, str);
// }


// Callback Hell :-
// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("data",dataId);
//         if(getNextData) {
//             getNextData();
//         }
//         getNextData;
//     },2000);
// }

//callback hell
// getData(1, () => {
//     console.log("getting data2...")
//     getData(2, () => {
//         console.log("getting data3...")
//         getData(3, () => {
//             console.log("getting data4...")
//             getData(4);
//         });
//     })
// });

//data1
//data2
//data3


//promises :- promise is for "eventual" completion of task. It is an objct in js. It is a solution to callback hell. syntax:- let promise = new Promise((resolve,reject) => {...})