//--------------------------------------------------------------------
//Objects-->
//(Grouping of unstrucured data, order of poperties in object doesn't matter -like we do in Arrays).
//Key:Value / Var:Value-

//manisha properties-

const manisha = {
  firstName: 'Manisha',
  lastName: 'Prasad',
  age: 2024 - 1995,
  address: '40' + ' Tangelo' + ' Irvine',
  friends: ['Michael', 'Peter', 'Steven'],
};
console.log(manisha);

// Dot vs. Bracket-------

console.log(manisha.lastName);
console.log(manisha['lastName']); // can put any expression [].

const nameKey = 'Name';
console.log(manisha['first' + nameKey]); // won't work with ( .'first'+ nameKey).
console.log(manisha['last' + nameKey]); //[inside will be evaluated first] for expression which produces a value.

//prompt-
// const interestedIn = prompt(
//   "What do you want to know about Manisha? Choose between firstName, lastName, age, address and friends"
// );
// console.log(manisha[interestedIn]); // (manisha.interestedIn) is wrong as interestedIn doesn't exist in manisha properties.

//if/else
if (manisha[interestedIn]) {
  console.log(manisha[interestedIn]);
} else {
  console.log(
    'Wrong Request! Choose between firstName, lastName, age, address and friends'
  );
}

manisha.martialStatus = 'Married';
manisha['twitter'] = '@manishaIcha';
console.log(manisha);

//coding challenge-
//Objects with Template Literal--

console.log(
  `${manisha.firstName} has ${manisha.friends.length} friends, and her bestfriend is called ${manisha.friends[1]}.`
);
//--------------------------------------------------------------
