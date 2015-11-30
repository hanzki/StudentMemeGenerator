'use strict';

angular.module('myApp.textEdit', ["ui.router"])

    .controller('TextEditCtrl', ["$scope", "$state", "MemeService", "ImageService",
        function($scope, $state, MemeService, ImageService) {

            $scope.createMeme = function () {
                MemeService.saveMeme($scope.meme, function(meme){
                    console.log("created meme", meme);
                    $state.go("meme", {id: meme.id});
                });
            };

            $scope.image = {
                url: "https://i.imgflip.com/2/1bij.jpg"
            };

            $scope.meme = {
                imageId: MemeService.getCurrentMeme().imageId,
                topText: '',
                bottomText: ''
            };

            ImageService.getImage(
                MemeService.getCurrentMeme().imageId,
                function(image) {
                    $scope.image = image;
                }
            );

        }
    ]);
