'use strict';

var generators = require('yeoman-generator');
var path = require('path');
var yosay = require('yosay');
var chalk = require('chalk');

var TriangularizeGenerator = generators.Base.extend({

  init: function() {
    this.pkg = require('../package.json');
    this.argument('appname', { type: String, required: false });
    this.appname = this.appname || path.basename(process.cwd());
    this.appname = this._.camelize(this._.slugify(this._.humanize(this.appname)));

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  info: function () {
    this.log(yosay(
      chalk.red('Welcome!') + '\n' +
      chalk.yellow('You are using the Triangular angular es6 generator!')
    ));
  },

  copyBaseFiles: function() {

    // Dot files
    this.copy('bowerrc', '.bowerrc');
    this.copy('editorconfig', '.editorconfig');
    this.copy('gitignore', '.gitignore');
    this.copy('htaccess', '.htaccess');
    this.copy('jshintrc', '.jshintrc');

    // Package files
    this.copy('_bower.json', 'bower.json');
    this.copy('_package.json', 'package.json');

    this.copy('_gulpfile.js', 'gulpfile.js');
    this.copy('README.md');
    this.copy('robots.txt');
  },

  setupBase: function() {
    this.mkdir("app");

    this.copy('app/app.js');
    this.copy('app/index.html');
  },

  setupConfig: function() {
    this.mkdir('app/config');
    this.copy('app/config/router.js')
  },

  setupControllers: function() {
    this.mkdir('app/controllers');

    this.mkdir('app/controllers/home');
    this.copy('app/controllers/home/index.js');
  },

  setupStyles: function() {
    this.mkdir('app/styles');

    this.copy('app/styles/app.scss');
  },

  setupViews: function() {
    this.mkdir('app/views');

    this.mkdir('app/views/home');
    this.copy('app/views/home/index.html');
  }
});

module.exports = TriangularizeGenerator;
