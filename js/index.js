$(document).ready(function () {
  // SCROLL NOSOTROS SECTION
  var nosotrosButtonNode = $('#nosotrosButton');
  nosotrosButtonNode.click(scrollingNosotros);

  function scrollingNosotros(section) {
    $('html, body').animate({
        scrollTop: $('#nosotrosSection').offset().top - 50
      },
      1000
    );
  }

  // SCROLL ESTILOS SECTION
  var estilosButtonNode = $('.estilosButton');
  estilosButtonNode.click(scrollingEstilos);

  function scrollingEstilos(section) {
    $('html, body').animate({
        scrollTop: $('#estilosSection').offset().top - 30
      },
      1000
    );
  }

  // SCROLL CONTACT SECTION
  var contactButtonNode = $('#contactButton');
  contactButtonNode.click(scrollingContact);

  function scrollingContact(section) {
    $('html, body').animate({
        scrollTop: $('#contactSection').offset().top - 70
      },
      1000
    );
  }







})