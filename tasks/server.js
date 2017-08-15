// запуск локального сервера с перезагрузкой браузера при внесении изменений в код
'use strict';

const
  gulp = require('gulp'),
  browserSync = require('browser-sync').create();

module.exports = function (options) {
  return function () {
    browserSync.init({ server: 'public' });
    // browserSync.watch('public/**/*.*').on('change', browserSync.reload);
  };
};