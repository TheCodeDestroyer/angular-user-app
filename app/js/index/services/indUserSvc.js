angular.module('spci.services').factory('indUserSvc', ['$http', function($http){

    function getUsers() {

        var apiUrl = 'http://localhost:3412';

        if (!apiUrl && apiUrl === '') {
            return undefined;
        }

        return $http.get(apiUrl + '/user');
    }

    return {
        getUsers: getUsers
    };
}]);
