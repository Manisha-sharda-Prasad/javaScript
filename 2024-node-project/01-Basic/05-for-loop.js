//---------------------------------------------------------------
//Iteration: For Loop-->
//for loop keeps running while condition is TRUE

for (let rep = 1; rep <= 10; rep++) {
  console.log("Lifting weights repetition 1");
}
for (let rep = 5; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

//------------------------PRG-1----------------------------------------
//Break and Continue
let jonas;

jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

for (let i = 0; i < 5; i++) {
  console.log(jonas[i]);
}
const types = [];

for (let i = 0; i < jonas.length; i++) {
  //reading from jonas array-
  console.log(jonas[i], typeof jonas[i]);

  //filling types arrays-
  types[i] = typeof jonas[i];
  types.push(typeof jonas[i]); // pushing (value)->(typeof jonas) in empty "types" []array.
}

console.log(types);

const years = [1991, 2000, 2008, 2024];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]); //(push value() .ages[]
}

console.log(ages);

//Continue and Break--
//Continue-

console.log("---ONLY STRINGS---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log("---BREAK WITH NUMBERS---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;

  console.log(jonas[i], typeof jonas[i]);
}

//-----------------PRG-2------------------------------------------------
//Looping Backwards and Loops in Loops-->
jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

//0,1...,4
//4,3...,0

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]); //(counter variable, array backwards)
}

//Loops Inside Loops(rep in exercise)--

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repitition ${rep}`);
  }
}
