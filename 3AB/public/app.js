// Application Modules and Routing
angular
    .module('newApp', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/Dashboard.html',
                controller: 'DashboardCtrl'
            })
            .when('/custom', {
                templateUrl: 'views/Custom.html',
                controller: 'CustomCtrl'
            })
            .when('/native', {
                templateUrl: 'views/native.html'
            });
    });