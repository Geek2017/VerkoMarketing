angular.module('newApp').controller('CustomCtrl', function($scope) {
    alert(123)


    $("#save1").click(function() {
        console.log(document.getElementById('picker1').value);
    });

    if (document.getElementById('customRadio1').checked) {
        //Male radio button is checked
        console.log("default");
        $("#customFile").hide();
        $("#defaultFile").show();
    } else if (document.getElementById('customRadio2').checked) {
        //Female radio button is checked
        console.log("custom");
        $("#defaultFile").hide();
        $("#customFile").show();
    }


    $('.my-colorpicker1').colorpicker()

    $('.my-colorpicker2').colorpicker()

    $('.my-colorpicker2').on('colorpickerChange', function(event) {
        $('.my-colorpicker2 .fa-square').css('color', event.color.toString());
    });

    $('.my-colorpicker3').colorpicker()

    $('.my-colorpicker3').on('colorpickerChange', function(event) {
        $('.my-colorpicker3 .fa-square').css('color', event.color.toString());
    });

    $('.my-colorpicker4').colorpicker()

    $('.my-colorpicker4').on('colorpickerChange', function(event) {
        $('.my-colorpicker4 .fa-square').css('color', event.color.toString());
    });

    //color picker with addon circle
    $('.my-colorpicker5').colorpicker()

    $('.my-colorpicker5').on('colorpickerChange', function(event) {
        $('.my-colorpicker5 .fa-square').css('color', event.color.toString());
    });

    $('.my-colorpicker6').colorpicker()

    $('.my-colorpicker6').on('colorpickerChange', function(event) {
        $('.my-colorpicker6 .fa-square').css('color', event.color.toString());
    });

    $('.my-colorpicker7').colorpicker()

    $('.my-colorpicker7').on('colorpickerChange', function(event) {
        $('.my-colorpicker7 .fa-square').css('color', event.color.toString());
    });

    $('.my-colorpicker8').colorpicker()

    $('.my-colorpicker8').on('colorpickerChange', function(event) {
        $('.my-colorpicker8 .fa-square').css('color', event.color.toString());
    });

    //color picker with addon circle2
    $('.my-colorpicker9').colorpicker()

    $('.my-colorpicker9').on('colorpickerChange', function(event) {
        $('.my-colorpicker9 .fa-square').css('color', event.color.toString());
    });

    $('.my-colorpicker10').colorpicker()

    $('.my-colorpicker10').on('colorpickerChange', function(event) {
        $('.my-colorpicker10 .fa-square').css('color', event.color.toString());
    });

    $('.my-colorpicker11').colorpicker()

    $('.my-colorpicker11').on('colorpickerChange', function(event) {
        $('.my-colorpicker11 .fa-square').css('color', event.color.toString());
    });

    $("input[data-bootstrap-switch]").each(function() {
        $(this).bootstrapSwitch('state', $(this).prop('checked'));
    });



});