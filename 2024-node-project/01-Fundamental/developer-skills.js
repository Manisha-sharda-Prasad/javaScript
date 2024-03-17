'use strict';
//PROBLEM 1--->
//"Given an array of tempratures of 1 day, calculate temprature amplitude, ignore -sensor error."

const tempratures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]; //[ 3,-2]

//1) Understanding the problem:_
//--what is temp amplitude?-ans- difference b/w highest & lowest temp.
//--how to compute max & min temp?
//--what a sensor error? what to do?

//2) Breaking up into sub-problems:_
//--how to ignore errors?
//--find max value and find min value in temp array.
//--Subtract min from max (amplitude) and return it.

const calcTempAltitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
// calcTempAltitude([13, 17, 15, 14]);
// calcTempAltitude([3, -2, -6, -1]);

const amplitude = calcTempAltitude(tempratures);
console.log(amplitude);

//PROBLEM 2--->
//Function should now receive 2 arrays of temps

//1)Understanding the problem:_
//--with 2 arrays, should we implement functionality twice? NO! just Merge 2 Arrays.

////2) Breaking up into sub-problems:_
//--how to Merge 2 Arrays?

const calcTempAltitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAltitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

//-------------------------------------------------------------
// for -loop and if/else--
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number. using for loop, and if else

// Example-
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
function createPhoneNumber(numbers) {
  let phoneNumber = '(';

  // Loop through the first 3 numbers to form the area code
  for (let i = 0; i < 3; i++) {
    phoneNumber += numbers[i];
  }
  phoneNumber += ') ';

  // Loop through the next 3 numbers to form the first part of the phone number
  for (let i = 3; i < 6; i++) {
    phoneNumber += numbers[i];
  }
  phoneNumber += '-';

  // Loop through the remaining numbers to form the second part of the phone number
  for (let i = 6; i < 10; i++) {
    phoneNumber += numbers[i];
  }

  return phoneNumber;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // Output: "(123) 456-7890"

//also--using array methods like slice() and string concatenation inside the function.:

function createPhoneNumber(numbers) {
  // Extracting components of the phone number
  let areaCode = numbers.slice(0, 3).join('');
  let firstPart = numbers.slice(3, 6).join('');
  let secondPart = numbers.slice(6, 10).join('');

  // Formatting the phone number
  return `(${areaCode}) ${firstPart}-${secondPart}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // Output: "(123) 456-7890"

//------------------------------------------------------------------
