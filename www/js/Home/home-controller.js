///* global angular */
angular.module("TahajjudAlarm").controller('HomeController', ['prayTimes', '$scope', 'moment', 'AlarmService',
	function(PrayTimes, $scope, Moment, AlarmService) {
	    "use strict";
		
	    var self = this;
		
		self.fajrTime = AlarmService.getFajrTime() + "AM";
		
		var alarmTime = AlarmService.getAlarmTime();
		self.isAlarmSet = alarmTime !== undefined;
		
		self.alarmTime = alarmTime + "2AM";
		self.minutesBeforeFajr = "3";
		
		
	}
]);