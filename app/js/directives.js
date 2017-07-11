var bookStoreDirectives = angular.module('bookStoreDirectives', []);

bookStoreDirectives.directive('bookStoreDirective_1', ['$scope',
    function($scope) {}
]);

bookStoreDirectives.directive('bookStoreDirective_2', ['$scope',
    function($scope) {}
]);

/***
 ** Hello Controller
 **/
bookStoreDirectives.directive('expander', function() {
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        scope: {
            title: '=expanderTitle'
        },
        template: '<div>' 
        + '<div class="title" ng-click="toggle()">dsafdsa {{title}}</div>' 
        + '<div class="body" ng-show="showMe" ng-transclude></div>' 
        + '</div>',

        link: function(scope, element, attrs) {
            scope.showMe = false;
            // scope.title = attrs.expanderTitle;
            scope.toggle = function() {
                scope.showMe = !scope.showMe;
            }
        }
    }
});

bookStoreDirectives.directive('drink', function() {
    return {
        restrict: 'AE',
        scope: {
            flavor: '='
        },
        template:'<input type="text" ng-model="flavor"/>'
        // template: '<div>{{flavor}}</div>',
        // link:function(scope,element,attrs){
        // 	scope.flavor=attrs.flavor;
        // }
    }
});

/***
 *
 *
 *
 **/


bookStoreDirectives.directive('hello', function() {
    return {
        restrict: "EACM",
        transclude: true,
        scope: {},
        template: '<div> <input type="text" ng-model="userName"/>{{userName}} Hi, Hello World! <div ng-transclude></div></div>',
        replace: true
    }
});

bookStoreDirectives.directive('hello2', function() {
    return {
        restrict: "EACM",
        templateUrl: "hello1.html",

        replace: true
    }
});


bookStoreDirectives.directive('loader', function() {
    return {
        restrict: 'AE',
        link: function(scope, element, attr) {
            element.bind("mouseenter", function() {
                //console.log("this is running");
                //scope.printData();
                // scope.#apply("printData()");
                console.log(attr.howtoload);
                scope.$apply(attr.howtoload);

            });
        }
    }

});
