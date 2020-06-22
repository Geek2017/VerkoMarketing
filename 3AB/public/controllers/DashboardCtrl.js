'use strict';

angular.module('newApp').controller('DashboardCtrl', function($scope) {
    // firebase.auth().onAuthStateChanged(function(user) {
    //     if (user) {

    //         console.log(user);

    //     } else {
    //         console.log(window.location.pathname);
    //         // window.location.pathname = '/3AB/public/login.html';
    //         window.location.href = './index.html';
    //     }
    // });

    $scope.botclicks = '100';
    $scope.humanclicks = '10';

    // alert($scope.botclicks)
});