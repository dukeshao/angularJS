angular.module("app", []).controller("appCtrl", function ($scope) {
  $scope.firstName = "John";
  $scope.lastName = "Doe";
  $scope.sayHello = function () {
    alert("你好")
  }
})