$(function () {

  // products 탭 + 슬릭
  const $tabs = $('.product-tab li');
  const $slider = $('.right .slide2');

  $slider.slick({
    arrows: false,
    dots: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    pauseOnFocus: false
  });

  $('#slick-slide-control00').text("오디오 앰프 IC");
  $('#slick-slide-control01').text("오디오 인핸스먼트 IC");
  $('#slick-slide-control02').text("LNB 파워 IC");
  $('#slick-slide-control03').text("AC 다이렉트 LED 드라이버 IC");
  $('#slick-slide-control04').text("미니 LED 드라이버 IC");
  $('#slick-slide-control05').text("갈바닉 절연 게이트 드라이버 IC");
  $('#slick-slide-control06').text("DC-DC 컨버터 IC");

  $slider.on('beforeChange', function (event, slick, current, next) {
    $tabs.removeClass('active').eq(next).addClass('active');
  });

  $tabs.on('click', function () {
    let idx = $(this).data('slide');
    $tabs.removeClass('active');
    $(this).addClass('active');
    $slider.slick('slickGoTo', idx);
  });


  // 패럴럭스 + information 모션
  $(window).on('scroll', function () {
    let scrollTop = $(window).scrollTop();

    $('.weMake .slide ul li').each(function (index) {
      let moveY = 0;
      let baseOffset = 0;
      let speed = 1;

      if (index === 0) baseOffset = 100;
      if (index === 1) baseOffset = 100;
      if (index === 2) baseOffset = 80;

      if (index === 1) {
        speed = 0.09;
      } else {
        speed = 0.05;
      }

      moveY = baseOffset + (scrollTop * speed);

      let z = 1;
      if (index === 2) z = 3;
      if (index === 0) z = 2;
      if (index === 1) z = 1;

      $(this).css({
        'transform': `translateY(${moveY}px)`,
        'z-index': z
      });
    });

    let windowHeight = $(window).height();
    let sectionTop = $('.information').offset().top;
    let sectionHeight = $('.information').outerHeight();

    if (scrollTop + windowHeight > sectionTop && scrollTop < sectionTop + sectionHeight) {
      if (!$('.information').hasClass('motion')) {
        $('.information').addClass('motion');
      }
    } else {
      $('.information').removeClass('motion');

      $('.information .inner .icon ul li.left::after').css('height', '0');
      $('.information .inner .icon ul li.right::after').css('height', '0');
    }
  });


  // Splitting.js
  Splitting();

  // Scrolla.js
  $('.animate').scrolla({
    mobile: true,
    once: false
  });

  

  // GNB 메뉴 hover
  $('.gnb > li').on('mouseenter', function () {
    $('header').addClass('on');
    $('.gnb .inner').removeClass('on');
    $(this).find('.inner').addClass('on');
  });

  $('header').on('mouseleave', function () {
    $('header').removeClass('on');
    $('.gnb .inner').removeClass('on');
  });


  // 아코디언
  const $accordionItems = $('.accordion-item');

  $accordionItems.on('click', function () {
    $accordionItems.removeClass('active');
    $(this).addClass('active');
  });


  // 메뉴 열기
  $('.menu').on('click', function () {
    $('.menuWrap').fadeIn(300);
  });

  // 메뉴 닫기
  $('.close').on('click', function () {
    $('.menuWrap').fadeOut(300);
  });

  $('.menuWrap .gnb > li .sub li').hover(
    function () {
      $(this).addClass('active').siblings().addClass('dim');
    },
    function () {
      $(this).removeClass('active').siblings().removeClass('dim');
    }
  );

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 300) {
      $('.top-btn').addClass('show');
    } else {
      $('.top-btn').removeClass('show');
    }
  });
  
  // 탑버튼 클릭 시 상단으로 이동
  $('.top-btn').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 600);
  });
});
