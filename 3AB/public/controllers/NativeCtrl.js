'use strict';

angular.module('newApp').controller('NativeCtrl', function($scope) {
    if (localStorage.getItem("botpath") && localStorage.getItem("humanpath")) {
        alert("You're allowed!");
    } else {
        console.log("You're not allowed!");
        window.location.href = "#custom";
    }
});