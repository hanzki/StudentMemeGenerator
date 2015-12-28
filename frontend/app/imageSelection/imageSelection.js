'use strict';

angular.module('myApp.imageSelection', ["ui.router", "ngFileUpload"])

    .controller('ImageSelectionCtrl', ["$scope", "$state", "MemeService", "ImageService",
        function($scope, $state, MemeService, ImageService) {

            $scope.chooseImage = function (id) {
                console.log("chose image id=" + id);
                var meme = MemeService.clearAndGetCurrentMeme();
                meme.imageId = id;
                MemeService.putCurrentMeme(meme);
                $state.go("textEdit");
            };

            $scope.uploadImage = function () {
                if (form.memeImage.willValidate && $scope.file) {
                    ImageService.saveImage($scope.file, function(image) {
                        angular.element('#newImageModal').closeModal();
                        $scope.chooseImage(image.id);
                    });
                }
            };

            $scope.images = {};
            ImageService.getImages(
                function(images) {
                    $scope.images = images;
                }
            );

            $scope.fileNameChanged = function(){
                angular.element('#uploadbutton').removeClass('disabled');
            }

    }]);