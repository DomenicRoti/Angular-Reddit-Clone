'use strict';

/**
 * @ngdoc filter
 * @name redditCloneApp.filter:decodeHTML
 * @function
 * @description
 * # decodeHTML
 * Filter in the redditCloneApp.
 */
angular.module('redditCloneApp')
  .filter('decodeHTML', function () {
    return function(text) {
        return text
                .replace(/&amp;/g, '&')
                .replace(/&lt;/g, '<')
                .replace(/&gt;/g, '>')
                .replace(/&#39;/g, '\'');
    };
  });
