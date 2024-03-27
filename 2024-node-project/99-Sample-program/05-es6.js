let prop3 = 'age';
let student = {
  name: 'Lekhraj Dinkar', //entry-1 (key1-value1)
  rollno: 18, //entry-2 (key2-value2)
  [prop3]: 25, //entry-3 (key3-value3)
};

//Object Util methods
console.log('-----keys------');
for (const key of Object.keys(student)) console.log(key);

console.log('------values-----');
for (const value of Object.values(student)) console.log(value);

console.log('------entries-----');
for (const entry of Object.entries(student)) console.log(entry);

console.log('-------entries 2----');
for (const [k, v] of Object.entries(student)) console.log(k, '==>', v);

console.log('-------ways of creating object----');
//way-0 : object literal. o={k:v, k:v, etc}
//way-1 assign
let shallowObject = Object.assign({ prop4: 'value4' }, student); // Object.assign({}, obj)
console.log('shallowObject', shallowObject);

//way-2 spread ...
let shallowObject2 = { prop4: 'value4', ...student }; //  { ...student }
console.log('shallowObject2', shallowObject2);

//way-3 - create normal function and call with new.  (>>> Never uses)
function student_fn(nam, rollno, age) {
  this.name = nam;
  this.rollno = rollno;
  this.age = age;
}

let object3 = new student_fn('manisha Prasad', 4, 28);
console.log('object3', object3);

//==============================
// Inheritance (prototype)
// "Object" is parent of all objects
Object.prototype.greet2 = function (n) {
  console.log(`HELLO ${n} JS object`);
};
shallowObject.greet2('shallowObject');
object3.greet2('object3');
