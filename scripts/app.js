//forEach Method - this method executes a function for each provided element in the array

let array = [1, 2, 3, 4, 5];

// array.forEach(element => {
//     console.log(element);
// });

//filter Method - this method creates a new array with each element that passes the test function

const filterArray = array.filter(element => element % 2 == 0);

// console.log(filterArray);

//map method - Calls a defined callback function on each element of an array, and returns an array that contains the results.

const mapArray = array.map(element => element * 2);

// console.log(mapArray);

//findIndex method - Returns the index of the first element that meets the condition of the callback function

const index = array.findIndex(element => element == 5);

// console.log(index);

//every method - this methods tests every element in our array and if all pass our function condition it returns true

const everyArray =  array.every(element => element > 2);

// console.log(everyArray);

//Chaining Examples

const newArr = array.filter(element => element % 2 == 0).map(element => element * 2);

// console.log(newArr);

//sort array by last name
//I need to iterate thru nameArray. Need sort, reverse, split, join

let nameArray = ["Isaiah Ferguson", "Kenneth Fujimura", "Maddie Gowan", "Jessie Lamzon", "Jacob Dekok"];

const mapNameArray = nameArray.map(name => name.split(" ").reverse().join(" "));

// [...] is the spread operator 

const sortedArray = [...mapNameArray].sort();

// console.log(sortedArray);

//Spread Opertator examples

//ex 1 Copy

const copyArray = [...nameArray];

console.log(copyArray);

//ex 2 Concatenate

const concatenate = [...array, ...nameArray];

console.log(concatenate);

// 2 Adding elements

const addedArray =[...array, 6, 7, 8, 9,];

console.log(addedArray);