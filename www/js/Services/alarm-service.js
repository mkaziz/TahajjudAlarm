angular.module("TahajjudAlarm").service("AlarmService", [ '$localStorage', 'prayTimes', 'moment', 
	'LocationService',
	function ($localStorage, PrayTimes, moment, LocationService) {
		"use strict";
		
		var self = this;
		var prayerTimes = new PrayTimes();
		
		self.getFajrTime = function (date) {
			var location = LocationService.getSavedLocation();
				
			var calculationMethod = self.getCalculationMethod();
			prayerTimes.setMethod(calculationMethod);
		
			var times = prayerTimes.getTimes(date || new Date(), [location.lat, location.long]);
			
			var fajrStr = times.fajr;
		
			var hours = parseInt(fajrStr.split(":")[0]);
			var minutes = parseInt(fajrStr.split(":")[1]);
			
			var fajrMoment = moment();
			fajrMoment.hour(hours);
			fajrMoment.minute(minutes);
			fajrMoment.second(0);
			
			return fajrMoment;
		};
		
		var getAlarmTime = function (date) {
			if (!self.isAlarmSet)
				return null;
			
			var fajrMoment = self.getFajrTime(date);
			return fajrMoment.subtract(self.getMinutesBefore(), "minutes");
		};
		
		self.getFajrDisplayTime = function () {
			return self.getFajrTime().format("h:mm A");
		};
		
		
		self.getAlarmDisplayTime = function (date) {
			var alarmTime = getAlarmTime(date);
			if (alarmTime == null)
				return "";
				
			return alarmTime.format("h:mm A");
		};
		
		self.setAlarmTime = function (minutes) {
			//todo: validate input
			$localStorage.minutesBefore = minutes;
		};
		
		self.turnOffAlarm = function (minutes) {
			delete $localStorage.minutesBefore;
		};
		
		self.getMinutesBefore = function () {
			return $localStorage.minutesBefore;
		};
		
		self.getCalculationMethod = function () {
			var calculationMethod = $localStorage.calculationMethod || "ISNA";
			return calculationMethod;
		};
		
		self.setCalculationMethod = function (key) {
			if (self.getCalculationMethodList()[key] !== undefined)
				$localStorage.calculationMethod = key;
			else
				throw "calculation method not found: " + key;
		};
		
		self.getCalculationMethodList = function () {
			return prayerTimes.getDefaults();
		};
		
		self.isAlarmSet = function() {
			return typeof(self.getMinutesBefore()) !== "undefined";	
		};
	}
	
]);