$(function() {
  $(".slider-home").slick({
    dots: true,
    adaptiveHeight: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          variableWidth: true
        }
      }
    ]
  });

  $(document).ready(function() {
    var el = "#first-screen #slider-home, #first-screen .container";
    var heigth;
    var widht = $(window).width();

    heigth = widht * 0.306;

    $(el).css("height", heigth);
  });

  $(document).ready(function() {
    var el = ".call-to-action";
    var margin;
    var scale;
    var widht = $(window).width();

    scale = widht / 1700;
    margin = widht / 30;

    if ($(window).width() <= 1600 && $(window).width() >= 1200) {
      console.log("efef");

      $(el).css("transform", "scale(" + scale + ")");
      $(el).css("margin-top", margin);
    } else {
    }

    $(el).animate(
      {
        opacity: 1
      },
      1000,
      function() {
        // Animation complete.
      }
    );

    return;
  });
});
