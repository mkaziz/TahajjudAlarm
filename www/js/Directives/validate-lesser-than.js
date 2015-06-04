angular.module("TahajjudAlarm").directive("ValidateLesserThan", ["angular-underscore", function (_) {
	"use strict";
	
	return {
		require: "ngModel",
		link: function (scope, element, attrs, ngModel) {
			ngModel.$parsers.push(function(value) {
				console.log("directive works");
				if (!value || value.length == 0 || !_.isNumber(value)) 
					return;
					
				return value;
				
			});
		}
	}
}]);