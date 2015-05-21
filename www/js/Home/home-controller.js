///* global angular */
angular.module("TahajjudAlarm").controller('HomeController', ['prayTimes', '$scope', 'moment', 'AlarmService',
	function(PrayTimes, $scope, Moment, AlarmService) {
	    "use strict";
		
	    var self = this;
		
		self.fajrTime = AlarmService.getFajrDisplayTime();
		
		var alarmTime = AlarmService.getAlarmDisplayTime();
		self.isAlarmSet = alarmTime !== "";
		
		self.alarmTime = alarmTime;
		self.minutesBeforeFajr = "3";
		
		self.turnOffAlarm = function() {
			AlarmService.turnOffAlarm();
			window.location.reload(true);
		};
	}
]);