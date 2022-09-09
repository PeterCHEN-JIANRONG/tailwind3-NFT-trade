console.log('Hello!');

$(document).ready(() => {
  console.log('HesSchool Hello!');
  
  // navbar add .active
  $("header #menuBtn").click(function (e) {
    // e.preventDefault();
    $("header .navbar").toggleClass("active");
    // $(this).addClass("active");

    // close navbar
  $("header .navbar .link").click(function (e) {
    // e.preventDefault();
    $("header .navbar").removeClass("active");
  });
  
  });

  var artistSwiper = new Swiper(".artistSwiper", {
    // slidesPerView: 3,
    // spaceBetween: 0,
    // centeredSlides: true,
    // initialSlide:1,
        // breakpoints: {
    //   640: {
    //   },
    //   768: {

    //   },
    //   1024: {
    //     slidesPerView: 3,
    //     spaceBetween: 40,
    //   },
    // },
    
    
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
      slideShadows: false,
    },


    pagination: {
      el: ".swiper-pagination",
    },
  });
});