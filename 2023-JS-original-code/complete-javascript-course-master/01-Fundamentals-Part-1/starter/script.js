//const { constant } = require("lodash");
//

//const { multiply } = require("lodash");

// let js = "amazing";
console.log(49 * 6 + 76 - 8);

console.log("manu");
console.log("27");

let firstName = "manu";
let first = "mani";
let last = "icha";

console.log(firstName);
console.log(first);
console.log(last);

function playOnlyOnSaturday() {} //camelcase--------

// string--------
let studentName = "Manisha";
studentName = studentName + "----m kfjdnvbjknfj bnf---";
let studentAge = 0;
let studentDOB = new Date();
let StudentAddress = "40 Tangelo irvine 92618";
console.log(studentName);

//object---------
let student = {
  name: "Manisha Dinkar",
  age: 27,
  dob: new Date(),
  address: {
    line1: "40 Tangelo",
    city: "irvine",
    zip: 92618,
  },
};

console.log(student.address.city);

let object1 = {};
let o2 = null; //object
let o3;

let n = 9007199254740992;

console.log(typeof firstName);
console.log(typeof o2);
console.log(typeof o3);
console.log(typeof student);

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "manisha");

javaScriptIsFun = "YES!";
console.log(typeof javaScriptIsFun);

let age = 30;
age = 31;

const birthYear = 1991;
//========================================================
// math operators :-================
const now = 2037;
const ageMansiha = now - 1995;
const ageLekhraj = now - 1991;

console.log(ageMansiha, ageLekhraj);

console.log(ageLekhraj * 2, ageLekhraj / 10, 2 ** 3);
//=========================================================
// string operators :-===============
firstName = " Manisha";
const lastName = " Prasad ";
console.log(firstName + " " + lastName);
//=========================================================
// assignment operators :-===============

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; //
//==========================================================================
// comparion operators :-================================
let result = ageMansiha > ageLekhraj; // < ,> , <= , >=

console.log(result, typeof result); // false , boolean
console.log(ageMansiha >= 42); // true

const isFullAge = ageLekhraj >= 46;
console.log(now - 1991 > now - 1995); // true
//=====================================================================================
// operator Precedence :- (Math operators have higher prefrence than Assignmnet operators )

let d, e;
d = e = 20 - 15 - 5; // d = e = 0 , d = 0 ;
console.log(d, e); // 0

const averageAge = (ageMansiha + ageMansiha) / 2;
console.log(ageMansiha, ageLekhraj, averageAge);
console.log(averageAge); // 42

//coding test ;-=================
// name, height, weight

function calculateBmi(n, h, w) {
  const name = n;
  const height = h;
  const mass = w;
  const bmi = mass / height ** 2;

  console.log("\n==========================");
  console.log("name :", name);
  console.log("height :", height);
  console.log("mass :", mass);
  console.log("BMI :", bmi);
  console.log("==========================");

  return bmi;
}

let markBmi = calculateBmi("Mark", 1.69, 78);
let johnBmi = calculateBmi("John", 1.95, 92);
//let manishaBmi = calculateBmi("Manish Prasad", 1.69, 78);
//let LekhrajBmi = calculateBmi("Lekhraj Dinkar", 1.95, 92);

/*

let markHeight = 1.69;
let markWeight = 78;
let markBmi = markWeight / markHeight ** 2;

console.log(markBmi); // ( 78 / 1.69 ** 2);

let johnHeight = 1.95;
let johnWeight = 92;
let johnBmi = johnWeight / johnHeight ** 2;

console.log(johnBmi); // ( 92 / 1.95 ** 2 );

*/
console.log(markBmi > johnBmi);
console.log(johnBmi > markBmi);

if (markBmi > johnBmi) {
  console.log(`Mark BMI (${markBmi}) is higher than John's  (${johnBmi}) `);
} else {
  console.log(`John BMI (${johnBmi}) is higher than Mark  (${markBmi}) `);
}
//==============================================================
// tempelate literal string :-=======================

const myName = "Guddi-2";
const myJob = "artist";
const birthYearIs = 1995;
const year = 2022;

const Guddi =
  "I'm " + myName + ", a " + (year - birthYearIs) + " years old " + myJob + "!";
console.log(Guddi);

// use `` (backticks), $ and {} .=============================
//====================================

const Guddinew = `I'm ${myName}, a ${year - birthYearIs} years old ${myJob}!`;
console.log(Guddinew);

console.log(`just a regular string...`);
console.log("string with \n multiple \n lines ");
console.log(`string
with
multiple
lines!! `); // use this with space.
//=========================================================
// taking decisions: if/ else statements :-=========
function driveAgeTest(name, age) {
  if (age >= 18) {
    console.log(`${name} can start driving license 🚘 `); // won't show , statement false.
  } else {
    const yearsLeft = 18 - age;
    console.log(` ${name} is too young. wait till  ${yearsLeft} years !!! `); // will show, true.
  }
}

driveAgeTest("manisha", 27);
driveAgeTest("Lekhraj", 32);
driveAgeTest("Arush", 5);

// ---- if /else ;---
const PintuAge = 15;

if (PintuAge >= 18) {
  console.log("Pintu can start driving license 🚘 "); // won't show , statement false.
} else {
  const yearsLeft = 18 - PintuAge;
  console.log(` Pintu is too young. wait till  ${yearsLeft} years !!! `); // will show, true.
}

const chintuAge = 25;
if (chintuAge >= 18) {
  console.log("chintu  can start driving car 🚗 "); // will show, true statement.
} else {
  const totalyearsLeft = 18 - chintuAge;
  console.log(`chintu is too young . wait till ${totalyearsLeft} years !! `); // won't show, false.
}
//======================================================
// CONVERSION & COERCION :-====================

console.log("20" - 10 - "5"); // 5 // - can work with strings.
console.log("20" + 10 + "5"); // 20105 // + doesn't work with strings.
console.log("20" + "10" - "5"); // 2005
console.log("2010" - "5"); // 2010 - 5 = 2005
console.log("2010" - "5" + 10); //2015
//=========================================================
// TRUTHY & FALSY  :-=======================

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Mayapur"));
console.log(Boolean({}));
console.log(Boolean(""));

if (null) {
  console.log("true");
} else {
  console.log("false");
}

let Money = 0;
if (Money) {
  console.log(`you have ${Money} ... go spend it`);
} else {
  console.log(`you have ${Money} ... go get Job`);
}

// "svfdv" ? console.log("true") : console.log("true");

//=====================================================
//Operator :: equality === vs ==
//======================================

if (myName === "Guddi") console.log(" yes Guddi found");
else console.log("Guddi not found");
// ----
let poojaDOY = 1995;
let manishaDOY = 1995;
let lekDOY = 1991;

manishaDOY === lekDOY; // false
manishaDOY === poojaDOY; // true
// ----
age = 18;
if (age < 18) console.log("you are not adult");
if (age == 18) console.log("you just become  adult"); //18 == '18' --> string to number --> 18 == 18
if (age === 18) console.log("you just become  adult"); //18 == '18'  --> false
if (age > 18) console.log("you are  adult");

//=====================================================
// Basic Boolean logic :-
//============================

/*
10 20 --> + , -, *, /

T F --> AND && , OR ||
(&& both , || only one , ! change)

NOT !
not F = T
not T = F

F F - F  F
F T - F  T
T F - F  T
T T - T  T

*/
console.log("-------------------JOB------------------------");
// job programs
function eligibleForJob(can_eng, can_math, can_grad, can_name) {
  // AND
  if (can_eng > 50 && can_math > 60 && can_grad === "Bachelor") {
    console.log("eligible", can_name);
  } else {
    console.log("NOT eligible", can_name);
  }
}

eligibleForJob(90, 89, "Bachelor", "manisha");
eligibleForJob(55, 40, "Bachelor", "Lekhraj");
eligibleForJob(0, 0, "LKG", "Arush");

console.log("--------------------TRAVEL-----------------------");
// visa = h1 or visa = h4
function canTravel(v, n) {
  // OR
  if (v === "h4" || v === "h1") console.log("valid visa !! can travel", n);
  else console.log("invalid visa", n);
}

canTravel("h4", "Manksha");
canTravel("h1", "lekhraj");
canTravel("f2", "Arush");

console.log("--------------------future2025-----------------------");
function future2025(gcStatus, ead) {
  if (gcStatus === "approved" && ead === "approved")
    console.log("start working in USA !!!");
  else console.log("start working in india !!!");
}

future2025("reject", "reject");
future2025("approved", "approved");

console.log("--------------------COD-----------------------");

function getBluelady(n, rank, level, sp, cp) {
  //part-1
  let progress;

  if (rank === "pro5" && level >= 50) {
    progress = true;
  } else {
    progress = false;
  }

  //part-2
  let coin;

  if (sp >= 10000 || cp >= 150) {
    coin = true;
  } else {
    coin = false;
  }

  if (coin || progress) {
    console.log(n, "can get blue lady !!!");
  } else {
    console.log(n, "can't get blue lady !!!");
  }
}
getBluelady("manisha", "elite-2", 30, 11000, 156);
getBluelady("Lekhraj", "pro5", 60, 9000, 140);

// ===============================================================
// SWITCh
// ===========================

console.log("--------------------Work Test-----------------------");
function workTest(day) {
  switch (day) {
    case "monday":
      console.log(" work from home.");
      break;

    case "tuesday":
      console.log(" go to office !");
      break;
    case "wednesday":
      console.log(" go to office !");
      break;
    case "thursday":
      console.log(" go to office !");
      break;
    case "friday":
      console.log(" work from home.");
      break;

    case "saturday":
      console.log(" enjoy your weekend.");
      break;
    case "sunday":
      console.log(" enjoy your weekend.");
      break;
    default:
      console.log("invalid day.");
  }
}

workTest("monday");
workTest("wednesday");
workTest("sunday");
workTest("Sunday");
//=================================================
/*
if(){}
else{}

switch(name){

    case "Manisha" : { 
        2+3;
        "kjdfvjbdv"+"fdbvjdfbv";
        console.log("jbjdbdbfuv")
        console.log("fvhdfhjbvdfj")
        break;
    }

    case "Lekhraj" : { break;}

    case "Sharda" : { break;}

    default: {}
}
*/

//======================================================
//28.CONDITIONAL (Ternary) operator=====================
// (? , :) (QUICK DECISION)

const newAge = 25;
newAge >= 18
  ? console.log(" I like to drink whisky .")
  : console.log("I like to drink water!");

const drink = newAge >= 20 ? "WINE " : "JUICE";
console.log(drink); //easy then if & else statement./ ITS AN 'EXPRESSION' , PRODUCES A VALUE.//

const drink2 = newAge === 15 ? "VODKA" : "MILK";
console.log(drink2);

console.log(`I like to drink ${newAge >= 18 ? "WINE " : "JUICE"}`); // OR CAN DO THIS. //

//======CODING CHALLENGE===
const bill1 = 275;
let tip1 = (15 / 100) * 275; // bill <=300 && bill >=50
console.log(
  `the bill was ${bill1}, 
the tip was ${tip1},
total value is ${tip1 + bill1}`
);

const bill2 = 40;
let tip2 = (15 / 100) * 40;
console.log(`the bill was ${bill2}, 
the tip was ${(15 / 100) * 40}, 
total value is ${(15 / 100) * 40 + 40}`);

const bill3 = 430;
let tip3 = (20 / 100) * 430;
console.log(`the bill was ${bill3}, 
the tip was ${(20 / 100) * 430}, 
total value is ${(20 / 100) * 430 + 430}`);
//===================================================

//
