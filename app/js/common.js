$(function() {

//------------------------------читать далее-----------------------------
  var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


//------------------------------читать далее-----------------------------
  $('.reviews__list_text').readmore({ //вызов плагина
    speed: 100, //скорость раскрытия скрытого текста (в миллисекундах)
    collapsedHeight: 140, //высота раскрытой области текста (в пикселях)
    heightMargin: 16, //избегание ломания блоков, которые больше maxHeight (в пикселях)
    moreLink: '<a href="#">Подробнее...</a>', //ссылка "Читать далее", можно переименовать
    lessLink: '<a href="#">Скрыть</a>' //ссылка "Скрыть", можно переименовать
  });

//------------------------------гамбургер-----------------------------
  $('.hamburger').click(function() {
    $(this).toggleClass('hamburger-active');
    $('nav').toggleClass('nav-active');
    $('header').toggleClass('header-menu');
  });

//------------------------------акардеон-----------------------------
  var acc = $('.calc__title');
  var accContent = $('.calc__content');
  $('.calc__title.calc__active').next().slideDown(500);
  acc.on('click', function(e) {
    if ($(this).hasClass('calc__active')) {
      $(this).removeClass('calc__active');
      $(this).next().slideUp(500);
    }
    else {
      $(this).addClass('calc__active');
      accContent.not($(this).next()).slideUp(500);
      acc.not($(this)).removeClass('calc__active');
      $(this).next().slideDown(500);
    }
  });


  
});

//----------------------------------------preloader----------------------------------

  $(window).on('load', function(){
    $('.preloader').delay(1000).fadeOut('slow');
  });

