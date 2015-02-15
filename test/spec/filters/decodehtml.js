'use strict';

describe('Filter: decodeHTML', function () {

  // load the filter's module
  beforeEach(module('redditCloneApp'));

  // initialize a new instance of the filter before each test
  var decodeHTML;
  beforeEach(inject(function ($filter) {
    decodeHTML = $filter('decodeHTML');
  }));

  it('should return the input prefixed with "decodeHTML filter:"', function () {
    var text = 'angularjs';
    expect(decodeHTML(text)).toBe('decodeHTML filter: ' + text);
  });

});
