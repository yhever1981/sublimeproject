

var bookStoreApp = angular.module('bookStoreApp',[
	'ngRoute','bookStoreCtrls','bookStoreDirectives','bookStoreFilters',
	'bookStoreServices'
	]);

bookStoreApp.config(function($routeProvider){
	$routeProvider.when('/hello',{
		templateUrl:'views/hello.html',
		controller:'HelloController'
	}).when('/list',{
		templateUrl:'views/bookList.html',
		controller:'BookListController'
	}).when('/bookForm',{
		templateUrl:'views/bookForm.html',
		controller:'BookFormController'
	}).otherwise({
		redirectorTo:'/hello'
	})
})