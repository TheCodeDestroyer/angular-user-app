angular.module('spci.controllers').controller('indMetaCtrl', [function() {
    'use strict';

    var vm = this;

    vm.currentYear = new Date().getFullYear();
    vm.currentDate = new Date();

}]);