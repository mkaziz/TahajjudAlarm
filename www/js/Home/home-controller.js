///* global angular */
angular.module("TahajjudAlarm").controller('HomeController', ['prayTimes', '$scope', 'moment', 
	'AlarmService', "$timeout",
	function(PrayTimes, $scope, Moment, AlarmService) {
	    "use strict";
		
	    var self = this;
		
		self.fajrTime = AlarmService.getFajrDisplayTime();
		
		var alarmTime = AlarmService.getAlarmDisplayTime();
		self.isAlarmSet = alarmTime !== "";
		
		self.alarmTime = alarmTime;
		self.minutesBeforeFajr = AlarmService.getMinutesBefore();
		
		self.turnOffAlarm = function() {
			AlarmService.turnOffAlarm();
			$scope.$evalAsync(function() { 
				window.location.reload(true); 
			});
		};
	}
]);