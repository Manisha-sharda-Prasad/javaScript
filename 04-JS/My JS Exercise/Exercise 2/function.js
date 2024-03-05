// create a in-home caluctor
// always pass 2 numbers
// operation : add, sub, multi, divide

function add2(f, s) {
  return f + s;
}
function subtract(f, s) {
  return f - s;
}
function multiply(f, s) {
  return f * s;
}
function divide(f, s) {
  return f / s;
}

// A. calling a function inside a function
// main function
function myCalculator(f, s, operation) {
  let result;
  switch (operation) {
    case "+":
      result = add2(f, s);
      break;
    case "*":
      result = multiply(f, s);
      break;
    case "-":
      result = subtract(f, s);
      break;
    case "/":
      result = divide(f, s);
      break;
  }

  console.log(`${f} ${operation} ${s} = ${result}`);
}

myCalculator(3, 6, "+");
myCalculator(3, 6, "-");
myCalculator(3, 6, "*");
myCalculator(3, 6, "/");

// --------------------
//fnDeclarion
let _add = (f, s) => f + s;
let _sub = (f, s) => f - s;
let _mul = (f, s) => f * s;
let _div = (f, s) => f / s;

//let myCalculator2 = (f, s, fn) => console.log(fn(f, s));
function myCalculator2(f, s, _fn) {
  let result = _fn(f, s);
  console.log(result);
}

//B. passing a function
// into anthor finction : while calling

function button_1_onclick() {
  console.log("this is button - 1");
  myCalculator2(3, 6, _add);
  //myCalculator2(3, 6, (f, s) => f + s);
  myCalculator2(3, 6, _sub);
  myCalculator2(3, 6, _mul);
  myCalculator2(3, 6, _div);
}

// function - 1
function caluclateAverage(g1, g2, g3) {
  return (g1 + g2 + g3) / 3;
}

// function - 2
function winner(p1a, p2a) {
  return p1a > p2a ? "Player-1" : "Player-2";
}

function playHeadBall2() {
  let p1a = caluclateAverage(5, 6, 70);
  let p2a = caluclateAverage(8, 9, 10);
  let winnerPlayer = winner(p1a, p2a);
  console.log("winner is " + winnerPlayer);
}

//playHeadBall2();

//-----
let calAvg = (g1, g2, g3) => (g1 + g2 + g3) / 3;
let whoWinner = (p1a, p2a) => (p1a > p2a ? "Player-1" : "Player-2");
let winnerPlayer = whoWinner(calAvg(5, 6, 70), calAvg(7, 8, 9));
console.log("winner is " + winnerPlayer);

console.log(document)
console.log(document.getElementsByTagName('body')[0]) ;
