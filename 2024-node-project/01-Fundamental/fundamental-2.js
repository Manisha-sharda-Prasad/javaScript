
'use strict';
//-------------------------------------------------------------
// //Functions-->
//functions can be used multiple times..(variable in a function).

// function logger() {
//     console.log('My name is Mani');
// }

// invoking /Running /calling the function--

// logger();
// logger();

//---------
//  function fruitProcessor(apples, oranges){
//     console.log(apples, oranges);
//     const juice= `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice; 
//  }
//  storing the function result in a Variable (applejuice / appleOrangeJuice):-
//  assigning the values / arguments in a function parameters( , ):-

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice); // print the whole string 

// // re-using function again:-

// const appleOrangeJuice = fruitProcessor(2, 4); // reassigning diff values.
// console.log(appleOrangeJuice);

// --------------------------------------------------------------
// //Functions Declarations VS Expressions-->

// function calcAge1(birthYear){
//    return 2024 - birthYear;
// }
// // function Declaration-
// const age1 = calcAge1(1995);
// console.log(age1);

// function Expression- (assigning function into a Variable-|calcAge2|)- 
//  const calcAge2 = function (birthYear){
//      return 2024 - birthYear;
// }
// const age2 = calcAge2(1991);   
// console.log(age2, age1);

// -----------------------------------------------------------
// //Arrow Functions--> (above function used by using => arrow |return|, good for one parameter, less code-

// const calcAge3 = birthYear => 2024 - birthYear;
// const age3 = calcAge3(2000);
// console.log(age3, age2, age1);

// //good for more parameter, more code---

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2024 - birthYear;
//     const retirement = 65 - age;
//    return `${firstName} retires in ${retirement} years.`

// }
// //multiple arguments if have multiple parameters( ,  ,  , )--

// console.log(yearsUntilRetirement(1991, 'Lekhraj'));
// console.log(yearsUntilRetirement(1995, 'Manisha'));

//--------------------------------------------------------------
// //Functions calling other Functions-->

// function cutFruitPieces (fruit){
//     return fruit * 4;
// }

//also with arrow => function --
// const f = (fruit) => fruit * 4 ;

// calling cutFruitPieces function in fruitProcessor function--

// function fruitProcessor(apples, oranges){
//      const applePieces = cutFruitPieces(apples);
//      const orangePieces = cutFruitPieces(oranges);

//      const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of orange.`;
//         return juice; 
// }

// console.log(fruitProcessor(2, 3));     

//------------------------------------------------------------
// //Reviewing Function

// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// }
//same parameter name can be used in other functions--e.g(birthYear)-
// const yearsUntilRetirement = function(birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years.`);
//         return retirement; 
//     }
//     else {
//         console.log(`${firstName} has already retired.`);
//         return -1;
//     }

// }


// console.log(yearsUntilRetirement(1995, "Mani"));
// console.log(yearsUntilRetirement(1950, "Lekh"));

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

//------------------------------------------------------
// //Array Functions-->
//array and objects are e.g of Data structure,container with variables.
//literal syntax of array-
// const friends = ['Meera', 'Bedi', 'Jamaal', 'Riyaz'];
// console.log(friends);
// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);

// console.log(friends[friends.length-1]);
// console.log(friends[friends.length-2]);

// friends[3] ='Jay'
// console.log(friends)

// //array of years/values of any type/use can many-
// const y = new Array(1991, 1995, 2000, 2008, 2020);

// //store data of Jonas in Array-

// const firstName = 'Manisha';
// const manisha = [firstName, 'Prasad', 2024-1995, 'Student', friends];
// console.log(manisha);
// console.log(manisha.length);

// //Exercise-

// const calcAge = function(birthYear)
// { return 2024 - birthYear;
//   }

// const years = [1990, 1960, 2000, 2010, 2018];

// // using arrays in function var calcAge-

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[2]);
// const age4 = calcAge(years[years.length-1]); //(for last index -1,-2/ don't need to calculate, do it by length.)
// console.log(age1, age2, age3, age4);

// // using above code in new Array-//will give same above result-

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[years.length-1])];
// console.log[ages];

// //-------------------------------------------------------------
// //Basic Array Methods-->(for array operation e.g- push,unshift, pop,shift, indexOf,includes )
// //JS has built in functions we can directly apply on arrays and these are called "Methods".

// const friends = ['Meera', 'Bedi', 'Jamaal', 'Riyaz'];

//Add elements-
// const newLength = friends.push('Jay'); //add in last

// friends.unshift('John');  //add in first

// console.log(friends);
// console.log(newLength);

//Remove elements-
// friends.pop();   // remove last
// const popped = friends.pop(); // not always usefull to store in var.
// console.log(friends);

// friends.shift(); // remove first
// console.log(friends);


//Others-
// console.log(friends.indexOf('Bedi'));
// console.log(friends.indexOf('Miranda')); // if doesn't exist shows -1.

// console.log(friends.includes('Bedi')); // true/false
// console.log(friends.includes('Miranda'));

//methods with if/else-

// if (friends.includes('Jamaal')) {
//     console.log(" You have a friend called Jamaal.")
// }

//TEST---
//15% / 20% tip-

// function with ternary?: and logical&& Operator-
// const calcTip = function(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// function with arrow =>-
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;


//functions with Arrays-
// const bills = [125, 55, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips);

//total bill+tip-
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2],];
// console.log(bills, tips, totals);

//also-but not good practice/ use above code--

// const tip1 = calcTip(bills[0]);
// const tip2 = calcTip(bills[1]);
// const tip3 = calcTip(bills[2]);
// console.log(tip1, tip2, tip3);

//--------------------------------------------------------------------
