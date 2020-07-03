// Application Modules and Routing
angular
    .module('newApp', ['ngRoute', 'firebase'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/Dashboard.html',
                controller: 'DashboardCtrl'
            })
            .when('/custom', {
                templateUrl: 'views/custom.html',
                controller: 'CustomCtrl'
            })
            .when('/native', {
                templateUrl: 'views/native.html',
                controller: 'NativeCtrl'
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
            })
            .when('/settings', {
                templateUrl: 'views/Settings.html',
                controller: 'SettingsCtrl'
            });;
    });