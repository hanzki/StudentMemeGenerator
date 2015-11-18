'use strict';

angular.module('myApp.meme', ["ui.router"])

    .controller('MemeCtrl', ["$scope", "$stateParams", function($scope, $stateParams) {

        function mockMeme(url) {
            return {
                id: $stateParams.id,
                url: url,
                imageId: Math.floor(Math.random() * 100),
                topText: "meme text",
                bottomText: "stored in db"
            };
        }

        $scope.meme = mockMeme("https://i.imgflip.com/2/1bij.jpg");

    }]);
