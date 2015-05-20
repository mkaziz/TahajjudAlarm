angular.module("TahajjudAlarm").service("AlarmService", [ '$localStorage', 'prayTimes', 'moment',
	function ($localStorage, PrayTimes, moment) {
		"use strict";
		
		var self = this;
		var prayerTimes = new PrayTimes();
		
		self.getFajrTime = function () {
			var location = self.getLocation();
				
			var calculationMethod = self.getCalculationMethod() || "ISNA";
			prayerTimes.setMethod(calculationMethod);
		
			var times = prayerTimes.getTimes(new Date(), [location.lat, location.long]);
			
			return times.fajr;
		};
		
		self.getLocation = function () {
			return $localStorage.location || { lat: 42.056338, long: -87.696397 }; // default to Chicago
		};
		
		self.getCalculationMethod = function () {
			return $localStorage.calculationMethod || "ISNA";
		};
		
		self.getAlarmTime = function () {
			return $localStorage.alarmTime;
		}
	}
	
]);