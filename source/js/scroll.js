const about = document.querySelector('#about');
const programs = document.querySelector('#programs');
const advantages = document.querySelector('#advantages');
const process = document.querySelector('#process');
const progress = document.querySelector('#progress');
const reviews = document.querySelector('#reviews');
const navigation = document.querySelector('.main-nav');
const header = document.querySelector('.header');
const toggle = document.querySelector('.header__toggle');


navigation.addEventListener('click', (evt) => {
  const scrollToElement = (element) => {
    if (evt.target.href.includes(`#${element.id}`)) {
      element.scrollIntoView({behavior: 'smooth'})
    }
  }

  evt.preventDefault();

  header.classList.remove('header--opened');
  toggle.classList.remove('btn--close');
  toggle.classList.add('btn--burger');

  scrollToElement(about);
  scrollToElement(programs);
  scrollToElement(advantages);
  scrollToElement(process);
  scrollToElement(progress);
  scrollToElement(reviews);
});


