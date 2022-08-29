export function scrollTo() {
  const menuLinks = document.querySelectorAll('[data-goTo]')
  const iconMenu = document.querySelector('.burger')
  const nav = document.querySelector('.navbar')

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
      const posGoToBlock = goToblock.getBoundingClientRect().top + pageYOffset
      // закрываем меню перед скролом 
      if (iconMenu.classList.contains('active')) {
        document.body.classList.remove('_lock')
        nav.classList.remove('nav-active')
        iconMenu.classList.remove('active')
      }

      window.scrollTo({
        top: posGoToBlock,
        behavior: 'smooth'
      })
      e.preventDefault()
    }
  }
}