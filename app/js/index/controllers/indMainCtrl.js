angular.module('aua.controllers').controller('indMainCtrl', ['$translate', function($translate) {
    'use strict';

    var vm = this;

    vm.tabs = [
        { sref: 'index.grid', title: 'Grid' },
        { sref: 'index.chart', title: 'Chart' }
    ];

    vm.gridConfig = {
        datatype: "local",
        height: 250,
        colNames:['Id','Full Name', 'Age', 'Sex','Possibility to die'],
        colModel:[
            {name:'id', width: 60, sorttype: "int"},
            {name:'name', width: 150},
            {name:'age', width: 80, align: "right", sorttype: "int"},
            {name:'sex', width: 80, sorttype: "float"},
            {name:'incidentPossibility', width: 50, sorttype: "int"}
        ]
    };

    vm.gridData = [
        { id:"1", name:"test",note:"note",amount:"200.00",tax:"10.00",total:"210.00"},
        { id:"2", name:"test2",note:"note2",amount:"300.00",tax:"20.00",total:"320.00"},
        { id:"3", name:"test3",note:"note3",amount:"400.00",tax:"30.00",total:"430.00"},
        { id:"4", name:"test",note:"note",amount:"200.00",tax:"10.00",total:"210.00"},
        { id:"5", name:"test2",note:"note2",amount:"300.00",tax:"20.00",total:"320.00"},
        { id:"6", name:"test3",note:"note3",amount:"400.00",tax:"30.00",total:"430.00"},
        { id:"7", name:"test",note:"note",amount:"200.00",tax:"10.00",total:"210.00"},
        { id:"8", name:"test2",note:"note2",amount:"300.00",tax:"20.00",total:"320.00"},
        { id:"9", name:"test3",note:"note3",amount:"400.00",tax:"30.00",total:"430.00"}
    ];

}]);