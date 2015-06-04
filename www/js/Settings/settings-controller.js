///* global angular */
angular.module("TahajjudAlarm").controller('SettingsController', ['prayTimes', '$scope', 'moment', 
	'AlarmService', '$ionicLoading',
	function(PrayTimes, $scope, Moment, AlarmService, $ionicLoading) {
	    "use strict";
		
	    var self = this;
			
		self.minutesBeforeFajrInput = AlarmService.getMinutesBefore();
		self.calculationMethodList = AlarmService.getCalculationMethodList();
		self.calculationMethod = AlarmService.getCalculationMethod(); 	
		
		self.onSubmit = function () {
			AlarmService.setAlarmTime(self.minutesBeforeFajrInput);
			AlarmService.setCalculationMethod(self.calculationMethod);
			$ionicLoading.show({ template: 'Preferences Saved!', noBackdrop: false, duration: 3000 });
		};
		
	}
]);