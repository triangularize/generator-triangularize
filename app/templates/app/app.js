import Controllers from 'controllers/main';

var modules = [
  'ngRoute'
];

var App = angular
  .module('<%= appname %>', modules);

export default App;
