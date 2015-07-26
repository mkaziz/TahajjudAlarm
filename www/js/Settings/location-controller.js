///* global angular */
angular.module("TahajjudAlarm").controller('LocationController', ['prayTimes', '$scope', 
	'AlarmService', '$ionicLoading', "$cordovaGeolocation", "$ionicPlatform", "LocationService",
	function(PrayTimes, $scope, AlarmService, $ionicLoading, $cordovaGeolocation, $ionicPlatform,
		LocationService) {
	    "use strict";
		
	    var self = this;
		var displayError = false;
		var savedLocation = LocationService.getSavedLocation();
		
		if (savedLocation) {
			self.latitude = savedLocation.lat;
			self.longitude = savedLocation.long;
		}
		
		self.locationSelectionMethod = LocationService.getSavedLocationSelectionMethod();
		LocationService.getLocationName(function (locName) {
			self.locationName = locName;
		});
				
		self.searchForLocation = function () {
			var posOptions = {timeout: 10000, enableHighAccuracy: false};
			displayError = false;
			$cordovaGeolocation
			    .getCurrentPosition(posOptions)
			    .then(function (position) {
					saveCoords(position);
			    }, function(err) {
		  			console.log(err);
					displayError = true;
		    	});	
		};
		
		self.saveLocationSelectionMethod = function () {
			LocationService.setSavedLocationSelectionMethod(self.locationSelectionMethod);
			console.log(self.locationSelectionMethod);
		};
		
		self.getDisplayError = function() {
			return displayError;
		}
		
		function saveCoords(position) {
			self.latitude = position.coords.latitude;
			self.longitude = position.coords.longitude;
			LocationService.setSavedLocation(self.latitude, self.longitude);
			console.log(position);
		}
		
		
	}
]);