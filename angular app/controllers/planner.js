/**
 * Created by patty.johnson on 1/11/2016.
 */

var planner = angular.module('planner', []);
planner.controller('plannerController', function($scope){
	$scope.day = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
	];
});