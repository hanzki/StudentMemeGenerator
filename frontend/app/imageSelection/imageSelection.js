'use strict';

angular.module('myApp.imageSelection', ["ui.router", "ngFileUpload"])

    .controller('ImageSelectionCtrl', ["Upload","$scope", "$state", "$http",
        function(Upload, $scope, $state, $http) {

            function mockImage(url) {
                return {
                    id: Math.floor(Math.random() * 100),
                    url: url
                };
            }

            function upload(file, cb) {
                Upload.upload({
                        url: '/api/images', //node.js route
                        data: {memeImage: file}
                    })
                    .success(function(image) {
                        console.log(image, 'uploaded');
                        cb(image);
                    });
            }

            $scope.chooseImage = function (id) {
                console.log("chose image id=" + id);
                $state.go("textEdit");
            };

            $scope.uploadImage = function () {
                if (form.memeImage.willValidate && $scope.file) {
                    upload($scope.file, function(image) {
                        angular.element('#newImageModal').closeModal();
                        $scope.chooseImage(image.id);
                    });
                }
            };

            $scope.images = [
                mockImage("https://i.imgflip.com/2/1bij.jpg"),
                mockImage("https://i.imgflip.com/2/9ehk.jpg"),
                mockImage("https://i.imgflip.com/2/1bh8.jpg"),
                mockImage("https://i.imgflip.com/2/26am.jpg"),
                mockImage("https://i.imgflip.com/2/1bgw.jpg"),
                mockImage("https://i.imgflip.com/2/7g1q.jpg"),
                mockImage("https://i.imgflip.com/2/39t1o.jpg"),
                mockImage("https://i.imgflip.com/2/1bhf.jpg"),
                mockImage("https://i.imgflip.com/2/1bh3.jpg")
            ];

    }]);