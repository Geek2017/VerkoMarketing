'use strict';

// Application Modules and Routing
angular
    .module('newApp', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            })
            .when('/custom', {
                templateUrl: 'views/custom.html',
                controller: 'ContactCtrl'
            })
            .when('/native', {
                templateUrl: 'views/native.html',
                controller: 'AboutCtrl'
            });
    });