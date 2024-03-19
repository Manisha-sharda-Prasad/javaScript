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
