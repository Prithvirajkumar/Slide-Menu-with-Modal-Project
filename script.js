const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const model = document.getElementById('model');

// toggle navigation 
toggle.addEventListener('click', () => document.body.classList.toggle('show-nav'));

// show model
open.addEventListener('click', () => model.classList.add('show-model'));

// close model
close.addEventListener('click', () => model.classList.remove('show-model'));

// close model on outside click 
window.addEventListener('click', e => e.target == model ? model.classList.remove('show-model') : false);