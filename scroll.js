$(function () {
    $('a[href^="#"]').click(function () {
        let speed = 400;
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html' : href);
        let position = target.offset().top;
        $('body,html').animate({ scrollTop: position }, speed, 'swing');
        return false;
    });
});

jQuery(window).on('scroll', function () {
    if (jQuery('.main-message').height() * 2 < jQuery(this).scrollTop()) {
        jQuery('.page-section').addClass('grayback');
        jQuery('.slideshow').addClass('blur');

    } else {
        jQuery('.page-section').removeClass('grayback');
        jQuery('.slideshow').removeClass('blur');
    }
});

jQuery(window).on('scroll', function () {
    if (jQuery('.main-message').height() * 3 < jQuery(this).scrollTop()) {
        jQuery('.slideshow').addClass('blur');

    } else {
        jQuery('.slideshow').removeClass('blur');
    }
});

$(document).ready(function () {
    var heightSize = $(window).height();
    $(".slideshow li").height(heightSize * 2);
    $(".navbar-nav li a").click(function (event) {
        $(".navbar-collapse").collapse('hide');
    });
    $(".navbar-brand").click(function (event) {
        $(".navbar-collapse").collapse('hide');
    });

    $("p.question").on("click", function () {
        $(this).next().slideToggle(200);
    });

});