'use strict';

const
  isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development',
  gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename');

module.exports = function (options) {
  return function () {
    return gulp.src('frontend/js/**/*.js')
      .pipe(concat('all.js'))
      .pipe(uglify())
      .pipe(rename('all.min.js'))
      .pipe(gulp.dest('public/js'))
    // .pipe(reload({ stream: true }));
  };
};

