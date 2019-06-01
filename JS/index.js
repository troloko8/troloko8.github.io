// //Number
// //String
// //bulean
// //object
// //undefined

// var name = "Анатолий";

// console.log (name);

// name = "Logan";

// console.log (name);

// ////////

// if (name == "Logan") {
//   console.log ("Логан так Логан");
// }
// else {
//   console.log ("Не Логан")
// }
// ///////

// for (i=0; i<10; i++) {
//   console.log(i);
// }

// //////////

// function sum(p1,p2,p3) {
//   return x = p1+p2+p3; 
// }
//  var y = sum(10,20,30);
// console.log (y);

// var i = sum(23.23, 1.2121, 11.11);
// console.log (i);

// ///////

// var hello = ["Привет", "loftschool"];

// hello.push(", я изучаю", "javascript");

// console.log (hello.length);

// for(i = 0; i < hello.length; i++) {
//   console.log(hello[i]);
// }

// ////

// var num = [1,322,22,33,232,44,33,444,555,55];

// for( i = 0; i < num.length; i++) {
//   if (num[i] > 100) {
//     console.log(num[i]);
//   }
// }

// //////

// var obj = {name:"Anatolii", lastName:"Tytarenko", age:23};

// console.log(obj.name);
// console.log(obj.lastName);
// console.log(obj.age);

// obj.name = "Oksana";

// console.log(obj.name);
// console.log(obj.lastName);
// console.log(obj.age);

// ////////

//  function hell0(human) {
//    return  ("Привет меня зовут " + human.name+ " "+ human.lastName + " " + "и мне " + obj.age + " " + "лет!");
//  }

//  var f = hell0(obj);


//  console.log(f);



/////// task 

const menu = document.querySelector("#burger-menu");
const nav = document.querySelector("nav");


menu.addEventListener('click', function () {

  let navDisplay = getComputedStyle(nav).display;

  if (navDisplay == 'none') {
    nav.style.display = 'flex';
    nav.style.opacity = '.99';
  }
  if (navDisplay == 'flex') {
    nav.style.display = 'none';
    nav.style.opacity = '0';
  }
});

///////

const logo = document.querySelector('#logo')

menu.addEventListener('click', function (menuDefault) {
  menuDefault.preventDefault();

  let className = menu.getAttribute("class");
  let nameLogo = logo.getAttribute('class');

  if (className == "burger-menu") {
    menu.setAttribute('class', 'burger-menu active');
  } else {
    menu.setAttribute('class', 'burger-menu');
  }

  if (nameLogo == "logo") {
    logo.setAttribute('class', 'logo_active');
  } else {
    logo.setAttribute('class', 'logo');
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
const ulMenuAcc = document.querySelector('#menu-accordeon').children;

menuAcc.addEventListener('click', function (e) {
  e.preventDefault();
  let li = e.target.closest('li');

  if (!li.classList.contains("active")) {
    for (i = 0; i < ulMenuAcc.length; i++) {
      ulMenuAcc[i].classList.remove('active');
    }
    li.classList.add('active');
  } else {
    li.classList.remove('active');
  }
});

////// reviews

const reviewsLi = document.querySelector('#reviews').children;
const controllerLi = document.querySelector('#controller').children;
const controller = document.querySelector('#controller');

controller.addEventListener('click', function(e) {
  e.preventDefault();
  let li = e.target.closest('li');
  
  for(let i = 0; i < controllerLi.length; i++){
    controllerLi[i].classList.remove('active');
    if(controllerLi[i] == li) {
      reviewsLi[i].classList.add('widget-reviews__box-active');
    } else {
      reviewsLi[i].classList.remove('widget-reviews__box-active');
    }
  }
  li.classList.add('active')
})




///// slider

const slider = document.querySelector('#slider');
const arrowLeft = document.querySelector('#arrow-left')
const arrowRight = document.querySelector('#arrow-right')


arrowRight.addEventListener('click', function () {
  let sliderList = document.querySelector('.slider__list');
  let sliderWidth = getComputedStyle(sliderList).width;
  let width = parseInt(sliderWidth);

  let right = getComputedStyle(slider).right;
  let moveRight = parseInt(right)/width * 100;
  if (moveRight < 100) {
    slider.style.right = (moveRight + 100) + '%';
  } else {
    slider.style.right = (0);
  }
});

arrowLeft.addEventListener('click', function () {
  let sliderList = document.querySelector('.slider__list');
  let sliderWidth = getComputedStyle(sliderList).width;
  let width = parseInt(sliderWidth);

  let right = getComputedStyle(slider).right;
  let moveRight = parseInt(right)/width * 100;
  console.log(moveRight);
  if (moveRight >= 100) {
    slider.style.right = (moveRight - 100) + '%';
   } else {
     slider.style.right = ('100%');
   }
});


///// form 

const form = document.querySelector('#form');
const send = document.querySelector('#send');

send.addEventListener('click', function(e) {
  e.preventDefault();



  if (validateForm(form)) {
    
    let formData = new FormData();
    formData.append ("name", form.elements.name.value);
    formData.append ("phone", form.elements.phone.value);
    formData.append ("comment", form.elements.comment.value);
    formData.append ("to", "troloko8@gmail.com");

  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
  xhr.send(formData);

   xhr.addEventListener('load', function() {
     alert(xhr.response.message);
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
  } else {
    field.style.border = '';
  }
  
  return field.checkValidity();
 }