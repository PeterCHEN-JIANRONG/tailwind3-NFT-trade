"use strict";

console.log('Hello!');
$(document).ready(function () {
  console.log('HesSchool Hello!'); // navbar add .active

  $("header #menuBtn").click(function (e) {
    // e.preventDefault();
    $("header .navbar").toggleClass("active"); // $(this).addClass("active");
    // close navbar

    $("header .navbar .link").click(function (e) {
      // e.preventDefault();
      $("header .navbar").removeClass("active");
    });
  }); // artist mobile

  var artistSwiper2 = new Swiper(".artistSwiper2", {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination"
    }
  }); // artist desktop

  var artistSwiper = new Swiper(".artistSwiper", {
    // initialSlide:1,
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 3,
      slideShadows: false
    },
    pagination: {
      el: ".swiper-pagination"
    }
  }); // swiper 聯動

  artistSwiper2.controller.control = [artistSwiper];
  artistSwiper.controller.control = [artistSwiper2]; // 瀑布流卡片
  // init Masonry

  var $grid = $('.grid').masonry({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.grid-item',
    // use element for option
    columnWidth: '.grid-sizer',
    percentPosition: true
  }); // layout Masonry after each image loads

  $grid.imagesLoaded().progress(function () {
    $grid.masonry('layout');
  });
});
//# sourceMappingURL=all.js.map
