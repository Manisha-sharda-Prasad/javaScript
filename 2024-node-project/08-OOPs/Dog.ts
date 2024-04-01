import { Animal } from './Animal';

export class Dog extends Animal {
  // additional prop and method.
  // bark() {
  //   console.log(`${this.name} is barking...`);
  // }

  bark(typeOfbark: String) {
    console.log(`${this.name} is barking with ${typeOfbark}`);
  }
}
