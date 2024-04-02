'use strict';
//Constructor functions and new Operator--->

//that initializes properties on object created with it.

const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};
//1. New {} created,
//2. fn is called, this = {},
//3. {} linked to prototype,
//4. fn automatically return {},

const jonas = new Person('Jonas', 1991);
const matilda = new Person('Matilda', 1995);
const jack = new Person('Jack', 2000);
console.log(jonas, matilda, jack);
//-------------------------------------------
//Prototypes(property)---->

//{Person} method// will re-use--
Person.prototype.calcAge = function () {
  console.log(2030 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();
jack.calcAge();

//(.propertyOfLinkedObjects)prototype--
console.log(Person.prototype.isPrototypeOf(jonas)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //false

console.log(jonas.__proto__);

//hasOwnProperty--
console.log(matilda.hasOwnProperty('firstName')); //true
console.log(Person.hasOwnProperty('firstName')); //false
