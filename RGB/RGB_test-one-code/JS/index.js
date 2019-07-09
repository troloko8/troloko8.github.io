//popup
$(function () {

  $('.close').on('click', function () {

    $('.popup').css('display', 'none');
  })

  $('.consultation').on('click', function () {

    $('.popup').css('display', 'flex');
  })


});

//slider

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

      $('.points').append(point);
    });
  }

  generatePoint();

  $('.points__item').eq(0).addClass('active');

  $('.points__item').on('click', function (e) {
    e.preventDefault();

    var $this = $(this),
      index = $this.index(),
      list = $('.slider__list'),
      value = -100 * index + '%';

    pointActive($this, index);
    itemAct(index);

    list.css('transform', 'translateX(' + value + ')');

  })

  $('.slider__container').swipe({
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



//form 

$(".button_form").on('click', function (e) {
  e.preventDefault();
  var ths = $(this).closest('.form');
  console.log(ths);
  $.ajax({
    type: "POST",
    url: "php/mail.php",
    data: ths.serialize()
  }).done(function () {
    alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
    setTimeout(function () {
      ths.trigger("reset");
    }, 1000);
  });
  return false;
});