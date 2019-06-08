const menu = document.querySelector("#burger-menu");
const nav = document.querySelector("nav");
const body = document.querySelector('body');


menu.addEventListener('click', function () {

  let navDisplay = getComputedStyle(nav).display;

  if (navDisplay == 'none') {
    nav.style.display = 'flex';
    nav.style.opacity = '.99';
    body.style.overflow = 'hidden';
  }
  if (navDisplay == 'flex') {
    nav.style.display = 'none';
    nav.style.opacity = '0';
    body.style.overflow = 'visible';
  }
});

///////

const logo = document.querySelector('#logo')

menu.addEventListener('click', function (menuDefault) {
  menuDefault.preventDefault();

  let className = menu.getAttribute("class");
  let nameLogo = logo.getAttribute('class');

  if (className == "burger-menu") {
    menu.classList.add('active');
  } else {
    menu.classList.remove('active');
  }

  if (nameLogo == "logo") {
    logo.classList.add('logo_active');
  } else {
    logo.classList.remove('logo_active');
  }
});

///// acc-team

const team = document.querySelector('#team');
const ulTeam = document.querySelector('#team').children;

team.addEventListener('click', function (e) {
  let li = e.target.closest('li');

  if (!li.classList.contains("active")) {
    for (i = 0; i < ulTeam.length; i++) {
      ulTeam[i].classList.remove('active');
    }
    li.classList.add('active');
  } else {
    li.classList.remove('active');
  }
});

/////// menu-acc

const menuAcc = document.querySelector('#menu-accordeon');
const ulMenuAcc = document.querySelector('.menu-accordeon__list').children;

menuAcc.addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.closest('a')) {
    let li = e.target.closest('li');

    if (!li.classList.contains("active")) {
      for (i = 0; i < ulMenuAcc.length; i++) {
        ulMenuAcc[i].classList.remove('active');
        console.log(ulMenuAcc[i])
      }
      li.classList.add('active');
    } else {
      li.classList.remove('active');
    }
  }

});

////// reviews

const reviewsLi = document.querySelector('#reviews').children;
const controllerLi = document.querySelector('#controller').children;
const controller = document.querySelector('#controller');

controller.addEventListener('click', function (e) {
  e.preventDefault();
  let li = e.target.closest('li');

  for (let i = 0; i < controllerLi.length; i++) {
    controllerLi[i].classList.remove('active');
    if (controllerLi[i] == li) {
      reviewsLi[i].classList.add('widget-reviews__box_active');
    } else {
      reviewsLi[i].classList.remove('widget-reviews__box_active');
    }
  }
  li.classList.add('active')
})




///// slider

// const slider = document.querySelector('#slider');
// const arrowLeft = document.querySelector('#arrow-left')
// const arrowRight = document.querySelector('#arrow-right')
// const sliderItems = document.querySelector('.slider__list').children
// const sliderList = document.querySelector('.slider__div-hidden');

// arrowRight.addEventListener('click', function () {
//   let sliderWidth = getComputedStyle(sliderList).width;
//   let width = parseInt(sliderWidth);

//   let right = getComputedStyle(slider).right;
//   let moveRight = parseInt(right)/width * 100;
//   if (moveRight < 100) {
//     slider.style.right = (moveRight + 100) + '%';
//   } else {
//     slider.style.right = (0);
//   }
// });

// arrowLeft.addEventListener('click', function () {
//   let sliderWidth = getComputedStyle(sliderList).width;
//   let width = parseInt(sliderWidth);

//   let right = getComputedStyle(slider).right;
//   let moveRight = parseInt(right)/width * 100;
//   console.log(moveRight);
//   if (moveRight >= 100) {
//     slider.style.right = (moveRight - 100) + '%';
//    } else {
//      slider.style.right = ('100%');
//    }
// });

////slider 2

// const slider = document.querySelector('.slider');
// const list = document.querySelector('.slider__list');
// const countItems = list.children.length;
// let currentSlide = 0;

// slider.addEventListener('click', function (e) {
//   const target = e.target;

//   if (target.classList.contains('arrow-left')) {
//     slideLeft();
//   }

//   if (target.classList.contains('arrow-right')) {

//     sliderRight();

//   }
// })

// function sliderRight() {
//   if (currentSlide < countItems - 1) {
//     currentSlide++;
//     translateX(currentSlide);
//   } else {
//     currentSlide = 0;
//     translateX(currentSlide);
//   }
// }

// function slideLeft() {
//   if (currentSlide > 0) {
//     currentSlide--;
//     translateX(currentSlide);
//   } else {
//     currentSlide = countItems - 1;
//     translateX(currentSlide);
//   }
// }

// function translateX(indexSlide) {
//   list.style.transform = `translateX(${-indexSlide * 100}%)`;
// }

////slider Jquery

$(function () {

  var coloringDots = function (index) {
    $('.slider')
      .find('.slider__item-dot')
      .eq(index)
      .addClass('active')
      .siblings()
      .removeClass('active');
  }

  var generateDots = function () {
    $('.slider__item').each(function () {
      var dot = $('<li>', {
        attr: {
          class: 'slider__item-dot'
        }
      });

      $('.slider__list-dot').append(dot);

    })
  }

  generateDots();

  var moveSlide = function (container, slideNum) {

    var
      items = container.find('.slider__item'),
      activeSlide = items.filter('.active'),
      reqItem = items.eq(slideNum),
      reqIndex = reqItem.index(),
      list = container.find('.slider__list'),
      duration = 500;

    if (reqItem.length) {
      list.animate({
        'left': -reqIndex * 100 + '%'
      }, duration, function () {

        activeSlide.removeClass('active');
        reqItem.addClass('active');
        coloringDots(slideNum);

      });
    }
  }


  $('.arrow').on('click', function (e) {
    e.preventDefault();

    var $this = $(this),
      container = $this.closest('.slider'),
      items = container.find('.slider__item'),
      activeItem = items.filter('.active'),
      nextItem = activeItem.next(),
      prevItem = activeItem.prev();


    if ($this.hasClass('arrow-right')) {

      if (nextItem.length) {
        moveSlide(container, nextItem.index());
      } else {
        moveSlide(container, items.first().index());

      }
    } else {

      if (prevItem.length) {
        moveSlide(container, prevItem.index());
      } else {
        moveSlide(container, items.last().index());
      }
    }

  });


  $('body').on('click', '.slider__item-dot', function () {

    var $this = $(this),
      container = $this.closest('.slider'),
      index = $this.index();

    console.log($this);
    moveSlide(container, index);
    coloringDots(index);

  });



});

//// onePageScroll

$(function () {

  var activePagination = function (index) {
    $('.pagination')
      .find('.pagination__item')
      .eq(index)
      .addClass('active')
      .siblings()
      .removeClass('active');
  }

  var generatePagination = function () {
    $('.page').each(function () {
      var dot = $('<li>', {
        attr: {
          class: 'pagination__item'
        },
        html : '<a href="#" class="pagination__link pagination__link"></a>'
      });

      $('.pagination__list').append(dot);
    })
  }

  generatePagination();

  let inscroll = false;

  var onePageScroll = function ($this, sectionNum) {
    var
      section = $this.find('.page'),
      activeSection = section.filter('.act'),
      reqSection = section.eq(sectionNum),
      reqIndex = reqSection.index(),
      maincontent = $this.find('.maincontent');

      if (inscroll == false) {
          inscroll = true;
          if (reqSection.length) {
            maincontent.animate({
              'top': -reqIndex * 100 + "%"
            }, 800, function () {
      
              activeSection.removeClass('act');
              reqSection.addClass('act');
              activePagination(sectionNum);
              inscroll = false;
            })
          }
      }

  }

  $('body').on('wheel', function (e) {

    var $this = $(this),
      section = $this.find('.page'),
      activeSection = section.filter('.act'),
      nextSection = activeSection.next(),
      prevSection = activeSection.prev();

    if (e.originalEvent.wheelDelta <= 0) {

      if (nextSection.length) {
        onePageScroll($this, nextSection.index());
      } else {
        onePageScroll($this, section.first().index());
      }

    } else {

      if (prevSection.length) {
        onePageScroll($this, prevSection.index());
      } else {
        onePageScroll($this, section.last().index());
      }
    }

  })

  $(document).on('keydown', function(e) {
    var $this = $(this),
    section = $this.find('.page'),
    activeSection = section.filter('.act'),
    nextSection = activeSection.next(),
    prevSection = activeSection.prev();

    switch(e.keyCode) {
      case 40:
        onePageScroll($this, nextSection.index());
        break;
      case 38:
        onePageScroll($this, prevSection.index());
        break;
    }
  });

  $('body').on('click', '.pagination__item', function (){

    var  $this = $(this),
    index = $this.index();
    
    onePageScroll($('body'), index);
    activePagination(index);
  })

  $('body').on('click', '.navigation__item', function (){
    
    var  $this = $(this),
    index = $this.index();
    console.log(index++);
    
    onePageScroll($('body'), index++);
  })

  $('body').on('click', '.logo', function (){
    
    var  $this = $(this),
    index = $this.index();
    console.log(index);
    
    onePageScroll($('body'), index);
  })

  $(window).swipe({
    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
      alert(direction);
    }
  });

})

///// form 

const form = document.querySelector('#form');
const send = document.querySelector('#send');
const modulWindow = document.querySelector('#modul');

send.addEventListener('click', function (e) {
  e.preventDefault();

  if (validateForm(form)) {

    let formData = new FormData(form);
    formData.append("to", "troloko8@gmail.com");

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
    xhr.send(formData);

    xhr.addEventListener('load', function () {
      modulWindow.style.display = 'flex';


      if (xhr.status == 200) {
        document.querySelector('#modul span').innerHTML = xhr.response.message;
      } else {
        document.querySelector('#modul span').innerHTML = ('Простите ошибка - ' + xhr.status);
      }
    })

  }
});


function validateForm(f) {
  let valid = true;
  if (!validateField(f.elements.name)) {
    valid = false
  }
  if (!validateField(f.elements.phone)) {
    valid = false
  }
  if (!validateField(f.elements.comment)) {
    valid = false
  }

  return valid;
}

function validateField(field) {
  if (field.validationMessage) {
    field.style.border = '1px solid red';
    field.setAttribute('placeholder', field.validationMessage);
  } else {
    field.style.border = '';
  }

  return field.checkValidity();
}

const closeModul = document.querySelector('#close-modul');

closeModul.addEventListener('click', function (e) {
  e.preventDefault();

  modulWindow.style.display = 'none';
  document.querySelector('.form__reset').click();
})

//// video

 $(function() {

  const video = document.querySelector('video');
  const play = document.querySelector('.video__pause');
  let videoCurrent = document.querySelector('.video__current')

  play.addEventListener('click', function(e) {

    if (video.paused) {
      video.play();
      setInterval(currentMove, 1000/66);
    } else {
      video.pause();
    }
  })
  
    function currentMove () {
      console.log(video.volume * 100 + '%');
       videoCurrent.style.width = video.currentTime*100/video.duration + '%';
       $('.video__volume-current').width(video.volume * 100 + '%');
    }

    $('.video__total').on('click', function(e) {
      var x = (e.pageX - this.offsetLeft)/$(this).width();
      video.currentTime = x * video.duration;
    })

    $('.video__volume-control').on('click', function () {
      console.log(video.volume)

      if(video.volume > 0) {
        video.volume = 0;
      } else {
        video.volume = 1;
      }
       
    })

    $('.video__volume-progress').on('click', function(e){
      console.log(video.volume);
      var x = (e.pageX - this.offsetLeft)/$(this).width();
      video.volume = x ;

    })
    
 })
