'use strict';

angular.module('myApp.imageService', ["ngFileUpload"])

    .service('ImageService', [ "Upload", "$http", function(Upload, $http){

        this.getImages = function(cb) {
            $http.get("api/images").then(
                function(response) {
                    cb(response.data);
                },
                function (error) {
                    console.error(error);
                }
            );
        };

        this.getImage = function(id, cb) {
            $http.get("api/images/" + id).then(
                function(response) {
                    cb(response.data);
                },
                function (response) {
                    console.error(response);
                }
            );
        };

        this.saveImage = function(file, cb) {
            Upload.upload({
                    url: '/api/images', //node.js route
                    data: {memeImage: file}
                }).then(
                function(response) {
                    console.log(response.data, 'uploaded');
                    cb(response.data);
                },
                function (response) {
                    console.error(response);
                }
            );
        };

    }]);