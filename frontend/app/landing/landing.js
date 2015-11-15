'use strict';

angular.module('myApp.landing', ["ui.router"])

    .controller('LandingCtrl', ["$scope", function($scope) {

        function mockMeme(url) {
            return {
                id: Math.floor(Math.random() * 100),
                url: url,
                imageId: Math.floor(Math.random() * 100),
                topText: "something",
                bottomText: "else"
            };
        }

        $scope.memes24h = [
                mockMeme("http://cdn.smosh.com/sites/default/files/ftpuploads/bloguploads/0913/harry-potter-memes-potter-lookin-fine.jpg"),
                mockMeme("http://contexts.org/files/2013/11/JAR-meme-drunk-baby.jpeg"),
                mockMeme("https://s-media-cache-ak0.pinimg.com/236x/40/3d/8b/403d8b790f1af60b376d39580aec5893.jpg")
            ];

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
