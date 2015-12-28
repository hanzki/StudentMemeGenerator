'use strict';

angular.module('myApp.meme', ["ui.router"])

    .controller('MemeCtrl', ["$scope", "$state", "$stateParams", "MemeService", 
    	function($scope, $state,$stateParams, MemeService) {

        $scope.meme = {};

        MemeService.getMeme($stateParams.id, function(meme){
            console.log(meme);
            $scope.meme = meme;
        });

        $scope.newText = function () {
                var newMeme = MemeService.clearAndGetCurrentMeme();
                newMeme.imageId = $scope.meme.imageId;
                MemeService.putCurrentMeme(newMeme);
                $state.go("textEdit");
        };

    }]);
