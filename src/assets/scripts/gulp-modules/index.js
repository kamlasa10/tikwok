@@include('./libs.js');

(function ($) {
	if (screen.width > 700) {

		$('.js-advice-open-slider').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: false,
			arrows: false,
			infinite: false,
			responsive: [
				{
					breakpoint: 993,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				},
			]
		});

		$('.js-products-card-advice-sl-slider-next').click(function () {
			$('.js-advice-open-slider').slick('slickPrev');
		})

		$('.js-products-card-advice-sl-slider-prev').click(function () {
			$('.js-advice-open-slider').slick('slickNext');
		});
	}

	if ($('.js-object-slider')){
		$('.js-object-slider').on("init", function(event, slick){
			$('.js-services-slider-counter').text(parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
		});
		$('.js-object-slider').on("afterChange", function(event, slick, currentSlide){
			$('.js-services-slider-counter').text(parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
		});
	
		
		$('.js-object-slider').slick({
			arrows: false, 
			variableWidth: false,
			infinite: false
		})
	
		$('.object__slider-arrow-prev').click(function(){
			$('.js-object-slider').slick('slickPrev')
		})
	
		$('.object__slider-arrow-next').click(function(){
			$('.js-object-slider').slick('slickNext')
		})
	}
})(jQuery);
