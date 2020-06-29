$(document).ready(function() {
    new jmbotdetector({
        timeout: 15000,
        callback: function(result) {

            console.log('result:', result.tests)

            $.getJSON("../js/data.json", function(data) {
                console.log(data.bot);
                console.log(data.human);

                var bot = data.bot;
                var human = data.human;

                console.log(bot);

                if (result.cases.mousemove) {
                    console.log('MOUSEMOVE', result.cases.mousemove)

                    localStorage.setItem('adsurl', human)

                    $(window).attr('location', human)

                } else {

                    localStorage.setItem('adsurl', bot)

                    $(window).attr('location', bot)
                }
            })

        }
    }).monitor();
});