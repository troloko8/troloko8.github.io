$('popup-with-form').on('click', function(e) {
  e.preventDefault();
})

$('.popup-with-form').magnificPopup({
  type: 'inline',
  focus: '#name'
});