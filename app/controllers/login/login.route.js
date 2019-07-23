angular.module('login').config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app.login', {
      url: "/login",
      templateUrl: 'controllers/login/login.html',
      // controller: "controllers/login/login.controller.js"
    })

});