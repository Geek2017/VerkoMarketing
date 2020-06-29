'use strict';

angular.module('newApp').controller('DashboardCtrl', function($scope) {
    $(document).ready(function() {




        // $('#botcliks').text(localStorage.getItem('botcliks'));
        // $('#humancliks').text(localStorage.getItem('humancliks'));






        var bc = [];
        var hc = [];


        var currentUrl = window.location.hostname;



        var ref = firebase.database().ref("/datasets/human/");
        ref.orderByChild("url").equalTo(currentUrl).on("child_added", function(snapshot) {
            hc.push(snapshot.val());
            console.log('Human:', hc.length)
            $('#humancliks').text(hc.length)
            $('#traffic').text(bc.length + hc.length)
        });

        var ref = firebase.database().ref("/datasets/bot/");
        ref.orderByChild("url").equalTo(currentUrl).on("child_added", function(snapshot) {
            bc.push(snapshot.val());
            console.log('Bot:', bc.length)
            $('#botcliks').text(bc.length)
            $('#traffic').text(bc.length + hc.length)
        });




    });
});