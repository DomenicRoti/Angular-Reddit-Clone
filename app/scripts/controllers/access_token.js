'use strict';

/**
 * @ngdoc function
 * @name redditCloneApp.controller:AccessTokenCtrl
 * @description
 * # AccessTokenCtrl
 * Controller of the redditCloneApp
 */
angular.module('redditCloneApp')
  .controller('AccessTokenCtrl', function ($scope, $routeParams, $cookies, $window) {
    var params = $routeParams["id"].split('&');
    var authState = params[2].split('=')[1];
    if(authState != "" && authState == $cookies.authState){
      var accesstoken = $routeParams["id"].split('&')[0];
      $cookies.accesstoken = accesstoken;
      $cookies.authorized = true;
      var cookieExpiration = new Date();
      cookieExpiration.setHours(cookieExpiration.getHours() + 1);
      document.cookie = 'authorized=; expires=' + cookieExpiration;
    }
    $window.location = "/";

  });
