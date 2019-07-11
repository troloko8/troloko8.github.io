$(function () {

  var pointActive = function ($this, index) {
    $this.closest('.slider__list')
      .find('.slider__item')
      .eq(index)
      .find('.points')
      .find('.points__item')
      .eq(index)
      .addClass('active')
      .siblings()
      .removeClass('active');
  }

  var itemAct = function (index) {
    $('.slider')
      .find('.slider__item')
      .eq(index)
      .addClass('act')
      .siblings()
      .removeClass('act')
  }

  var slideRight = function () {
    $('.slider')
      .find('.act')
      .next()
      .addClass('act')
      .siblings()
      .removeClass('act');
  }

  var slideLeft = function () {
    $('.slider')
      .find('.act')
      .prev()
      .addClass('act')
      .siblings()
      .removeClass('act');
  }

  var generatePoint = function () {
    $('.slider__item').each(function () {
      var point = $('<li>', {
        attr: {
          class: 'points__item'
        },
        html: '<a href="#" class="points__link"></a>'
      });

      $('.points__list').append(point);
    });
  }

  generatePoint();

  $('.points__item').eq(0).addClass('act');

  $('.points__item').on('click', function (e) {
    e.preventDefault();

    var $this = $(this),
      index = $this.index(),
      list = $('.slider__list'),
      value = -100 * index + '%';
    console.log(index);
    pointActive($this, index);
    itemAct(index);

    list.css('transform', 'translateX(' + value + ')');

  })

  $('.slider').swipe({
    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {

      var $this = $(this),
        list = $this.find('.slider__list'),
        active = $this.find('.act'),
        nextItem = active.next(),
        prevItem = active.prev(),
        indexNext = nextItem.index();
      indexPrev = prevItem.index();


      if (nextItem.length) {

        if (direction == 'left') {
          value = -100 * indexNext + '%';
          slideRight()
          pointActive($('.points__item'), indexNext);
          list.css('transform', 'translateX(' + value + ')');
        }
      }

      if (prevItem.length) {

        if (direction == 'right') {
          value = -100 * indexPrev + '%';
          slideLeft()
          pointActive($('.points__item'), indexPrev);
          list.css('transform', 'translateX(' + value + ')');
        }
      }
    }
  });
});

$(function () {

  $('#burger-menu').on('click', function (e) {
    e.preventDefault();

    var burger = $('.burger-menu').hasClass('active');

    

    if (burger) {
      $('.burger-menu').removeClass('active')
    }else {
      $('.burger-menu').addClass('active')
    }

    var $this = $(this),
      container = $this.closest('body'),
      menu = container.find('.menu_fixed');


      console.log(menu.css('display') == 'none');


      if (menu.css('display') == 'flex') {
        menu.css('display', 'none');
      } else {
        menu.css('display', 'flex');
      }

  })

})