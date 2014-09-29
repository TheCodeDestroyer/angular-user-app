
angular.module('aua.filters', []);
angular.module('aua.services', []);
angular.module('aua.directives', []);
angular.module('aua.controllers', []);

angular.module('aua', [
    'ngCookies',
    'pascalprecht.translate',
    'ngStorage',
    'aua.filters',
    'aua.services',
    'aua.directives',
    'aua.controllers'
]).
    config(['$stateProvider', '$urlRouterProvider', '$translateProvider', function($stateProvider, $urlRouterProvider, $translateProvider) {
        'use strict';

        $translateProvider.useLocalStorage();
        $translateProvider.preferredLanguage('en-US');
        $translateProvider.useStaticFilesLoader({
            prefix: 'i18n/',
            suffix: '.json'
        });

        $stateProvider.state('index', {url: '/', abstract: true, templateUrl: '', controller: 'indMainCtrl'});

        $stateProvider.state('index.grid', {
            url: "/grid",
            templateUrl: 'index/partials/indGrid.html'
        });
        $stateProvider.state('index.chart', {
            url: "/grid",
            templateUrl: 'index/partials/indChart.html'
        });

        $urlRouterProvider.otherwise('/');

    }]);