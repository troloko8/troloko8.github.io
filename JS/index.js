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

  var coloringDots = function(index) {
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
        attr : {
          class : 'slider__item-dot'
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

      if(nextItem.length) {
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


///// form 

const form = document.querySelector('#form');
const send = document.querySelector('#send');
const modulWindow = document.querySelector('#modul');

send.addEventListener('click', function (e) {
  e.preventDefault();

  if (validateForm(form)) {

    let formData = new FormData(form);
    // formData.append ("name", form.elements.name.value);
    // formData.append ("phone", form.elements.phone.value);
    // formData.append ("comment", form.elements.comment.value);
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
////