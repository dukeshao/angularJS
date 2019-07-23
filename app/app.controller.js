let app = angular.module("app", []);
app.controller("appCtrl", function ($scope, $rootScope) {
  $scope.firstName = "John";
  $scope.lastName = "Doe";
  $scope.sayHello = function () {
    alert($rootScope.username)
  }
})