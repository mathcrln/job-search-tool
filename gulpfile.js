// Load plugins
const autoprefixer = require('autoprefixer');
const browsersync = require('browser-sync').create();
const cssnano = require('cssnano');
const eslint = require('gulp-eslint');
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const prettier = require('@bdchauvette/gulp-prettier');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
// const webpack = require("webpack");
// const webpackconfig = require("./webpack.config.js");
// const webpackstream = require("webpack-stream");

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: './',
    },
    port: 3000,
  });
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// Optimize Images
function images() {
  return gulp
    .src('./src/assets/images/**/*')
    .pipe(newer('./dist/assets/images'))
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [
            {
              removeViewBox: false,
              collapseGroups: true,
            },
          ],
        }),
      ])
    )
    .pipe(gulp.dest('./dist/assets/images'));
}

// CSS task
function css() {
  return gulp
    .src('./src/styles/**/*.scss')
    .pipe(plumber())
    .pipe(prettier({ singleQuote: true, tabWidth: 2 }))
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(gulp.dest('./dist/styles/'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest('./dist/styles/'))
    .pipe(browsersync.stream());
}

function format() {
  return gulp
    .src(['./src/styles/**/*.scss'])
    .pipe(plumber())
    .pipe(prettier({ singleQuote: true }))
    .pipe(gulp.dest((file) => file.base));
}

// Lint scripts
function scriptsLint() {
  return gulp.src(['./src/js/**/*.js']).pipe(plumber()).pipe(eslint()).pipe(eslint.format());
  // .pipe(eslint.failAfterError());
}

// Transpile, concatenate and minify scripts
function scripts() {
  return (
    gulp
      .src(['./src/js/**/*.js'])
      .pipe(plumber())
      // .pipe(webpackstream(webpackconfig, webpack))
      // folder only, filename is specified in webpack config
      .pipe(gulp.dest('./dist/js/'))
      .pipe(browsersync.stream())
  );
}

// Watch files
function watchFiles() {
  gulp.watch('./src/styles/**/*.scss', css);
  gulp.watch('./src/js/**/*.js', gulp.series(scriptsLint, scripts));
  gulp.watch('./**/*', gulp.series(browserSyncReload));
  gulp.watch('./assets/images/**/*', images);
}

// define complex tasks
const js = gulp.series(scriptsLint, scripts);
const build = gulp.series(gulp.parallel(format, css, images, js));
const watch = gulp.parallel(watchFiles, browserSync);

// export tasks
exports.images = images;
exports.css = css;
exports.format = format;
exports.js = js;
exports.build = build;
exports.watch = watch;
exports.default = build;
