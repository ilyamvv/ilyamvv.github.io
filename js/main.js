$(document).ready(function () {
  var $page = $('html, body');
  $('a[href*="#"]').click(function () {
    $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 70
    }, 400);
    return false;
  });
  //E-mail Ajax Send
  $("form").submit(function () { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "../mail.php", //Change
      data: th.serialize()
    }).done(function () {
      $('.send__overlay').addClass('send__body-success');
      setTimeout(function () {
        $('.send__overlay').removeClass('send__body-success');
        th.trigger("reset");
      }, 5000);
    });
    return false;
  });
  let ScreenWidth = $(window).width();
  if ((ScreenWidth) <= (980)) {
    $('.catalog__wrapper').addClass('swiper');
    $('.catalog__wrapper').addClass('mySwiper');
    var swiper = new Swiper(".mySwiper", {
      freeMode: true,
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        700: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
    });
  } else {
    $('.catalog__wrapper').removeClass('swiper');
    $('.catalog__wrapper').removeClass('mySwiper');
  }
  // menu btn
  $('.mobile__btn').on('click', function () {
    $('.header').toggleClass('header__open');
    $(this).toggleClass('mobile__btn-active');
  });
  $('.menu a').on('click', function () {
    $('.mobile__btn').removeClass('mobile__btn-active');
    $('.header').removeClass('header__open');
  });

});