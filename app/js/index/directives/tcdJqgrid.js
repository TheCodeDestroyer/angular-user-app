angular.module('spci.directives').directive('tcdJqgrid', function () {
    return {
        restrict: 'E',
        scope: {
            config: '=',
            data: '='
        },
        link: function (scope, element) {
            var table;
            var pager;
            scope.$watch('config', function (newValue, oldValue) {
                if (newValue !== oldValue || $('#grid').length === 0) {
                    element.children().empty();
                    table = angular.element('<table id="grid"></table>');
                    pager = angular.element('<div id="gridPager" class="hidden-print"></div>');
                    var grid = $(table);
                    element.append(table);
                    element.append(pager);
                    grid.jqGrid(newValue);
                }
            });

            scope.$watch('data', function (newValue, oldValue) {
                var i;
                for (i = oldValue.length - 1; i >= 0; i--) {
                    $(table).jqGrid('delRowData', i);
                }
                for (i = 0; i < newValue.length; i++) {
                    $(table).jqGrid('addRowData', i, newValue[i]);
                }
            });

        }
    };
});