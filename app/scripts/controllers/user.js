'use strict';

/**
 * @ngdoc function
 * @name redditCloneApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the redditCloneApp
 */
angular.module('redditCloneApp')
  .controller('UserCtrl', function ($scope, $http, $window, $filter, $cookies) {
    var redirectURL = "http://domenicroti.com/";
    $scope.authorized = $cookies.authorized;

    if($scope.authorized){
      var authHeaderString = "bearer " + $cookies.accesstoken;
      var req = {
        method: 'GET',
        url: 'https://oauth.reddit.com/api/v1/me',
        headers: {
         'Authorization': authHeaderString
        }
      }

      $http(req).success(function(data){
        console.log(data);
        $scope.username = data.name;
        $scope.linkKarma = data.link_karma;
        $scope.commentKarma = data.comment_karma;
        $scope.userCreatedDate = new Date(1285345011 * 1000)
      }).error(function(){
      });
    }

    $scope.requestAuth = function(){
      var authData = {
        client_id: '-q3RCJtRUGzEkg',
        response_type: 'token',
        state: $filter('random')(10),
        redirect_uri: encodeURI(redirectURL),
        duration: 'temporary',
        scope: 'identity'
      };
      $cookies.authState = authData.state;
      var authUrl = 'https://www.reddit.com/api/v1/authorize?' + $filter('queryString')(authData);
      $window.location = authUrl;
    };

  });
