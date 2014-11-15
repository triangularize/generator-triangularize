'use strict';

angular.module('<%= appname %>')
  .controller('Controller.Home.Index', HomeController);

function HomeController() {
  var vm = this;

  vm.message = 'Hello from AngularJS';
}
