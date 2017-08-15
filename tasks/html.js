'use strict';

const
  gulp = require('gulp')
  , newer = require('gulp-newer')
  , plumber = require('gulp-plumber')
  , pug = require('gulp-pug')
  ;


module.exports = function (options) {
  return function () {
    return gulp.src('frontend/html/*.pug')
      .pipe(plumber())
      .pipe(newer('public'))
      .pipe(pug())
      .pipe(gulp.dest('public'))
    // .pipe(reload({ stream: true }));
  };
};