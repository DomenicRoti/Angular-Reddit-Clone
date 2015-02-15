'use strict';

/**
 * @ngdoc service
 * @name redditCloneApp.subreddit
 * @description
 * # subreddit
 * Service in the redditCloneApp.
 */
angular.module('redditCloneApp')
  .service('subredditService', function ($rootScope) {
      var subreddit = {};

      var setCurrentSubreddit = function(currentSubreddit){
        subreddit = currentSubreddit;
        $rootScope.$broadcast('subredditChange', subreddit);
      };

      var getCurrentSubreddit = function(){
        return subreddit;
      };

      return {
        setCurrentSubreddit: setCurrentSubreddit,
        getCurrentSubreddit: getCurrentSubreddit
      };
  });
