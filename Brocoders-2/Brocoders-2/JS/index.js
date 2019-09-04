  const slider = document.querySelector('.slider');
  const slides = slider.children;
 
   let i = 1;

   function slide(num) {
    
    for(let x = 0; x < 3; x++) {
      slides[x].classList.remove('active');
     };
     slides[num].classList.add('active');
   }

   function timerSlide() {
     setTimeout(function () {

       slide(i)
       i++
       if (i < 3) {
         timerSlide();
       } else {
         i = 0;
         timerSlide();
       }
     }, 10000)
   }

   timerSlide();




  // $('#help').on('click', function(e) {
  //   e.preventDefault();

  //   $(this)
  //   .closest('main')
  //   .addClass('active-help')
  // })

  const help = document.querySelector('#help')

  help.addEventListener('click', function(e) {
    e.preventDefault();

    this.closest('main').classList.add('active-help');
  })

  const call = document.querySelector('#call')

  call.addEventListener('click', function(e) {
    e.preventDefault();

    this.closest('main').classList.add('active-call');
  })


  // $('#call').on('click', function(e) {
  //   e.preventDefault();

  //   $(this)
  //   .closest('main')
  //   .addClass('active-call')
  // })

  // $('.logo').on('click', function(e) {
  //   e.preventDefault();

  //   $(this)
  //   .closest('main')
  //   .removeClass('active-call active-help')
  // })

  const logo = document.querySelector('.logo')

  logo.addEventListener('click', function(e) {
    e.preventDefault();

    this.closest('main').classList.remove('active-call', 'active-help');
  })

  // $('.menu').on('click', function (e) {
  //   e.preventDefault();

  //   if ($('.footer__container_right').hasClass('active-dop-info')) {
  //     $('.footer__container_right').removeClass('active-dop-info');
  //   } else {
  //     if ( $('.header__right').hasClass('active-popup')) {
  //       $('.header__right').removeClass('active-popup');      
  //     } else {
  //       $('.header__right').addClass('active-popup');
  //     }
  //   }
  // })

  const menu = document.querySelector('.menu'),
        footerRight = document.querySelector('.footer__container_right'),
        headerRight = document.querySelector('.header__right');
             
  menu.addEventListener('click', function(e) {
    e.preventDefault();

    if (footerRight.classList.contains('active-dop-info')) {
      footerRight.classList.remove('active-dop-info')
    } else {
      if (headerRight.classList.contains('active-popup') ) {
        headerRight.classList.remove('active-popup')
      } else {
        headerRight.classList.add('active-popup')
      }
    }
  })

  const plusInfo = document.querySelector('.plus-info');

  plusInfo.addEventListener('click', function(e) {
    e.preventDefault();

    footerRight.classList.add('active-dop-info')
  })

  const mainBlock = document.querySelector('.main');
  const header = document.querySelector('.header');
  const headerHeight = header.clientHeight ;


  window.addEventListener('scroll', function() {
     if (this.pageYOffset > headerHeight) {
      header.classList.add('fixed-header');
       mainBlock.style.paddingTop = `${headerHeight}px`
     } else {
      header.classList.remove('fixed-header');
      mainBlock.style.paddingTop = '0'
     }
    //  console.log(mainBlock.style.padding = `${headerHight}px`)
  })

  // $(window).on('scroll', function() {

  //   let mainBlock = $('.main'),
  //       headerHight = $('header').css('height');

  //   if($(this).scrollTop() > 100) {
  //     $('header').addClass('fixed-header');
  //     mainBlock.css(`padding-top`, `${headerHight} `);
  //   } else {
  //     $('header').removeClass('fixed-header');
  //     mainBlock.css(`padding-top`, `0 `)
  //   }
  // })


