
export function navMenu() {
  'use strict'
  const burger = document.querySelector('.burger')
  const nav = document.querySelector('.navbar')


  burger.addEventListener('click', function (e) {
    const el = e.target.closest('div')
    el.classList.toggle('active')

    if (el.classList.contains('active')) {
      nav.classList.add('nav-active')
      document.body.classList.add('_lock')
    } else {
      nav.classList.remove('nav-active')
      document.body.classList.remove('_lock')
    }
    // el.classList.contains('active')
    //   ? nav.classList.add('nav-active')
    //   : nav.classList.remove('nav-active')
  })

  // // навигация для мобилок
  // const isMobile = {
  //   Android: function () {
  //     return navigator.userAgent.match(/Android/i)
  //   },
  //   BlackBerry: function () {
  //     return navigator.userAgent.match(/BlackBerry/i)
  //   },
  //   IOS: function () {
  //     return navigator.userAgent.match(/iPhone|iPod|iPad/i)
  //   },
  //   Opera: function () {
  //     return navigator.userAgent.match(/Opera Mini/i)
  //   },
  //   Windows: function () {
  //     return navigator.userAgent.match(/IEMobile/i)
  //   },
  //   any: function () {
  //     return (
  //       isMobile.Android() ||
  //       isMobile.BlackBerry() ||
  //       isMobile.IOS() ||
  //       isMobile.Opera() ||
  //       isMobile.Windows()
  //     )
  //   },
  // }

  // //работа с субменю 
  // if (isMobile.any()) {
  //   document.body.classList.add('_touch')

  //   let menuArrows = document.querySelectorAll('.menu__arrow')
  //   //
  //   if (menuArrows.length > 0) {
  //     for (let index = 0; index < menuArrows.length; index++) {
  //       const menuArrow = menuArrows[index];
  //       console.log(menuArrow)
  //       menuArrow.addEventListener('click', function (e) {
  //         menuArrow.parentElement.classList.toggle('_active')
  //       })
  //     }
  //   }

  // } else {
  //   document.body.classList.add('_pc')
  // }

  // //бургер меню

  // const iconMenu = document.querySelector('.menu__icon')
  // const menuBody = document.querySelector('.menu__body')

  // if (iconMenu) {
  //   iconMenu.addEventListener('click', function () {
  //     document.body.classList.toggle('_lock')
  //     iconMenu.classList.toggle('_active')
  //     menuBody.classList.toggle('_active')
  //   })
  // }
  // //прокрутка при кроле

  // const menuLinks = document.querySelectorAll('.menu__link[data-goTo]')

  // if (menuLinks.length > 0) {
  //   menuLinks.forEach(e => {
  //     e.addEventListener('click', onClickToMenuLink)
  //   })
  // }

  // function onClickToMenuLink(e) {
  //   const menuLink = e.target
  //   const blockName = menuLink.dataset.goto
  //   if (menuLink.dataset.goto && document.querySelector(blockName)) {
  //     const goToblock = document.querySelector(blockName)
  //     const posGoToBlock = goToblock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight
  //     // закрываем меню перед скролом 
  //     if (iconMenu.classList.contains('_active')) {
  //       document.body.classList.remove('_lock')
  //       iconMenu.classList.remove('_active')
  //       menuBody.classList.remove('_active')
  //     }

  //     window.scrollTo({
  //       top: posGoToBlock,
  //       behavior: 'smooth'
  //     })
  //     e.preventDefault()
  //   }
  // }
}