'use strict';

describe('Controller: SubredditsCtrl', function () {

  // load the controller's module
  beforeEach(module('redditCloneApp'));

  var SubredditsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SubredditsCtrl = $controller('SubredditsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
