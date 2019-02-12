$(function() {
  $("#slider-home").slick({
    adaptiveHeight: true,
    arrows: true,
    // fade: true,
    appendArrows: '#first-screen .container',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerMode: true,
          variableWidth: true
        }
      }
    ]
  });

  $(document).ready(function() {
    var el = "#first-screen #slider-home, #first-screen .container";
    var heigth;
    var widht = $(window).width();

    heigth = widht * 0.305;

    if ($(window).width() <= 1200) {
    return
    }

    $(el).css("height", heigth);
    console.log("Print");
    
  });

  $(document).ready(function() {
    var el = ".call-to-action";
    var margin;
    var scale;
    var widht = $(window).width();

    scale = widht / 1700;
    margin = widht / 30;

    if ($(window).width() <= 1600 && $(window).width() >= 1200) {

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
