angular.module("TahajjudAlarm").directive("ValidateGreaterThan", ["angular-underscore", function (_) {
	"use strict";
	
	return {
		require: "ngModel",
		link: function (scope, element, attrs, ngModel) {
			console.log("directive works");
			ngModel.$parsers.push(function(value) {
				if (!value || value.length == 0 || !_.isNumber(value)) 
					return;
					
				return value;
			});
		}
	}
}]);