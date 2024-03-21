/*

JS - 2 element : 
1. variable
2. function
---------------

*** Declare and then use

---------------

VARIABLE
============
-- Step -1 :: Declare
var a;
let b ;
const c ;

--- Step :: use (RUN)
 a = 12;  -- use : assign 
 b = "Lekhraj" -- use : assign 
console.log(b) -- use : read and print 


Function
============
--- Step -1 :: Declare

line of code/s - group, then USE multiple times.
function logger(){
    // write line of code/s , Any code whatever you have learnt soo far.
    console.log(" any code, hello world")
    let n1 =10;
    let n2=20;
    let sum = n1 + n2;
    console.log(sum)
}


--- Step :: USE - call, invoke, run
logger();
logger();  // re-use-1
logger();

*/

let globalvar = 'global';

{
  let blockvar = 'block';
  console.log(blockvar); // Accessible
}

function test() {
  //block
  if (true) {
    var innerBlockVar = 'innerBlockVar';
    console.log('1. Accessing inside inner block ', innerBlockVar);
  }
  console.log('2. Accessing outside inner block ', innerBlockVar); // Accessible ?

  let localvar = 'local';
  console.log(localvar);
  console.log(globalvar); // Accessible
}

test();

/* finding inshort:
var - function scoped
let/const - block scoped.
*/

//declartion
//1. gf
const gf = function () {
  console.log(' Im general function', this);
};

//2. of
const o = {
  of: gf, // object has borrowed
};

const gf2 = gf; // global var has borrowed

gf(); // und
gf2();

o.of(); // o
//-----------------------
