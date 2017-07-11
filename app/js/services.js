var bookStoreServices = angular.module('bookStoreServices', []);



bookStoreServices.service('bookStoreService_1', ['$scope',
    function($scope) {}
]);

bookStoreServices.service('bookStoreService_2', ['$scope',
    function($scope) {

    }
]);

bookStoreServices.service('userService', ['$http', function($http) {
    var doRequest = function() {
        console.log("userService .start call ..");
        return $http({
            method: 'GET',
            url: '../dummy/userdatadummy.json'
        });
    };

    this.getUserList = function() {
    	return doRequest();
    }
}]);

bookStoreServices.service('testUserService', function() {
    this.getUserInfoById = function(id) {
        firstName = 'john';
        lastName = 'leo111';

        return { "user": id, 'firstName': firstName, 'lastName': lastName };
    }
});

