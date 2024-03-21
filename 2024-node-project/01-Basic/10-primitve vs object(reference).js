'use strict';
//Primitive vs.Object(reference) types--->

let age = 30;
let oldAge = age; //old memory -same address
age = 31; //immutable in primitives- new address-new value
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27; //changed the age of jonas also
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
