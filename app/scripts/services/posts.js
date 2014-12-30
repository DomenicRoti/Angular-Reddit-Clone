'use strict';

/**
 * @ngdoc service
 * @name redditCloneApp.posts
 * @description
 * # posts
 * Service in the redditCloneApp.
 */
angular.module('redditCloneApp')
  .factory('Posts', function ($http) {
    var Posts = {};
    Posts.getPosts = function(callback){
        return $http({
            url: 'http://www.reddit.com/.json',
            params: {},
            method: 'GET'
        }).success(function(returnedPosts){
            callback(returnedPosts.data);
        });
    };
    return Posts;
});
