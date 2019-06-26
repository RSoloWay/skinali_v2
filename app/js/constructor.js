$("#topColorPicker").spectrum({
  color: "#8a7247",
  showButtons: false,
  move: function (c) {
    $("#part_top_left").css("background-color", c.toHexString());
    $("#part_top_right").css("background-color", c.toHexString());
  },
  change: function (color) {
    $("#part_top_left").css("background-color", color.toHexString());
    $("#part_top_right").css("background-color", color.toHexString());
  }
});

$(document).ready(function () {
  $("#bottomAsTop").text("Как верх")
})

$("#bottomColorPicker").spectrum({
  color: "#8a7247",
  showButtons: false,
  move: function (c) {
    $("#part_bottom").css("background-color", c.toHexString());
  },
  change: function (color) {
    $("#part_bottom").css("background-color", color.toHexString());
  }
});

$("#bottomAsTop").click(function () {
  var color = $("#part_top_left").css('background-color');
  $("#part_bottom").css("background-color", color);
  $("#bottomColorPicker").spectrum("set", color);
});

$("input[name=odnoton_select]").change(function () {
  var radio = $('input[name=odnoton_select]:checked').val();
  //console.log(radio);
  if (radio == "all") {
    $('.odnoton_container').css("display", "block");
  } else {
    $('.odnoton_container').hide();
    $('.odnoton_' + radio).css("display", "block");
  }
});

$(".set_color").click(function () {
  var color = $(this).css("background-color");
  $("#part_middle").css("background-image", "url()").css("background-color", color);
  $("#sendBGI").val(color);
  console.log($("#sendBGI").val());
});

$("#color_image_select").change(function (e) {
	var str = "";
	$( "select option:selected" ).each(function() {
		str += $( this ).attr('data-name');
	});
  $(".selected_block").hide();
  $(".selected_block" + "." + str).css("display", "block").animate({
    opacity: 1,
  }, 1000);
});


$(document).ready(function () {
  if ($(window).width() <= 992) {
		$('.selected_block .set_color, .selected_block .set_image').click(function () {
			$("body, html").animate({
				scrollTop: $(".image_container").offset().top - 100,
			}, 1000);
			$(".tooltip-mobile").remove();
		});

  }
});

$('#up-js').click(function (e) { 
	e.preventDefault();
	$("#selected_blocks").animate({
    scrollTop: $('.selected_block').offset().top,
  }, 1000);
	
});

$(document).ready(function () {
	if ($(window).width() >= 768) { 
		let height =$('.image_container').height();
		$('.left_side, .image_container, .panel_container, .construcor_panel').height(height);
		$('#selected_blocks').height(height - 100);
	} else {
		$('.panel_container, .construcor_panel').height('600px');
	}
});


$('.set_image').click(function () {
  var src = $(this).attr('src');
  result = src.replace(/\s/g, '%20');
  $("#part_middle").css("background-image", "url(" + result +")").css("background-color", "transparent");
  $("#sendBGI").val("<a href='http://skinali.com.ua/application/views/client" + result + "'>Изображение скинали</a>");
});



function setUserImg() {
  $('.user_image').show();
  $('#userImage').attr('src', '');
}

function readURL() {
  var file = document.getElementById("getImgSetImg").files[0];
  var reader = new FileReader();
  reader.onloadend = function () {
    document.getElementById('part_middle').style.backgroundImage = "url(" + reader.result + ")";
    $('#userImage').attr('src', reader.result);
    $("#sendBGI").val("Установлено изображение пользователя");
    console.log($("#sendBGI").val());
  }
  if (file) {
    reader.readAsDataURL(file);
  } else {}
  $('.user_image').show();
}

