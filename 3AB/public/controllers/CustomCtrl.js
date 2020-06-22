angular.module('newApp').controller('CustomCtrl', function($scope) {
    $(document).ready(function() {

        load_folder_list();

        function load_folder_list() {
            var action = "fetch";
            $.ajax({
                url: "action.php",
                method: "POST",
                data: {
                    action: action
                },
                success: function(data) {
                    $('#folder_table').html(data);
                }
            })
        }



        $(document).on('click', '#create_folder', function() {
            $('#action').val('create');
            $('#folder_name').val('');
            $('#folder_button').val('Create');
            $('#old_name').val('');
            $('#change_title').text('Create Folder');
            $('#folderModal').modal('show');
        });

        $(document).on('click', '#folder_button', function() {
            var folder_name = $('#folder_name').val();
            var action = $('#action').val();
            if (folder_name != '') {
                $.ajax({
                    url: "copy.php",
                    method: "POST",
                    data: {
                        folder_name: folder_name,
                        action: action,
                        copy: "copy"
                    },
                    success: function(data) {
                        $('#folderModal').modal('hide');
                        load_folder_list();
                        alert(data);
                        localStorage.setItem("botpath", folder_name + "/assets/ads/bot.html");
                        localStorage.setItem("humanpath", folder_name + "/assets/ads/human.html");
                    }
                });
            } else {
                alert("Enter Folder Name");
            }
        });

    });

    // $("#create_folder").click(function() {
    //     $.get("test.php");
    //     // console.log('successully created!')
    //     return false;

    // });


    $("#default_folder").click(function() {
        // $.get("copy.php");
        // // console.log('successully created!')
        // return false;

        $.ajax({
            url: "copy.php",
            method: "POST",
            data: {
                copy: "copy"
            },
            success: function(data) {
                console.log(data);
                console.log("success");
            }
        })

    });


    // $.ajax({
    //     url: 'test.php',
    //     success: function(response) { //response is value returned from php (for your example it's "bye bye"
    //         //alert(response);
    //         console.log(response);
    //     }
    // });

    $("#save1").click(function() {
        // console.log(document.getElementById('picker1').value);
        // $.get("test.php");
        // return false;

    });

    $("#customRadio1").click(function() {
        // console.log("default");
        $("#customFile").hide();
        $("#defaultFile").show();
    });
    $("#customRadio2").click(function() {
        // console.log("custom");
        $("#defaultFile").hide();
        $("#customFile").show();
    });

    // if (document.getElementById('customRadio1').checked) {
    //     console.log("default");
    //     $("#customFile").hide();
    //     $("#defaultFile").show();
    // } else if (document.getElementById('customRadio2').checked) {
    //     console.log("custom");
    //     $("#defaultFile").hide();
    //     $("#customFile").show();
    // }

    // document.getElementById("field07").setAttribute("disabled", false);


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