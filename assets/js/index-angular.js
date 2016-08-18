var app = angular.module("tobysList", ["firebase","slick"]); 


app.controller("mainController", function($scope, $firebaseObject, $firebaseArray) {
	var ref = new Firebase("https://tobys-list-ed1c7.firebaseio.com");

	$scope.test = ["1","2"];
	
	$scope.rescues = $firebaseArray(ref);
});
