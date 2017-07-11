var bookStoreServices = angular.module('bookStoreServices', []);



bookStoreServices.service('bookStoreService_1', ['$scope',
    function($scope) {}
]);

bookStoreServices.service('bookStoreService_2', ['$scope',
    function($scope) {

    }
]);

bookStoreServices.service('userService', ['$http', function($http) {
    // alert('da');
    var doRequest = function() {
        console.log("userService .start call ");
        return $http({
            method: 'GET',
            url: '../dummy/userdatadummy.json'
        });
    };

    this.getUserList = function() {
    	return doRequest();
        // console.log("call getuserlist 1");
        // return $http({
        //     method: 'GET',
        //     url: '../dummy/userdatadummy.json'
        // }).then(
        //     function successCallback(response) {
        //         console.log("success...");
        //         console.log(response.data);
        //         console.log("call getuserlist 2");
        //         return response.data;
        //     },
        //     function errorCallback(response) {
        //         console.log("call getuserlist 3");
        //         console.log("failed")
        //             // return {};
        //     });
        // console.log("call getuserlist 4");
        // return {};
    }
}]);

bookStoreServices.service('testUserService', function() {
    this.getUserInfoById = function(id) {
        firstName = 'john';
        lastName = 'leo111';

        return { "user": id, 'firstName': firstName, 'lastName': lastName };
    }
});

// bookStoreServices.factory('userService1', ['$http',
//     function($http) {

//     }
// ]);
