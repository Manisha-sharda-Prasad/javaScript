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
