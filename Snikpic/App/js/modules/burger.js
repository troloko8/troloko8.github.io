const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav')


burger.addEventListener('click', function (e) {
  const el = e.target.closest('div')
  el.classList.toggle('active')

  el.classList.contains('active')
    ? nav.classList.add('nav-active')
    : nav.classList.remove('nav-active')
})