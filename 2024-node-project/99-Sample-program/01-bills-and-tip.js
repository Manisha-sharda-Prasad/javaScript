// Program
// 1. Array iterate
// 2. function

// ==== A. Function declation =====
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  console.log("sum : ", sum);
  return sum / arr.length;
};

const calcTotal = function (bill, tip) {
  return bill + tip;
};

// ==== B. Variable declation =====
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

// === start ===
const noOfPerson = bills.length;

for (let p = 1; p <= noOfPerson; p++) {
  tips[p] = calcTip(bills[p]);
  totals[p] = calcTotal(bills[p], tips[p]);
}

//using calcTip function--
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);

//using calcAverage function-
console.log("Average : ", calcAverage(bills));
console.log("Average : ", calcAverage(tips));
console.log("Average : ", calcAverage(totals));
