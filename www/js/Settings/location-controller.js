///* global angular */
angular.module("TahajjudAlarm").controller('LocationController', ['prayTimes', '$scope', 
	'AlarmService', '$ionicLoading', "$cordovaGeolocation", "$ionicPlatform",
	function(PrayTimes, $scope, AlarmService, $ionicLoading, $cordovaGeolocation, $ionicPlatform) {
	    "use strict";
		
	    var self = this;
		self.searchForLocation = function () {
			var posOptions = {timeout: 10000, enableHighAccuracy: false};
			$cordovaGeolocation
			    .getCurrentPosition(posOptions)
			    .then(function (position) {
					self.latitude = position.coords.latitude;
					self.longitude = position.coords.longitude;
					console.log(position);
			    }, function(err) {
		  			console.log(err);
		    	});
		};
	}
]);