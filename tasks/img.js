// копируем и минимизируем изображения
'use strict';

const
  gulp = require('gulp'), newer = require('gulp-newer'), imagemin = require('gulp-imagemin');

module.exports = function (options) {
  return function () {
    return gulp.src('frontend/img/**/*.{png,jpg,svg}')
      .pipe(newer('public/img/'))
      .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
      // .pipe(gulp.dest('frontend/img/optimized'))
      .pipe(gulp.dest('public/img/'))
    // .pipe(reload({ stream: true }))
  };
};