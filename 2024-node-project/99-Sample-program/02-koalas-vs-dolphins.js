const calcAverage = (a, b, c) => (a + b + c) / 3;

// Test 1---
let scoreDolphins = calcAverage(44, 23, 71); //138 /3 = 46
let scoreKoalas = calcAverage(65, 54, 49); // 168 /3 = 56
console.log(scoreDolphins, scoreKoalas);

// Expression-
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win ! (${avgDolphins}) vs. (${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win ! (${avgKoalas}) vs. (${avgDolphins})`);
  } else {
    console.log('No team wins....');
  }
};
// calling function-
checkWinner(scoreDolphins, scoreKoalas);

// Test 2---
// let scoreDolphins = calcAverage(85, 54, 41);
// let scoreKoalas = calcAverage(23, 34, 27);

// console.log(scoreDolphins, scoreKoalas);

// checkWinner(scoreDolphins, scoreKoalas);
