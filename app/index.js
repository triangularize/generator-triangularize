'use strict';

var generators = require('yeoman-generator');
var path = require('path');
var yosay = require('yosay');
var chalk = require('chalk');

var TriangularGenerator = generators.Base.extend({

  init: function() {
    this.pkg = require('../package.json');
    this.argument('appname', { type: String, required: false });
    this.appname = this.appname || path.basename(process.cwd());
    this.appname = this._.camelize(this._.slugify(this._.humanize(this.appname)));
  },

  info: function () {
    this.log(yosay(
      chalk.red('Welcome!') + '\n' +
      chalk.yellow('You are using the Triangular angular es6 generator!')
    ));
  },

  method1: function () {
    console.log('method 1 just ran');
  },
  method2: function () {
    console.log('method 2 just ran');
  }
});

module.exports = TriangularGenerator;
