import * as flsFunctions from './modules/function.js'

flsFunctions.isWebp()

const burger = document.querySelector('.burger')
const nav = document.querySelector('.navbar')


burger.addEventListener('click', function (e) {
  const el = e.target.closest('div')
  el.classList.toggle('active')

  el.classList.contains('active')
    ? nav.classList.add('nav-active')
    : nav.classList.remove('nav-active')
})

const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 60,

  navigation: {
    nextEl: '.next-btn',
    prevEl: '.prev-btn',
  },
  breakpoints: {
    // when window width is >= 320px
    992: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    }
  }
}
)

// const burger = document.querySelector('.burger')
// const nav = document.querySelector('.nav')

// burger.addEventListener('click', function (e) {
//   const el = e.target.closest('div')
//   el.classList.toggle('active')
//   console.log(nav)

//   el.classList.contains('active')
//     ? nav.classList.add('nav-active')
//     : nav.classList.remove('nav-active')
// })

// Пример использование js библиотек с помощью webpack в нашем gulp
// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper =  new Swiper()