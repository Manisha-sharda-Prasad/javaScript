'use strict';
//------------------------------------------------
//Destructuring Array--->
//unpacking array from an object into separate variables/ break complex data structure into small like a variable --
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //store the array of [starter,main menu] in-(starter,main index) variable--
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // orderDelivery: function (obj) {
  //   console.log(obj);
  // },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received!! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//01.Retrieve elements from array / storing into variable a,b..--
const arr = [2, 3, 4];

const a = arr[0];
const b = arr[0];
const c = arr[0];

//02.Better way- destructuring array[var,,,]--
const [x, y, z] = arr;
console.log(x, y, z);

//03.unpacking restaraunt categories--
// const [first, , second] = restaurant.categories;
// console.log(first, second);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//04.switching variables for -array values from first to secondary--
//bad practice--
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//better way--
[main, secondary] = [secondary, main];
console.log(main, secondary);

//05- calling & destructuring order(method) in object {restaraunt}--
console.log(restaurant.order(2, 0));

//05.1 receive 2 return values from a function--
const [starterCourse, mainCourse] = restaurant.order(2, 0);
console.log(starterCourse, mainCourse);

//06. Nested destructuring -values of arrays--

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;   // bad
const [i, , [j, k]] = nested; //good
console.log(i, j, k);

//07.Default values--
//const [p, q, r] = [8, 9]; // undefined after 9..
const [p = 1, q = 1, r = 1, s = 1] = [8, 9];
console.log(p, q, r, s);

//---------------------------------------------------------------------------

//Destructuring Object--->
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//01.assigning new property names of object{} into new var names--
const {
  name: restarauntName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restarauntName, hours, tags);

//02.Default values(trying to read a property of object -but if it exists or not)--

//const { menu, starterMenu: starters = [] } = restaurant;   // undefined- menu
const { menu = [], starterMenu: starters = [] } = restaurant; // added default-menu-[]
console.log(menu, starters); //empty[]array -menu

//03.Mutating Variables--

let e = 111;
let f = 999;
const obj = { e: 23, f: 7, g: 14 };
//{e, f} = obj; // = expects a code block
({ e, f } = obj); // wrap in ()
console.log(e, f);

//04.Nested Objects fri has own obj{open, close}--

//also assigning fri properties in a new var {openTime,closeTime}--
const {
  fri: { open: openTime, close: closeTime },
} = openingHours;
//console.log(open, close);
console.log(openTime, closeTime);

//05.calling a method in restaurant{}object--and adding an object of-options{} in method- --
restaurant.orderDelivery({
  time: '22:30',
  address: ' 40, Orange Blossom, Irvine',
  mainIndex: 2,
  starterIndex: 2,
});
//------------------------------------------------------------------------------
//Spread Operators---->
//(expand & unpack an array-into all its elements individually/ but doesn't assign new elements into new var)--

//01.1. bad practice-
const arr1 = [7, 8, 9];
const badArr = [1, 2, arr1[0], arr1[1], arr1[2]];
console.log(badArr);

//01.02. good practice-
const goodArr = [1, 2, ...arr1];
console.log(goodArr);

//also--
console.log(...goodArr);

//02.1.Adding more options in main menu ...--
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//02.2.Copy array--
const mainMenuCopy = [...restaurant.mainMenu]; //similar to-> object.assign /preserve a copy.

//02.3.Join 2 arrays--
//const menuNew = [restaurant.mainMenu + restaurant.starterMenu];
const menuNew = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menuNew);

//03.Iterables: arrays, strings, maps, sets. (not objects)--
//spreading all elemnets--

const str = 'Arush';
const letters = [...str, ' ', 'Gautam.'];
console.log(letters);
console.log(...str, ...letters);

//04.calling method orderPasta--
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredients 2?'),
//   prompt('Ingredients 3?'),
// ];
//console.log(ingredients);

//04.1.getting elements of ingredients array--
//restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[3])
//better way---
//restaurant.orderPasta(...ingredients); //I typed in prompt-"mushrooms","cheese","corn"

//05.spread operators in objects/ but obj not iterable/adding more properties in obj --
const newRestaurant = { foundedIn: 2000, ...restaurant, founder: 'Lekhisha' };
console.log(newRestaurant);

//06. preserving old obj(data) --
const restarauntCopy = { ...restaurant };
restarauntCopy.name = 'Ristorante Roma';
console.log(restarauntCopy.name);
console.log(restaurant);
//--------------------------------------------------------------------
