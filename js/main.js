var currentWidthWindow = document.documentElement.clientWidth;

function menu() {
  $('.gamburger').click(function () {
    if (!$('.icon-menu').hasClass('active')) {
      $('.top-menu').find('ul').css('display', 'flex');
      $('.top-menu').find('.sw-topper').css('background', '#3f3d3f');
      $('.top-menu').find('.sw-bottom').css('background', '#3f3d3f');
      $('.top-menu').find('.sw-footer').css('background', '#3f3d3f');
      $('.top-menu').css('background', '#ff712c');
      $('.top-menu').find('ul').css('opacity', '1');
      $('.icon-menu').addClass('active');

    } else {
      $('.top-menu').find('ul').css('display', 'none');
      $('.top-menu').css('background', 'none');
      $('.ul').css('background', 'none');
      $('.top-menu').find('ul').css('opacity', '0');
      $('.top-menu').find('.sw-topper').css('background', '#3f3e41');
      $('.top-menu').find('.sw-bottom').css('background', '#3f3e41');
      $('.top-menu').find('.sw-footer').css('background', '#3f3e41');
      $('.icon-menu').removeClass('active');
    }
  });
}



$(document).ready(function ($) {
  menu();

  $("#content-slider").lightSlider({
    loop: true,
    keyPress: true
  });
  $('#image-gallery').lightSlider({
    gallery: true,
    item: 1,
    thumbItem: 9,
    slideMargin: 0,
    speed: 500,
    auto: true,
    loop: true,
    onSliderLoad: function () {
      $('#image-gallery').removeClass('cS-hidden');
    }
  });


  window.onresize = function () {
    var newWidthWindow = document.documentElement.clientWidth;
    if (newWidthWindow < 1165) {
      if ($('.icon-menu').hasClass('active')) {
        $('.top-menu').css('background', 'transparent');
        $('.top-menu').find('ul').css('opacity', '1');
        $('.top-menu').find('.sw-topper').css('background', '#516199');
        $('.top-menu').find('.sw-bottom').css('background', '#516199');
        $('.top-menu').find('.sw-footer').css('background', '#516199');
        $('.icon-menu').removeClass('active');
      }
      else {
        $('.top-menu').find('ul').css('display', 'inline-flex');
        $('.top-menu').find('ul').css('opacity', '0');
      }
    } else if (newWidthWindow > 1165) {
      if ($('.icon-menu').hasClass('active')) {
        $('.icon-menu').removeClass('active');
        $('.top-menu').css('background', 'transparent');
        $('.top-menu').find('.sw-topper').css('background', '#516199');
        $('.top-menu').find('.sw-bottom').css('background', '#516199');
        $('.top-menu').find('.sw-footer').css('background', '#516199');
      }
      else {
        $('.top-menu').find('ul').css('opacity', '1');
        $('.top-menu').find('ul').css('display', 'inline-flex');
      }
    }
  }


});


var owl = $('.owl-carousel-for-gallery');
owl.owlCarousel({
  margin: 10,
  nav: true,
  navText: false,
  dots: false,
  loop: true,
  items: 1,
  thumbs: true,
  thumbImage: true,
  thumbContainerClass: 'owl-thumbs',
  thumbItemClass: 'owl-thumb-item'
})





var owl = $('.owl-carousel-main-slider');
owl.owlCarousel({
  margin: 10,
  nav: false,
  navText: false,
  loop: true,
  dots: true,
  responsive: {
    0: {
      items: 1
    }
  }
})

$(".lightgallery_js").lightGallery({
  selector: '.carousel-gallery__item'
});


$(document).on('opening', '.remodal', function () {
  console.log('opening');
});

$(document).on('opened', '.remodal', function () {
  console.log('opened');
});

$(document).on('closing', '.remodal', function (e) {
  console.log('closing' + (e.reason ? ', reason: ' + e.reason : ''));
});

$(document).on('closed', '.remodal', function (e) {
  console.log('closed' + (e.reason ? ', reason: ' + e.reason : ''));
});

$(document).on('confirmation', '.remodal', function () {
  console.log('confirmation');
});

$(document).on('cancellation', '.remodal', function () {
  console.log('cancellation');
});


$('[data-remodal-id=modal2]').remodal({
  modifier: 'with-red-theme'
});
