angular.module("TahajjudAlarm").directive("validateGreaterThan", ["_", function (_) {
	"use strict";
	
	return {
		require: "ngModel",
		link: function (scope, element, attrs, ngModel) {
			ngModel.$parsers.push(function(value) {
				var intValue = parseInt(value);
				if (!value || value.length == 0 || !_.isNumber(intValue) || _.isNaN(intValue)) {
        			ngModel.$setValidity('greaterThan', false);
				}
				else if (attrs.validateGreaterThan < intValue) {
					ngModel.$setValidity('greaterThan', true);
				} 
				else {
					ngModel.$setValidity('greaterThan', false);
				} 
				return value;
			});
		}
	};
}]);