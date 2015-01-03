'use strict';

/**
 * @ngdoc service
 * @name redditCloneApp.login
 * @description
 * # login
 * Service in the redditCloneApp.
 */
angular.module('redditCloneApp')
  .service('user', function ($filter, $cookies, $window) {
    var User = {};

    User.login = function(){
      var redirectURL = 'http://domenicroti.com/';
      var authData = {
        client_id: '-q3RCJtRUGzEkg',
        response_type: 'token',
        state: $filter('random')(10),
        redirect_uri: encodeURI(redirectURL),
        duration: 'temporary',
        scope: 'identity,mysubreddits,read'
      };
      $cookies.authState = authData.state;
      var authUrl = 'https://www.reddit.com/api/v1/authorize?' + $filter('queryString')(authData);
      $window.location = authUrl;
    };

    return User;
  });
