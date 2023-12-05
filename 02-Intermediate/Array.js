/* 
1. Array is a object which can store similar type of data in a contigious memory location.
2. Array index starts from 0.
*/

// const myArr = [3,4,5,6,7,8,9]       //Array initialization and declaration
// console.log(myArr[0])               //accessing the element

// const myArr = ["gift", 1 , true]
// console.log(myArr[1])

// const myNewArray = new Array(1,2,3,4);
// console.log(myNewArray);

const myArray = [1,2,3,4,5,6,7];
// console.log(myArray);
// myArray.push(8);
// console.log(myArray);
// myArray.pop();
// console.log(myArray);

// myArray.unshift(0);         //unshift - Add a new element in 1st index.
// console.log(myArray);
// myArray.shift();            //shift - remove a element in 1st index.
// console.log(myArray);

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(7));        //if element not present then -1 and if element is present then index of that element shows.
// console.log(myArray);

// const demoArray = myArray.join();           //join - It is basically works on converting a array to a string.
// console.log(demoArray);
// console.log(typeof demoArray);

// console.log("A",myArray);
// const myArr1 = myArray.slice(1,3);              //index wise
// console.log(myArr1);
// console.log("B",myArray);
// const myArr2 = myArray.splice(1,3);
// console.log(myArr2);

const cars = ["maruti", "alto", "xuv", "wagnor"]
const superCars = ["BMW", "Audi", "G-Wagon", "defender"]
// cars.push(superCars);
// console.log(cars);
// cars.concat(superCars);
// console.log(cars);

// const allCars = cars.concat(superCars);
// console.log(allCars);

// const allNewCars = [...cars, ...superCars];         //... - spread operator
// console.log(allNewCars);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5[6,3[9,10]]]]]
const realAnotherArray = anotherArray.flat(Infinity);
console.log(realAnotherArray);

// console.log(Array.isArray("Nibedita"));     //isArray - is a method to check whether it is a array or not.
// console.log(Array.from("Nibedita"));        //from - is a method in which we create that is automatically creates an array.


