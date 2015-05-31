angular.module("TahajjudAlarm").service("AlarmService", [ '$localStorage', 'prayTimes', 'moment',
	function ($localStorage, PrayTimes, moment) {
		"use strict";
		
		var self = this;
		var prayerTimes = new PrayTimes();
		
		self.getFajrTime = function () {
			var location = self.getLocation();
				
			var calculationMethod = self.getCalculationMethod();
			prayerTimes.setMethod(calculationMethod);
		
			var times = prayerTimes.getTimes(new Date(), [location.lat, location.long]);
			
			var fajrStr = times.fajr;
		
			var hours = parseInt(fajrStr.split(":")[0]);
			var minutes = parseInt(fajrStr.split(":")[1]);
			
			var fajrMoment = moment();
			fajrMoment.hour(hours);
			fajrMoment.minute(minutes);
			fajrMoment.second(0);
			
			return fajrMoment;
		};
		
		;
		
		var getAlarmTime = function () {
			var minutesBefore = $localStorage.minutesBefore;
			if (minutesBefore == undefined)
				return null;
			
			var fajrMoment = self.getFajrTime();
			return fajrMoment.subtract(minutesBefore, "minutes");
		};
		
		self.getFajrDisplayTime = function () {
			return self.getFajrTime().format("h:mm A");
		};
		
		self.getLocation = function () {
			return $localStorage.location || { lat: 42.056338, long: -87.696397 }; // default to Chicago
		};
		
		self.getAlarmDisplayTime = function () {
			var alarmTime = getAlarmTime();
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
	}
	
]);