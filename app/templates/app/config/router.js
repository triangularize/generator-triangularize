'use strict';

import App from 'app';

function Router($routeProvider) {
  $routeProvider

  // Add routes here.
  //
  // .route.when('/products', {
  //   templateUrl: 'views/products/index.html',
  //   controller: 'ProductIndexController',
  //   controllerAs: 'tg'
  // })
  //
  // .route.when('/products/new', {
  //   templateUrl: 'views/products/new.html',
  //   controller: 'ProductNewController',
  //   controllerAs: 'tg'
  // })
  //
  // .route.when('/products/:id/edit', {
  //   templateUrl: 'views/products/index.html',
  //   controller: 'ProductIndexController',
  //   controllerAs: 'tg'
  // })

  .when('/', {
    templateUrl: 'views/home/index.html',
    controller: 'HomeIndexController',
    controllerAs: 'tg'
  })

  // if no routes match, redirect to '/'
  .otherwise({
    redirectTo: '/'
  });
}

export default App.config(Router);
