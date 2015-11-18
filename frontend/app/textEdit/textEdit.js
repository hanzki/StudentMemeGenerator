'use strict';

angular.module('myApp.textEdit', ["ui.router"])

    .controller('TextEditCtrl', ["$scope", "$state", function($scope, $state) {

        $scope.createMeme = function () {
            console.log("meme topText = " + $scope.meme.topText);
            console.log("meme bottomText = " + $scope.meme.bottomText);
            $state.go("meme", {id: Math.floor(Math.random() * 100)});
        };

        $scope.image = {
            id: Math.floor(Math.random() * 100),
            url: "https://i.imgflip.com/2/1bij.jpg"
        };

        $scope.meme = {
            imageId: $scope.image.id,
            topText: ''
        }

    }]);
