'use strict'
// export function animationWithScroll() {
//   const animItems = document.querySelectorAll('._anim-items')

//   if (animItems.length > 0) {
//     console.log(window)
//     window.addEventListener('scroll', animOnScroll)

//     function animOnScroll() {

//       for (let index = 0; index < animItems.length; index++) {
//         const animItem = animItems[index]
//         const animItemHeight = animItem.offsetHeight
//         const animItemOffset = offset(animItem).top
//         const animStart = 4

//         let animItemPoint = window.innerHeight - animItemHeight / animStart

//         if (animItemHeight > window.innerHeight) {
//           animItemPoint = window.innerHeight - window.innerHeight / animStart;
//         }

//         if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
//           animItem.classList.add('_active')
//         } else {
//           //если у нас есть этот класс анимация будет делать тольок 1 раз
//           if (!animItem.classList.contains('_anim-no-hide')) {
//             animItem.classList.remove('_active')
//           }
//         }

//       }
//     }

//     function offset(el) {
//       const rect = el.getBoundingClientRect(),
//         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//         scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//       return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
//     }

//     animOnScroll()
//   }
// }


export function navMenu() {
  'use strict'

  // навигация для мобилок
  const isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i)
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i)
    },
    IOS: function () {
      return navigator.userAgent.match(/iPhone|iPod|iPad/i)
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i)
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i)
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.IOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      )
    },
  }

  //работа с субменю 
  if (isMobile.any()) {
    document.body.classList.add('_touch')

    let menuArrows = document.querySelectorAll('.menu__arrow')
    //
    if (menuArrows.length > 0) {
      for (let index = 0; index < menuArrows.length; index++) {
        const menuArrow = menuArrows[index];
        console.log(menuArrow)
        menuArrow.addEventListener('click', function (e) {
          menuArrow.parentElement.classList.toggle('_active')
        })
      }
    }

  } else {
    document.body.classList.add('_pc')
  }

  //бургер меню

  const iconMenu = document.querySelector('.menu__icon')
  const menuBody = document.querySelector('.menu__body')

  if (iconMenu) {
    iconMenu.addEventListener('click', function () {
      document.body.classList.toggle('_lock')
      iconMenu.classList.toggle('_active')
      menuBody.classList.toggle('_active')
    })
  }
  //прокрутка при кроле

  const menuLinks = document.querySelectorAll('.menu__link[data-goTo]')

  if (menuLinks.length > 0) {
    menuLinks.forEach(e => {
      e.addEventListener('click', onClickToMenuLink)
    })
  }

  function onClickToMenuLink(e) {
    const menuLink = e.target
    const blockName = menuLink.dataset.goto
    if (menuLink.dataset.goto && document.querySelector(blockName)) {
      const goToblock = document.querySelector(blockName)
      const posGoToBlock = goToblock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight
      // закрываем меню перед скролом 
      if (iconMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock')
        iconMenu.classList.remove('_active')
        menuBody.classList.remove('_active')
      }

      window.scrollTo({
        top: posGoToBlock,
        behavior: 'smooth'
      })
      e.preventDefault()
    }
  }
}

// export function navMenu() {
//   const popupLinks = document.querySelectorAll('.popup-link')
//   const body = document.querySelector('body')
//   const lockPadding = document.querySelectorAll('.lock-padding')

//   let unlock = true

//   const timeout = 800

//   if (popupLinks.length > 0) {
//     for (let index = 0; index < popupLinks.length; index++) {
//       const popupLink = popupLinks[index]
//       popupLink.addEventListener('click', function (e) {
//         const popupName = popupLink.getAttribute('href').replace('#', '')
//         const curPopup = document.getElementById(popupName)
//         popupOpen(curPopup)
//         e.preventDefault()
//       })
//     }
//   }

//   const popupCloseIcon = document.querySelectorAll('.close-popup')
//   if (popupCloseIcon.length > 0) {
//     for (let index = 0; index < popupCloseIcon.length; index++) {
//       const el = popupCloseIcon[index]
//       el.addEventListener('click', function (e) {
//         popupClose(el.closest('.popup'))
//         e.preventDefault()
//       })
//     }
//   }

//   function popupOpen(curPopup) {

//     if (curPopup && unlock) {
//       const actPopup = document.querySelector('.popup.open')
//       if (actPopup) {
//         popupClose(actPopup, false)
//       } else {
//         bodyLock()
//       }

//       curPopup.classList.add('open')
//       curPopup.addEventListener('click', function (e) {
//         if (!e.target.closest('.popup__content')) {
//           popupClose(e.target.closest('.popup'))
//         }
//       })
//     }
//   }

//   function popupClose(popupActive, doUnlock = true) {
//     if (unlock) {
//       popupActive.classList.remove('open')
//       if (doUnlock) {
//         bodyUnlock()
//       }
//     }
//   }

//   function bodyLock() {
//     let lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px'
//     if (lockPadding.length > 0) {
//       for (let index = 0; index < lockPadding; index++) {
//         const el = lockPadding[index]
//         el.style.paddingRight = lockPaddingValue
//       }
//     }

//     body.style.paddingRight = lockPaddingValue
//     body.classList.add('lock')

//     unlock = false
//     setTimeout(() => {
//       unlock = true
//     }, timeout);
//   }

//   function bodyUnlock() {
//     setTimeout(function () {
//       if (lockPadding.length > 0) {
//         for (let index = 0; index < lockPadding; index++) {
//           const el = lockPadding[index]
//           el.style.paddingRight = '0px'
//         }
//       }

//       body.style.paddingRight = '0px'
//       body.classList.remove('lock')
//     }, timeout)

//     unlock = false
//     setTimeout(() => {
//       unlock = true
//     }, timeout);
//   }

//   (function () {
//     if (!Element.prototype.matches) {
//       Element.prototype.matches = Element.prototype.msMatchesSelector ||
//         Element.prototype.webkitMatchesSelector;
//     }
//   })();

//   (function () {
//     if (!Element.prototype.closest) {
//       Element.prototype.closest = function (s) {
//         var el = this;

//         do {
//           if (Element.prototype.matches.call(el, s)) return el;
//           el = el.parentElement || el.parentNode;
//         } while (el !== null && el.nodeType === 1);
//         return null;
//       };
//     }
//   })();

// }


// window.onload = function () {

// }

// export function parallax() {


//   const parallax = document.querySelector('.parallax')

//   if (parallax) {
//     const content = document.querySelector('.parallax__container')
//     const clouds = document.querySelector('.images-parallax__clouds')
//     const mountains = document.querySelector('.images-parallax__mountains')
//     const human = document.querySelector('.images-parallax__human')

//     //коефициент
//     const forClouds = 40
//     const forMountains = 20
//     const forHuman = 10

//     //скорость анимации

//     const speed = 0.05

//     let positionX = 0, positionY = 0;
//     let coordXprocent = 0, coordYprocent = 0

//     function setMouseParallaxStyle() {

//       const distX = coordXprocent - positionX
//       const distY = coordYprocent - positionY

//       positionX = positionX + (distX * speed)
//       positionY = positionY + (distY * speed)

//       //передаем стили   transform: translate(0px, -100%);
//       clouds.style.cssText = `transform: translate(${positionX / forClouds}%, ${positionY / forClouds}%)`
//       mountains.style.cssText = `transform: translate(${positionX / forMountains}%, ${positionY / forMountains}%)`
//       human.style.cssText = `transform: translate(${positionX / forHuman}%, ${positionY / forHuman}%)`

//       requestAnimationFrame(setMouseParallaxStyle)
//     }

//     setMouseParallaxStyle()

//     parallax.addEventListener('mousemove', function (e) {
//       //получаем высоту и ширину блока

//       const parallaxWidth = parallax.offsetWidth
//       const parallaxHeight = parallax.offsetHeight

//       //ноль по середине
//       const coordX = e.pageX - parallaxWidth / 2
//       const coordY = e.pageY - parallaxHeight / 2

//       //получаем проценты
//       coordXprocent = coordX / parallaxWidth * 100
//       coordYprocent = coordY / parallaxHeight * 100
//     })

//     //паралакс при скроле

//     let thresholdSets = [];
//     for (let i = 0; i <= 1.0; i += 0.005) {
//       thresholdSets.push(i)
//     }

//     const callback = function (entries, observer) {
//       const scrollTopProcent = window.pageYOffset / parallax.offsetHeight * 100;
//       setParallaxItemStyle(scrollTopProcent)
//     }

//     const observer = new IntersectionObserver(callback, {
//       threshold: thresholdSets
//     })

//     observer.observe(document.querySelector('.content'))

//     function setParallaxItemStyle(scrollTopProcent) {
//       content.style.cssText = `transform: translate(0%,${scrollTopProcent / 9}%)`
//       mountains.parentElement.style.cssText = `transform: translate(0%, ${scrollTopProcent / 6}%)`
//       human.parentElement.style.cssText = `transform: translate(0%, ${scrollTopProcent / 30}%)`
//     }
//   }
// }