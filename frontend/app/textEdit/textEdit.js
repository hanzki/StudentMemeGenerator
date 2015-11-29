'use strict';

angular.module('myApp.textEdit', ["ui.router"])

    .controller('TextEditCtrl', ["$scope", "$state", "MemeService", "ImageService",
        function($scope, $state, MemeService, ImageService) {

            $scope.createMeme = function () {
                console.log("meme topText = " + $scope.meme.topText);
                console.log("meme bottomText = " + $scope.meme.bottomText);
                $state.go("meme", {id: Math.floor(Math.random() * 100)});
            };

            $scope.image = {};

            $scope.meme = {
                imageId: MemeService.getCurrentMeme().imageId,
                topText: ''
            };

            ImageService.getImage(
                MemeService.getCurrentMeme().imageId,
                function(image) {
                    $scope.image = image;
                });

        }]);
