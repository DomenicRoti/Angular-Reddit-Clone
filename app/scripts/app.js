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
    'ngTouch',
    'ui.bootstrap',
    'angularMoment'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/after/:after', {
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
      .when('/r/:subreddit', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/r/:subreddit/after/:after', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/r/:subreddit/comments/:postID', {
        templateUrl: 'views/comments.html',
        controller: 'CommentsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
