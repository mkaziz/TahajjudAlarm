///* global angular */
angular.module("TahajjudAlarm").controller('HomeController', ['prayTimes', '$scope', 
	function(PrayTimes, $scope) {
	    "use strict";
		
	    var self = this;
		var prayerTimes = new PrayTimes();
		prayerTimes.setMethod("ISNA");
		var chicagoTimes = prayerTimes.getTimes(new Date(), [42.056338, -87.696397]);
		var fajrStr = chicagoTimes.fajr;
		var hours = parseInt(fajrStr.split(":")[0]);
		var minutes = parseInt(fajrStr.split(":")[1]);
		
		self.tahajjud = hours + ":" + (minutes - self.minutesBeforeFajr || 0);
	}
]);