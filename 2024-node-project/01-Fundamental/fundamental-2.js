
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
//array should be in a orderd way so it can be accesed.
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

// Remove elements-
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
//Objects-->
//(Grouping of unstrucured data, order of poperties in object doesn't matter -like we do in Arrays).
//Key:Value / Var:Value-

//manisha properties-

// const manisha = {
//     firstName : 'Manisha',
//     lastName : 'Prasad',
//     age : 2024 - 1995,
//     address : '40' +' Tangelo'+ ' Irvine',
//     friends : ['Michael', 'Peter', 'Steven']
// };
// console.log(manisha);

// Dot vs. Bracket-------

// console.log(manisha.lastName);
// console.log(manisha['lastName']);  // can put any expression [].


// const nameKey = 'Name';
// console.log(manisha['first' + nameKey]); // won't work with ( .'first'+ nameKey).
// console.log(manisha['last' + nameKey]); //[inside will be evaluated first] for expression which produces a value.

// prompt-

// const interestedIn = prompt('What do you want to know about Manisha? Choose between firstName, lastName, age, address and friends');
// console.log(manisha[interestedIn]); // (manisha.interestedIn) is wrong as interestedIn doesn't exist in manisha properties.

// if/else-

// if (manisha[interestedIn]) {
//     console.log(manisha[interestedIn]);
// }else{
//     console.log('Wrong Request! Choose between firstName, lastName, age, address and friends')
// }

// manisha.martialStatus = 'Married';
// manisha['twitter'] = '@manishaIcha'
// console.log(manisha);

// coding challenge-
// Objects with Template Literal--

//  console.log(`${manisha.firstName} has ${manisha.friends.length} friends, and her bestfriend is called ${manisha.friends[1]}.`);

//------------------------------------------------
//Object Methods-->
// const manisha = {
//         firstName : 'Manisha',
//         lastName : 'Prasad',
//         birthYear :  1995,
//         job : 'teacher',
//         address : '40' +' Tangelo'+ ' Irvine',
//         friends : ['Michael', 'Peter', 'Steven'],
//         hasDrivingLicence : false,

        // calcAge : function(birthYear) {
        //     return 2024- birthYear;}

        // calcAge : function() {
        //     console.log(this);
        //       return 2024- this.birthYear;
        // }
        // calcAge : function() {
        //     // this.fullName = (this.firstName  + ' ' +this.lastName); 
        //         this.age = 2024- this.birthYear;
        //           return this.age;
        //     },

        // printSummary : function() {
        //     console.log(`${this.firstName} is a ${this.calcAge()}  year old ${this.job} and she has ${this.hasDrivingLicence ? 'a'  : 'no'} driving licence.`)
        // }

        
    // };

    

    // console.log(manisha.calcAge());
    // console.log(manisha.age);
    // console.log(manisha.age, manisha.fullName);

// manisha.printSummary();

//Test-----

// const BMI = mass/ (height * height);


// const mark = {
//     fullName : 'Mark Miller',
//     mass : 78,
//     height : 1.69,
//     calcBMI : function() {            
//         this.bmi = this.mass / this.height ** 2;
//          return this.bmi;
//     }      
// };

// const john = {
//     fullName : 'John Smith',
//     mass : 92,
//     height : 1.95,
//     calcBMI : function() { 
//          this.bmi = this.mass / this.height ** 2;
//          return this.bmi;
//     }
// };

// mark.calcBMI();
// john.calcBMI();

// console.log(mark.bmi, john.bmi);


// if (mark.bmi > john.bmi){

//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
// }
// else if(john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
// }

//---------------------------------------------------------------
// Iteration: For Loop-->
// for loop keeps running while condition is TRUE

// for ( let rep = 1; rep <= 10; rep++) {
//     console.log('Lifting weights repetition 1');
// }
// for ( let rep = 5; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }
//----------------------------------------------------------------
//Looping Arrays, Breaking and Continuing-->
// const jonas= [
//  'Jonas',
//  'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven'],
//   true,
// ];

// for (let i = 0; i < 5; i ++) {
//     console.log(jonas[i]);
// }
// const types = [];

// for (let i = 0; i < jonas.length; i ++) {
//     //reading from jonas array-
//     console.log(jonas[i], typeof jonas[i]);

    //filling types arrays-
    //types[i] = typeof jonas[i];
//     types.push(typeof jonas[i]); // pushing (value)->(typeof jonas) in empty "types" []array.
//  }

// console.log(types);

// const years = [1991, 2000, 2008, 2024];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037-years[i]); //(push value() .ages[]
// }

// console.log(ages);

//Continue and Break--
//Continue-

// console.log('---ONLY STRINGS---')
// for (let i = 0; i < jonas.length; i ++) {
//     if (typeof jonas[i] !== 'string') continue;

//        console.log(jonas[i], typeof jonas[i]);
// }

//Break-

// console.log('---BREAK WITH NUMBERS---')
// for (let i = 0; i < jonas.length; i ++) {
//     if (typeof jonas[i] === "number") break;

//        console.log(jonas[i], typeof jonas[i]);
// }

//-----------------------------------------------------------------
//Looping Backwards and Loops in Loops-->
// const jonas= [
//     'Jonas',
//     'Schmedtmann',
//      2037 - 1991,
//      'teacher',
//      ['Michael', 'Peter', 'Steven'],
//      true,
//    ];

// 0,1...,4
//4,3...,0

// for (let i = jonas.length - 1; i >= 0; i--){
//     console.log(i, jonas[i]); //(counter variable, array backwards)
// }

// //Loops Inside Loops(rep in exercise)--

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`------Starting exercise ${exercise}`);

//     for(let rep = 1; rep < 6; rep++){
//      console.log(`Exercise ${exercise}: Lifting weight repitition ${rep}`);   
//     }
// }

//--------------------------------------------------------------------
// The While Loop--> ( larger variety of situations, don't really need counter var.)

// for ( let rep = 1; rep <= 5; rep++) {
//         console.log(`Lifting weights repetition ${rep}`);
// };

// let rep = 1;
// while (rep <= 5) {
//     console.log(`WHILE: Lifting weights repetition ${rep}`);
//     rep++;
// };

// let dice = Math.trunc( Math.random() * 6) + 1;
// console.log(dice);

// // (different than !== 6 )--
// while (dice !== 6)  {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc( Math.random() * 6) + 1;

//     if (dice === 6) console.log(`Loop is about to end..`);
// }

//TEST----

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   }

// const calcAverage = function(arr) {
//     let sum = 0;
//     for (let i = 0 ; i < arr.length ; i++){
//         // sum = sum + arr[i];
//         sum += arr[i];
//     }
//     console.log('sum : ', sum);
//     return sum / arr.length;
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tips = [];
// const totals = [];

//other option-------
// const calcTotal = function (bill , tip) {
//     return bill + tip}

// const noOfPerson = bills.length; // 10 

// for( let p = 1; p <= noOfPerson ; p++) {
//  tips[p] = calcTip(bills[p]);
//  totals[p] = calcTotal(bills[p], tips[p]);
// } 
//------------------
//using calcTip function--
// for (let i = 0; i < bills.length; i++ ) {
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(tip + bills[i]);
// }

// console.log((bills));
// console.log((tips));
// console.log((totals));

// //using calcAverage function-
//  console.log('Average : ',calcAverage(bills));
//  console.log('Average : ',calcAverage(tips));
//  console.log('Average : ',calcAverage(totals));


//---------------------------------------------------------------------