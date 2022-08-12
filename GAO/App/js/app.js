import * as flsFunctions from './modules/function.js'


flsFunctions.isWebp()

function switcher() {
  const steps = document.querySelectorAll('.form__step')
  const items = document.querySelectorAll('.progress__item')
  const progress = document.querySelector('.progress__line-filled')
  const lenghtSteps = steps.length
  const btnNext = document.querySelector('.btn-next')
  const btnBack = document.querySelector('.btn-back')
  let indexOfStep = 0

  function toggleBackBtn(index) {
    if (index === 0) {
      btnBack.style.display = 'none'
    } else {
      btnBack.style.display = 'flex'
    }
  }

  toggleBackBtn(indexOfStep)

  function addActClass(index) {
    steps.forEach((el, num) => {
      el.classList.remove('act-step')
      if (num > index) {
        items[num].classList.remove('active')
      }
    })
    steps[index].classList.add('act-step')
    items[index].classList.add('active')
    console.log(progress)
    progress.style.width = `${index * 100 / (lenghtSteps - 1)}%`
    console.log({ index })

    toggleBackBtn(index)


  }


  steps[indexOfStep].classList.add('act-step')

  btnNext.addEventListener('click', function () {
    if (lenghtSteps - 1 === indexOfStep) {
      btnNext.href = './finalStep.html'
    } else {
      indexOfStep += 1
      addActClass(indexOfStep)
    }
  })

  btnBack.addEventListener('click', function () {
    if (indexOfStep >= 0) {
      indexOfStep -= 1
      addActClass(indexOfStep)
    }
  })

}

if (document.querySelector('.btn-next')) {
  switcher()
}


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