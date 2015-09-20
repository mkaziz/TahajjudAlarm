///* global angular */
angular.module("TahajjudAlarm").controller('HomeController', ['prayTimes', '$scope', 'moment', 
	'AlarmService', "$timeout",
	function(PrayTimes, $scope, Moment, AlarmService) {
	    "use strict";
		
	    var self = this;
		
		var loadAlarmTimes = function () {
			self.isAlarmSet = AlarmService.isAlarmSet();
			self.minutesBeforeFajr = AlarmService.getMinutesBefore();
			
			self.alarms = [];
			
			var currentDate = new Date();
			for (var i = 0; i < 5; i++) {
				self.alarms[i] = {
					time: AlarmService.getAlarmDisplayTime(currentDate),
					date: currentDate.toDateString()
				}
			    currentDate.setDate(currentDate.getDate() + 1);
			}
		};
		
		loadAlarmTimes();
	}
]);