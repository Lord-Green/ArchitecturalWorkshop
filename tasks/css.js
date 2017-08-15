'use strict';

const
  gulp = require('gulp')
  , sourcemaps = require('gulp-sourcemaps')
  , gulpIf = require('gulp-if')
  , postcss = require('gulp-postcss')
  , plumber = require('gulp-plumber')
  , smartImport = require("postcss-smart-import")
  , precss = require("precss")
  , autoreset = require('postcss-autoreset')
  , mixins = require('postcss-mixins')
  , nested = require('postcss-nested')
  , variables = require('postcss-advanced-variables')
  , postcss_media = require('postcss-media-minmax')
  , property_lookup = require('postcss-property-lookup')
  , sugarss = require('sugarss')
  , rename = require('gulp-rename')
  , autoprefixer = require('autoprefixer')
  , assets = require('postcss-assets')
  , mqpacker = require('css-mqpacker')
  , cssnano = require('cssnano')
  , data_packer = require('postcss-data-packer')
  , fonts = require('postcss-font-magician')
  , postcss_utilities = require('postcss-utilities')
  , pxtorem = require('postcss-pxtorem')
  , crip = require('postcss-crip')
  // , inlineSVG = require('postcss-inline-svg')
  // svgfragments = require('postcss-svg-fragments'),  
  // lazysprite = require('postcss-lazysprite'),
  , sprites = require('postcss-sprites')
  , sass = require('gulp-sass')
  // , comments = require('postcss-inline-comment')
  , syntax_scss = require('postcss-scss')
  // , postcss_initial = require('postcss-initial')
  ;

// npm link gulp gulp-postcss precss css-mqpacker autoprefixer gulp-sourcemaps postcss-inline-svg postcss-svgo postcss-svg-fragments cssnano gulp-concat gulp-uglify gulp-rename gulp-imagemin gulp-cache postcss-assets postcss-font-magician postcss-data-packer postcss-utilities postcss-lazysprite postcss-sprites

const base_plugins = [
  // comments,
  // smartImport,
  // sass,
  precss,
  assets({ loadPaths: ['img/'] }),
  sprites({ spritePath: './public/img' }),
  // crip,
  // nested,
  // mixins,
  // variables,
  postcss_media,
  property_lookup,
  // postcss_utilities,
  // pxtorem,

  // svgfragments({  }),
  // inlineSVG, /* когда нужно закодировать в base64*/
  // lazysprite({
  //   imagePath: 'public/img',
  //   stylesheetInput: 'frontend/css',
  //   stylesheetRelative: 'public/styles',
  //   spritePath: 'public/slice',
  //   smartUpdate: true,
  //   nameSpace: 'icon-'
  // }),

  // assets({ loadPaths: ['img/'] }),
  // fonts({ formats: 'woff2 woff', protocol: 'https:', display: 'swap' }),
  autoreset,
  autoprefixer({ browsers: ['last 2 version'] }),
  mqpacker({ sort: true })
];

const optimization_plugins = [
  cssnano,
  // data_packer({ dest: 'public/styles/img-inline.css' })
];

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';
// set NODE_ENV="production" 
// gulp css
// set NODE_ENV="development" 

module.exports = function (options) {
  return function () {
    return gulp.src('frontend/css/style.scss')
      .pipe(plumber())
      .pipe(gulpIf(isDevelopment, sourcemaps.init()))
      .pipe(postcss(base_plugins))
      // .pipe(postcss(base_plugins, { parser: sugarss }))
      .pipe(rename({ extname: '.css' }))
      // .pipe(gulpIf(isDevelopment, postcss(optimization_plugins)))
      .pipe(gulpIf(isDevelopment, sourcemaps.write()))
      .pipe(gulp.dest('public/styles'))
    // .pipe(reload({ stream: true }))      
  };
};