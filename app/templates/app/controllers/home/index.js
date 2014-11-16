'use strict';

import App from 'app';

function HomeController() {
  var vm = this;

  vm.message = 'Hello from AngularJS';
}

App.controller('Controllers.Home.Index', HomeController);
