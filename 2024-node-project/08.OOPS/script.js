'use strict';
//Constructor functions and new Operator--->
//that initializes properties on object created with it.

//1)this is new empty object/2)setting (firstName, birthYear)on this keyword./3)ultimately set them to new{}obj.

const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};
//1. New {}obj created,
//2. fn is called, this = {},
//3. {} linked to prototype,
//4. fn automatically return {},

const jonas = new Person('Jonas', 1991);
const matilda = new Person('Matilda', 1995);
const jack = new Person('Jack', 2000);
console.log(jonas, matilda, jack);
//--------------------------------------------------
//Prototypes----->
//prototype is (property) of "constructor" fn, that is used to attach properties and methods to objects created with that constructor fn.

//01.){Person} method// will re-use--(.prototype reference back to 'Person' )--
//{inside object(calcAge)}--
Person.prototype.calcAge = function () {
  console.log(2030 - this.birthYear);
};
//calAge()method is not directly attached to objects/get from Person.prototype.calc()--
jonas.calcAge();
matilda.calcAge();
jack.calcAge();

//02).__proto__.---
//new{object} has a __proto__ property that points to its prototype.
//e.g-
const obj = {};
console.log(obj.__proto__); // Output: {}

//the new obj{jonas,mati..} is linked(__proto__property)to constructor fn prototype property--
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(matilda.__proto__);

//03.)isPropertyOf---
console.log(Person.prototype.isPrototypeOf(jonas)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //false

//04.)(.propertyOfLinkedObjects)prototype--
Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species, jack.species);

//trying to find called method on object{matilda} itself-/then look to person.prototype/{object.prototype}hasOwn exists in build in(will run)./
//05.)hasOwnProperty--
console.log(matilda.hasOwnProperty('firstName')); //true
console.log(Person.hasOwnProperty('firstName')); //false

//object.prototype (top of prototype chain)--
console.log(jonas.__proto__.__proto__);
console.dir(Person.prototype.constructor);

//06.)with array--
const arr = [3, 4, 5, 7, 9, 5, 3, 4];

console.log(arr.__proto__); // result-built in methods (slice,filter,find,mao,pop...)
console.log(arr.__proto__ === Array.prototype); //true

//06.1)adding method- (unique property to a fn.)--(bad practice)
//all array will inherit this method-- we can call in any array we want--
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique()); //[3, 4, 5, 7, 9] new Set

//-------------------------------------------------------------------------------
//ES6 Classes---->

//classes are not hoisted/ first-class citizens / special kind/executed in strict mode--

//class expression--
//const PersonCl = class {};

//01.)class declaration--
class PersonCl {
  // firstName=
  // birthYear=
  //__proto__ = PersonCl.prototype;

  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  //Instance methods will added to .prototype property-
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}! your birth year is ${this.birthYear}.`);
  }
  //Static method-
  static hey() {
    console.log('Hey there');
    console.log(this); //points to entire class
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
//check if both same-
console.log(jessica.__proto__ === PersonCl.prototype); //true
console.log(PersonCl.prototype);

//calling inside method-
jessica.calcAge();
jessica.greet();

PersonCl.hey();

//-------------------------------------------------------------
//Setters and Getter ----->
//set and get allows to define special methods, to set and get the values of properties in an object.
//encapsulate and control internal state of object and its properties.
//use when want to see calculation before./set needs atleast 1 parameter/

//01.)get set in object literal---
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 600],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest); //pop-600
console.log(account.latest); //push-600

//02.)get set with class ---
// class Fund {
//   _id;
//   _name;
//   _desc;

//   // s and g - 6
//   set Id(id) {
//     this._id = id;
//   }

//   // Id = 5;  --> call like this if "set" is present before method
//   // Id(5)  --> call like normal method
//   setDesc(desc) {
//     this._desc = desc;
//   }
// }

// let f1 = new Fund();
// Id = 100; //f1.setId(100);
// f1.setDesc(' my fund 1'); //f1.setDesc = 'my fund 1';
// console.log(f1);

//03.)e.g-Password Validator --

class Shake {
  constructor(milkInLiter, bananaCount) {
    this._milkInLiter = milkInLiter;
    this._bananaCount = bananaCount;
  }

  //setter/getter for milk-
  get milk() {
    return this._milkInLiter;
  }

  set milk(l) {
    this._milkInLiter = l;
  }

  //setter/getter for banana-
  get banana() {
    return this._bananaCount;
  }

  set banana(quantity) {
    if (quantity >= 1) {
      this._bananaCount = quantity;
    } else {
      console.log(`We cannot make Banana shake right now!!`);
    }
  }
}

const milkShake = new Shake(0, 0);
//setter call <<<
milkShake.banana = 2; // banana(2);

milkShake.milk = 1; // milk(1);
//getter call  <<<<
console.log(milkShake.milk, milkShake.banana); // milk() , banana()
console.log('milkShake : ', milkShake);

//-------------------------------------------------------------
//Object.create---->(least used)
//manually creating object/set prototype

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
};
//created empty steven, linked to PersonProto object --
const steven = Object.create(PersonProto);
console.log(steven);

//adding properties in steven--
steven.name = ' Steven Kelly';
steven.birthYear = 2000;
steven.calcAge(); //37
console.log(steven.__proto__ === PersonProto); //true

//----------------------------------------------------------------
//CODING CHALLENGE------------------------------------------------
//01.)challenge(1)----
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  //adding Method -for (increase speed by 10)--
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h.`);
  }
  //adding Method -for (decrease speed by 5)--
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h.`);
  }
  //02.)getter /setter
  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
//03.)----
//new{}--(passing arguments)--
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
const ford = new Car('Ford', 120);

//04.)-----
//calling methods--
bmw.accelerate();
bmw.accelerate();
bmw.brake();

mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();

console.log(ford.speedUS); // 75 /using method(get) as .property/
ford.speedUS = 50;
console.log(ford); //Car {make: 'Ford', speed: 80}

ford.accelerate();
ford.accelerate();
ford.brake();

//05.)challenge (2)----
//child class extends Parent class Car--

class EV extends Car {
  constructor(make, speed, charge) {
    super(make, speed); //calling constructor of parent class
    this.charge = charge;
  }
  //overiding (parent class) method--
  accelerate() {
    this.speed += 20;
    console.log(
      `${this.make} is going at ${this.speed} km/h. with a charge of ${this.charge}`
    );
  }

  chargeBattery(chargeTo) {
    this.chargeTo = chargeTo;
  }
}
const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
tesla.accelerate();
tesla.accelerate();
tesla.brake();
console.log(tesla);

//bad- not working--
// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };
//link the prototypes--
// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;

//   EV.prototype.accelerate = function () {
//     this.speed += 20;
//     this.charge--;
//     console.log(
//       `${this.make} is going at ${this.speed} km/h. with a charge of ${this.charge}`
//     );
//   };
// };

//---------------------------------------------------------------
//---------------------------------------------------------------

//Inheritance Between "Classes": Constructor Functions---->

//classes can inherit from other classes -known as 'inheritance'.
//(child class) inherit from ((Parent Class)).
//child inherit {methods, properties} defined in Parent Class.

//01.)Parent class---
class Animal {
  constructor(name) {
    this._name = name;
  }

  activity() {
    console.log(`${this._name} will fetch a ball.`);
  }
}
//02.)Child class---
//child class extends->Parent (Animal) /Super()--
//(breed) is also added in ((Parent)) from Extending--
class Dog extends Animal {
  constructor(name, breed) {
    // this() <<<<
    super(name); // call the constructor of Super class. /this.name is wrong
    this._breed = breed;
  }

  activity() {
    console.log(
      `${this._name} who is a ${this._breed}  will be swimming in pool.`
    );
  }
}
//03.another Child class--
class Cat extends Animal {
  constructor(name, color) {
    super(name); //to invoke the constructor of the Animal superclass.
    this.color = color;
  }
  injuries() {
    console.log(
      `${this._name} is a ${this.color} colord cat , she has two injuries one in leg and other in arm.`
    ); //this.color instead this._color
  }
}

const dog1 = new Dog('Ally', ' Pug');
const dog2 = new Dog('Mentice', 'Husky');
const cat1 = new Cat('Lucy', 'white'); //overides breed with injuries parameter./
dog1.activity();
dog2.activity();
cat1.injuries();

//--------------------------------------------------------------------
