angular.module('app', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: "controllers/home/home.html",
        controller: "homeCtrl"
      })
      .state('computers', {
        url: "/computers",
        template: '这是电脑分类页面'
      })
      .state('printers', {
        url: "/printers",
        template: '这是打印机页面<ui-view></ui-view>',
      })
      .state("printers.one", {
        url: "/one",
        template: "one"
      })
      .state("printers.two", {
        url: "/two",
        template: "two"
      })
  }]);

angular.module("app").controller("homeCtrl", function ($scope, $rootScope) {
  $scope.username = "duke"
  $scope.age = 18
})