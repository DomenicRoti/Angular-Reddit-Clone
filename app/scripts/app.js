'use strict';

/**
 * @ngdoc overview
 * @name redditCloneApp
 * @description
 * # redditCloneApp
 *
 * Main module of the application.
 */
angular
  .module('redditCloneApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/access_token=:id', {
        templateUrl: 'views/access_token.html',
        controller: 'AccessTokenCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
