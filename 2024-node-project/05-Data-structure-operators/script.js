'use strict';
//------------------------------------------------
// Data needed for a later exercise-
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

  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received!! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
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

//--------------------------------------------------

//Destructuring Array--->

//unpacking array from an object into separate variables/ break complex data structure into small like a variable --

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

//good practice--
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
//(Spread, = [...]right side of assign operator)

//01.1. bad practice-
const arr1 = [7, 8, 9];
const badArr = [1, 2, arr1[0], arr1[1], arr1[2]];
console.log(badArr);

//01.02. good practice-
const goodArr = [1, 2, ...arr1];
console.log(goodArr);

//also --
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
console.log(restaurant.name);
//--------------------------------------------------------------------

// Rest Patterns and Parameters--->
//(compresss)pack (rest) all the elements into an array/opposite of spread(unpack)--
//(Rest, left[...rest only last] = side of assign operator.

//01.Spread eg [packed-1-4 in one [array]]:-
const anArr = [1, 2, ...[3, 4]];
console.log(anArr);

//01.1.[from 3-6] (rest elements-...others)--
const [m, n, ...others] = [1, 2, 3, 4, 5, 6];
console.log(m, n, others);

//02.packing rest(otherFood)--
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//03. Rest Objects(skip sat)--
const { sat, ...weekdays } = restaurant.openingHours;
//console.log(sat, weekdays);
console.log(weekdays);

//04. Rest Functions (...rest arguments)--
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
  //console.log(numbers);
};
add(2, 3);
add(5, 6, 7, 8);
add(1, 2, 3, 4, 5, 6);

// calling orderPizza method (using rest[mushrooms], [onio,toma,chee] )--
restaurant.orderPizza('mushrooms', 'onions', 'tomatoes', 'cheese');

//-----------------------------------------------------------------------
//Short Circuiting (&& and ||)--->
//logical operators- can use and return any Data type, short-circuiting--

console.log('------OR------');

//01.|| operator if the first value is truthy it will return first truthy--
//(both truthy first value(3) returned- so jony not evaluated)
console.log(3 || 'jony');
console.log('' || 23);
console.log(true || 0);
console.log(undefined || null);
console.log('hello' || 23 || ' ' || null || 3 || 'hy'); // printed 1st only ,others not evaluated

//02.
//restaurant.numOfGuests = 23;
const guests1 = restaurant.numOfGuests ? restaurant.numOfGuests : 10;
console.log(guests1); // if numOfGuest exists? else set to : 10;

//02.1
//falsy value(undefined) || 10 -> (skipped 1st falsy) result 10(truthy).
const guests2 = restaurant.numOfGuests || 10;
console.log(guests2);

console.log('-----AND------');
//03 && operator if any value is falsyy it will only return falsy--
console.log(0 && 'jony');
console.log('jony' && null);
console.log(23 && false);
console.log('hello' && 13); // both truthy 13 -last value returned
console.log('hello' && 23 && ' ' && null && 3); // null -one is false

//-----------------------------------------------------------------------
//Nullish Coalescing operators(??)-->
restaurant.numOfGuest = 0;

const guests3 = restaurant.numOfGuest || 10; // 10 is true, (skipped 0)result- 10
console.log(guests3);

//Nullish: ?? null and undefined (not include 0 or '')-
const guestCorrect = restaurant.numOfGuest ?? 10; // numofguest -0 value coz it exists, result 0
console.log(guestCorrect);

//--------------------------------------------------------------------------
//Logical Assignment Operator--->

const rest1 = {
  name: 'capri',
  //numGuests: 20,
  numGuests: 0,
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

//01. OR ||assignmenet ---
//old way---
// rest1.numGuests = rest1.numGuests || 10; //numGuests -20 , first is true
// rest2.numGuests = rest2.numGuests || 10;

//also--
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//02.better way-nullish??--

rest1.numGuests ??= 10; //(exists - '0')
rest2.numGuests ??= 10; //(doesn't exists - added '10')

//03. AND && assignment ---
//old way--
// rest1.owner = rest1.owner && '<ANONYMOUS>'; // undefined / owner doesn't exists in rest1.
// rest2.owner = rest2.owner && '<ANONYMOUS>'; // replaced with '<ANO..>'

//Better way--

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

//---------------------------------------------------------------------------------
//Looping Arrays: The For-of-Loop--->

//01.spreading 2 prop in 1 array[]
const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];

//01.1.using of(1st current element)--
for (const item of menu1) console.log(item);

//01.2.using .entries() (in-built method)--
//also detructuring (index, elements / i,el)--
for (const [i, el] of menu1.entries()) {
  //console.log(item);
  console.log(`${i + 1}: ${el}`);
}
//arrays elements & index--
//console.log([...menu1.entries()]);

//--------------------------------------------------------------------------
// Optional Chaining (?)--->

//0.1.checking if property (mon)exists or not---
//if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

//0.1.1 other way ---
if (restaurant.openingHours && restaurant.openingHours.mon)
  //console.log(restaurant.openingHours.mon.open);
  //0.1.2 with Optional Chaining(?)---
  console.log(restaurant.openingHours.mon?.open);

console.log(restaurant.openingHours?.mon?.open);

//0.2 E.g(?) with nullish (??) / won't replace (0)value (if/else)--
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed!!'; // using 'var'-[day] for accessing 'property' put[]
  console.log(`On ${day}, we open at ${open}`);
}

//0.3. with Methods (? / ??)(if / else)--

console.log(restaurant.order?.(0, 1) ?? 'oops! Method does not exists!!');
console.log(restaurant.break?.(0) ?? 'oops! Method does not exists!!');

//0.4 with Arrays --

const car = [{ brand: 'Hyundai', size: 'Sedan', color: 'Golden' }];

console.log(car[0]?.name ?? 'Car array empty');
console.log(car[0]?.size ?? 'Car array empty');
console.log(car[0]?.color ?? 'Car array empty');

//---------------------------------------------------------------------
//Looping Objects: Object Keys, Values, Entries--->

// const maniInfo = {
//   name: 'Manisha Prasad',
//   height: "5'1",
//   weight: 52,
//   education: 'B.A (Fashion Design)',
//   subjects: {
//     illustration: {
//       sketch: liveSession,
//       croquis: fashionCroquis,
//     },
//     garment: {
//       constrution: patternMaking,
//       stiching: fabric,
//     },
//   },
//   address: '40 Tangelo, Irvine',
// };

const properties = Object.keys(openingHours);
console.log(properties);

for (const day of Object.keys(openingHours)) {
  console.log(day);
}
