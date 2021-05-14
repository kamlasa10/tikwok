@@include('./libs.js');

(function ($) {
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