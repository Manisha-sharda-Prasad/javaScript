'use strict';
// Data needed --
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

//01.2.using .entries(name+value) (in-built method)--
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

//01.Property names--
const properties = Object.keys(openingHours);
console.log(properties);

let openStrn = `We are open on ${properties.length} days :`;

for (const day of properties) {
  openStrn += ` ${day},`; //keep adding
}
console.log(openStrn);

//02. property values--
const values = Object.values(openingHours);
console.log(values);

//03. Entire object(entries (names/keys+values))--
const entry = Object.entries(openingHours);

for (const x of entry) {
  console.log(x);
}
//--------------------------------------------------------------------------
//Sets--->(.size, has(), add(), delete(), clear())
//no index eg[1]--> undefined always/ cannot get data out of set/ remove duplicate values in [array]

const ordersSet = new Set(['Pasta', 'Pasta', 'pizza', 'pizza', 'Risotto']);
console.log(ordersSet);

//01.size--
console.log(ordersSet.size);
//02.has()--
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

//03.add()--
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');

//04.delete()--
ordersSet.delete('Risotto');

//05.clear()--
//ordersSet.clear();

console.log(ordersSet);

for (const order of ordersSet) console.log(order);

//06.example--
const staff = ['waiter', 'chef', 'waiter', ' chef', 'manager', 'cleaner'];
console.log(staff);
//06.1.new array[] without duplicates---

//const uniqueStaff = new Set(staff);

//06.2.unpacking new set using ...spread---
const uniqueStaff = [...new Set(staff)]; // all with ...spread
console.log(uniqueStaff);
console.log(
  new Set(['waiter', 'chef', 'waiter', ' chef', 'manager', 'cleaner']).size
);

console.log(new Set('ManishaPrasad').size);

//-------------------------------------------------------------
//Maps : Fundamentals---->
//maps is data structure, it maps values to keys/ data stores in key:values pairs in maps.

//01.maps -updates and returns--
const rest = new Map(); //create empty map
rest.set('name', 'Classico Italiano'); //set() works as add()
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal')); //maps above data in one {}

//set-ting key,values--
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open !!')
  .set(false, 'oops! We are Closed!');

//02.Get method()<-read data from map---
//passing the name of Key--

console.log(rest.get('name'));
console.log(rest.get('open'));
console.log(rest.get(true));
console.log(rest.get(1));

//03.not good practice--
//const time = 8;
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); //" we are open"

//04.has ,delete, size, clear--
console.log(rest.has('categories'));

//rest.clear();
rest.delete(2);
console.log(rest.size);

//05.passing array[] as key name, test as value--
rest.set([1, 2], 'Test');
console.log(rest);

//---------------------------------------------------------------
//Maps : Iteration---->

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Java Script'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);
console.log(question);

//01.Convert Object{} to Map--

console.log(Object.entries(openingHours));

//01.1.map assignig to var--
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//02.Quiz app--
console.log(question.get('question'));

//iteration--
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key} : ${value}`);
}
//const answer = Number(prompt('Your Answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

//03.Convert Map to array--
console.log([...question]);
//others---
// console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

//---------------------------------------------------------------------
//Working with strings--->

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

//01.bad practice--
//check position--
console.log(airline.indexOf('r'));
//last indexOf--
console.log(airline.lastIndexOf('r')); //including space -'TAP Air Portugal';
//slice(beginning, endParameter)--
console.log(airline.slice(4));
console.log(airline.slice(4, 7)); //1234, - 1234567 -- 'remain value'
console.log(airline.slice(3, 9)); //_AIR_P

//02.good practice (searching with 'space', index & last index)--
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //+1 remove extra space printed

//03.printing from last index (-)opposite--
console.log(airline.slice(-2)); //al
console.log(airline.slice(-1)); //l
console.log(airline.slice(1, -1)); // 'AP Air Portuga'

//04. with function--
//B and E are middle seats--
const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got middle seat!');
  else console.log('You got lucky!!');
};
// calling method on string ' ' --
checkMiddleSeat('11 B');
checkMiddleSeat('23 C');
checkMiddleSeat('3 E');
//---------------------
//05.(lower/uppercase,trim,replace,replaceAll,includes,starts/endsWith,split,join,padStart/End,Repeat)----
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//05.1.fix capitalisation in name--
//e.g.--
const passenger = 'maNisH';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

//05.2.comparing emails--
//e.g.--
const email = 'manishaprasad@.io';
const loginEmail = ' MANISHAPRASAD@.IO \n';
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

//better(trim())--
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail); //true

//05.3.replacing (.replace()--
//e.g.1--
const priceGB = '288,97*';
const priceUS = priceGB.replace('*', '$').replace(',', '.'); //replacing '*' with '$' and ',' with '.' /
console.log(priceUS);

//e.g.2--
//(in a string)(/g)--

const announcement =
  'All passengers come to boarding door 23, rest stand boarding door 23.';
console.log(announcement.replace('door', 'gate')); //working on 1 door only.

console.log(announcement.replace(/door/g, 'gate')); //working on both as-g/globally.

//06.Booleans(includes, startsWith, endsWith)--
const planeNo = 'Air Bus A320neo';
console.log(planeNo.includes('A320'));
console.log(planeNo.includes('3509'));
console.log(planeNo.startsWith('Air'));

if (planeNo.startsWith('Air') && planeNo.endsWith('neo')) {
  console.log('Part of new Air Bus family');
} else 'other airline part!';

//07.split() and join()--
console.log('a+very+nice+string'.split('+'));
console.log('Manisha Prasad'.split(' ')); //'space'

const [firstname, lastName] = 'Manisha prasad'.split(' ');

const newName = ['Mrs.', firstname, lastName.toUpperCase()].join(' ');
console.log(newName);

//08.capitalize with function--

const capitalizeName = function (changeName) {
  const naming = changeName.split(' ');
  const namingUpper = [];

  for (const n of naming) {
    namingUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namingUpper.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('jonas elis');

//09.padding----(padStart()padEnd())
const message = 'Hello Manisha';
console.log(message.padStart(20, '+').padEnd(40, '+'));
console.log('Lekhu'.padStart(10, '='));

//09.1 e.g--
const maskCreditCard = function (number) {
  const str = number + ''; //numb as string
  const last = str.slice(-4); // padding '*' except 4 last digits
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(8538545));
console.log(maskCreditCard(6486998008538545));
console.log(maskCreditCard('5253759780342'));

//10.Repeat()

const message2 = 'My name is Manisha.... ';
console.log(message2.repeat(5));

//--------------------------
//Strings Method practice---
// Data needed--
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//split()--
console.log(flights.split('+'));

//looping ,destructuring data, replaceAll()---
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';'); //split after';'
  const output = `${type.replaceAll('_', ' ')} ${from}, ${to}, (${time.replace(
    ':',
    'h'
  )})`;
  console.log(output);
}
//-------------------------------------------------------------------
