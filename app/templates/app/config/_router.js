'use strict';

import App from '../app';

class Router {
  construct($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'app/views/home.html',
      controller: 'HomeController'
    });

    $urlRouterProvider.otherwise('/home');
  }
}


