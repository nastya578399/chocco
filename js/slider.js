const slider = $('.slider__list').bxSlider({
    pager: false,
    controls: false
});

$('.product-slider__arrow--derection--prev').click((e) => {
    e.preventDefault();
    slider.goToPrevSlide();

})
console.log($('.product-slider__arrow--derection--next'));
$('.product-slider__arrow--derection--next').click((e) => {
    e.preventDefault();
    slider.goToNextSlide();
})