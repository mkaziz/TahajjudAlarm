// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('TahajjudAlarm', ['ionic', 'ngPrayTimes', 'angularMoment', 'ngStorage', 'ngMessages',
    'underscore'])
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('Home', {
            url: "/",
            cache: false,
            controller: "HomeController",
            templateUrl: 'js/Home/homeView.html'
        })
        .state('Settings', {
            url: "/settings",
            controller: "SettingsController",
            templateUrl: 'js/Settings/settingsView.html'
        });
        
    $urlRouterProvider.otherwise('/');
})
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    
  });
})
