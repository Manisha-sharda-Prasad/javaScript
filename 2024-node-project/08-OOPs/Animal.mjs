// ========== parent / superclass / base ==========
class Animal {
  //1. property
  name;

  //2. method
  speak() {
    console.log(`${this.name} is making noise`);
  }
  // 2.1.  special method
  // Contructor caannot be "overload".
  // constructor() {} // default, already present.
  constructor(nam) {
    this.name = nam;
  }
}

// =====
// property
// function
// class - property + method

function animalFunction() {
  console.log('this is animalFunction');
}
const animalProperty = 'animalProperty';

//=======
export { Animal, animalFunction, animalProperty };
