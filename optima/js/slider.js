$(document).ready(function() {


    /*ARTICLES SLIDER*/

    $('.articles-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: false,
        autoplay: false,
        autoplayTimeout: 2000,
        navText: ['prev', 'next'],
        nav: false,

    });


    $('.articles-slider__prev').click(function () {
        $('.owl-carousel').trigger('next.owl.carousel');
    });
    $('.articles-slider__next').click(function () {

        $('.owl-carousel').trigger('prev.owl.carousel');
    });
});
