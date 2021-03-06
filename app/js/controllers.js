var bookStoreCtrls = angular.module('bookStoreCtrls', []);


/*
 * Hellow Controller
 */
bookStoreCtrls.controller('HelloController', ['$scope',
    function($scope) {
        {
            $scope.greeting = {
                text: 'Calvin'
            }

            $scope.titleTest = "click to expend";
            $scope.text = "this is the content";

            $scope.ctrlFlavor = "BAiwei";

        }
    }
]);



/**
List Controller
*/

bookStoreCtrls.controller('BookListController', ['$scope',
    function($scope) {
        $scope.books = [
            { title: "EXT book", author: "calvin" },
            { title: "action in script", author: "coco" },
            { title: "angular js", author: "jason" }
        ]
    }
]);


/**
 * user list
 */
bookStoreCtrls.controller('UserListController', ['$scope', '$http','userService',
    function($scope, $http,userService) {

        // var testresult = testUserService.getUserInfoById(1);
        // console.log(testresult);
        // console.log('calling the service: successful');


       userService.getUserList()
       .then(
            function successCallback(response) {
                console.log("success...");
                console.log(response.data);
                $scope.users = response.data;
            },
            function errorCallback(response) {
                console.log("failed")
            }
        );
    }
]);

bookStoreCtrls.controller('UserInfoController', ['$scope',
    function($scope) {
        {

            $scope.userInfo = {
                email: "calvin.ye@capgemini.com",
                password: "calvin",
                autoLogin: true
            };

            $scope.getFormData = function() {
                console.log($scope.userInfo);
            };

            $scope.setFormData = function() {
                alert("111");
                $scope.userInfo = {
                    email: "yhev@capgemini.com",
                    password: "test",
                    autoLogin: false
                };
            };

            $scope.resetForm = function() {
                $scope.userInfo = {
                    email: "calvinsete@capgemini.com",
                    password: "calvinsss",
                    autoLogin: true
                };

            };

            $scope.save = function() {
                console.log("save the data");
            }
        }
    }
]);


bookStoreCtrls.controller('CssTestController', ['$scope', function($scope) {
    $scope.color = "red";
    $scope.setGreen = function() {
        $scope.color = "green";
    };

    $scope.showError = function() {
        $scope.isError = true;
        $scope.isWarning = false;
        $scope.messageText = "this is error";
    };

    $scope.showWarning = function() {
        $scope.isError = false;
        $scope.isWarning = true;
        $scope.messageText = "this is warning";
    };

}]);


bookStoreCtrls.controller('DirectController', ['$scope', function($scope) {

    $scope.printData = function() {
        console.log("loading the date from controller1111111");
    };

    $scope.printData2 = function() {
        console.log("loading the date from controller2222222222222");
    }
}]);
