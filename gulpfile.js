var gulp       = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    browserify = require('browserify'),
    bower      = require('bower'),
    sass       = require('gulp-sass'),
    minifyCss  = require('gulp-minify-css'),
    rename     = require('gulp-rename'),
    plumber    = require('gulp-plumber'),
    tap        = require('gulp-tap'),
    webserver  = require('gulp-webserver'),
    fs         = require('fs'),
    _          = require('lodash');

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

gulp.task('compile', ['assets', 'html', 'sass', 'js'])
gulp.task('default', ['compile', 'watch']);

gulp.task('cordova', function() {
    var cordovaString = 'module.exports={FAKE:true}\n';
    fs.writeFileSync(outputDir + 'cordova.js', cordovaString);
})

gulp.task('js', ['cordova'], function () {
    function bundler(file) {
        file.contents = browserify(file.path).bundle();
    }


    gulp.src(paths.jsEntry, {read: false})
        .pipe(plumber())
        .pipe(tap(bundler))
        .pipe(gulp.dest(outputDir + 'js/'));
});

gulp.task('sass', function(done) {
    gulp.src(paths.sass)
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(sourcemaps.write())
        .pipe(minifyCss())
        .pipe(rename('app.bundle.css'))
        .pipe(gulp.dest(outputDir + 'css/'))
        .on('end', done);
});

_.each(['html', 'assets'], function(name) {
    gulp.task(name, function() {
        return gulp.src(paths[name]).pipe(gulp.dest(paths[name + 'Dest']));
    });
});

gulp.task('watch', function() {
    var nonWatchPaths = ['jsEntry', 'htmlDest', 'libDest', 'assetsDest'];
    _.forOwn(paths, function(path, name) {
        if (_.contains(nonWatchPaths, name)) return;
        gulp.watch(path, [name]);
    });
});
