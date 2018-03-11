$(".catalog__item").click(function (e) {
    e.preventDefault();
    $(".catalog__item").removeClass('catalog__item--active');
    $(this).addClass('catalog__item--active');
})

$(".catalog__item--1").click(function (e) {
    e.preventDefault();
    $(".catalog__slide").removeClass('catalog__slide--active');
    $(".catalog__slide--1").addClass('catalog__slide--active');
})

$(".catalog__item--2").click(function (e) {
    e.preventDefault();
    $(".catalog__slide").removeClass('catalog__slide--active');
    $(".catalog__slide--2").addClass('catalog__slide--active');
})

$(".catalog__item--3").click(function (e) {
    e.preventDefault();
    $(".catalog__slide").removeClass('catalog__slide--active');
    $(".catalog__slide--3").addClass('catalog__slide--active');
})