import * as flsFunctions from './modules/function.js'


flsFunctions.isWebp()

const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav')

burger.addEventListener('click', function (e) {
  const el = e.target.closest('div')
  el.classList.toggle('active')
  console.log(nav)

  el.classList.contains('active')
    ? nav.classList.add('nav-active')
    : nav.classList.remove('nav-active')
})

// Пример использование js библиотек с помощью webpack в нашем gulp
// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper =  new Swiper()