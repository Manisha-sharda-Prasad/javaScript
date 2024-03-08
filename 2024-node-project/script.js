//  let js = "amazing";                                   // assigning Value to Var
//  if (js === "amazing") alert("JavaScript is FUN!!!");

// console.log(40 + 8 + 2 - 40);
// console.log("Jonas");

// let firstName = "Boba";
// console.log(firstName);

//reassigning a new value to already existing Var, wihtout adding Let

// firstName = "Devi";
// console.log(firstName);

// console.log(typeof true);
// console.log(typeof JavaScriptIsFun);
// console.log(typeof "Devi");
// console.log(typeof 40);

// let JavaScriptIsFun = true;
// console.log(JavaScriptIsFun);

// JavaScriptIsFun = "Yes!";
// console.log(typeof JavaScriptIsFun);
//-----------------------------------------

// Math Operators -->
// const now = 2024;
// const ageManisha = now - 1995;
// const ageLekhraj = now - 1991;
// console.log(ageManisha, ageLekhraj);
// console.log(ageManisha + ageLekhraj); //concatenate two Var
// console.log(ageManisha * 2, ageManisha / 10, 2 ** 3);

//----------
// const nameOfSchool = "Sunega Public";
// const addressOfSchool = " Vasundhara, GZB";
// // console.log(nameOfSchool + addressOfSchool); //concatenate two Strings
// console.log(nameOfSchool + " " + addressOfSchool);

//--------------------------------
//Assignment Operators = + - * -->

// let x = 10 + 5; // 15
// x += 10; // x = x + 10 (also reassigning x value as 25)
// x *= 4; // x = x * 4 (25 * 4 = 100)
// x++; // x = x + 1  (101)
// x--; // x = x - 1 (100)
// x--; // x = x - 1 (99)
// console.log(x);

//---------------------------------
// Comparison Operators > < >= <= -->

// console.log(ageLekhraj > ageManisha);
// console.log(ageManisha >= 29);
// console.log(ageLekhraj <= 33);

// const isFullAge = ageManisha >= 29; // storing boolean data in a const Var
// console.log(now - 1991 > now - 1995); // or (ageLekhraj > ageManisha)

//----------------------------------
// Operator Precedence -->


// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x, y);

// const averageAge = (ageLekhraj + ageManisha) / 2;
// console.log(ageLekhraj, ageManisha);

//TEST--------------
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIMark);
// console.log(BMIMark >= BMIJohn);

// //---------------------------------

// const firstName = "Tanushri";
// const job = "teacher";
// const birthYear = 1990;
// const currentYear = 2024;

// const Tanushri = `I'm ${firstName} a
// ${currentYear - birthYear} years old ${job} !!`;

// console.log(Tanushri);
// //----

// console.log(`String with \n\
// multiple \n\
// lines`);

//--------------------------------------
//Taking Decision if/else statements-->(controlled structured)
// const age = 18;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log("Sarah can start drving!!🚗");
// } else {
//   console.log("Sarah should wait for another year!!😞 ");
// }

// const age = 15;

// if (age >= 18) {
//   console.log("Sarah can start driving!!");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah should wait for atleast ${yearsLeft} years.`);
// }

// const birthYear = 1998;
// let century;

// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);
//TEST-----------------

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//   console.log(
//     `Marks's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn}).`
//   );
// } else {
//   console.log(
//     `John's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMark}).`
//   );
// }

//-------------------------------------
//Type  Conversion--> eg.we convert strings to no.
// const inputYear = "1991";

// console.log(Number(inputYear) , inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);
// console.log(String(23), 23);

// //Type Coercion--> js itself converts behind the scenes.
// console.log('I am ' + 23 + ' years old'); // result in complete string.
// console.log('23' - '10' - 3); // result will be 10, minus operators triggers  the opposite conversion./conerted to no.
// console.log('23' + '10' + 3); // concatenated to strings/ 23103
// console.log('23' * '2');// converted to no./46
// console.log('23' / '2');

// let n = '1' + 1; //11 + concatenate string n no.
// n = n - 1;
// console.log(n); // 10

//------------------------------------------
//Truthy Falsy Values-->
// 5 falsy values: 0, '', undefined, null, NaN.(values become falsy when converted to boolean)

// const money = 0; // js takes 0 as falsy so result will always be else.
// if (money) {
//   console.log("Don't spend it all");
// } 
// else {
//   console.log("you should get a job!!");
// }


// const moneyTwo = 1000; // true, coz now it has truthy value.
// if (moneyTwo) {
//   console.log("You can spend carefully!!");
// } 
// else {
//   console.log("you should get a job!!");
// }


// let height; // undefined /not assigned a value/false/else.
// if (height) {
//   console.log("Yayy height is defined!!");
// } 
// else {
//   console.log("height is undefined!");
// }

//-------------------------------------------
//Equality operators : == vs. ===
// const age = "18";
// if (age === 18) console.log("You just became an adult- /strict"); //=== only be true when both value are same(no===no/string===string)
// if (age == 18) console.log("You just became an adult- /loose"); //== "18" string converted to no./avoid loose equality operator may lead to bugs in codes.


// const favourite = Number(prompt("What's your favourite number?"));
// console.log (favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log("Great number!!");
//   }
// else if (favourite === 7) {
//   console.log("Also a great no.!!");
// }
// else if (favourite === 6) {
//   console.log("Also a great no.!!");
// }

// if (favourite !== 23) console.log("Why not 23!!");//when it is not (equal to) != = 23.


//---------------------------------------------------
// Logical Operators-->

// and && both should be true// or|| one should be true// not! invert some of the value//


// const hasDriverLicence = true; //A
// // const hasDriverLicence = false; //A
// const hasGoodVision = true; //B
// // const hasGoodVision = false; //B

// console.log(hasDriverLicence && hasGoodVision);
// console.log(hasDriverLicence || hasGoodVision);
// console.log(!hasDriverLicence);

// if (hasDriverLicence && hasGoodVision){
//   console.log("Sarah can drive!!!");
// }
// else {
//   console.log("Sarah should not drive:(");
// }


// if (hasDriverLicence || hasGoodVision){
//   console.log("Sarah can drive!!!");
// }
// else {
//   console.log("Sarah should not drive:(");
// }

// const isTired = true;
// console.log(hasDriverLicence || hasGoodVision && isTired); // two are true

// if (hasDriverLicence && hasGoodVision && !isTired){
//     console.log("Sarah can drive!!!");
//   }
//   else {
//     console.log("Sarah should not drive:(");
//   }

//TEST----------
// const scoreDolphins = (96 + 108 + 89)/ 3;
// const scoreKoalas = (88 + 91 + 110)/ 3;
// console.log(scoreDolphins, scoreKoalas);
  
// if (scoreDolphins > scoreKoalas){
//     console.log("Dolphins win the trophy");
// }
// else if (scoreKoalas > scoreDolphins){
//     console.log("Koalas win the trophy");
// }
  
// else if (scoreDolphins === scoreKoalas ){
//     console.log("Both win the trophy")
// }

// extra----
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
// The Switch Statement-->

//  const day = prompt("Please enter day");
//  const day = "monday";

// switch(day){
//   case'monday':
//     console.log("Work from home:- Plan weekdays and work accordingly!");
//     console.log("Attend zoom meetings.");
//     console.log("Write API's");
//   break;

//   case'tuesday':
//   case'wednesday':
//   case'thursday':  
//     console.log("Go to office.");
//     console.log("Meeting with off-shore team @ 9pm.");
//   break;

//   case'friday':
//      console.log("Work from home.");
//      console.log("Deploly program, Fix Bugs if any.");
//      console.log("Study after 7 pm.");
//   break;
  
//   case 'saturday':
//   case  'sunday':
//     console.log("Yayy! Relax and Enjoy your weekend!!!" );
//     console.log("If no weeknd plans, then Study!!");
//   break;

//   default:
//     console.log("Oops..Not a valid day!");
//   break;  
//  }

//--same- with if/else, and logical operator:--

//  if (day === "monday"){
//   console.log("Work from home:- Plan weekdays and work accordingly!");
//   console.log("Attend zoom meetings.");
//   console.log("Write API's")
//  }
//  else if (day === "tuesday" || day === "wednesday" || day === " thursday"){
//   console.log("Go to office.");
//   console.log("Meeting with off-shore team @ 9pm.");
//  }
//  else if (day === " friday"){
//   console.log("Work from home.");
//   console.log("Deploly program, Fix Bugs if any.");
//   console.log("Study after 7 pm.");

//  }
//  else if (day === " saturday" || day === "sunday"){
//   console.log("Yayy! Relax and Enjoy your weekend!!!" );
//   console.log("If no weeknd plans, then Study!!");
//  }
//  else {
//   console.log ("Oops..Not a valid day!")
//  }

//----------------------------------------------
// Statements and Expressions-->

// _Statements are full sentences, it doesn't produce a value. normal spoken lang ends with a semicolon; bigger piece of code that is executed:

//e.g- if (23 > 18) {
//   const str = "23 is bigger";}
// } (string is also an expression, it has boolean value.)

// _Expression produces a value.:

//e.g- 3+4, 1991(doesn't produce avalue still expression,will produce avalue in JS),
//true && false && !false.(gives boolean value) 

// const me = "Manisha";
// console.log(`I'm ${me} ${(2024 - 1995)} years old.`);


//-------------------------------------------------
// The Condition (Ternary) Operator-->

// condition op also called Ternary as it has three parts(condition >=, if , else statements.) 
// It helps write if/else with operators inh one line.
// operator produces avalue , so it's also a Expression.

// const age = 23;
// age >= 18 ? console.log ('I like to drink wine.') :
// console.log (" I like to drink water.");

//Right e.g-(stored in a variable{drink})--

// const age = 23;
// const drink = age >= 18 ? "wine" : "water" ;
// console.log(drink);

// Also using Ternary inside a `Template literal`--
// using logical operators as in a expression --

// console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

// TEST----
// const bill = 275;

// const tip = (bill <= 300 && bill >= 50) ? bill * (15/100) : bill * (20/100);

// console.log(`The bill was ${bill}, and the tip was ${tip}, and the total value ${tip + bill}.`);

//----------------------------------------------------------