'use strict';

var gulp = require('gulp');
var util = require('util');
var browserSync = require('browser-sync');
var middleware = require('./proxy');

function browserSyncInit(baseDir, files, browser) {
  browser = browser === undefined ? 'default' : browser;

  var routes = null;
  if(baseDir === 'app' || (util.isArray(baseDir) && baseDir.indexOf('app') !== -1)) {
    routes = {
      // Should be '/bower_components': '../bower_components'
      // Waiting for https://github.com/shakyShane/browser-sync/issues/308
      '/bower_components': 'bower_components'
    };
  }

  browserSync.instance = browserSync.init(files, {
    startPath: '/index.html',
    server: {
      baseDir: baseDir,
      middleware: middleware,
      routes: routes
    },
    browser: browser
  });

}

gulp.task('serve', ['watch'], function () {
  browserSyncInit([
    'app',
    '.tmp'
  ], [
    '.tmp/{app,components}/**/*.css',
    'app/assets/images/**/*',
    'app/*.html',
    'app/views/**/*.html',
    'app/{config,components,controllers}/**/*.js'
  ]);
});

gulp.task('serve:dist', ['build'], function () {
  browserSyncInit('dist');
});
