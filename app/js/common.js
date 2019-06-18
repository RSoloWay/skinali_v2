$(function () {
	$("#slider-home").slick({
		adaptiveHeight: true,
		arrows: true,
		// fade: true,
		appendArrows: '#first-screen .container',
		responsive: [{
			breakpoint: 1200,
			settings: {
				centerMode: true,
				variableWidth: true,
				appendArrows: '',
			},
			breakpoint: 786,
			settings: {
				centerMode: false,
				variableWidth: false,
				appendArrows: '',
			}
		}]
	});

	$(document).ready(function () {
		var el = "#first-screen #slider-home, #first-screen .container";
		var heigth;
		var widht = $(window).width();

		heigth = widht * 0.305;

		if ($(window).width() <= 1200) {
			heigth = $("#slider-home img").height()
		}

		if ($(window).width() <= 768) {
			heigth = "100%"
		}


		$(el).css("height", heigth);
	});

	$(document).ready(function () {
		var el = ".call-to-action";
		var margin;
		var scale;
		var widht = $(window).width();

		scale = widht / 1700;
		margin = widht / 30;

		if ($(window).width() <= 1600 && $(window).width() >= 1200) {

			$(el).css("transform", "scale(" + scale + ")");
			$(el).css("margin-top", margin);
		} else {}

		if ($(window).width() >= 768) {
			$(el).animate({
					opacity: 1
				},
				1000,
				function () {}
			);
		} else {}



		return;
	});


	$(document).ready(function () {
		$(".menu-btn").click(function () {
			$("#mobile-menu").fadeIn("1000");
			$(".menu").css("right", "0");
			$("body").css("overflow", "hidden");
		})
		$(".icon-close, #lightboxOverlay").click(function () {
			$(".menu").css("right", "-100px");
			$("#mobile-menu").fadeOut("1000");
			$("body").css("overflow", "auto");
		})
	})




	$('.topline li span').hover(function (event) {
		$(this).siblings().fadeIn("1000");

	});

	$('.topline li span').mouseleave(function (event) {
		$(event.target).next().fadeOut("1000");
		event.preventDefault();
	});


	$(document).ready(function () {
		lightbox.option({
			'resizeDuration': 200,
			'wrapAround': true
		})

	})

	$("a[data-lightbox]").click(function () {
		if (!$('#popup-declined').is(':visible')) {
			$('body').css('overflow-y', 'hidden').css('height', '100%');
		} else {
			$('body').css('overflow-y', 'auto').css('height', 'auto');
		}
	})

	$(".lb-close").click(function () {
		$('body').css('overflow-y', 'auto').css('height', 'auto');

	})

	// Скрипты для panno.html

	$("#slider-panno").slick({
		adaptiveHeight: true,
		arrows: true,
		// fade: true,
		appendArrows: '#first-screen-panno .container',
		responsive: [{
			breakpoint: 1200,
			settings: {
				centerMode: true,
				variableWidth: true,
				appendArrows: '',
			},
			breakpoint: 786,
			settings: {
				centerMode: false,
				variableWidth: false,
				appendArrows: '',
			}
		}]
	});

//  Скрипт для табов
	$('.tabs-btn').click(function(){
		$(this).siblings().toggleClass('active');
	})
// 

		$('.catalog-item').css('width')
		$('.catalog-item').css({
			'width': $('.catalog-item').css('width')
		});

		// Скрипты для banner.html
		$(function () {
			$("#draggable1").draggable({
				cursor: "pointer, scroll: true"
			});
			$("#draggable2").draggable({
				cursor: "pointer, scroll: true"
			});
			$("#draggable3").draggable({
				cursor: "pointe, scroll: truer"
			});
			$("#draggable4").draggable({
				cursor: "pointe, scroll: truer"
			});
			$("#draggable5").draggable({
				cursor: "pointe, scroll: truer"
			});
			$("#draggable6").draggable({
				cursor: "pointe, scroll: truer"
			});
		});	
		$(".slider-main").slick({
			dots: true,
			adaptiveHeight: true,
			arrows: true,
			responsive: [{
				breakpoint: 1200,
				settings: {
					centerMode: true,
					slidesToShow: 1,
					variableWidth: true
				},
				breakpoint: 786,
				settings: {
					centerMode: false,
					variableWidth: false,
					appendArrows: '',
				}
			}]
		});	
		$(".catalog-item").hover(function () {
			$(this).toggleClass("active");
		});
		$(".catalog-item-sq").hover(function () {
			$(this).toggleClass("active");
		});
	

		
	$("#containment-wrapper div").on("click", function () {
		$(".tooltip-flip").fadeOut()
	});
		

// scripts for skinali-fotooboi-verstka

$("#slider-wallpapers").slick({
	adaptiveHeight: true,
	arrows: true,
	// fade: true,
	appendArrows: '#first-screen-wallpapers .container',
	responsive: [{
		breakpoint: 1200,
		settings: {
			centerMode: true,
			variableWidth: true,
			appendArrows: '',
		},
		breakpoint: 786,
		settings: {
			centerMode: false,
			variableWidth: false,
			appendArrows: '',
		}
	}]
});

$(function () {
	$("#tabs").tabs();
});

	// console.log($('#lightboxOverlay').is(':visible'));



	// if ($("#lightboxOverlaya").css('display', 'block')) {
	// 	$("body").css('overflow', 'hidden')
	// }



	// console.log($("#lightboxOverlaya").css('display', 'block'));


	// $("#lightboxOverlay").css("display", "block", function() {
	// 	$("body").css('overflow', 'hidden')
	// })



});