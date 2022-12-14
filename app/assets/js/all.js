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

  // artist mobile
  var artistSwiper2 = new Swiper(".artistSwiper2", {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
  });


  // artist desktop
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
      slideShadows: false,
    },


    pagination: {
      el: ".swiper-pagination",
    },
  });

  // swiper 聯動
  artistSwiper2.controller.control = [artistSwiper];
  artistSwiper.controller.control = [artistSwiper2];

  $('.swiper .btn').on('click',function(e) {
    window.location.href = '/tailwind3-NFT-trade/artist.html';
    // window.location.replace('/artist.html'); // 取代當前頁面, 無法回上一頁
  });


  // 瀑布流卡片
  // init Masonry
  var $grid = $('.grid').masonry({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.grid-item',
    // use element for option
    columnWidth: '.grid-sizer',
    percentPosition: true
  });
  // layout Masonry after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
    setTimeout(()=>{
      $('#collection').addClass('hidden'); // 預防瀑布流跑版, 等瀑布流渲染完畢後隱藏
    },10)
  });

  // nav 選單
  $(".nav .nav-link").click(function (e) {
    // e.preventDefault();
    $(".nav .nav-link").removeClass("active");
    $(this).addClass("active");
    // console.log($(this).attr('data-target'))
    const target = $(this).data('target');
    console.log(target);

    $(".nav-content .nav-item").addClass("hidden");
    $(target).removeClass("hidden");
  });
  
});