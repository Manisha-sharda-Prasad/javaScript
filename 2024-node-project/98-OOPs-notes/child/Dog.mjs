import { Animal } from '../parent/Animal.mjs';

export class Dog extends Animal {
  // additional prop and method.
  // bark() {
  //   console.log(`${this.name} is barking...`);
  // }

  bark(typeOfbark) {
    console.log(`${this.name} is barking with ${typeOfbark}`);
  }
}
