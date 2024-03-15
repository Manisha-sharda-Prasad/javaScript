//--------------------------------------------------------
// Logical Operators-->

// and && both should be true// or|| one should be true// not! invert some of the value//

const hasDriverLicence = true; //A
// // const hasDriverLicence = false; //A
// const hasGoodVision = true; //B
const hasGoodVision = false; //B

console.log(hasDriverLicence && hasGoodVision);
console.log(hasDriverLicence || hasGoodVision);
console.log(!hasDriverLicence);

if (hasDriverLicence && hasGoodVision) {
  console.log('Sarah can drive!!!');
} else {
  console.log('Sarah should not drive:(');
}

if (hasDriverLicence || hasGoodVision) {
  console.log('Sarah can drive!!!');
} else {
  console.log('Sarah should not drive:(');
}

const isTired = true;
console.log(hasDriverLicence || (hasGoodVision && isTired)); // two are true

if (hasDriverLicence && hasGoodVision && !isTired) {
  console.log('Sarah can drive!!!');
} else {
  console.log('Sarah should not drive:(');
}

//TEST 1----------
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log('Dolphins win the trophy');
} else if (scoreKoalas > scoreDolphins) {
  console.log('Koalas win the trophy');
} else if (scoreDolphins === scoreKoalas) {
  console.log('Both win the trophy');
}

// Test 2-extra----
// const scoreDolphins = (97 + 112 + 101)/ 3;
// const scoreKoalas = (109 + 95 + 106)/ 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100 ){
//     console.log("Dolphins win the trophy");
// }
// else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100){
//     console.log("Koalas win the trophy");
// }

// else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100){
//     console.log("Both win the trophy");
// }
// else{
//   console.log("No one wins the trophy!!")
// }

//------------------------------------------------

// The Condition (Ternary) Operator-->

// condition op also called Ternary as it has three parts(condition >=, if , else statements.)
// It helps write if/else with operators inh one line.
// operator produces avalue , so it's also a Expression.

// const age = 23;
// age >= 18
//   ? console.log('I like to drink wine.')
//   : console.log(' I like to drink water.');

//Right e.g-(stored in a variable{drink})--

const age = 23;
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

// Also using Ternary inside a `Template literal`--
// using logical operators as in a expression --

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

// TEST----
const bill = 275;

const tip = bill <= 300 && bill >= 50 ? bill * (15 / 100) : bill * (20 / 100);

console.log(
  `The bill was ${bill}, and the tip was ${tip}, and the total value ${
    tip + bill
  }.`
);

//----------------------------------------------------------
