'use strict';

describe('Filter: queryString', function () {

  // load the filter's module
  beforeEach(module('redditCloneApp'));

  // initialize a new instance of the filter before each test
  var queryString;
  beforeEach(inject(function ($filter) {
    queryString = $filter('queryString');
  }));

  it('should return the input prefixed with "queryString filter:"', function () {
    var text = 'angularjs';
    expect(queryString(text)).toBe('queryString filter: ' + text);
  });

});
