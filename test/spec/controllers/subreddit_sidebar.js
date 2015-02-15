'use strict';

describe('Controller: SubredditSidebarCtrl', function () {

  // load the controller's module
  beforeEach(module('redditCloneApp'));

  var SubredditSidebarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SubredditSidebarCtrl = $controller('SubredditSidebarCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
