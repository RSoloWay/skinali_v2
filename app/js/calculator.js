$(function () {

    $('#calc-form').change(function () {
        var width = 0;
        var heigth = 0;
        var size = 0;
        var price = 0;
        var result;
        $('#totalCost').val(0);


        $('.sizes-panel').each(function () {

          width = parseInt($(this).find("#width").val());
          heigth = parseInt($(this).find("#heigth").val());

          if ($('#cities').val() !== '') {
            $('#cities').css({
              'border': '1px solid #95c6cd'
            })
          if (isNaN(width) === false && isNaN(heigth) === false ) {
            size += width / 100 * heigth / 100;
          }
        } else {
          $('#cities').css({
            'border': '1px solid #f00'
          })
        }

        

        if ($('#cities').val() === "Киев") {
    		if ($("#window-type").val() === "optiwhite") {
    			price = 2750;
    		} else {
    			price = 2050;
    		}

    		if ($("#mounting").prop('checked')) {
    			price += 500;
    		}

    		if ($("#install-type").val() === "Holder") {
    			price += 180;
    		}

    		if ($("#socket").prop('checked')) {
    			price += 100;
    		}

    		if ($("#fitting").prop('checked')) {
    			price += 200;
    		} 
    	} else {

    		if ($("#window-type").val() === "optiwhite") {
    			price = 2400;
    		} else {
    			price = 1700;
    		}

    		if ($("#mounting").prop('checked')) {
    			price += 300;
    		}

    		if ($("#install-type").val() === "Holder") {
    			price += 180;
    		}

    		if ($("#socket").prop('checked')) {
    			price += 200;
    		}

    		if ($("#fitting").prop('checked')) {
    			price += 200;
    		}
        }
        });

        function getResult(result) {
          if ($("#delivery").prop('checked')) {
            result += 400;
          }
          return String(result).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
        }

       

        if (width !== 0 || heigth !== 0) {
          $("#size").val(size.toFixed(2))
          result = Math.round(size * price);

          $("#totalCost").val(getResult(result));
          $('#errors').text("");

        } else {
          // $('#errors').text("Р’РІРµРґРёС‚Рµ СЂР°Р·РјРµСЂ РїР°РЅРµР»Рё")

        }




        // if (size > 0) {
        //   $('.btn-form-slide').fadeIn('fast')
        // }

        // $('#sendResult').val(getResult(result));

  });

});