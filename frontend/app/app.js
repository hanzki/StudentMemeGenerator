'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ui.router',
    'ui.materialize',
    'myApp.landing',
    'myApp.imageSelection',
    'myApp.textEdit',
    'myApp.meme',
    'myApp.memeService',
    'myApp.imageService'
]).
config( function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.
    state('landing', {
        url: "/",
        templateUrl: 'landing/landing.html',
        controller: 'LandingCtrl'
    }).
    state('imageSelection', {
        url: "/make-meme/image",
        templateUrl: 'imageSelection/imageSelection.html',
        controller: 'ImageSelectionCtrl'
    }).
    state('textEdit', {
        url: "/make-meme/text",
        templateUrl: 'textEdit/textEdit.html',
        controller: 'TextEditCtrl'
    }).
    state('meme', {
        url: "/meme/{id:int}",
        templateUrl: 'meme/meme.html',
        controller: 'MemeCtrl'
    });

  $locationProvider.html5Mode({
      enabled: true
  });
});
