///* global angular */
angular.module("TahajjudAlarm").controller('HomeController', ['prayTimes', '$scope', 'moment',
	function(PrayTimes, $scope, Moment) {
	    "use strict";
		
	    var self = this;
		
		self.fajrTime = "3AM";
		self.alarmTime = "2AM";
		self.minutesBeforeFajr = "3";
		
		
	}
]);