angular.module('aua.controllers').controller('indMetaCtrl', ['$state', 'indUserSvc', function($state, indUserSvc) {
    'use strict';

    var vm = this;

    vm.currentYear = new Date().getFullYear();
    vm.currentDate = new Date();

}]);