angular.module("TahajjudAlarm").service("LocationService", [ '$localStorage',
	function ($localStorage) {
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
	}
	
]);