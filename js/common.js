$("document").ready(function(){

  // header
  $("header .menu").hide();
  $("header .ham, header .utill li.search").click(function(){
    $("header .menu").show();
  });
  $("header .menu .close").click(function(){
    $("header .menu").hide();
  });


  // direction
  $("#direction ul li").mouseenter(function(){
    $(this).addClass("active").siblings().removeClass("active");
  })


  // Goal
  const swiper1 = new Swiper('.swiper1', {
    loop: true,
    spaceBetween: 10, // 슬라이드 간의 거리 px
    breakpoints: { // 반응형 슬라이드
      320: { // 320px 이상
        slidesPerView: 1.3,
      },
      768: { // 768px 이상
        slidesPerView: 2,
        centeredSlides: true,
      },
      1550: { // 1024px 이상
        slidesPerView: 3,
        centeredSlides: true,
      },
    },
  });


  // logo
  const swiper2 = new Swiper('.swiper2', {
    loop: true,
    centeredSlides: true, // 첫번째 슬라이드가 정중앙에(loop 필요)
    spaceBetween: 150, // 슬라이드 간의 거리 px
    autoplay: { // 자동슬라이드
        delay: 3000, // 슬라이드 한장이 머무르는 시간 5000 = 5초
        disableOnInteraction: false,
    },
    navigation: { // 페이지 넘김
      nextEl: ".swiper-button-next", // 다음버튼
      prevEl: ".swiper-button-prev", // 이전버튼
    },
    pagination: { // 페이지 위치
      el: ".swiper-pagination", // 슬라이드 페이지 버튼
      type: "progressbar", // 'bullets' 'fraction' 'progressbar'
      clickable: true, // 클릭가능
    },

    breakpoints: { // 반응형 슬라이드
      320: { // 320px 이상
        slidesPerView: 2,
        spaceBetween: 50, // 슬라이드 간의 거리 px
        centeredSlides: true,
      },
      768: { // 768px 이상
        slidesPerView: 3,
        spaceBetween: 100, // 슬라이드 간의 거리 px
        centeredSlides: true,
      },
      1200: { // 1024px 이상
        slidesPerView: 4.2,
        centeredSlides: true,
      },
    },
  });

  $("#logo .swiper2 .control .play").hide();
  $("#logo .swiper2 .control .stop").click(function(){
    swiper2.autoplay.stop();
    $("#logo .swiper2 .control .play").show();
    $("#logo .swiper2 .control .stop").hide();
  });
  $("#logo .swiper2 .control .play").click(function(){
    swiper2.autoplay.start();
    $("#logo .swiper2 .control .stop").show();
    $("#logo .swiper2 .control .play").hide();
  });


  // typhography
  $("#typhography .font-cont li").eq(1).hide();
  $("#typhography .font-tab span").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    $("#typhography .font-cont li").eq($(this).index()).show().siblings().hide();
  });

  //footprint
  $("#footprint .footprint-tab li:nth-child(2)").click(function(){
    $(this).find("img:nth-child(2)").show().siblings().hide();
    $(this).siblings().find("img:nth-child(1)").show().siblings().hide();
    $("#footprint .footprint-tab li:nth-child(1) img:nth-child(2)").show().siblings().hide();
    $(this).addClass("active").siblings().removeClass("active");
    $("#footprint .footprint-cont li").eq($(this).index()).show().siblings().hide();
  });
  

  $("#footprint .footprint-tab li:nth-child(3)").click(function(){
    $(this).find("img:nth-child(2)").show().siblings().hide();
    $(this).siblings().find("img:nth-child(1)").show().siblings().hide();
    $("#footprint .footprint-tab li:nth-child(1) img:nth-child(3)").show().siblings().hide();
    $(this).addClass("active").siblings().removeClass("active");
    $("#footprint .footprint-cont li").eq($(this).index()).show().siblings().hide();
  });

  $("#footprint .footprint-tab li:nth-child(4)").click(function(){
    $(this).find("img:nth-child(2)").show().siblings().hide();
    $(this).siblings().find("img:nth-child(1)").show().siblings().hide();
    $("#footprint .footprint-tab li:nth-child(1) img:nth-child(4)").show().siblings().hide();
    $(this).addClass("active").siblings().removeClass("active");
    $("#footprint .footprint-cont li").eq($(this).index()).show().siblings().hide();
  });

  $("#footprint .footprint-tab li:nth-child(5)").click(function(){
    $(this).find("img:nth-child(2)").show().siblings().hide();
    $(this).siblings().find("img:nth-child(1)").show().siblings().hide();
    $("#footprint .footprint-tab li:nth-child(1) img:nth-child(5)").show().siblings().hide();
    $(this).addClass("active").siblings().removeClass("active");
    $("#footprint .footprint-cont li").eq($(this).index()).show().siblings().hide();
  });

  // $("#footprint .footprint-tab li.active").click(function(){
  //   $(this).find("img:nth-child(1)").show().siblings().hide();
  // });

  AOS.init();
});