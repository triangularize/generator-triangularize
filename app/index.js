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

  copyDotFiles: function() {
    this.copy('bowerrc', '.bowerrc');
    this.copy('editorconfig', '.editorconfig');
    this.copy('gitignore', '.gitignore');
    this.copy('htaccess', '.htaccess');
    this.copy('jshintrc', '.jshintrc');
  },

  createScaffoldFolders: function() {
    this.mkdir("app");
    this.mkdir("app/config");
    this.mkdir("app/controllers");
    this.mkdir("app/views");
    this.mkdir("app/styles");

    this.mkdir("test");
  },

  copyPackageFiles: function() {
    this.copy('_bower.json', 'bower.json');
    this.copy('_package.json', 'package.json');
  },

  app: function(){
    this.copy('_gulpfile.js', 'gulpfile.js');
    this.copy('README.md');
    this.copy('robots.txt');
  }
});

module.exports = TriangularizeGenerator;
