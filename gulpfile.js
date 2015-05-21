var gulp       = require('gulp');
var browserify = require('browserify');
var watchify   = require('watchify');
var source     = require('vinyl-source-stream');
var sass       = require('gulp-sass');
var rename     = require('gulp-rename');
var plumber    = require('gulp-plumber');
var server     = require('gulp-server-livereload');
var chalk      = require('chalk');
var _          = require('lodash');

var inputDir  = './app/';
var outputDir = './www/';

var paths = {
  sass       : [inputDir + 'style/app.scss'],
  js         : [inputDir + '**/*.js'],
  jsEntry    : inputDir  + 'app.js',
  html       : [inputDir + '**/*.html'],
  assets     : ['./assets/**/*'],
  htmlDest   : outputDir,
  libDest    : outputDir + 'lib/',
  assetsDest : outputDir + 'assets/'
};

gulp.task('js', function (done) {
  function bundle(b, done) {
    b.bundle()
      .on('error', function(err) {
        console.log(chalk.red(err.message));
        this.emit('end');
      })
      .pipe(source('app.bundle.js'))
      .pipe(gulp.dest(outputDir + 'js/'))
      .on('end', done || function(){});
  };

  var b = browserify(watchify.args);
  var w = watchify(b);
  w.on('update', function() { bundle(w); });
  w.add(paths.jsEntry);
  bundle(w, done);
});

gulp.task('sass', function(done) {
  gulp.src(paths.sass)
    .pipe(plumber())
    .pipe(sass({ errLogToConsole: true }))
    .pipe(rename('app.bundle.css'))
    .pipe(gulp.dest(outputDir + 'css/'))
    .on('end', done);
});

gulp.task('html', function(done) {
  gulp.src(paths.html)
    .pipe(gulp.dest(paths.htmlDest))
    .on('end', done);
});

gulp.task('assets', function(done) {
  gulp.src(paths.assets)
    .pipe(gulp.dest(paths.assetsDest))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.html, ['html']);
  gulp.watch(paths.assets, ['assets']);
});

gulp.task('build', ['js', 'sass', 'html', 'assets']);

gulp.task('default', [
  'js',
  'sass',
  'html',
  'assets',
  'watch'
], function() {
  console.log(chalk.green('Starting server!'));
  gulp.src(outputDir).pipe(server({
    port: 8100,
    livereload: true
  }));
});
