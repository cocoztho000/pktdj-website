(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 57)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });
 
  $('#title_text').click(function() {
    $('html,body').animate({ scrollTop: 0 }, 'slow');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });
  var window_height = $( window ).height();
  var animation_height_offset=(window_height-(window_height * .3))
  // Collapse Navbar
  var navbarCollapse = function() {
   
    var window_height = $( window ).height();
    var window_width  = $( window ).width();

    if ($("#mainNav").offset().top > 25) {
      $("#mainNav").addClass("navbar-shrink");
      $("#title_text").css("visibility", "visible");

      if ($("#mainNav").offset().top < animation_height_offset || window_width < 992) {
        var title_text_src = $('#title_text').attr('src');
         
        if (title_text_src != "img/url_medium.png"){
         $('#title_text').fadeOut(200, function() {
            $('#title_text').attr("src","img/url_medium.png");
            $('#title_text').fadeIn(200);
          });
        }

        // $("#title_text").attr("src","img/url_medium.png");
        // $("#title_text").css("visibility", "hidden");
      } else {
        var title_text_src = $('#title_text').attr('src');
        if (title_text_src != "img/main_logo_small_dark.png"){
         $('#title_text').fadeOut(200, function() {
            $('#title_text').attr("src","img/main_logo_small_dark.png");
            $('#title_text').fadeIn(200);
          });
        }
        // $("#title_text").attr("src","img/main_logo_small_dark.png");
        // $("#title_text").css("visibility", "visible");
      }
    } else {
      $("#title_text").css("visibility", "hidden");
      $("#mainNav").removeClass("navbar-shrink");
    }
  };

  var window_height = $( window ).height();
  if ($("#mainNav").offset().top < (window_height-(window_height * .3))) {
    $('#title_text').attr("src","img/url_medium.png");
  } else {
    $('#title_text').attr("src","img/main_logo_small_dark.png");
  }

  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
  $(window).on("resize", navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);

  // Magnific popup calls
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict
