angular.module('aua.controllers').controller('indMainCtrl', ['$scope', 'indUserSvc', function($scope, indUserSvc) {
    'use strict';

    var vm = this;

    vm.tabs = [
        { sref: 'index.grid', title: 'Grid' },
        { sref: 'index.chart', title: 'Chart' }
    ];

    vm.gridData = [];

    indUserSvc.getUsers().then(function (response) {
        vm.gridData = response.data;
    });

    vm.gridConfig = {
        datatype: 'local',
        height: 250,
        colNames:['Id','Full Name', 'Age', 'Sex','Bad luck meter'],
        colModel:[
            {name:'id', width: 60, sorttype: 'int', hidden: true},
            {name:'name', width: 250, align: 'center'},
            {name:'age', width: 100, align: 'center', sorttype: 'int'},
            {name:'sex', width: 100, align: 'center', sorttype: 'string'},
            {name:'badLuck', width: 150, align: 'center', sorttype: 'float'}
        ]
    };

}]);