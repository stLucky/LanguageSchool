import Swiper from 'swiper/bundle';

const swipers = document.querySelectorAll('.swiper-container');
const paginations = document.querySelectorAll('.slider__pagination');
const paginationsFoots = document.querySelector('.slider__pagination--foots');

const buttonsPrev = document.querySelectorAll('.slider__btn--prev');
const buttonsNext = document.querySelectorAll('.slider__btn--next');

for (let i = 0; i < swipers.length; i++) {
  if (swipers[i].closest('.slider--certificates')) {
    new Swiper(swipers[i], {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      simulateTouch: true,
      grabCursor: true,

      spaceBetween: 40,
      slideNextClass: 'slider__slide',
      slidePrevClass: 'slider__slide',
      slideActiveClass: 'slider__slide--active',

      // If we need pagination
      pagination: {
        el: paginations[i],
        clickable: true,
        bulletClass: 'slider__bullet',
        bulletActiveClass: 'slider__bullet--active',
      },

      // Navigation arrows
      navigation: {
        nextEl: buttonsNext[i],
        prevEl: buttonsPrev[i],
      },

      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },

      watchOverflow: true,
    });
  } else {
    new Swiper(swipers[i], {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      simulateTouch: true,
      grabCursor: true,

      // If we need pagination
      pagination: {
        el: paginations[i],
        clickable: true,
        bulletClass: 'slider__bullet',
        bulletActiveClass: 'slider__bullet--active',
      },

      // Navigation arrows
      navigation: {
        nextEl: buttonsNext[i],
        prevEl: buttonsPrev[i],
      },

      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },

      watchOverflow: true,
    });
  }
}

const bulletsFoot = paginationsFoots.querySelectorAll('.slider__bullet');

bulletsFoot.forEach((bullet, i) => {
  if (i % 2 === 0) {
    bullet.classList.add('slider__bullet--left');
  }
});






