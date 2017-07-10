

var bookStoreApp = angular.module('bookStoreApp',[
	'ngRoute','ngAnimate','bookStoreCtrls','bookStoreDirectives','bookStoreFilters',
	'bookStoreServices'
	]);

bookStoreApp.config(function($routeProvider){
	$routeProvider.when('/hello',{
		templateUrl:'views/hello.html',
		controller:'HelloController'
	}).when('/list',{
		templateUrl:'views/bookList.html',
		controller:'BookListController'
	}).when('/userInfo',{
		templateUrl:'views/userInfo.html',
		controller:'UserInfoController'
	}).when('/csstest',{
		templateUrl:'views/csstest.html',
		controller:'CssTestController'
	}).otherwise({
		redirectorTo:'/hello'
	})
})