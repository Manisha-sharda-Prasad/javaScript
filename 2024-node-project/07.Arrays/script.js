'use strict';
//-----------------
//Simple Array methods(slice, splice, reverse, concat, join)---

let arr = ['a', 'b', 'c', 'd', 'e'];

//01. Slice--
//prints-selected(-)and rest also/doesn't mutate original--
console.log(arr.slice(2));
console.log(arr.slice(0, 3));
console.log(arr.slice(-1));
console.log(arr.slice(-2));
console.log(arr.slice(-3));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]); //same result -(arr.slice())

//02. Splice--
//delete-selected(-) prints rest/mutates original--
arr.splice(-1); // [e]-delete/ left-[a,b,c,d]
console.log(arr);
arr.splice(1, 2); //[b,c]-delete/ left-[a,d]
console.log(arr);

//03. Reverse--
//mutates--
let arr1 = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr2.reverse());
console.log(arr2); //printing mutated arr[].

//04.Concat--
//concat 2 arrays/doesn't mutate involved arr[]---

const conArr = arr1.concat(arr2);
console.log(conArr);
console.log([...arr1, ...arr2]); // same result-(conArr)

//05.Join---
//console.log(conArr.join('='));

const array = ['Hello', 'world', '!'];
const joinedString = array.join(' ');

console.log(joinedString); // Output: "Hello world !"

//06. At()---

const where = [23, 11, 64];
//06.1.getting last array element -->
console.log(where.at(0)); // where[0]
console.log(where[where.length - 2]);
console.log(where.slice(-1)[0]); //.slice(-1,0)--not getting result
console.log(where.at(-1)); //better

//06.2.with strings--
console.log('jonas'.at(0));
console.log('Manisha'.at(-1));

//-----------------------------------------------------------------------
//Looping Arrays: for Each---->(iteration)

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//.abs()-absolute /removing sign--
//01. using- for (of)---
console.log('------for-Of------');
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

//other way---
//02.-using- forEach()---
console.log('------for-Each------');

movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});
//iteration(assigning in -movement)---
//function(200)
//function(450)

//---------------------------------------------------------------------
// forEach with Maps and Sets--->

//01.Maps---
console.log('----MAPS----');
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  //(value, key, Map)=(currentElement, index , array).
  console.log(`${key} : ${value}`);
  //map.get(key);
});
//-----
//01.1.Creating a Map
let myMap = new Map();
myMap.set(1, 'Apple');
myMap.set(2, 'Banana');
myMap.set(3, 'Orange');

// Using forEach() with Map
myMap.forEach((value, key) => {
  console.log(`Key: ${key}, Value: ${value}`);
});

//-------------------------
//02.Sets---
console.log('----SETS----');
const currenciesNew = new Set([['USD', 'EUR', 'USD', 'GBP', 'EUR']]);

currenciesNew.forEach(function (value, map) {
  console.log(`${value} : ${map}`);
});
//------
//02.1. Creating a Set
let mySet = new Set();
mySet.add('Apple');
mySet.add('Banana');
mySet.add('Orange');

// Using forEach() with Set
mySet.forEach(value => {
  console.log(`Value: ${value}`);
});

//-------------------------------------------------------------------------
//The Map Method----->
//map() creates new array- includes results of calling provided fn.

//01. e.g
const currency = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

const currencyUSD = currency.map(function (curr) {
  return curr * eurToUsd;
});
console.log(currency);
console.log(currencyUSD);

//02.e.g
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(function (num) {
  return num * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

//03.e.g.

const numb = [12, 13, 14, 15, 16];

const newNumb = numb.map(function (x) {
  return x * 2;
});
console.log(newNumb);

//-------------------------------------------------------------------------
//The Filter Method----->
//filter()creates new array with all elements that pass the test implemented by the provided fn.

//01.e.g--
const n = [1, 2, 3, 4, 5];

const evenN = n.filter(function (num) {
  return num % 2 === 0;
});

console.log(evenN); // Output: [2, 4]

//e.g--
const products = [
  { name: 'Apple', price: 1 },
  { name: 'Banana', price: 2 },
  { name: 'Orange', price: 3 },
  { name: 'Grapes', price: 4 },
];

const expensiveProducts = products.filter(function (product) {
  return product.price > 2;
});

console.log(expensiveProducts); //{ 'Orange', price: 3 },{ 'Grapes', price: 4 } ]

//-------------------------------------------------------------------------
// The Reduce Method----->
// executes a reducer function on each element of the array, resulting in a single output value.
//accumulator parameter holds the accumulated value or result of previous iteration.
//01.e.g--
const nu = [1, 2, 3, 4, 5];

const sum = nu.reduce(function (acc, current) {
  return acc + current;
}, 0);

console.log(sum); // Output: 15

//02.e.g--
const words = ['Hello', ' ', 'World', '!'];

const concatStr = words.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, '');

console.log(concatStr); // Output: "Hello World!"

//-------------------------------------------------------------------------------
//Chainig methods---->methods/Operator
//we have an array of items with prices and we want to calculate the total price after applying a discount of 10% to items with a price greater than $50.
//01.----
const items = [
  { name: 'Laptop', price: 800 },
  { name: 'Phone', price: 600 },
  { name: 'Tablet', price: 40 },
  { name: 'Smartwatch', price: 120 },
];

const totalPrice = items
  .filter(item => item.price > 50) // Filter items with price greater than $50
  .map(item => item.price * 0.9) // Apply 10% discount
  .reduce((acc, curr) => acc + curr, 0); // Calculate total price

console.log(totalPrice); // Output: 1260

//02.---
// source - Array
// Source - Observable.subscribe =YouTubeChannel.subscribe /  RxJx
const Observable = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const result = Observable.flatMap(x => x) // [1,2,3,4,5,6] - join sub-arr
  .map(x => x * 10) // [10,20,...] - transform
  .filter(x => x > 20) // [30, 40, 50, 60]
  .reduce((acc, x) => acc + x, 0);
console.log('result : ', result); // 180

//03.-------
//Test Description:
// We have an array of student objects with their names and scores.
// We want to filter out students who scored less than 60, then map their scores to a letter grade (A, B, C, D, or F), and finally calculate the average score of the remaining students.
//Steps:
// Create an array of student objects with names and scores.
// Filter out students with scores less than 60.
// Map the filtered student scores to letter grades (A, B, C, D, or F) based on score ranges.
// Calculate the average score of the remaining students.

const students = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 45 },
  { name: 'Charlie', score: 70 },
  { name: 'David', score: 90 },
  { name: 'Eve', score: 55 },
];

const averageScore =
  students
    .filter(student => student.score >= 60) // Filter students with scores >= 60
    .map(student => {
      if (student.score >= 90) return 'A';
      if (student.score >= 80) return 'B';
      if (student.score >= 70) return 'C';
      if (student.score >= 60) return 'D';
      return 'F';
    }) // Map scores to letter grades
    .reduce((acc, curr) => acc + curr.charCodeAt(0), 0) / // Convert letter grades to ASCII codes and sum them
  students.filter(student => student.score >= 60).length; // Calculate average score

console.log(averageScore); // Output: 79.16666666666667 (approximately)

//---------------------------------------------------
//The Find Method--->
//return value of first element(result-not in array) in an array that satisfies testing fn. It searches the array from left to right and returns the first match found, or undefined if no match found.

//01.e.g---
const numeric = [1, 2, 3, 4, 5];

const found = numeric.find(num => num > 3);

console.log(found); // Output: 4

//02.e.g.--

//const evenOdd = [4, 3, 6, 9, 10];
const evenOdd = [5, 3, 6, 9, 10];

const findeven = evenOdd.find(even => even % 2 === 0);
console.log(findeven); //4/ 6/

//-----------------------------------------------
//The findIndex() method ---->
//returns index of the first element in array , If no such element is found, it returns -1.

const arrayNum = [10, 20, 30, 40, 50];
const index = arrayNum.findIndex(num => num > 30);
console.log(index); // Output: 3 index

//----------------------------------------------------
//Some() Method--->(works like or ||)
//tests whether at least 1 element in array passes the test, implemented by fn. It returns true if at least 1 satisfies the condition; otherwise,returns false.
//stops iteration once it finds 1st matching element.

//01.e.g---
const givenNum = [1, 2, 3, 4, 5];

const hasEven = givenNum.some(num => num % 2 === 0);
console.log(hasEven); // : true (since there is at least 1 even number)

//02.e.g---
//if the current element (num) is divisible by 3 with no remainder. If condition true for at least 1 element, hasOdd will be set to true; otherwise,false.
// const givenNum2 = [3, 2, 6, 4, 9];

// const hasOdd = givenNum2.some(num => num % 3 === 0);
// console.log(hasOdd);

//------------------------------------------------------
//Every() method ----> (works like &&)
//tests whether all elements in array pass the test implemented by fn. returns true if all elements satisfy the condition; otherwise, false.

//01.e.g---
const givenNum2 = [3, 2, 6, 4, 9];

const hasOdd = givenNum2.every(num => num % 3 === 0);
console.log(hasOdd); // false --not all passed test

//02.e.g---
const studentScores = [50, 60, 80, 65, 75, 90];

const checkPassed = studentScores.every(score => score >= 50);
console.log(checkPassed); //true- everyone passed

//----------------------------------------------------------
//flat() method----->
//creates a new array with all sub-array elements concatenated into it.

const depthArr = [1, 2, [3, 4, 5, 6, 7], [8, [9, 10, 11]]];

const concatArr = depthArr.flat();
console.log(concatArr); //[1,2,3.....11]

//-----------------------------------------------------------
//flatMap method---->
//maps each element using a mapping fn, then flattens result into new array, combines steps of mapping & flattening into a single method call.
//01.e.g flattening and mappping array of arrays---
const arrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const flattenedAndMapped = arrays.flatMap(array => array.map(num => num * 2));

console.log(flattenedAndMapped); // Output: [2, 4, 6, 8, 10, 12]

//02.e.g---

const group = [
  [1, 2],
  [3, 6],
  [7, 8],
  [9, 10],
];

const filterFlatMap = group.flatMap(array =>
  array.filter(numb => numb % 2 === 0)
);

console.log(filterFlatMap); //[2,6,8,10]

//---------------------------------------------------------
//Sort() Method---->
//sorts elements of array in place and returns the sorted array,sorts the array elements as strings.
//in ascending, we subtract b from a ; in descending, we subtract a from b.

//01.sorting ascending----
const unSorted = [5, 8, 6, 9, 9, 10];

unSorted.sort((a, b) => a - b); // cb - it will return a  number :
// 0 -> a is equal to b
// greater than 0 (+) -> a is bigger than b,
// less than 0 (-)  -> a is smaller than b
console.log(unSorted);

//01.1.sorting descending-

unSorted.sort((a, b) => b - a);
console.log(unSorted);

//02. sorting strings----
const names = ['Kevin', 'Arush', 'Divya', 'Lekh', 'Barbie'];

names.sort();
console.log(names);

//02.1.sorting string descending and (localeCompare(only strings))-
names.sort((a, b) => b.localeCompare(a));
console.log(names);

//03. sort array of Objects{}----

const furniture = [
  { name: 'chairs', price: 400 },
  { name: 'table', price: 200 },
  { name: 'sofa', price: 1000 },
];

// ==== Price =====
// 3.1. Sort by furniture Price DESC
furniture.sort((x, y) => y.price - x.price);
console.log('Sort by furniture Price DESC : ', furniture);

// 3.2. Sort by furniture Price ASC
furniture.sort((x, y) => x.price - y.price);
console.log('Sort by furniture Price ASC : ', furniture);

// ==== Name ====
// 3.3. Sort by furniture Name DESC
furniture.sort((x, y) => y.name.localeCompare(x.name));
console.log('Sort by furniture name DESC : ', furniture);

// 3.4 Sort by furniture Name ASC
furniture.sort((x, y) => x.name.localeCompare(y.name));
console.log('Sort by furniture name ASC : ', furniture);

//-----------------------------------------------------------
