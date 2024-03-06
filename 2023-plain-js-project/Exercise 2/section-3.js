"use strict";

/*
1. Function / Arrow function
2. Collection - Array
3. Object
4. Iterarion - for, while
*/

/*let sketch1 = {
  theme: "nature",
  size: "A4",
  price: 500,
  sketchName: "mountains",
};

let sketch2 = {
  theme: "abstract",
  size: "A3",
  price: 1000,
  sketchName: "metal",
};

let sketch3 = {
  theme: "potrait",
  size: "A2",
  price: 1500,
  sketchName: "liveSketch",
};

let sketch4 = {
  theme: "potrait",
  size: "A2",
  price: 1200,
  sketchName: "loveYoulekhraj",
};

//collection of object(sketch)
let collectionOfArt = [];

//collection of string
let collectionOfNames = ["lekhraj Dinkar", "Manisha", "Arush"];
console.log(collectionOfNames);

//collection of even number
let collectionOfEvenNumber = [2, 4, 6, 8, 10];
console.log(collectionOfEvenNumber);

// push, pop , shift, unshift //

console.log(collectionOfArt);
//!!! new sketch !!!!
collectionOfArt.push(sketch1);
console.log(collectionOfArt);

//!!! new sketch !!!!
collectionOfArt.push(sketch2);
console.log(collectionOfArt);

//!!! new sketch !!!!
collectionOfArt.push(sketch3);
console.log(collectionOfArt);

// delete 1 post
collectionOfArt.pop();
console.log(collectionOfArt);

// delete 2 post
collectionOfArt.shift();
collectionOfArt.shift();
console.log(collectionOfArt);

// again adding all sketch
collectionOfArt.push(sketch1);
collectionOfArt.push(sketch2);
collectionOfArt.push(sketch3);
collectionOfArt.push(sketch4);
console.log(collectionOfArt);

//====== ignore =====
collectionOfArt.forEach((x) => console.log(x.sketchName));
let newCollection = collectionOfArt.map((x) => x.sketchName);
//newCollection = ["mountain", "metal", "liveSketch"]
console.log(newCollection, collectionOfArt);

*/ /////////////////================================================
//FUNCTIONS:-====================================================
function logger() {
  console.log("My name is mani");
}
//caliing/ running/ invoking function;-
logger();
logger();

// input variable - appleCount, orangeCount
// output one variable - juice
function fruitProcessors(appleCount, orangeCount) {
  console.log(appleCount, orangeCount);
  const juice = ` made juice from ${appleCount} apples, and some ${orangeCount} oranges`;
  // console.log(juice)
  return juice;
}

// ========= prg-1
function add(firstNum, secondNum) {
  let sum = firstNum + secondNum;
  console.log(sum);
  return sum;
}

//const total = sum;
const total = add(200, 500); // return value of add function
//const total = 700;
console.log(total); //700
// ========

//const juiceForYou = "made juice from 5 apples and some 10 oranges";
console.log("made juice from 200 apples, and some 800 oranges"); // made juice from 200 apples, and some 800 oranges
console.log(fruitProcessors(50, 200)); // fruitProcessors(50, 200)

const juiceForYou = fruitProcessors(5, 10);
const juiceForYou2 = "ncvjdbnjfvbdjf";
const juiceForYou3 = 24444;
const juiceForYou4 = {};

console.log(juiceForYou);

//FUNCTION DECLARATIONS VS. EXPRESSIONS;-=====(=function is ====value,-string,boolean,number=)=======================
//=====1.function declaration====================================================

function calAge(birthYear) {
  return 2067 - birthYear; // create function...
}
const age1 = calAge(1995); // declare later or before will work .....
console.log(age1);
// 2.expression;- produces a value--

const calAge2 = function (birthYear) {
  return 2067 - birthYear; // create function cannont declare value before ....
};
const age2 = calAge2(1994);
console.log(age1, age2); //

//===========================================================
//ARROW FUNCTIONS:-=======================
/*
const calAge3 = (myBirthYear) => 2037 - myBirthYear; // (=> / return ) (myBirthYear) => 2037 - myBirthYear;
const age3 = calAge3(1991);
console.log(age3);
coloredLog(age3);

//=======
// normal function
function yourAgein2037(myBirthYear) {
  let youragein2037 = 2037 - myBirthYear;
  return youragein2037;
}
//arrow function :: shortcut
let yourAgein2037 = (myBirthYear) => 2037 - myBirthYear;
*/

//==========================================================
//Function caliing Other FUNCTION:==========

function cutfruit(fruit) {
  return fruit * 4;
}

function fruitProcessors(apples, oranges) {
  const applePieces = cutfruit(apples); // calling other function---
  const orangePieces = cutfruit(oranges);
  console.log(apples, oranges);
  const juice = ` made juice from ${applePieces} apples, and some ${orangePieces} oranges`;
  return juice;
}
console.log(fruitProcessors(2, 3));
//========================================================

// 1. code re-use / template of code

let age11 = 31;
let age22 = 27;
let age33 = 5;
let age44 = 5;
let age55 = 5;

//way-1
// write your code 3 times.
console.log("===========================");
console.log("%c" + age11, "color:green");
console.log("===========================");

console.log("===========================");
console.log("%c" + age22, "color:green");
console.log("===========================");

console.log("===========================");
console.log("%c" + age33, "color:green");
console.log("===========================");

console.log("===========================");
console.log("%c" + age33, "color:green");
console.log("===========================");

console.log("===========================");
console.log("%c" + age33, "color:green");
console.log("===========================");

//way-2
// write your code only one, and use it 3 times
//input - optional
//output - optional

// function template create = declation.
function coloredLog(value) {
  //let value;
  console.log("===========================");
  console.log("%c" + value, "color:green");
  console.log("===========================");
  add(34, 67);
  add(400, 788);
  //return undefined;
}
//==================================================================
// function call / invoke / use
const retVal = coloredLog(age11); //  value = age11
console.log(retVal);

coloredLog(age22); //  value = age22
coloredLog(age33);
coloredLog(age44);
coloredLog(age55);
coloredLog(23);
coloredLog("hello world"); //value = "hello world"

let sketch1 = {
  theme: "nature",
  size: "A4",
  price: 500,
  sketchName: "mountains",
};
coloredLog(sketch1.sketchName);

//

let v1 = 22; //number

let v2 = "jnsdcbvjbc"; // string

let v3 = {}; // object

let v4 = function printMyName() {
  let myNmae = "my name is Manisha";
  console.log(myNmae);
  return myNmae;
}; //=========================================================
//function declarion

let v5 = v4();

function nnnn() {} // nnnn , nnnn()
let v6 = () => {}; // no name, v6()

() => {
  console.log("my name is Manisha");
};


//coding challenge:-==========

// 1. Function declare
function gourmia2(food, btn) {
  let retVal;
  retVal = `you want to ${btn} ${food}`;
  return retVal;
}

function filterJug2(liquid) {
  const retVal = `filtering ${liquid}. here is filtered ${liquid}`;
  return retVal;
}


let arrowFn = (liquid) => `filtering ${liquid}. here is filtered ${liquid}`;
console.log(arrowFn("water"));

let temp = arrowFn("water");
console.log(temp);

function pan(ingredient1, ingredient2) {
  //return `receipe cooked from ${ingredient1} and ${ingredient2}. Enjoy !!!`;
  let foodItem;

  if (ingredient1 === "egg" && ingredient2 === "blackpepper")
    foodItem = "omlette";

  if (ingredient1 === "chicken" && ingredient2 === "redMasala");
  foodItem = "curry";
  //else foodItem = "tandooriChicken";

  if (ingredient1 === "batter") foodItem = "dosa";

  switch (foodItem) {
    case "omlette": {
      console.log("here is your omlette");
      break;
    }

    case "dosa": {
      console.log("here is your dosa");
      break;
    }
    case "curry": {
      console.log("here is your red curry");
      break;
    }
    default: {
      console.log("can't cook..");
    }
  }
}
console.log(gourmia2("chicken", "grill"));
console.log(gourmia2("crossaint", "toast"));
console.log(gourmia2("corn", "popcorn"));
console.log(gourmia2("vegetable", "broil"));


filterJug2("limewater");
filterJug2("coconutwater");
filterJug2("coke");
filterJug2("urine");

pan("oninon", "blackpepper");
pan("capsicum", "potato");
pan("carrot", "hummus");
pan("batter", "coconut");
pan("chicken", "redMasala");
pan("chicken", "curd");

//=========================================================
// ARRAY;===================0,1,2,3..
//shift,unshift,pop,push,indexof,includes.
let friends = new Array("pooja", "tanu", "vijay");
const yearsFrnd = new Array(1991, 1992, 1993, 1990); // new Array ()

//friends[0]

//let freinds2 = ["pooja", "tannu"];
friends.push("lekhraj"); // added lekhraj by .push

console.log(friends);
console.log(friends.length);
console.log(friends.length - 1);

friends[3] = "Manni"; // replaced "lekhraj"

friends.unshift("Arush"); // add new  0 first
friends.pop(); // take out last
console.log(friends);
friends.shift(); // removes first 0
console.log(friends);
console.log(friends.indexOf("pooja")); // shows location in array 0/1....
console.log(friends.indexOf("shweta")); // will show -1 coz not present / false..

console.log(friends.includes("pooja")); // shows true coz present
if (friends.includes("pooja")) {
  console.log("you have a friend......."); // will show  you have a.... coz true
}

console.log(friends[0]); // [] used
console.log(friends[1]);

console.log(yearsFrnd);
console.log(yearsFrnd[2]);

let a1 = [1, 2, 3];
a1 = ["fvdfg", "vdfvdf", "fsf"];
a1 = [true, false];
a1 = [1, 2, 66, "fgfdg", 444, true, {}];
console.log(a1);

//=====OBJECTS;-=====================================================
//============(grouping)====== [] -> {} DEFINE NEW OBJECT NAME,AGE....

const objManisha = {
  //A. properties
  name: "Mansiha",
  age: 27,
  gender: "female",
  friends: ["pooja", "tannu"],

  //B. function
  draw: function (item) {
    console.log("drawing ", item);
  },
  sing: function (song) {
    console.log("singing ", song);
  },
  cook: function (food) {
    console.log("cooking ", food);
  },
};

console.log(objManisha.age);
console.log(objManisha.friends[1]);
objManisha.sing("life is dynamite");

//========DOT VS. BRACKET NOTATION ;- ====================================
//==========================================
const Nisha = {
  //A. properties
  nameOne: "Nisha",
  nameTwo: "sharma",
  occupation: "Designer",
  company: "Zara",
  friendsNew: ["maya", "arya", "shiva"],
};
console.log(Nisha); // shows all ,whole object.

console.log(Nisha.occupation); // use . to get specific property in object nisha.age...
const namekey = "Name";
console.log(Nisha["One" + namekey]);
console.log(Nisha["Two" + namekey]); // [ " " + ] concatinate namekey....
//console.log (Nisha."Two" + namekey) // . won't work ,only works on final property name ,so need []so we can add later //

//const interested = prompt("what you want to know about Nisha?"); // use prompt- pop will appear , type any property in it .
//console.log(Nisha[interested]); // put[]notation , .notation wont work. , intrested is not a property.
Nisha["twitter"] = "@Nishahere"; // add new property by [""] notation in nisha object.
console.log(Nisha);

console.log(
  `${Nisha.nameOne} has ${Nisha.friendsNew.length} friends , and his bestfriend is ${Nisha.friendsNew[2]}`
);
//===============OBJECT METHODS;======================
const Anushri = {
  herName: "Anushri",
  education: "B.tech",
  birthY: 1998,
  siblings: ["maya", "aya", "raya"],
  drivingLicense: true,
  // calcuAge: function (birthY) {
  //  return 2030 - birthY; } // (when Function is attached in a Property is callled Method.)
  calcuAge: function () {
    console.log(this);
    return 2030 - this.birthY; // (birthy is property of anushri so we can directly use- this. birthy)
  },
};
console.log(Anushri.calcuAge()); // (whatever appears before the .nota like aunshri is calling function)

//===========================================================================
//=== LOOP;- ======(for loop keeps running if conditon is true)
for (let i = 1; i <= 5; i = i + 1) {
  //staments
}

let myfriends = new Array("pooja", "tanu");

for (let i = 0; i < myfriends.length; i = i + 1) {
  console.log("iteration", i, "---------");
  console.log(myfriends[i]);
}

for (let repition = 5; repition <= 10; repition++) {
   console.log(`we are trying for loop ${repition}`)
};

//=====LOOPING ARRAYS, BREAKING & CONTINUING:-===========
//== (in array starts with 0 , i is for loop.)
const sketchbook = [
  "nature",
   "A4",
   500,
   20,
  ["mountains","trees" , "clouds"],
   true
];

for (let i= 0; i< sketchbook.length; i++ ) {
  console.log(sketchbook[i], typeof sketchbook[i])
};
  
  