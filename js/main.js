$(document).ready(function () {
   $('#message-btn').on('click', function () {
      $('.modal__overlay').toggleClass('modal__overlay-open');
      $('body').toggleClass('body__overlay-open');
   });
   $('.modal__btn,.close__modal').on('click', function () {
      $('.modal__overlay').toggleClass('modal__overlay-open');
      $('body').toggleClass('body__overlay-open');
   });
});