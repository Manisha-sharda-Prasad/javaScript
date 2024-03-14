//------------------------------------------------
//Object Methods-->
const manisha = {
  firstName: "Manisha",
  lastName: "Prasad",
  birthYear: 1995,
  job: "teacher",
  address: "40" + " Tangelo" + " Irvine",
  friends: ["Michael", "Peter", "Steven"],
  hasDrivingLicence: false,

  // calcAge : function(birthYear) {
  //     return 2024- birthYear;}

  // calcAge : function() {
  //     console.log(this);
  //       return 2024- this.birthYear;
  // }
  calcAge: function () {
    // this.fullName = (this.firstName  + ' ' +this.lastName);
    this.age = 2024 - this.birthYear;
    return this.age;
  },

  printSummary: function () {
    console.log(
      `${this.firstName} is a ${this.calcAge()}  year old ${
        this.job
      } and she has ${this.hasDrivingLicence ? "a" : "no"} driving licence.`
    );
  },
};

console.log(manisha.calcAge());
console.log(manisha.age);
console.log(manisha.age, manisha.fullName);

manisha.printSummary();
