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
			
			self.alarms = [];
			
			var currentDate = new Date();
			for (var i = 0; i < 5; i++) {
				self.alarms[i] = AlarmService.getAlarmDisplayTime(currentDate);
			    currentDate.setDate(currentDate.getDate() + 1); // even 32 is acceptable
			}
		};
		
		loadAlarmTimes();
		
		self.turnOffAlarm = function() {
			AlarmService.turnOffAlarm();
			loadAlarmTimes();
		};
	}
]);