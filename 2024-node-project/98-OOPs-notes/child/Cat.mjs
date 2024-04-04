import { Animal } from '../parent/Animal.mjs';

class Cat extends Animal {
  meow() {
    console.log(`${this.name} is meowing...`);
  }
}

class CatAdvance extends Animal {
  meowAdvance() {
    console.log(`${this.name} is Advance meowing...`);
  }
}

export { Cat, CatAdvance };
