'use strict';

/**
 * @ngdoc service
 * @name redditCloneApp.login
 * @description
 * # login
 * Service in the redditCloneApp.
 */
angular.module('redditCloneApp')
  .service('user', function ($filter, $cookies, $window, $http) {
    var User = {};

    User.login = function(){
      var redirectURL = 'http://domenicroti.com/';
      var authData = {
        client_id: '-q3RCJtRUGzEkg',
        response_type: 'token',
        state: $filter('random')(10),
        redirect_uri: encodeURI(redirectURL),
        duration: 'temporary',
        scope: 'identity,mysubreddits,read,vote'
      };
      $cookies.authState = authData.state;
      var authUrl = 'https://www.reddit.com/api/v1/authorize?' + $filter('queryString')(authData);
      $window.location = authUrl;
    };

    User.vote = function(direction, id, callback){
      var postHeader = {
        'Authorization': 'bearer ' + $cookies.accesstoken,
        'Content-Type': 'application/x-www-form-urlencoded',
      };
      var req = {
        method: 'POST',
        url: 'https://oauth.reddit.com/api/vote',
        headers: postHeader,
        data:{
          dir: direction,
          id: id
        }
      };
      return $http(req).success(function(data){
        callback(data);
      });

    };

    return User;
  });
