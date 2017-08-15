'use strict';

const
  gulp = require('gulp')
  // , browserSync = require('browser-sync')
  // , reload = browserSync.reload;
  ;


const paths = {
  html: ['frontend/html/*.html'],
  css: ['frontend/css/*.css'],
  sass: ['frontend/css/*.scss'],
  js: ['frontend/js/**/*.js'],
  img: ['frontend/img/**/*.*'],
  delete_directory: ['public']
};


/*media - оптимизация
разобьём внешний CSS на несколько файлов по медиа запросам, чтобы избежать загрузки больших CSS-документов;
  <link href="style.css" rel="stylesheet">
  <link href="print.css" rel="stylesheet" media="print">
  <link href="other.css" rel="stylesheet" media="(min-width: 40em)"> 
  => следовательно нужно изменить модель работы со стилями
      * разрабатываем под мобильный (min 300 and max 700)
      * ПОЛНОСТЬЮ КОПИРУЕМ, запихиваем в медиа 700-1200 и модернизируем
  тогда не будет проблемы в случае отдачи клиенту только table.css

  АСИНХРОННАЯ ЗАГРУЗКА СТИЛЕЙ
  <link rel="preload" as="style" href="style1.css" onload="this.rel='stylesheet'">
   браузер качает style1.css не блокируя рендеринг. Как только ресурс загрузится (= сработает событие onload) скрипт заменит значение preload атрибута rel на stylesheet и применит стили на странице.
  */





function lazyRequireTask(taskName, path, options) {
  gulp.task(taskName, function (callback) {
    let task = require(path).call(this, options);
    return task(callback);
  });
}

lazyRequireTask('img', './tasks/img.js');
lazyRequireTask('css', './tasks/css.js');
lazyRequireTask('scripts', './tasks/scripts.js');
lazyRequireTask('html', './tasks/html.js');
lazyRequireTask('server', './tasks/server.js');

const newer = require('gulp-newer'), imagemin = require('gulp-imagemin');





gulp.task('watch', function () {
  gulp.watch('frontend/img/source/**/*.*', gulp.series('img'));
  gulp.watch('frontend/css/**/*.scss', gulp.series('css'));
  gulp.watch('frontend/js/**/*.js', gulp.series('scripts'));
  gulp.watch('frontend/html/**/*.pug', gulp.series('html'));
});


// gulp.task('default', ['img', 'css', 'scripts', 'html', 'server', 'watch']);

