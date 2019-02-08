$(function() {

	$(".slider-home").slick({
		dots: true,
		adaptiveHeight: true,
		arrows: false,
		responsive: [{
			breakpoint: 1200,
			settings: {
				centerMode: true,
				slidesToShow: 1,
				variableWidth: true
			}
		}]
	});

});
