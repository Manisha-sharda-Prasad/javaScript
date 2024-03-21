'use strict';

//using Event Listener--

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); //querySelectorAll for multiple

//1.Removing hidden class used in html, on .modal & .overlay class--
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

//2.Adding hidden .class back , on on .modal & .overlay class --
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//3.Handling An Esc. Key Press event (e)----

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  //if press key is escape & modal !doesn't contains the hidden class..closeModal-
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//------------------------------------------------------
