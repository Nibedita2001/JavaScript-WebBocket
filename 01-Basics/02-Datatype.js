/* 
1. To be able to operate on variable, it is important to know something about the types of data is called datatypes.
2. JavaScript has 7 types of datatypes.
    1.number
    2.bigint
    3.string
    4.boolean
    5.null
    6.undefined
    7.symbol

    --> typeof operator we used to find the which type of data we used
*/
let name = "Nibedita";
let age = 22;
let isPresent = true;
let x;
let a = BigInt(123456789012345678901234567890);
let number = null;
console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(isPresent));
console.log(typeof(x));
console.log(typeof(a));
console.log(typeof(number));

let ID = Symbol('123');
let anotherID = Symbol('123');
console.log(ID===anotherID);