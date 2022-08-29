export function swiper() {
  const swiper1 = new Swiper('.swiper1', {
    //количество видимых славдов
    // slidesPerView: 2.5,
    //бесконечный слайд
    // loop: true,
    // растояние между слайдами
    spaceBetween: 65,

    //навигация по стрелкам
    // navigation: {
    //   nextEl: '.next-btn',
    //   prevEl: '.prev-btn',
    // },

    //Пагинация/ навигация по булетам
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 1,
      //Делаем кастомый булет//также можна делать с фракциями и прочее
      renderBullet: function (index, className) {
        return `<span class='${className}'>${index}</span>`
      }
    },

    // //Горизонтальный скролл
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    //   //возможность перетаскивать скролл
    //   draggable: true,
    // },
    // //переключение слайдов с помощью колеса мыши
    // mousewheel: {
    //   invert: true,
    // },

    //Адаптив
    breakpoints: {
      // when window width is >= 320px
      992: {
        slidesPerView: 2.2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 1.2,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 1.2,
        spaceBetween: 20
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
  }
  )

  const swiper2 = new Swiper('.swiper2', {
    //количество видимых славдов
    // slidesPerView: 2.5,
    //бесконечный слайд
    // loop: true,
    // растояние между слайдами
    spaceBetween: 60,

    //навигация по стрелкам
    // navigation: {
    //   nextEl: '.next-btn',
    //   prevEl: '.prev-btn',
    // },

    //Пагинация/ навигация по булетам
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      dynamicBullets: true,
      //Делаем кастомый булет//также можна делать с фракциями и прочее
      renderBullet: function (index, className) {
        return `<span class='${className}'>${index}</span>`
      }
    },

    //Горизонтальный скролл
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    //   //возможность перетаскивать скролл
    //   draggable: true,
    // },
    //переключение слайдов с помощью колеса мыши
    // mousewheel: {
    //   invert: true,
    // },

    //Адаптив
    breakpoints: {
      // when window width is >= 320px
      992: {
        slidesPerView: 1.5,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
  }
  )
}