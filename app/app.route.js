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

angular.module("app").controller("homeCtrl", function ($scope, $http) {
  //定义变量
  $scope.username = "jane"
  $scope.age = 16
  $scope.count = 1
  $scope.show = true
  $scope.add = true
  $scope.hide = false
  $scope.fruit = ["apple", "banana"]
  $scope.currentFruit = ""
  $scope.datalist = [{
    name: "duke",
    age: 18
  }, {
    name: "jane",
    age: 16
  }, {
    name: "jack",
    age: 29
  }]
  angular.forEach($scope.datalist, function (each) {
    if (each.age > 17) {
      console.log(each)
    }
  })

  //发送请求
  $http.get("http://106.52.224.182:3001/api/lists?gender=1").success(function (res) {
    console.log(res)
  })
  // $http({
  //   method: "get",
  //   url: "http://106.52.224.182:3001/api/lists?gender=1"
  // }).then(function suc(res) {
  //   console.log(res)
  // })

  //定义函数
  $scope.toggleShow = function () {
    $scope.show = !$scope.show
  }
  $scope.toggleAdd = function () {
    $scope.add = !$scope.add
  }
  $scope.toggleHide = function () {
    $scope.hide = !$scope.hide
  }
  $scope.countPlus = function () {
    $scope.count++
  }
  $scope.toggleFruit = function () {
    $scope.currentFruit = $scope.currentFruit == $scope.fruit[0] ? $scope.fruit[1] : $scope.fruit[0]
  }
})