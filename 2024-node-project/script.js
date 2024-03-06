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

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(
    `Marks's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn}).`
  );
} else {
  console.log(
    `John's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMark}).`
  );
}
