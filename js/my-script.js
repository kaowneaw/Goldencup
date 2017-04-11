// menu slide section3
var carouselDefault = new PureJSCarousel({
  carousel: '#menu',
  slide: '.slide',
  oneByOne: true
});


//this img preview section3
$('#lightSlider').lightSlider({
  gallery: true,
  item: 1,
  loop: true,
  slideMargin: 0,
  thumbItem: 4
});

//this img preview section4
$('#lightSlider2').lightSlider({
  gallery: true,
  item: 1,
  loop: true,
  slideMargin: 0,
  thumbItem: 4
});


//click menu section3
$(".slide").on('click', function () {
  $(".slide").removeClass('active');
  $(this).addClass('active');
});

//click menu section4
$(".menu-item-section4").on('click', function () {
  $(".menu-item-section4").removeClass('active');
  $(this).addClass('active');
});

$("#thailand").on('click', function () {
  $(".thailand-wrapper").show();
  $(".map-wrapper").hide();
});
$("#global").on('click', function () {
  $(".thailand-wrapper").hide();
  $(".map-wrapper").show();
});


//map section4
$(".usa-circle").hover(
  function () {
    $(".usa-point").addClass("show");
  }, function () {
    $(".usa-point").removeClass("show");
  }
);
$(".cambodia-circle").hover(
  function () {
    $(".cambodia-point").addClass("show");
  }, function () {
    $(".cambodia-point").removeClass("show");
  }
);
$(".czech-circle").hover(
  function () {
    $(".czech-point").addClass("show");
  }, function () {
    $(".czech-point").removeClass("show");
  }
);
$(".german-circle").hover(
  function () {
    $(".german-point").addClass("show");
  }, function () {
    $(".german-point").removeClass("show");
  }
);
$(".hongkong-circle").hover(
  function () {
    $(".hongkong-point").addClass("show");
  }, function () {
    $(".hongkong-point").removeClass("show");
  }
);
$(".indo-circle").hover(
  function () {
    $(".indo-point").addClass("show");
  }, function () {
    $(".indo-point").removeClass("show");
  }
);
$(".israel-circle").hover(
  function () {
    $(".israel-point").addClass("show");
  }, function () {
    $(".israel-point").removeClass("show");
  }
);
$(".laos-circle").hover(
  function () {
    $(".laos-point").addClass("show");
  }, function () {
    $(".laos-point").removeClass("show");
  }
);
$(".myamar-circle").hover(
  function () {
    $(".myamar-point").addClass("show");
  }, function () {
    $(".myamar-point").removeClass("show");
  }
);
$(".nather-circle").hover(
  function () {
    $(".nather-point").addClass("show");
  }, function () {
    $(".nather-point").removeClass("show");
  }
);
$(".qatar-circle").hover(
  function () {
    $(".qatar-point").addClass("show");
  }, function () {
    $(".qatar-point").removeClass("show");
  }
);
$(".swe-circle").hover(
  function () {
    $(".swe-point").addClass("show");
  }, function () {
    $(".swe-point").removeClass("show");
  }
);
$(".uae-circle").hover(
  function () {
    $(".uae-point").addClass("show");
  }, function () {
    $(".uae-point").removeClass("show");
  }
);
$(".uk-circle").hover(
  function () {
    $(".uk-point").addClass("show");
  }, function () {
    $(".uk-point").removeClass("show");
  }
);
$(".vieatnam-circle").hover(
  function () {
    $(".vieatnam-point").addClass("show");
  }, function () {
    $(".vieatnam-point").removeClass("show");
  }
);
