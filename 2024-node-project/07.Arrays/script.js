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
//---
