
angular.module('spci.filters', []);
angular.module('spci.services', []);
angular.module('spci.directives', []);
angular.module('spci.controllers', []);

angular.module('spci', [
    'ngCookies',
    'ui.router',
    'highcharts-ng',
    'ui.bootstrap',
    'aua.filters',
    'aua.services',
    'aua.directives',
    'aua.controllers'
]).
    config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        'use strict';

        $stateProvider.state('index', {url: '/', abstract: true, templateUrl: 'js/index/partials/indMain.html', controller: 'indMainCtrl as indMain'});

        $stateProvider.state('index.grid', {
            url: "grid",
            templateUrl: 'js/index/partials/indGrid.html'
//                    controller: 'indHomeCtrl'
        });
        $stateProvider.state('index.chart', {
            url: "chart",
            templateUrl: 'js/index/partials/indChart.html'
        });

        $urlRouterProvider.otherwise('grid');

    }]);