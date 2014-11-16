'use strict';

import App from 'app';

function HomeController() {
  var vm = this;

  vm.message = 'Hello from AngularJS';
}

export default App.controller('Controllers.Home.Index', HomeController);
