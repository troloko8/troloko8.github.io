$('.slider__main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  draggable: false,
  asNavFor: '.slider__nav'
});
 $('.slider__nav').slick({
   slidesToShow: 4,
   slidesToScroll: 1,
   asNavFor: '.slider__main',
   dots: false,
   focusOnSelect: true,
 });