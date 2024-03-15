'use strict';
//-------------------------------------------------------------
// //Functions-->
//functions can be used multiple times..(variable in a function).

function logger() {
  console.log('My name is Mani');
}

// invoking /Running /calling the function--

logger();
logger();

//---------
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
//  storing the function result in a Variable (applejuice / appleOrangeJuice):-
//  assigning the values / arguments in a function parameters( , ):-

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice); // print the whole string

// re-using function again:-

const appleOrangeJuice = fruitProcessor(2, 4); // reassigning diff values.
console.log(appleOrangeJuice);

// --------------------------------------------------------------
// //Functions Declarations VS Expressions-->

function calcAge1(birthYear) {
  return 2024 - birthYear;
}
// function Declaration-
const age1 = calcAge1(1995);
console.log(age1);

// function Expression- (assigning function into a Variable-|calcAge2|)-
const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age2, age1);

// -----------------------------------------------------------
// //Arrow Functions--> (above function used by using => arrow |return|, good for one parameter, less code-

// const calcAge3 = birthYear => 2024 - birthYear;
// const age3 = calcAge3(2000);
// console.log(age3, age2, age1);

// // //good for more parameter, more code---

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2024 - birthYear;
//     const retirement = 65 - age;
//    return `${firstName} retires in ${retirement} years.`

// }
// // //multiple arguments if have multiple parameters( ,  ,  , )--

// console.log(yearsUntilRetirement(1991, 'Lekhraj'));
// console.log(yearsUntilRetirement(1995, 'Manisha'));

//--------------------------------------------------------------
// //Functions calling other Functions-->

function cutFruitPieces(fruit) {
  return fruit * 4;
}

//also with arrow => function --
const f = fruit => fruit * 4;

//calling cutFruitPieces function in fruitProcessor function--

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

//------------------------------------------------------------
// //Reviewing Function

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
//same parameter name can be used in other functions--e.g(birthYear)-

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired.`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1995, 'Mani'));
console.log(yearsUntilRetirement(1950, 'Lekh'));

// TEST---------
//  const calcAverage = (a, b, c,) => (a + b + c) / 3;

//Test 1---
// let scoreDolphins = calcAverage(44, 23, 71); //138 /3 = 46
// let scoreKoalas = calcAverage(65, 54, 49); // 168 /3 = 56
// console.log(scoreDolphins, scoreKoalas);

//Expression-
// const checkWinner = function (avgDolphins, avgKoalas){

//    if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win ! (${avgDolphins}) vs. (${avgKoalas})`);
//    } else if (avgKoalas >= 2 * avgDolphins){
//     console.log(`Koalas win ! (${avgKoalas}) vs. (${avgDolphins})`);
//    } else {
//    console.log('No team wins....');}
// }
//calling function-
//checkWinner(scoreDolphins, scoreKoalas);

//Test 2---
// let scoreDolphins = calcAverage(85, 54, 41);
// let scoreKoalas = calcAverage(23, 34, 27);

// console.log(scoreDolphins, scoreKoalas);

// checkWinner(scoreDolphins, scoreKoalas);
//---------------------------------------------------------------------
