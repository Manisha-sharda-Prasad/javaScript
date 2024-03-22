'use strict';
//---------------
//this------------------------------------------------------
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

const ronas = {
  year: 1991,
  calcAge: function () {
    console.log(this); // print- ronas obj {year: 1991, calcAge: ƒ}
    console.log(2037 - this.year);
  },
};

ronas.calcAge(); // 46

//04. copying same ronas object--

// const matilda = ronas;
// console.log(matilda); // print ronas object with properties
// matilda.year = 1995;
// console.log(matilda);

//05. borrowed method from one object to other--
const matilda = {
  year: 2017,
};

matilda.calcAge = ronas.calcAge;
matilda.calcAge(); // 20

//06.use in regular function f--
// const f = ronas.calcAge;
// f(); // undefined-- //this is undefined /regular function f not attached in  any -object/owner.

//-------------------------------------------------------------------------
//Regular funvtion vs. Arrow function--->

//01. object literal -global scope (this in arrow-has global scope)--
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);

    //Solution 01--regular function inside a method-preserving this in variable----

    //const self = this;
    //const isMillenial = function () {
    //console.log(this.year >= 1981 && this.year <= 1996); //error
    //console.log(self.year >= 1981 && self.year <= 1996);//true
    //};
    // isMillenial(); //undefined

    //Solution 02- using arrow in a method fot "this"----

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  //arrow-
  //greet: () => console.log(`Hey ${this.firstName}`), // Hey undefined/>arrow doesnt get its own this keyword.

  //method-
  greet: function () {
    console.log(`Hey ${this.firstName}`); //Hey jonas // regular methods get its own this.
  },
};

jonas.greet();
//console.log(this.firstName); //window / global scope
jonas.calcAge();

//----------------
//arguments keywords ---(not good practice)--

//01.Regular function with (arguments)- add more parameters than two (a,b)--
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 7, 11);

//02.Arrow function with (arguments)--doesn't work--
// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 6, 8);

//------------------------------------------------------------
//Primitive vs.Object(reference) types--->

let age = 30;
let oldAge = age; //old memory -same address
age = 31; //immutable in primitives- new address-new value
console.log(age);
console.log(oldAge);

const me = {
  name: 'monas',
  age: 30,
};

const friend = me;
friend.age = 27; //changed the age of monas also
console.log('Friend :', friend);
console.log('me :', me);

//----------
//01.primitive--

let lastName = 'Williams';
let oldLastName = lastName; // 2nd copy in stack with old memory

lastName = 'Davis';
console.log(lastName);
console.log(oldLastName);

//02.object(reference)type--
const manisha = {
  firstName: 'Manisha',
  lastName: 'Prasad',
  age: 27,
};

const marriedManisha = manisha;
marriedManisha.lastName = 'Dinkar';
console.log('Before marriage :', manisha);
console.log('After marriage :', marriedManisha); //changed property value stored in primitive const.

//03. copying objects merging 2 obj--

//marriedManisha2 = {};

const manisha2 = {
  firstName: 'Manisha',
  lastName: 'Prasad',
  age: 27,
};

//preserve object--
const marriedManisha2 = Object.assign({}, manisha2);

marriedManisha2.lastName = 'Dinkar';
console.log('Before marriage :', manisha2);
console.log('After marriage :', marriedManisha2);
//------------------------------------------------------------
