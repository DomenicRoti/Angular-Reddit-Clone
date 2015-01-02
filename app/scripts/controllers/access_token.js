'use strict';

/**
 * @ngdoc function
 * @name redditCloneApp.controller:AccessTokenCtrl
 * @description
 * # AccessTokenCtrl
 * Controller of the redditCloneApp
 */
angular.module('redditCloneApp')
  .controller('AccessTokenCtrl', function ($scope, $routeParams, $cookies, $window, Subreddits) {
    var params = $routeParams["id"].split('&');
    var authState = params[2].split('=')[1];
    if(authState != "" && authState == $cookies.authState){
      var accesstoken = $routeParams["id"].split('&')[0];
      $cookies.accesstoken = accesstoken;
      var cookieExpiration = new Date();
      cookieExpiration.setHours(cookieExpiration.getHours() + 1);
      document.cookie = 'authorized=true; expires=' + cookieExpiration.toUTCString();
      $window.localStorage.clear(); //Clear out the subreddit local storage
    }
    $window.location = "/";

  });
