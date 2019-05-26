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


menu.addEventListener('click',function() {

  let navDisplay = getComputedStyle(nav).display;

  if (navDisplay == 'none' ) {
    nav.style.display = 'flex';
  }
  if (navDisplay == 'flex' ) {
    nav.style.display = 'none';
  }
})

///////

const logo = document.querySelector('#logo')

menu.addEventListener('click', function(menuDefault) {
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

  

})

/////

