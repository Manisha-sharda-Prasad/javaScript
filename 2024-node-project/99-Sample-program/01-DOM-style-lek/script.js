document
  .getElementById('dynamic-div-1')
  .addEventListener('mouseover', addStyle);

document
  .getElementById('dynamic-div-1')
  .addEventListener('mouseout', removeStyle);

function addStyle() {
  const div1 = document.getElementById('dynamic-div-1');
  div1.classList.add('border-1');
  div1.classList.add('bg-light');
}

function removeStyle() {
  const div1 = document.getElementById('dynamic-div-1');
  div1.classList.remove('border-1');
  div1.classList.remove('bg-light');
}

// ===== First class Functon ======= CONCEPT =======
// passing "function declartion/value" as argumnet
// return function from function

function parentFunction(c1, c2) {
  c1();
  console.log('hello');
  c2();
}

const child_f1 = function () {
  console.log('iam f2 function 1');
  console.log('iam f2 function 2');
  console.log('iam f2 function 3');
  //5 min
};

const child_f2 = function () {
  console.log('iam f3 function 1');
  console.log('iam f3 function 2');
  console.log('iam f3 function 3');
  // 2 min
};
//======================

//parentFunction(child_f1, child_f2);

//setInterval(child_f1, 5000);
setTimeout(child_f2, 3000);

console.log('last line');

// Datastruture
//===============
// Array
// STACK - Array+LIFO
// QUEUE - Array+FIFO

f1-- > f2-- > f3-- > f4;
10 + (9 + (2 + 2 + 3 + 3));
