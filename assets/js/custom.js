$(document).ready(function() {
    new WOW().init();
    $('body').materialScrollTop();
    $('#our_popup').magnificPopup({ type: 'image' });

    $('html').smoothScroll(1000);

    $('.counter').counterUp({
        delay: 50,
        time: 5000
    });
    $('.manu').slicknav();

    AOS.init({
        duration: 2000,
    });

    // $('.header-slogan').ripples({
    //     dropRadius: 10,
    //     perturbance: 0.03,
    // });

    $('#main-menu').meanmenu({
      meanMenuContainer:'#mobail-menu',

      meanScreenWidth:768,
    });

  var typed = new Typed('.type', {
  strings: [
   ' Designer..',
   'Photographer..',
   'Researcher..',

   ],
    typeSpeed:60,
    backSpeed:60,
    loop: true,

});

});

// red rose