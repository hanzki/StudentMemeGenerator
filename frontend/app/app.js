'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config( function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/')

    $stateProvider.
    state('view1', {
        url: "/view1",
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl',
        name: "view1",
    }).
    state('view2', {
        url: "/view2",
        templateUrl: 'view2/view2.html',
        controller: 'View2Ctrl',
        name: "view2"
    });

  $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
});
