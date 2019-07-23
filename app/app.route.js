
angular.module('app', ['ngRoute', 'ngProgress'])
  .controller("loginCtrl", function ($scope, $timeout, ngProgressFactory) {
    $scope.username = "duke"
    // $scope.submitForm = function () {
    //   $scope.progressbar = ngProgressFactory.createInstance();
    //   $scope.progressbar.start();
    //   setTimeout(function () {
    //     $scope.progressbar.complete()
    //   }, 3000)
    //   // $timeout($scope.progressbar.complete(), 1000);
    //   console.log("提交成功33");
    //   console.log($scope.progressbar);
    // }
  })
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        // template: '这是首页页面'
        templateUrl: "controllers/home/home.html",
      })
      .when('/login', {
        templateUrl: "controllers/login/login.html",
        controller: "loginCtrl",
        resole: {
          files: "controllers/login/login.controller.htm"
        }
      })
      .when('/home', {
        templateUrl: "controllers/home/home.html",
        controller: "homeCtrl"
      })
      .otherwise({ redirectTo: '/' });
  }]);

//路由懒加载尝试失败
// angular.module('login').config(function ($stateProvider) {
//   $stateProvider.state('login', {
//     url: '/login',
//     templateUrl: 'controllers/common/login/login.html',
//     controller: 'loginCtrl as vm',
//     resolve: {
//       load: ['$ocLazyLoad', function ($ocLazyLoad) {
//         return $ocLazyLoad.load({
//           files: [
//             'controllers/common/login/login.controller.js',
//             'controllers/common/login/login.service.js',
//             'controllers/common/identity/identity.service.js'
//           ]
//         });
//       }]
//     }
//   });

// });
