'use strict';

angular.module('colorpickApp', [
'angularSpectrumColorpicker',
'btford.socket-io',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router'
]).
factory('colorSocket', function (socketFactory) {
  return socketFactory();
})
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });