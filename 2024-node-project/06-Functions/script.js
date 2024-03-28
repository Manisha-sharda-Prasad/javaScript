'use strict';
//-------------------------------------------------------------
//closer look at :Functions---->

const myBookings = [];

//01.also-createBooking = function(flightNum, numPassengers = 1, price = 199)--
const createBooking = function (flightNum, numPassengers, price) {
  // passing properties(key)
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(myBookings);
  myBookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', undefined, 199);
createBooking('LH123', 2, 199);
//---------------
//02.e.g.-2 functions (checkIn,newPassport) manipulationg same object {jonas}---
const flight = 'LH242';
const jonas = {
  name: 'Jonas Schmedman',
  passport: 611745,
};
//02.1--manipulating (-jonas/passenger) and (-flight/flightNumber)--
const checkIn = function (flightNumber, passenger) {
  //flightNumber = 'LH444';
  flightNumber === flight;
  passenger.name = 'Mr' + passenger.name;
  //passenger === jonas;

  if (passenger.passport === 611745) {
    console.log('checked In');
  } else {
    console.log('wrong passport');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

//02.2--bad practice-manipulating again (-jonas/person)--
// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000);
// };

// newPassport(jonas);
checkIn(flight, jonas);

//--------------------------------------------------------------------
//Function accepting callback Functions--->
//callback fn advantage -splitup coad into reusable,interconnected parts-

//01. Lower-level functions--
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' '); //rest and destructuring
  return [first.toUpperCase(), ...others].join(' ');
};
//01.1.Higher-order function--
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`); // transformer ${argument}
  console.log(`Transformed string: ${fn(str)}`); // ${function(upperFirstWord)}
  console.log(`Transformed by: ${fn.name}`); //function name(upperFirstWord)/(oneWord)
};

//01.2.passing fn. as arguments in higher fn---
//calling tranformer fn. and in that passing callback fn.---
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

//--------------------------------------------------------------------
//Functions returninmg functions-->

//01. returning fn with regular fn.---
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

//functions in a greeterhey fn--(closure)-
const greeterHey = greet('Hey!');
greeterHey('Jonas');
greeterHey('Steve');
//also works--
greet('Hellooo')('Jonas');

//02. returning arrow fn with another arrow fn--
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hii')('Jonas');

console.dir(greeterHey);
//-------------------------------------------------------------------------
//The Call and Apply methods---->
//call()allows you to call fn with a given this value and arguments provided individually.

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    //push in bookings:[]--
    this.bookings.push(`flight: ${this.iataCode} ${flightNum} ${name} `);
  },
};

//01.calling method in object lufthansa---
lufthansa.book(239, 'Jonas'); //this -  lufthansa
lufthansa.book(445, 'Johny');
//bookAgain.call(eurowings, 23, 'Sarah'); //this -  eurowings
console.log(lufthansa);

//02.assigning book method of {lufthansa} to var, reusing same method(book)---
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
const bookAgain = lufthansa.book;

//book(23, 'Sarah'); //bad, won't work

//02.1.using call()-- //better--

//bookAgain(230, 'lekhraj'); //'this'  is undefined . hence error.
bookAgain.call(eurowings, 23, 'Sarah');
console.log(eurowings);

bookAgain.call(lufthansa, 53, 'Mary');
console.log(lufthansa);

//03 more examples------

const person = {
  fullName: function (city, country) {
    return this.firstName + ' ' + this.lastName + ', ' + city + ', ' + country;
  },
};

const person1 = {
  firstName: 'John',
  lastName: 'Doe',
};

const person2 = {
  firstName: 'Jane',
  lastName: 'Doe',
};

// Using call to invoke the function and pass the object as this, and individual arguments
console.log(person.fullName.call(person1, 'New York', 'USA'));
console.log(person.fullName.call(person2, 'London', 'UK'));

//----------------------------------------------------------------
//Apply Method()--->
//The apply method is similar to call, but it accepts arguments as an array.

const detail = {
  fullName: function (city, country) {
    return this.firstName + ' ' + this.lastName + ', ' + city + ', ' + country;
  },
};

const detail1 = {
  firstName: 'Arush',
  lastName: 'Gautam',
};

const detail2 = {
  firstName: 'Vageesh',
  lastName: 'Kumar',
};

// Using apply to invoke the fn and pass the object as this, and arguments as an array
console.log(detail.fullName.apply(detail1, ['New York', 'USA']));
console.log(detail.fullName.apply(detail2, ['London', 'UK']));

//-------------------------------------------------------------
//Bind method()--->
//bind creates a new fn with same body and scope as the original function, but with a predefined this value.

//01.not calling fn, return a new fn which is set to (eurowings)--
const bookEW = bookAgain.bind(eurowings);
const bookLH = bookAgain.bind(lufthansa);

bookEW(100, 'Steven'); //no need for this/call()/already set to
bookLH(30, 'Kelly');

//02.with Event Listeners--

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
//lufthansa.buyPlane();

//02.1 using Class buy(html) with Event handler---
//addeventli(-higher, as passing fn as arguments)
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//03.more example----
// const person1FullName = person.fullName.bind(person1);
// const person2FullName = person.fullName.bind(person2);

//---------------------------------------------------------
//Closure---->
//innerFn has access to outerVariable even after outerFn has completed execution,

function counter() {
  let count = 0;

  return function () {
    return ++count;
  };
}

const increment = counter(); //completed execution after this..

//still able to use outer fn (birthplace)--
console.log(increment()); // Output: 1
console.log(increment()); // Output: 2
console.log(increment()); // Output: 3

//------------------------------------------------
