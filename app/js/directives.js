var bookStoreDirectives = angular.module('bookStoreDirectives',[]);

bookStoreDirectives.directive('bookStoreDirective_1',['$scope',
	function($scope)
	{}
]);

bookStoreDirectives.directive('bookStoreDirective_2', ['$scope', 
	function($scope){}
]);

bookStoreDirectives.directive('hello', function()
{
	return {
		restrict:"EACM",
		transclude:true,
		template:"<div> Hi, Hello World! <div ng-transclude></div></div>",
		replace: true
	}
});

bookStoreDirectives.directive('hello2', function()
{
	return {
		restrict:"EACM",
		templateUrl:"hello1.html",

		replace: true
	}
});


bookStoreDirectives.directive('loader',function(){
	return {
		restrict:'AE',
		link:function(scope,element,attr){
			element.bind("mouseenter",function(){
				//console.log("this is running");
				//scope.printData();
				// scope.#apply("printData()");
				console.log(attr.howtoload);
				scope.$apply(attr.howtoload);

			});
		}
	}

});