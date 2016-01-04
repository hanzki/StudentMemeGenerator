'use strict';

angular.module('myApp.landing', ["ui.router"])

    .controller('LandingCtrl', ["$scope", "$state", "MemeService", function($scope, $state, MemeService) {

        function mockMeme(url) {
            return {
                id: Math.floor(Math.random() * 100),
                url: url,
                imageId: Math.floor(Math.random() * 100),
                topText: "something",
                bottomText: "else"
            };
        }

        $scope.openMeme = function (id) {
            $state.go("meme", {id: id});
        };

        $scope.memes24h = [];
        MemeService.getMemesForToday(
            function(memes) {
                $scope.memes24h = memes;
            }
        );

        $scope.memes7d = [];
        MemeService.getMemesForWeek(
            function(memes) {
                $scope.memes7d = memes;
            }
        );


        $scope.memes30d = [];
        MemeService.getMemesForMonth(
            function(memes) {
                $scope.memes30d = memes;
            }
        );


    }]);
