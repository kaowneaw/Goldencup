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
$(".slide").on('click', function(){
    $(".slide").removeClass('active');
    $(this).addClass('active');
});