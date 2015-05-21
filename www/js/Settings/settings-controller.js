///* global angular */
angular.module("TahajjudAlarm").controller('SettingsController', ['prayTimes', '$scope', 'moment', 'AlarmService',
	function(PrayTimes, $scope, Moment, AlarmService) {
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
		
		if (fajrMoment.isBefore(new Moment()))
		{
			fajrMoment.day(fajrMoment.day + 1);
		}
		
		var tahajjudMoment = new Moment(fajrMoment);
		tahajjudMoment.subtract(self.minutesBeforeFajr || 0, 'minutes');
		
		self.tahajjud = tahajjudMoment.format("h:mm a");
		self.fajr = fajrMoment.format("h:mm a");
		
		self.tahajjudMoment = tahajjudMoment;
		self.fajrMoment = fajrMoment;
		
		self.onSubmit = function () {
			AlarmService.setAlarmTime(self.minutesBeforeFajr);
		};
		
	}
]);