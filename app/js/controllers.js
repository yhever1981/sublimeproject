var bookStoreCtrls = angular.module('bookStoreCtrls', []);

bookStoreCtrls.controller('HelloController', ['$scope', 
	function($scope){
		{
			$scope.greeting={
				text:'Calvin'
			}
		}
	}
]);


bookStoreCtrls.controller('BookListController', ['$scope', 
	function($scope){
		$scope.books=[
			{title:"EXT book",author:"calvin"},
			{title:"action in script",author:"coco"},
			{title:"angular js",author:"jason"}
		]
	}	
]);



bookStoreCtrls.controller('BookFormController', ['$scope', 
	function($scope){
		{
			$scope.greeting={
				text:'Calvin'
			}
		}
	}
]);
