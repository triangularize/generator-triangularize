'use strict';

angular.module('<%= appname %>')
  .config(function($routeProvider) {

    $routeProvider

    // Add routes here.
    //
    // .route.when('/products', {
    //   templateUrl: 'views/products/index.html',
    //   controller: 'Controller.Products.Index',
    //   controllerAs: 'vm'
    // })
    //
    // .route.when('/products/new', {
    //   templateUrl: 'views/products/new.html',
    //   controller: 'Controller.Products.New',
    //   controllerAs: 'vm'
    // })
    //
    // .route.when('/products/:id/edit', {
    //   templateUrl: 'views/products/index.html',
    //   controller: 'Controller.Products.Index',
    //   controllerAs: 'vm'
    // })

    .when('/', {
      templateUrl: 'views/home/index.html',
      controller: 'Controller.Home.Index',
      controllerAs: 'vm'
    })

    // if no routes match, redirect to '/'
    .otherwise({
      redirectTo: '/'
    })

  });
