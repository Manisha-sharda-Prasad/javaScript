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
