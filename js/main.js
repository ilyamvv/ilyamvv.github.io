$(document).ready(function () {
   // menu
   $('.menu__btn').on('click',function(){
      $(this).toggleClass('menu__btn-active');
      $('.phone__nav').toggleClass('phone__nav-active');
   });

   var x, i, j, l, ll, selElmnt, a, b, c;
   /*look for any elements with the class "custom-select":*/
   x = document.getElementsByClassName("custom__select");
   l = x.length;
   for (i = 0; i < l; i++) {
      selElmnt = x[i].getElementsByTagName("select")[0];
      ll = selElmnt.length;
      /*for each element, create a new DIV that will act as the selected item:*/
      a = document.createElement("DIV");
      a.setAttribute("class", "select-selected");
      a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
      x[i].appendChild(a);
      /*for each element, create a new DIV that will contain the option list:*/
      b = document.createElement("DIV");
      b.setAttribute("class", "select-items select-hide");
      for (j = 1; j < ll; j++) {
         /*for each option in the original select element,
         create a new DIV that will act as an option item:*/
         c = document.createElement("DIV");
         c.innerHTML = selElmnt.options[j].innerHTML;
         c.addEventListener("click", function (e) {
            /*when an item is clicked, update the original select box,
            and the selected item:*/
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
               if (s.options[i].innerHTML == this.innerHTML) {
                  s.selectedIndex = i;
                  h.innerHTML = this.innerHTML;
                  y = this.parentNode.getElementsByClassName("same-as-selected");
                  yl = y.length;
                  for (k = 0; k < yl; k++) {
                     y[k].removeAttribute("class");
                  }
                  this.setAttribute("class", "same-as-selected");
                  break;
               }
            }
            h.click();
         });
         b.appendChild(c);
      }
      x[i].appendChild(b);
      a.addEventListener("click", function (e) {
         /*when the select box is clicked, close any other select boxes,
         and open/close the current select box:*/
         e.stopPropagation();
         closeAllSelect(this);
         this.nextSibling.classList.toggle("select-hide");
         this.classList.toggle("select-arrow-active");
      });
   }

   function closeAllSelect(elmnt) {
      /*a function that will close all select boxes in the document,
      except the current select box:*/
      var x, y, i, xl, yl, arrNo = [];
      x = document.getElementsByClassName("select-items");
      y = document.getElementsByClassName("select-selected");
      xl = x.length;
      yl = y.length;
      for (i = 0; i < yl; i++) {
         if (elmnt == y[i]) {
            arrNo.push(i)
         } else {
            y[i].classList.remove("select-arrow-active");
         }
      }
      for (i = 0; i < xl; i++) {
         if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
         }
      }
   }
   /*if the user clicks anywhere outside the select box,
   then close all select boxes:*/
   document.addEventListener("click", closeAllSelect);

   // datepicker

   let dpMin, dpMax;

   dpMin = new AirDatepicker('#el1', {
      onSelect({
         date
      }) {
         dpMax.update({
            minDate: date
         });
      }
   })

   dpMax = new AirDatepicker('#el2', {
      onSelect({
         date
      }) {
         dpMin.update({
            maxDate: date
         });
      }
   });

   let dpMin1, dpMax1;

   dpMin1 = new AirDatepicker('#el3', {
      onSelect({
         date
      }) {
         dpMax.update({
            minDate: date
         });
      }
   })

   dpMax2 = new AirDatepicker('#el4', {
      onSelect({
         date
      }) {
         dpMin.update({
            maxDate: date
         });
      }
   });

   // swiper slider
   var swiper = new Swiper('.swiper', {
      loop: true,
      allowTouchMove: false,
      slidesPerView: 1,
      spaceBetween: 10,
      effect: "fade",
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },
      navigation: {
         nextEl: '.slider__button-next',
         prevEl: '.slider__button-prev',
      },
   });
});