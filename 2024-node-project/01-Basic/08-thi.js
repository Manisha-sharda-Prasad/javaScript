'use strict';

// ---this always points to the object that is calling the method--->

//01. this -(undefined) //this in  global object-(window object)--
// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

//02.this will print -(window)// arrow doesnt get its own "this"--
// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1991);

//03.jonas calling- its property calcAge method---

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); // print- jonas obj {year: 1991, calcAge: ƒ}
    console.log(2037 - this.year);
  },
};

jonas.calcAge(); // 46

//04. copying same jonas object--

// const matilda = jonas;
// console.log(matilda); // print jonas object with properties
// matilda.year = 1995;
// console.log(matilda);

//05. borrowed method from one object to other--
const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge(); // 20

//06.use in regular function f--
// const f = jonas.calcAge;
// f(); // undefined-- //this is undefined /regular function f not attached in  any -object/owner.

//-------
