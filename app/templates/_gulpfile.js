'use strict';

var gulp = require('gulp');

var traceur = require('gulp-traceur');

// load plugins
var $ = require('gulp-load-plugins')();

require('require-dir')('./gulp');

gulp.task('default', ['clean'], function () {
	gulp.start('build');
});
