///* global angular */
angular.module("TahajjudAlarm").controller('HomeController', ['prayTimes', '$scope', 'moment', 
	'AlarmService', "$timeout",
	function(PrayTimes, $scope, Moment, AlarmService) {
	    "use strict";
		
	    var self = this;
		
		var loadAlarmTimes = function () {
			self.fajrTime = AlarmService.getFajrDisplayTime();
		
			var alarmTime = AlarmService.getAlarmDisplayTime();
			self.isAlarmSet = alarmTime !== "";
			
			self.alarmTime = alarmTime;
			self.minutesBeforeFajr = AlarmService.getMinutesBefore();
			
		};
		
		loadAlarmTimes();
		
		self.turnOffAlarm = function() {
			AlarmService.turnOffAlarm();
			loadAlarmTimes();
		};
	}
]);