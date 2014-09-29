angular.module('aua.controllers').controller('indMainCtrl', ['$scope', 'indUserSvc', function($scope, indUserSvc) {
    'use strict';

    var vm = this;

    vm.tabs = [
        { sref: 'index.grid', title: 'Grid' },
        { sref: 'index.chart', title: 'Chart' }
    ];

    vm.gridConfig = {
        datatype: 'local',
//        height: 350,
        height: 'auto',
        colNames:['Id', 'Full Name', 'Age', 'Sex', 'Bad luck', 'Best quote'],
        colModel:[
            {name:'id', width: 60, sorttype: 'int', hidden: true},
            {name:'name', width: 180, align: 'center'},
            {name:'age', width: 50, align: 'center', sorttype: 'int'},
            {name:'sex', width: 150, align: 'center', sorttype: 'string'},
            {name:'badLuck', width: 75, align: 'center', sorttype: 'float'},
            {name:'bestQuote', width: 180, align: 'center', sorttype: 'string'}
        ]
    };

    vm.gridData = [];
    var responseData = [];
    indUserSvc.getUsers().then(function (response) {
        responseData = response.data;
        vm.randomizeData(15);
    });

    vm.randomizeData = function (numberOfRecords) {
        var newArrayIds = [];
        var newArray = [];
        while(newArrayIds.length < numberOfRecords){
            var user = responseData[Math.floor(Math.random() * responseData.length)];
            if (newArrayIds.indexOf(user.id) === -1) {
                newArrayIds.push(user.id);
                newArray.push(user);
            }
        }
        vm.gridData = newArray;
    };

    vm.printData = function () {
        window.print();
    };

}]);