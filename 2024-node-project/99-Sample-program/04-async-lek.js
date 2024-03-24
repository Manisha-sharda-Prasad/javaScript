function fetchData() {
  const asynctask = resolve => {
    setTimeout(() => {
      console.log('Sync TAsk after 5 minutes');
      resolve('COMPLETED');
    }, 3000);
  };

  const cb = (resolve, reject) => {
    asynctask(resolve);
  };

  return new Promise(cb);
}

fetchData().then(d => console.log('fulfilled ! received data :', d));

// ===========

function add(n1, n2) {
  return n1 + n2;
}

const fun_add = (x, y) => x + y;
const fun_divide = (x, y) => x / y;
const fun_subtract = (x, y) => x - y;
const fun_multiply = (x, y) => x * y;

/// >>>>>>
function operation(n1, n2, fun) {
  // >>>>>>  num , num , function(arg1, arg2)
  console.log(fun(n1, n2));
}

// let result = add(10, 20);
fun_add(10, 20);
fun_divide(10 / 20);

operation(10, 20, fun_add);
operation(10, 20, fun_divide);
operation(10, 20, fun_subtract);
operation(10, 20, fun_multiply);
