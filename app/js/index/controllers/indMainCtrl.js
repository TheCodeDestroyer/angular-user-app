angular.module('spci.controllers').controller('indMainCtrl', ['$state', 'indUserSvc', function($state, indUserSvc) {
    'use strict';

    var vm = this;
    vm.gridData = [];
    var responseData = [];

    vm.tabs = [
        { sref: 'index.grid', title: 'Grid', active: $state.current.name === 'index.grid' },
        { sref: 'index.chart', title: 'Chart', active: $state.current.name === 'index.chart' }
    ];

    vm.gridConfig = {
        datatype: 'local',
//        height: 400,
        height: 'auto',
        rowList:[5,10,15],
        rowNum:15,
        pager: '#gridPager',
        sortname: 'id',
        sortorder: 'asc',
        sortable: true,
        colNames:['Id', 'Full Name', 'Age', 'Sex', 'Bad luck', 'Best quote'],
        colModel:[
            {name:'id', width: 60, resizable: true, sorttype: 'int', hidden: true},
            {name:'name', width: 180, resizable: true, align: 'center'},
            {name:'age', width: 60, resizable: true, align: 'center', sorttype: 'int'},
            {name:'sex', width: 60, resizable: true, align: 'center', sorttype: 'string'},
            {name:'badLuck', width: 100, resizable: true, align: 'center', sorttype: 'float'},
            {name:'bestQuote', width: 290, resizable: true, align: 'center', sorttype: 'string'}
        ]
    };

    vm.highchartsConfig = {
        options: {
            chart: {
                type: 'column'
            },
            tooltip: {
                style: {
                    padding: 10,
                    fontWeight: 'bold'
                }
            }
        },
        size: {
            width: 600,
            height: 400
        }
    };

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
        vm.buildChart();
    };

    vm.printData = function () {
        window.print();
    };

    vm.buildChart = function (chartType) {
        vm.highchartsConfig.series = [];
        vm.highchartsConfig.xAxis = { categories: ['Characters'] };
        vm.highchartsConfig.yAxis = { currentMin: 0 };
        var users = vm.gridData;

        switch (chartType) {
            case 0:
                vm.highchartsConfig.title = { text: 'Bad luck chart' };
                vm.highchartsConfig.yAxis.currentMax = 10000;
                vm.highchartsConfig.yAxis.title = { text: 'Bad luck' };
                break;
            default:
                vm.highchartsConfig.title = { text: 'Age chart' };
                vm.highchartsConfig.yAxis.currentMax = 100;
                vm.highchartsConfig.yAxis.title = { text: 'Age' };
        }

        for (var i = 0; i < users.length; i++) {
            vm.highchartsConfig.series.push({ name: users[i].name, data: [(chartType !== 0) ? users[i].age : users[i].badLuck ]});
        }
    };

}]);