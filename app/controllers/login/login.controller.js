angular.module('app', ["ngProgress"]).controller("loginCtrl", function ($scope, $timeout, ngProgressFactory) {
  $scope.username = "duke"
  $scope.submitForm = function () {
    $scope.progressbar = ngProgressFactory.createInstance();
    $scope.progressbar.start();
    $timeout($scope.progressbar.complete(), 1000);
    console.log("提交成功33");
    console.log($scope.progressbar);
  }
})