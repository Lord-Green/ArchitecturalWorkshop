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

  var slider_gallery = $('.slider-gallery').lightSlider({
    gallery: true,
    item: 1,
    thumbItem: 7,
    slideMargin: 0,
    speed: 500,
    auto: false,
    loop: true,
    responsive: [
      {
        breakpoint: 1164,
        settings: {
          thumbItem: 5,
        }
      },
      {
        breakpoint: 759,
        settings: {
          thumbItem: 3,
        }
      }
    ],
    onSliderLoad: function () {
      $('.slider-gallery').removeClass('cS-hidden');
    }

  });

  $('.slider-gallery__block .arrows-for-mini .left').click(function () {
    var step = 0;
    if (slider_gallery.getCurrentSlideCount() < 4) step = 4; else step = 1;
    slider_gallery.goToSlide(slider_gallery.getCurrentSlideCount() - step);
  });

  $('.slider-gallery__block .arrows-for-mini .right').click(function () {
    var step = 0;
    if (slider_gallery.getCurrentSlideCount() < 4) step = 4; else step = 1;
    slider_gallery.goToSlide(slider_gallery.getCurrentSlideCount() + step);
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

// $(".lightgallery_js").lightGallery({
//   selector: '.carousel-gallery__item'
// });


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
