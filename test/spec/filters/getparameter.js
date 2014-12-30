'use strict';

describe('Filter: getParameter', function () {

  // load the filter's module
  beforeEach(module('redditCloneApp'));

  // initialize a new instance of the filter before each test
  var getParameter;
  beforeEach(inject(function ($filter) {
    getParameter = $filter('getParameter');
  }));

  it('should return the input prefixed with "getParameter filter:"', function () {
    var text = 'angularjs';
    expect(getParameter(text)).toBe('getParameter filter: ' + text);
  });

});
