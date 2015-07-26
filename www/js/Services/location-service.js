angular.module("TahajjudAlarm").service("LocationService", [ '$localStorage', '_',
	function ($localStorage, _) {
		"use strict";
		
		var self = this;
		
		self.getSavedLocation = function () {
			return $localStorage.location || { lat: 42.056338, long: -87.696397 }; // default to Chicago
		};
		
		self.setSavedLocation = function (lat, long) {
			$localStorage.location = { lat: lat, long: long }; 
		};
		
		self.getSavedLocationSelectionMethod = function (method) {
			return $localStorage.savedLocationSelectionMethod;
		};
		
		self.setSavedLocationSelectionMethod = function (method) {
			$localStorage.savedLocationSelectionMethod = method;
		};
		
		self.getLocationName = function (callback) {
			var savedLocation = self.getSavedLocation();
			if (!_.isNumber(savedLocation.lat) || !_.isNumber(savedLocation.long)) {
				callback(savedLocation.lat + "," + savedLocation.long);
				return;
			}
			
			var latlng = new google.maps.LatLng(savedLocation.lat, savedLocation.long);
			var geocoder = new google.maps.Geocoder();
			geocoder.geocode({'latLng': latlng}, function(results, status) {
			  if (status == google.maps.GeocoderStatus.OK) {
			    if (results[1]) {		     
			      callback(results[1].formatted_address);
			    } else {
			      return callback(savedLocation.lat + "," + savedLocation.long);
			    }
			  } else {
			    console.log("Geocoder failed due to: " + status);
				callback(savedLocation.lat + "," + savedLocation.long);
			  }
			});
		}
		
		
	}
	
]);