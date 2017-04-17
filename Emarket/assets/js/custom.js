(function($) {
  "use strict";

  // all document ready function here
  $(document).ready(function() {

    // for slicknav
    $('.main-menu').slicknav({
      label: '',
      duration: true,
      closedSymbol: '',
      openedSymbol: '',
    });

    // for smoothScroll
    SmoothScroll({
      stepSize: 150
    });

    // for slider
    $('.homepage-slides').owlCarousel({
      items: 1,
      nav: false,
      dots: false,
      autoplay: true,
      smartSpeed: 1000,
      loop: true,
      mouseDrag: false,
      touchDrag: false
    });

    $(".homepage-slides").on("translate.owl.carousel", function() {
      $(".single-slide-item h1").removeClass("animated fadeInUp").css("opacity", "0");
      $(".single-slide-item p").removeClass("animated fadeInLeft").css("opacity", "0");
      $(".single-slide-item .btn-1").removeClass("animated fadeInDown").css("opacity", "0");
    });

    $(".homepage-slides").on("translated.owl.carousel", function() {
      $(".single-slide-item h1").addClass("animated fadeInUp").css("opacity", "1");
      $(".single-slide-item p").addClass("animated fadeInLeft").css("opacity", "1");
      $(".single-slide-item .btn-1").addClass("animated fadeInDown").css("opacity", "1");
    });

  });

  // for wow js
  new WOW().init();

  // for testimonial carousel
  $('.testimonial-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    smartSpeed: 2000,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 2
      }
    }
  });

  // for partner carousel
  $('.partner-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    smartSpeed: 2000,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 5
      }
    }
  });

  // for team carousel
  $('.team-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    smartSpeed: 2000,
    nav: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });

  // all window load function here
  $(window).load(function() {
    //loader
    $(".loading-overlay .spinner").fadeOut(300), $(".loading-overlay").fadeOut(300)
  });

})(jQuery);
