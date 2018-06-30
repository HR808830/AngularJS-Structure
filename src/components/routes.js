'use strict';
angular.module('app.routes', [])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: './pages/login/login.html',
        controller: 'loginController'
      })
      .state('resetPassword', {
        url: '/resetPassword',
        templateUrl: './pages/resetPassword/resetPassword.html',
        controller: 'resetPwdController'
      })
      .state('home', {
        url: '/home',
        templateUrl: './pages/home/home.html',
        controller: 'homeController'
      })
       .state('topic', {
        url: '/topic',
        templateUrl: './pages/topic/topic.html',
        controller: 'topicController'
      })
      .state('resource', {
        url: '/resource',
        templateUrl: './pages/resource/resource.html',
        controller: 'resourceController'
      })
      .state('student', {
        url: '/student',
        templateUrl: './pages/student/student.html',
        controller: 'studentController'
      })
      .state('queAnswer', {
        url: '/queAnswer',
        templateUrl: './pages/queAnswer/queAnswer.html',
        controller: 'queAnswerController'
      });

    $urlRouterProvider.otherwise('/login');
  }]);
