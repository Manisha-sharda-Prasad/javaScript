'use strict';
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// LECTURES
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
////////////////////////////////////////////////////////////////
//--------------------------------------------------------------

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
console.log(conArr.join('='));

//06. At---

const where = [23, 11, 64];
//06.1.getting last array element -->
console.log(where.at(0));
console.log(where[where.length - 2]);
console.log(where.slice(-1)[0]); //.slice(-1,0)--not getting result
console.log(where.at(-1)); //better

//06.2.with strings--
console.log('jonas'.at(0));
console.log('Manisha'.at(-1));
//-----------------------------------------------------------------------
