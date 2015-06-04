angular.module("TahajjudAlarm").directive("validateLesserThan", ["_", function (_) {
	"use strict";
	
	return {
		require: "ngModel",
		link: function (scope, element, attrs, ngModel) {
			ngModel.$parsers.push(function(value) {
				var intValue = parseInt(value);
				if (!value || value.length == 0 || !_.isNumber(intValue) || _.isNaN(intValue)) {
        			ngModel.$setValidity('lesserThan', false);
				}
				else if (intValue < attrs.validateLesserThan) {
					ngModel.$setValidity('lesserThan', true);
				} 
				else {
					ngModel.$setValidity('lesserThan', false);
				} 
				
				return value;
			});
		}
	};
}]);