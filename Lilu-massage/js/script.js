var services = [
    {service: "МОДЕЛИРУЮЩИЙ<br>УХОД ЗА ТЕЛОМ", pic: "url(img/service-0.jpg)"},
    {service: "ОБЩИЙ УХОД<br>ЗА ТЕЛОМ", pic: "url(img/service-1.jpg)"},
    {service: "РЕЛАКС УХОД<br>ЗА ТЕЛОМ", pic: "url(img/service-2.jpg)"},
    {service: "SPA ПРОЦЕДУРЫ<br>ДЛЯ ТЕЛА", pic: "url(img/service-3.jpg)"},
    {service: "ДЕЛИКАТНЫЙ<br>УХОД ЗА ЛИЦОМ", pic: "url(img/service-4.jpg)"},
    {service: "МАССАЖ<br>ДЛЯ БЕРЕМЕННЫХ", pic: "url(img/service-5.jpg)"},
    {service: "ИНДИЙСКИЙ<br>МАССАЖ ГОЛОВЫ", pic: "url(img/service-6.jpg)"},
    {service: "ВИСЦЕРАЛЬНЫЙ<br>МАССАЖ", pic: "url(img/service-7.jpg)"},
    {service: "КИТАЙСКИЙ<br>МАССАЖ ГУАША", pic: "url(img/service-8.jpg)"}
];

var servicesVisible = [0, 1, 2, 3];
var tmpID = "";
var tmpPic = "";


$(document).ready(function () {
    $('.img-bordered').click(function () {
        return false;
    });

    $(".service-prev").bind('click', moveLeft);
    $(".service-next").bind('click', moveRight);

    function moveLeft(e) {
        $(".service-prev").unbind();
        for (var i = 0; i < 4; i++) {
            tmpID = "#pic-s-" + i;
            if (servicesVisible[i] == "8") {
                servicesVisible[i] = 0;
            } else {
                servicesVisible[i] += 1;
            }
            $(tmpID).css("backgroundImage", services[servicesVisible[i]].pic);
            $(tmpID).next().html(services[servicesVisible[i]].service).css('opacity', '0');
            $(tmpID).next().animate({opacity: '1'}, 800);
        }
        setTimeout(function() { $(".service-prev").bind('click', moveLeft); }, 800);
    }

    function moveRight(e) {
        $(".service-next").unbind();
        for (var i = 0; i < 4; i++) {
            tmpID = "#pic-s-" + i;
            if (servicesVisible[i] == "0") {
                servicesVisible[i] = 8;
            } else {
                servicesVisible[i] -= 1;
            }
            $(tmpID).css("backgroundImage", services[servicesVisible[i]].pic);
            $(tmpID).next().html(services[servicesVisible[i]].service).css('opacity', '0');
            $(tmpID).next().animate({opacity: '1'}, 800);
        }
        setTimeout(function() { $(".service-next").bind('click', moveRight); }, 800);
    }

    $('.sertificates__content').click(function(){
        tmpID = $(this).attr('id').slice(-1);
        tmpPic = "url(img/sertificate-" + tmpID + ".jpg)";
        $('.sertificates__focused').css('backgroundImage', tmpPic);
        $('.sertificates__carussel').css("display","block");
    });

    $(".sertificates__prev").bind('click', showPrevSertificate);
    $(".sertificates__next").bind('click', showNextSertificate);
    $(".sertificates__focused").bind('click', showNextSertificate);
    $(".sertificates__close").bind('click', closeSertificate);
    $(".sertificates__carussel").bind('click', closeSertificate);

    function showPrevSertificate(e) {
        tmpID = ( tmpID == '0' ) ? 5 : tmpID - 1;
        tmpPic = "url(img/sertificate-" + tmpID + ".jpg)";
        $('.sertificates__focused').css('backgroundImage', tmpPic);
        return false;
    }

    function showNextSertificate(e) {
        tmpID = ( tmpID == '5' ) ? 0 : (tmpID * 1 + 1);
        tmpPic = "url(img/sertificate-" + tmpID + ".jpg)";
        $('.sertificates__focused').css('backgroundImage', tmpPic);
        return false;
    }

    function closeSertificate(e) {
        $('.sertificates__carussel').css("display","none");
        return false;
    }
});


$(document).ready(function() {

    /*TOP SLIDER*/

    $('.slider-photo__slider ').owlCarousel({
        loop: true,
        margin: 10,
        items: 1,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        navText: ['prev', 'next'],
        nav: false,
        responsive: {
            0: {
                items: 1,

            },
            480: {
                items: 1,
            },
            760: {
                items: 1,

            },
            960: {
                items: 1,

            }
        }

    });
    $('.slider-photo__next').click(function () {
        $('.owl-carousel').trigger('next.owl.carousel');
    });
    $('.slider-photo__prev').click(function () {
        $('.owl-carousel').trigger('prev.owl.carousel');
    });

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

// ЯКОРНЫЕ ССЫЛКИ

$(function () {
    $("#back-top").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
    $(function () {
        $("#go-to-rewievs").click(function() {

            var elementClick = $(this).attr("href")
            var destination = $(elementClick).offset().top;
            jQuery("html:not(:animated),body:not(:animated)").animate({
                scrollTop: destination
            }, 800);
            return false;
        });
        $("#go-to-contacts").click(function() {

            var elementClick = $(this).attr("href")
            var destination = $(elementClick).offset().top;
            jQuery("html:not(:animated),body:not(:animated)").animate({
                scrollTop: destination
            }, 800);
            return false;
        });
    })
});

// АККОРДИОН

$(function() {

    $('#st-accordion').accordion();

});
$(function () {
    $('#st-accordion').find('.st-closed').html('<img src="img/accordion-closed.svg">');

    $('.title').click(function() {
        if($(this).parent().hasClass("st-open")){
            $(this).find(".st-closed").html('<img  src="img/accordion-opened.svg">');
        } else  {
            $(this).find(".st-closed").html('<img  src="img/accordion-closed.svg">');
        }

    });
});

// МЕНЮ МОБ

$(document).ready(function() {
  $('.menu-button').on('click', function(event) {
    $('.mob-menu').stop().slideToggle('fast');
  });
  $('.mob-menu').hover(function() {
    /* Stuff to do when the mouse enters the element */
  }, function() {
    $('.mob-menu').slideUp('fast')
  });;


});
