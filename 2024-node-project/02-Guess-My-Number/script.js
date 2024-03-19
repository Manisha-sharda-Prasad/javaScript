'use strict';

//-------------------------------
//Selecting and manipulating Elements-->

// console.dir(document);
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉Correct Number!!!';

// //dom-manipulation-in .class-

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// //added.value property(inbuilt) as .guess class doesnt have any text -argument.
// //manipulate the element, set a value--
// document.querySelector('.guess').value = 23;

// console.log(document.querySelector('.guess').value);

//-------------------------------------------------------------

//Handling Click Events-->

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//document.querySelector('.number').textContent = secretNumber;
console.log('Secret number', secretNumber);

//adding Event listener Method(in-built)--
//type of event-'click'//passing click as agrguments--
//function() inside a addEventListener function--
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log('guess :: ', typeof guess, guess);

  // when there is no input--
  if (!guess) {
    document.querySelector('.message').textContent = '⛔No Number';
    document.querySelector('.score').textContent = --score;
    // when guess is correct--
  } else if (guess === secretNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.color = '#60b347';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('.message').textContent = '🥳🥳🎯Correct Number!!!';
    document.querySelector('.score').textContent = ++score;
    highscore = score > highscore ? score : highscore;
    document.querySelector('.highscore').textContent = highscore;
    //when guess is high--
  } else if (guess > secretNumber) {
    abc('high');
    //when guess is low--
  } else if (guess < secretNumber) {
    abc('low');
  }
});

function abc(lowOrHigh) {
  if (score > 1) {
    document.querySelector('.message').textContent = 'too ' + lowOrHigh;
    document.querySelector('.score').textContent = --score;
  } else {
    document.querySelector('.message').textContent = '☹️you lost the game!!!';
    document.querySelector('.score').textContent = 0;
  }
}

//Also--
// document.getElementsByClassName('check');
// let div1 = document.getElementById('id-1');...

//again-button -> with again .class--
const againBtnListner = function () {
  console.log('again button is clicked');

  // reset
  // 1. variable - score, secretNumber
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log('secretNumber again ', secretNumber);
  score = 20;

  // 2. Dom - guess text feild - undefined , message label , score label, bg-clor to black, ? label
  //2.1. input - value
  document.querySelector('.guess').value = '';
  //2.2. text content
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  //2.3style
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.color = 'black';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
};
document.querySelector('.again').addEventListener('click', againBtnListner);
//-------------------------------------------------------
