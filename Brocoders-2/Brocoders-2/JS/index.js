$(function () {

  var i = 1;

  function slide(num) {
    $('.slider')
      .find('.slider__picture')
      .eq(num)
      .addClass('active')
      .siblings()
      .removeClass('active');
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

});

$(function() {

  $('#help').on('click', function(e) {
    e.preventDefault();

    $(this)
    .closest('main')
    .addClass('active-help')
  })

  $('#call').on('click', function(e) {
    e.preventDefault();

    $(this)
    .closest('main')
    .addClass('active-call')
  })

  $('.logo').on('click', function(e) {
    e.preventDefault();

    $(this)
    .closest('main')
    .removeClass('active-call active-help')
  })

  $('.menu').on('click', function (e) {
    e.preventDefault();


    if ($('.footer__container_right').hasClass('active-dop-info')) {
      $('.footer__container_right').removeClass('active-dop-info');
    } else {
      if ( $('.header__right').hasClass('active-popup')) {
        $('.header__right').removeClass('active-popup');      
      } else {
        $('.header__right').addClass('active-popup');
      }
    }
  })


  $('.plus-info').on('click', function (e) {
    e.preventDefault();

    $('.footer__container_right').addClass('active-dop-info');
  })
})