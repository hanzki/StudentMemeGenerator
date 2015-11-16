'use strict';

angular.module('myApp.imageSelection', ["ui.router"])

    .controller('ImageSelectionCtrl', ["$scope", "$state", function($scope, $state) {

        function mockImage(url) {
            return {
                id: Math.floor(Math.random() * 100),
                url: url
            };
        }

        $scope.chooseImage = function (id) {
            console.log("chose image id=" + id);
            $state.go("textEdit");
        };

        $scope.uploadImage = function () {
            var f = document.getElementById('newImage').files[0],
                r = new FileReader();
            r.onloadend = function(e){
                var data = e.target.result;
                //send you binary data via $http or $resource or do anything else with it
                console.log("image upload");
            };
            r.readAsArrayBuffer(f);
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
        ]

    }]);