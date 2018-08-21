$(document).ready(function () {
  // VARIABLES SCROLLTOP
  var nosotrosButtonNode = $('#nosotrosButton');
  var estilosButtonNode = $('.estilosButton');
  var contactButtonNode = $('#contactButton');

  //VARIABLES SCROLLREVEAL
  var slideRight2 = {
    distance: '50%',
    origin: 'left',
    duration: 1000,
    opacity: 0,
    delay: 500,
  };
  var slideLeft1 = {
    distance: '50%',
    origin: 'right',
    duration: 2000,
    opacity: 0,
    delay: 800,
  };
  var slideLeft2 = {
    distance: '50%',
    origin: 'right',
    duration: 2000,
    opacity: 0,
    delay: 1500,
  };
  var slideUp2 = {
    distance: '50%',
    origin: 'bottom',
    duration: 2000,
    opacity: 0,
    delay: 1500,
  };

  //LLAMADAS FUNCIONES ON-CLICK
  nosotrosButtonNode.click(scrollingNosotros);
  estilosButtonNode.click(scrollingEstilos);
  contactButtonNode.click(scrollingContact);

  //LLAMADAS SCROLLREVEAL
  ScrollReveal({ reset: false }).reveal('.titles', slideRight2);
  ScrollReveal({ reset: false }).reveal('.contact-title', slideRight2);
  ScrollReveal({ reset: false }).reveal('.nosotros-text', slideLeft1);
  ScrollReveal({ reset: false }).reveal('.contact-text', slideLeft1);
  ScrollReveal({ reset: true }).reveal('#contact-form', slideUp2);
  ScrollReveal({ reset: true }).reveal('#contact-button', slideUp2);
  ScrollReveal({ reset: false }).reveal('#contact-info', slideLeft2);


  //FUNCIONES
  function scrollingNosotros(section) {
    $('html, body').animate({
      scrollTop: $('#nosotrosSection').offset().top - 50
    },
      1000
    );
  }
  
  function scrollingEstilos(section) {
    $('html, body').animate({
      scrollTop: $('#estilosSection').offset().top - 30
    },
      1000
    );
  }

  function scrollingContact(section) {
    $('html, body').animate({
      scrollTop: $('#contactSection').offset().top - 70
    },
      1000
    );
  }

})