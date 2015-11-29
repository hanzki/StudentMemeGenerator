'use strict';

angular.module('myApp.memeService', [])

    .service('MemeService', [ "$http", function($http){

        var meme = {
            imageId: undefined,
            topText: undefined,
            bottomText: undefined
        };

        this.getAndClearCurrentMeme = function() {
            meme = {
              imageId: undefined,
              topText: undefined,
              bottomText: undefined
            };

            return meme;
        };

        this.getCurrentMeme = function() {
            return meme;
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