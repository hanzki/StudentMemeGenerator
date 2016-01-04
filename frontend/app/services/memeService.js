'use strict';

angular.module('myApp.memeService', ['ngCookies'])

    .service('MemeService', [ "$http", "$cookies", function($http, $cookies){

        var meme = $cookies.getObject('meme');

        this.clearAndGetCurrentMeme = function() {
            meme = {
              imageId: undefined,
              topText: undefined,
              bottomText: undefined
            };

            $cookies.putObject('meme', meme);

            return meme;
        };

        this.getCurrentMeme = function() {
            meme = $cookies.getObject('meme');
            return meme;
        };

        this.putCurrentMeme = function(meme) {
            $cookies.putObject('meme', meme);
        };

        this.getMemes = function(cb) {
            $http.get("api/memes").then(
                function(response) {
                    cb(response.data);
                },
                function (response) {
                    console.error(response);
                }
            );
        };

        this.getMemesForToday = function(cb) {
            $http.get("api/memes/today").then(
                function(response) {
                    cb(response.data);
                },
                function (response) {
                    console.error(response);
                }
            );
        };

        this.getMemesForWeek = function(cb) {
            $http.get("api/memes/week").then(
                function(response) {
                    cb(response.data);
                },
                function (response) {
                    console.error(response);
                }
            );
        };

        this.getMemesForMonth = function(cb) {
            $http.get("api/memes/month").then(
                function(response) {
                    cb(response.data);
                },
                function (response) {
                    console.error(response);
                }
            );
        };

        this.getMeme = function(id, cb) {
            $http.get("api/memes/" + id).then(
                function(response) {
                  cb(response.data);
                },
                function (response) {
                  console.error(response);
                }
            );
        };

        this.saveMeme = function(meme, cb) {
            $http.post("api/memes", meme).then(
                function(response) {
                    cb(response.data);
                },
                function(response) {
                    console.error(response);
                }
            );
        };

    }]);