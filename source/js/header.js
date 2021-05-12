const toggle = document.querySelector('.header__toggle');
const header = document.querySelector('.header');


header.classList.remove('header--nojs');

toggle.addEventListener('click', () => {
  header.classList.toggle('header--opened')

  if (toggle.classList.contains('btn--burger')) {
    toggle.classList.remove('btn--burger');
    toggle.classList.add('btn--close');
  } else {
    toggle.classList.remove('btn--close');
    toggle.classList.add('btn--burger');
  }
})
