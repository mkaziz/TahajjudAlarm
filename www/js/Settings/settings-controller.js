///* global angular */
angular.module("TahajjudAlarm").controller('SettingsController', ['prayTimes', '$scope', 'moment', 
	'AlarmService', '$ionicLoading',
	function(PrayTimes, $scope, Moment, AlarmService, $ionicLoading) {
	    "use strict";
		
	    var self = this;
		var prayerTimes = new PrayTimes();
		prayerTimes.setMethod("ISNA");
		
		var chicagoTimes = prayerTimes.getTimes(new Date(), [42.056338, -87.696397]);
		
		var fajrStr = chicagoTimes.fajr;
		
		var hours = parseInt(fajrStr.split(":")[0]);
		var minutes = parseInt(fajrStr.split(":")[1]);
		
		var fajrMoment = new Moment();
		fajrMoment.hour(hours);
		fajrMoment.minute(minutes);
		fajrMoment.second(0);
		
		self.minutesBeforeFajr = 0;
		self.calculationMethodList = AlarmService.getCalculationMethodList();
		self.calculationMethod = AlarmService.getCalculationMethod(); 
		
		
		if (fajrMoment.isBefore(new Moment()))
		{
			fajrMoment.day(fajrMoment.day + 1);
		}
				
		self.onSubmit = function () {
			AlarmService.setAlarmTime(self.minutesBeforeFajrInput);
			AlarmService.setCalculationMethod(self.calculationMethod);
			$ionicLoading.show({ template: 'Preferences Saved!', noBackdrop: false, duration: 3000 });
		};
		
	}
]);