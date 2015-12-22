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

        $scope.memes24h = {};
        MemeService.getMemes(
            function(memes) {
                $scope.memes24h = memes;
            });
        //TODO different getMemes-calls for memes24h, 7d and 30d


        $scope.memes7d = [
                mockMeme("http://www.newslinq.com/wp-content/uploads/2014/06/ex-girlfriend-meme-14.jpg"),
                mockMeme("http://memesvault.com/wp-content/uploads/Funny-Meme-3.jpg"),
                mockMeme("http://static.fjcdn.com/pictures/It+s+an+old+meme+how+i+feel+when+i+see_e83de6_3481193.jpg")
            ];

        $scope.memes30d = [
            mockMeme("http://www.styleite.com/wp-content/uploads/2014/07/confused-face-meme-girl-788x565.png"),
            mockMeme("http://www.contentamp.com/wp-content/uploads/2013/04/meme7.jpg"),
            mockMeme("http://boredomlavas.com/wp-content/uploads/25-Funny-Memes-2013-14-That-Would-Give-You-a-Good-Laugh-9.jpg")
        ];

    }]);
