$(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        // speed: 300,
        // slidesToShow: 1,
        // centerMode: true,
        variableWidth: true,
        arrows: true,
        appendArrows: $('.slider-navigation__arrows'),
        appendDots: $('.slider-navigation__dots'),
    });
});