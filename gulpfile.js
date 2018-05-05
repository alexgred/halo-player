'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const browserSync = require('browser-sync');


/* Dev
==================== */

/* Style */
gulp.task('dev:styles', function() {

  return gulp.src('./src/sass/styles.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./public/css'))
});

/* js */
gulp.task('dev:js', function(cb) {
  return gulp.src('./src/js/halo.js')
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(gulp.dest('./public/js'));
});

/* Icons */
gulp.task('dev:icons', function() {
  
  return gulp.src('./src/icons/*')
    .pipe(gulp.dest('./public/icons'));
});


/* Clean directories 
============================*/

/* Dev */
gulp.task('dev:clean', function() {

  return del(['./public/js', './public/css', './public/icons']);
});


/* Sync
========================== */
gulp.task('sync', function() {
  browserSync.init({
    server: './public/'
  });

  browserSync.watch('./public/css/*.css').on('change', browserSync.reload);
  browserSync.watch('./public/js/*.js').on('change', browserSync.reload);
  browserSync.watch('./public/index.html').on('change', browserSync.reload);
});


/*  Build
========================== */

/* Watch */
gulp.task('watch', function() {
  gulp.watch('./src/sass/**/*.scss', gulp.series('dev:styles')); // watch styles
  gulp.watch('./src/js/**/*.js', gulp.series('dev:js')); // watch js files
  gulp.watch('./src/icons/**/*.*', gulp.series('dev:icons')); // watch imgs
});

/* Dev build*/
gulp.task('dev:build', gulp.series(
  'dev:clean', 
  gulp.parallel('dev:styles', 'dev:icons', 'dev:js')
));

/* Dev  build + watch */
gulp.task('dev', gulp.series(
  'dev:build',
  gulp.parallel('watch', 'sync')
));
