'use strict';

var gulp = require('gulp');

gulp.task('watch', ['styles'] ,function () {
  gulp.watch('app/assets/stylesheets/**/*.scss', ['styles']);
  gulp.watch('app/{components,config,controllers}/**/*.js', ['scripts']);
  gulp.watch('app/assets/images/**/*', ['images']);
  gulp.watch('bower.json', ['wiredep']);
});
