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

function switcherProducts() {
  const products = document.querySelectorAll('.products__container')
  const navList = document.querySelector('.products-navbar__list')
  const navChildrens = [...navList.children]


  function toggleActiveClass(index) {
    products.forEach((el, id) => {
      navChildrens[id].classList.remove('active-nav')
      el.classList.remove('active-container')
    })
    navChildrens[index].classList.add('active-nav')
    products[index].classList.add('active-container')
  }

  toggleActiveClass(0)

  navList.addEventListener('click', function (e) {
    e.preventDefault()
    const item = e.target.closest('li')
    const index = navChildrens.indexOf(item)
    if (item) {
      toggleActiveClass(index)
    }
  })

}

switcherProducts()

if (document.querySelector('.swiper')) {
  const swiper = new Swiper('.swiper', {
    //количество видимых славдов
    slidesPerView: 1,
    //бесконечный слайд
    // loop: true,
    // растояние между слайдами
    // spaceBetween: 30,

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

  }
  )
}

function languageSwitcher() {
  const lanSwitcher = document.querySelector('.language')
  const nameLanguage = document.querySelector('.language__name')

  lanSwitcher.addEventListener('click', function (e) {
    console.log(e.target)
    if (e.target.closest('.language')) {
      lanSwitcher.classList.toggle('active-lang')

      if (e.target.closest('.language__item')) {
        nameLanguage.innerText = e.target.closest('.language__item').innerText
      }
    }


  })


}

languageSwitcher()