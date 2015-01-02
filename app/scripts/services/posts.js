'use strict';

/**
 * @ngdoc service
 * @name redditCloneApp.posts
 * @description
 * # posts
 * Service in the redditCloneApp.
 */
angular.module('redditCloneApp')
  .factory('Posts', function ($http, $cookies, $filter) {
    var Posts = {};

    Posts.getPosts = function(after, before, callback){
      var postUrl = 'http://www.reddit.com/';
      var postHeader;
      var queryString = {};
      if(after != ""){
        queryString.after = after;
      }
      if($cookies.authorized && localStorage.getItem('subreddits')){
        var subscribedReddits = JSON.parse(localStorage.getItem('subreddits'));
        var subscribedRedditsDisplayNames = [];
        for (var i = 0; i < subscribedReddits.length; i++) {
          subscribedRedditsDisplayNames.push(subscribedReddits[i].display_name);
        }
        postUrl = 'http://www.reddit.com/r/' +subscribedRedditsDisplayNames.join('+');
      }

      postUrl += '.json';
      if(Object.keys(queryString).length > 0){
        postUrl += '?' + $filter('queryString')(queryString);
      }


      console.log(postUrl);
      var req = {
        method: 'GET',
        url: postUrl,
        headers: postHeader
      };

      return $http(req).success(function(returnedPosts){
        callback(returnedPosts.data);
      });
    };
    return Posts;
});
