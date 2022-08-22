$(document).ready(function () {
   var swiper = new Swiper('.mySwiper', {
      // Optional parameters
      loop: true,
      slidesPerView: 1,
      spaceBetween: 55,
      effect: "fade",
      speed: 400,
      allowTouchMove: false,
      // Navigation
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
      // Pagination
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },
   });
   var swiper = new Swiper('.mySwiper2', {
      // Optional parameters
      loop: true,
      slidesPerView: 1,
      spaceBetween: 55,
      effect: "fade",
      speed: 400,
      allowTouchMove: false,
      // Navigation
      navigation: {
         nextEl: '.swiper-button-next2',
         prevEl: '.swiper-button-prev2',
      },
      // Pagination
      pagination: {
         el: '.swiper-pagination2',
         clickable: true,
      },
   });
   //Scroll
   var $page = $('html, body');
   $('a[href*="#"]').click(function () {
      $page.animate({
         scrollTop: $($.attr(this, 'href')).offset().top
      }, 400);
      return false;
   });
   //E-mail Ajax Send
   $(".form").submit(function () { //Change
      var th = $(this);
      $.ajax({
         type: "POST",
         url: "../mail.php", //Change
         data: th.serialize()
      }).done(function () {
         alert("Thank you!");
         setTimeout(function () {
            // Done Functions
            th.trigger("reset");
         }, 1000);
      });
      return false;
   });
   //Menu
   $('.menu__btn').on('click', function () {
      $(this).toggleClass('menu__btn-active');
      $('.nav__mobile').toggleClass('nav__mobile-active');
   });
   $('.menu__item a').on('click', function () {
      $('.nav__mobile-active').removeClass('nav__mobile-active');
      $('.menu__btn-active').removeClass('menu__btn-active');
   });

   // init plugin
   var input = document.querySelector("#phone");
   window.intlTelInput(input, {
      initialCountry: "auto",
      geoIpLookup: function (callback) {
         $.get('https://ipinfo.io', function () {}, "jsonp").always(function (resp) {
            var countryCode = (resp && resp.country) ? resp.country : "us";
            callback(countryCode);
         });
      },
      singleDialCode: true,
      utilsScript: "/utils.js",
   });
});