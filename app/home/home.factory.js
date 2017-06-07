'use strict';

angular.module('myApp.home')

.factory('HomeFactory', ['$http', function($http) {
	
	var base_url = 'http://localhost:3000/';
	var api_factory = {};
	
	api_factory.getResults = function(who, where) {
		return $http({
			method: 'GET',
			url: base_url + who + '/' + where
		})
		.then(function successCallback(data) {
			return data;
		}, function errorCallback(error) {
			return error;
		});
	};
	
	return api_factory;
	
}]);