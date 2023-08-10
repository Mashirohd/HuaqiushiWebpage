(function ($) {
  "use strict";

  //  Hero Slider
  $(".hero-right").owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 1500,
    dots: true,
    nav: false,
    navText: [
      "<i class='bi bi-arrow-left''></i>",
      "<i class='bi bi-arrow-right''></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 1,
      },
      1000: {
        items: 1,
      },
      1920: {
        items: 1,
      },
    },
  });

  //  Project Slider
  $(".project-slider").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 30,
    smartSpeed: 1500,
    dots: false,
    nav: false,
    navText: [
      "<i class='bi bi-arrow-left''></i>",
      "<i class='bi bi-arrow-right''></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1000: {
        items: 2,
      },
      1920: {
        items: 2,
      },
    },
  });

  //  Testimonial Slider
  $(".testimonial-slider").owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 1500,
    dots: false,
    autoHeight: true,
    nav: true,
    navText: [
      "<i class='bi bi-chevron-left'></i>",
      "<i class='bi bi-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 1,
      },
      1000: {
        items: 1,
      },
      1920: {
        items: 1,
      },
    },
  });

  // About Video
  $(".play-3").yu2fvl({ vid: "O9F4rXp1Ogc", ratio: 4 / 3 });

  // Counter
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  // Meanmenu
  $("#mobile-menu").meanmenu({
    meanMenuContainer: ".mobile-menu",
    meanScreenWidth: "991",
    meanMenuOpen: "<span></span> <span></span> <span></span>",
    onePage: false,
  });

  //  Hero Slider V2
  $(".hero-v2-slide").owlCarousel({
    loop: true,
    center: true,
    margin: 15,
    autoplay: true,
    smartSpeed: 1500,
    dots: true,
    nav: false,
    navText: [
      "<i class='bi bi-arrow-left''></i>",
      "<i class='bi bi-arrow-right''></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      768: {
        items: 3,
      },
      992: {
        items: 3,
      },
      1000: {
        items: 3,
      },
      1920: {
        items: 3,
      },
    },
  });

  //  Projects Expert V2
  $(".single-experts-slider").owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    smartSpeed: 1500,
    dots: false,
    nav: true,
    navText: [
      '<img src="./assets/images/icon-svg/chevron-left.svg" alt=""> <img src="./assets/images/icon-svg/chevron-left-white.svg" alt="">',
      '<img src="./assets/images/icon-svg/chevron-right.svg" alt=""> <img src="./assets/images/icon-svg/chevron-right-white.svg" alt="">',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      768: {
        items: 2,
      },
      992: {
        items: 4,
      },
      1000: {
        items: 4,
      },
      1920: {
        items: 4,
      },
    },
  });

  //  Testimonial Slider V2
  $(".testimonial-slider-v2").owlCarousel({
    loop: true,
    center: true,
    autoplay: true,
    smartSpeed: 1500,
    dots: true,
    autoHeight: true,
    nav: false,
    navText: [
      "<i class='bi bi-chevron-left'></i>",
      "<i class='bi bi-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 1,
      },
      1000: {
        items: 1,
      },
      1920: {
        items: 1,
      },
    },
  });

  // Counter
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  $(".counter2").counterUp({
    delay: 10,
    time: 1000,
  });

  $(".counter3").counterUp({
    delay: 10,
    time: 1000,
  });

  //  Projects Expert V3
  $(".single-experts-slider-v3").owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    smartSpeed: 1500,
    dots: false,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1000: {
        items: 3,
      },
      1920: {
        items: 3,
      },
    },
  });

  $(window).on("load", function () {
    // Window Loading JS
    $(".loading-wrap").fadeOut();
    $(".loader").delay(450).fadeOut("slow");
  });
})(jQuery);

// Service v2 slider
var swiper = new Swiper(".services-slide", {
  slidesPerView: 3,
  spaceBetween: 30,
  speed: 2000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// Testimonial v3 slider
var swiper = new Swiper(".testimonial-slider-v3", {
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 2500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
});
