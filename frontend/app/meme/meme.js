'use strict';

angular.module('myApp.meme', ["ui.router"])

    .controller('MemeCtrl', ["$scope", "$stateParams", function($scope, $stateParams) {

        function mockMeme(url) {
            return {
                id: $stateParams.id,
                url: url,
                imageId: Math.floor(Math.random() * 100),
                topText: "something",
                bottomText: "else"
            };
        }

        $scope.meme = mockMeme("http://www.prosebeforehos.com/wordpress/wp-content/uploads/2014/03/crimea-memes-mykraine.jpg");

    }]);
