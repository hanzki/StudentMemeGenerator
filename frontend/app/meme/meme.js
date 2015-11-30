'use strict';

angular.module('myApp.meme', ["ui.router"])

    .controller('MemeCtrl', ["$scope", "$stateParams", "MemeService", function($scope, $stateParams, MemeService) {

        $scope.meme = {};

        MemeService.getMeme($stateParams.id, function(meme){
            console.log(meme);
            $scope.meme = meme;
        });

    }]);
