//block
{
  var today = "21-feb-2023";
}

// Define Functions --------- START ----
// LOCAL SCOPE
// GLOBAL SCOPE
function greet() {
  let n = "Manisha";
  let f = "Morning";
  console.log("Good ", f, n);
}

function cooking() {
  var food = "noodle";
  let n = "Lekhraj";
  //let today = "1-Jan-2023";
  console.log("Cooking ", food, " for ", n);
}

function netflix() {
  let f = "Money hiest";
  console.log("watching ", f);
}
// Define Functions --------- END ------

// Code runs from here...
let f = "first-value";
//greet(); //calling function
greet();
cooking();
const pi = 3.14;
console.log(f, today);
console.log("========== END ============= lekhraj\n\n\n");

//console.log("dfjbvdf", "jkvhdfkjvhurf", 2, f, "ffffff")

console.log("========== 3.OPERATORS ============= START\n\n\n");

let v = 10;
++v;
console.log(v); //10
//console.log(++v); //1.v=v+1                       2.log(v)
//console.log(v++); //1.log(v)                        2.v=v+1
//console.log(v);

console.log("========== 3.OPERATORS ============= END\n\n\n");

// nesting on consition
age = 31;
age >= 18
  ? console.log("drink alocohol") // 18 ++
  : age < 2
  ? console.log("drink Milk")
  : console.log("Drink Juice");

function suggestDrink(age) {
  if (age >= 18) {
    console.log("drink alocohol");
  } else {
    if (age < 2) {
      console.log("drink Milk");
    } else {
      console.log("Drink Juice");
    }
  }
}

suggestDrink(23);
suggestDrink(1);
suggestDrink(16);

// statemine
console.log("Hello");

//expressions
msg = " hello";
console.log(msg);

/*
ES2024; //ecma Script
// javaScript
1991 -
  2001 -
  // Modern Script - Advance
  2015 -
  ES2015 / ES5;
2016 - ES6;
2017 - ES7;
2022 - ES12;
*/
