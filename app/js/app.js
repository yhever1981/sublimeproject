

var bookStoreApp = angular.module('bookStoreApp',[
	'ngRoute','bookStoreCtrls','bookStoreDirectives',
	'bookStoreFilters','bookStoreServices'
	]);

bookStoreApp.config(function($routeProvider){
	$routeProvider.when('/hello',{
		templateUrl:'views/hello.html',
		controller:'HelloController'
	}).when('/list',{
		templateUrl:'views/bookList.html',
		controller:'BookListController'
	}).when('/userList',{
		templateUrl:'views/userlist.html',
		controller:'UserListController'
	}).when('/userInfo',{
		templateUrl:'views/userInfo.html',
		controller:'UserInfoController'
	}).when('/csstest',{
		templateUrl:'views/csstest.html',
		controller:'CssTestController'
	}).when('/direct',{
		templateUrl:'views/direct.html',
		controller:'DirectController'
	}).otherwise({
		redirectorTo:'/hello'
	})
})