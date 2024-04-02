import { Animal } from './Animal.mjs';
import { Dog } from './Dog.mjs';
import { Cat } from './Cat.mjs';

//  ---- import classes from other file (preffered) ----

//create object -1
let animal1 = new Animal('jasmine');
//animal1.name = 'jasmine';
animal1.speak();
console.log('animal1 :', animal1);

//create object -2
let animal2 = new Animal('tommy'); // initialization
animal1.speak();
console.log('animal2 :', animal2);

//dogs
let dog1 = new Dog('dog---1');

dog1.speak();
let dog2 = new Dog('dog---2');
//dog2.bark();
dog2.bark('HARD');

//cats
let cat1 = new Cat('cat---1');
cat1.meow();
cat1.speak();
let cat2 = new Cat('cat---2');
