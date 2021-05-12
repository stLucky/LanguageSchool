const buttonsContainer = document.querySelector('.programs__list');
const buttons = document.querySelectorAll('.programs__btn');

buttonsContainer.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('programs__btn')) {
    evt.preventDefault();

    buttons.forEach((btn) => {
      btn.classList.remove('programs__btn--active');
    });

    evt.target.classList.add('programs__btn--active');
  }
});
