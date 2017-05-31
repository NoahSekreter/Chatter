$(document).ready(function () {
    $(window).scroll(function () {

        console.log($(window).scrollTop());

        if ($(window).scrollTop() > 320) {
            $('#navbar').addClass('navbar-fixed');
        }

        if ($(window).scrollTop() < 321) {
            $('#navbar').removeClass('navbar-fixed');
        }
    });
});