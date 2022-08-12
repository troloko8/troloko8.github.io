import { func } from 'prop-types'
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
  //количество видимых славдов
  slidesPerView: 4,
  //бесконечный слайд
  // loop: true,
  // растояние между слайдами
  spaceBetween: 30,

  //навигация по стрелкам
  navigation: {
    nextEl: '.next-btn',
    prevEl: '.prev-btn',
  },

  //Горизонтальный скролл
  scrollbar: {
    el: '.swiper-scrollbar',
    //возможность перетаскивать скролл
    draggable: true,
  },
  //переключение слайдов с помощью колеса мыши
  // mousewheel: {
  //   invert: true,
  // },

  //Адаптив
  breakpoints: {
    // when window width is >= 320px
    1140: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 3,
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