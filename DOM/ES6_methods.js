//filter

const myArray = [1,2,3,4,5,6,7,8]
// const myFilterArray = myArray.filter((item) => {
//     return item > 4
// })
// console.log(myFilterArray);

//filtering using forEach

const filterArray = myArray.forEach((data) => {
    if(data>5){
        // return data
        console.log(data);
    }
})
// console.log(filterArray);

//Map method

const arrayNumbs = [2,4,6,8,10]
const changeArray = arrayNumbs.map((value) => {
    return value + 2;
})
console.log(changeArray);

//chaining

const chainingArray = [3,4,6,7,8,9,10]
const updateArray = chainingArray
                            .map((data) => data + 10)
                            .map((data) => data * 10)
                            .filter((data) => data>150)
                            .map((data) => data > 150)
console.log(updateArray);                

//reduce method

const arrOfNum = [1,2,3,4,5]
const reduceArray = arrOfNum.reduce(function(accumulator,currentValue) {
    console.log(`accumulator ${accumulator} and ${currentValue}`);
    return accumulator + currentValue;
},0)
console.log(`Our final value = ${reduceArray}`);

//reduce method using arrow function

const modifiedArray = arrOfNum.reduce((acc,currVal) => acc + currVal,0)
console.log(`our reduced array = ${modifiedArray}`);

const books = [
    {title : "Book One", genre : 'Fiction', publish : 1981, edition : 2004},
    {title : "Book Two", genre : 'Non-Fiction', publish : 1992, edition : 2008},
    {title : "Book Three", genre : 'History', publish : 1999, edition : 2007},
    {title : "Book Four", genre : 'Non-Fiction', publish : 1989, edition : 2010},
    {title : "Book Five", genre : 'Science', publish : 2009, edition : 2014},
    {title : "Book Six", genre : 'Fiction', publish : 1987, edition : 2010},
    {title : "Book Seven", genre : 'History', publish : 1986, edition : 1996},
    {title : "Book Eight", genre : 'Science', publish : 2011, edition : 2016},
    {title : "Book Nine", genre : 'Non-Fiction', publish : 1981, edition : 1989},
];
const findGenre = books.filter((fg) => fg.genre === 'Non-Fiction')
console.log(findGenre);

const filterData = books.filter((fd) => {return fd.genre === 'History' && fd.edition >= 2006})
console.log(filterData);

//set method
//How to create a set ?
const mySet = new Set();

//Add elements to the set
mySet.add(4);
mySet.add(6);
mySet.add(6);
mySet.add(7);
mySet.add(6);
mySet.add(8);
mySet.add(7);
mySet.add(9);
mySet.add(10);

console.log(mySet);

//How to get length or size of set

const mySetSize = mySet.size;
console.log(mySetSize);

//Delete an element from the set.
const deleteElement = mySet.delete(7);
console.log(deleteElement);
console.log(mySet);

//check the element is existing or not
console.log(mySet.has(8));

