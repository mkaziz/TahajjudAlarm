///* global angular */
angular.module("TahajjudAlarm").controller('LocationController', ['prayTimes', '$scope', 
	'AlarmService', '$ionicLoading', "$cordovaGeolocation",
	function(PrayTimes, $scope, AlarmService, $ionicLoading, $cordovaGeolocation) {
	    "use strict";
		
	    var self = this;
		
		var posOptions = {timeout: 10000, enableHighAccuracy: false};
		$cordovaGeolocation
		    .getCurrentPosition(posOptions)
		    .then(function (position) {
				console.log(position);
		    }, function(err) {
	  			console.log(err);
		    });

		
	}
]);