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
            })
            .when('/bot', {
                templateUrl: 'views/Bot.html',
                controller: 'BotOnlyCtrl'
            })
            .when('/machinelearning', {
                templateUrl: 'views/MachineLearn.html',
                controller: 'MachineLearnCtrl'
            })
            .when('/deeplearning', {
                templateUrl: 'views/DeepLearn.html',
                controller: 'DeepLearnCtrl'
            })
            .when('/eventslog', {
                templateUrl: 'views/EventsLog.html',
                controller: 'EventsLogCtrl'
            });
    });