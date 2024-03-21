//Regular funvtion vs. Arrow function--->

//01. object literal -global scope (this in arrow-has global scope)--
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);

    //Solution 01--regular function inside a method-preserving this in variable----

    //const self = this;
    //const isMillenial = function () {
    //console.log(this.year >= 1981 && this.year <= 1996); //error
    //console.log(self.year >= 1981 && self.year <= 1996);//true
    //};
    // isMillenial(); //undefined

    //Solution 02- using arrow in a method fot "this"----

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  //arrow-
  //greet: () => console.log(`Hey ${this.firstName}`), // Hey undefined/>arrow doesnt get its own this keyword.

  //method-
  greet: function () {
    console.log(`Hey ${this.firstName}`); //Hey jonas // regular methods get its own this.
  },
};

jonas.greet();
//console.log(this.firstName); //window / global scope
jonas.calcAge();

//----------------
//arguments keywords ---(not good practice)--

//01.Regular function with (arguments)- add more parameters than two (a,b)--
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 7, 11);

//02.Arrow function with (arguments)--doesn't work--
// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 6, 8);

//----------------------------------------------------------
