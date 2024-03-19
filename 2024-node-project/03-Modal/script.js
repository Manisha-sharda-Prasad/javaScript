'use strict';

//using Event Listener--

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); //querySelectorAll for multiple
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', function () {
    console.log('Button clicked');
    //1.removing hidden class used in html, on .modal & .overlay class--
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

btnCloseModal.addEventListener('click', function () {
  console.log('Button clicked');
  //2.adding hidden .class back , on on .modal & .overlay class--
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
