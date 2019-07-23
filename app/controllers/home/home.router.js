angular.module('home').config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app.login', {
      url: "/home",
      templateUrl: 'controllers/home/home.html',
      // controller: "controllers/login/login.controller.js"
    })

});