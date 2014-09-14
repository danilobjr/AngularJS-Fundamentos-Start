'use strict';

var gulp = require('gulp');
// var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');


// livereload
var tinyLr = require('tiny-lr')();

// File sources
var sources = {
  scripts: [
    './data/data.js',
    './public/[app,js]/**/*.js',
    './routes/**/*.js'
  ],
  css: './public/css/**/*.css',
  statics: [
    './public/app/**/*.html',
    './views/**/*.ejs'
  ]
};

// Tasks
var tasks = {
  // scripts: function () {
  //   gulp.src(sources.scripts)
  //     .pipe(browserify({
  //       debug : !gutil.env.production
  //     }))
  //     .pipe(gulp.dest(buildDir))
  //     .pipe(refresh(server));
  // },
  // statics: function() {
  //   gulp.src(sources.statics)
  //     .pipe(gulp.dest(buildDir))
  //     .pipe(refresh(server));
  // },
    lint: function() {
        var files = sources.scripts;
        files.push('./gulpfile.js');
        gulp.src(files)
            .pipe(jshint('.jshintrc'))
            .pipe(jshint.reporter(stylish));
    },
    express: function () {
        require('app');
    },
    livereload: function() {
        tinyLr.listen(35729);
    },
    watch: function () {
        gulp.watch(sources.scripts, ['lint:js']);
    }
};

function notifyLiveReload(event) {
    var fileName = require('path').relative(__dirname, event.path);

    tinyLr.changed({
        body: {
            files: [fileName]
        }
    });
}

// --------------------------
// Register our tasks
// --------------------------
gulp.task('default', ['lint:js', 'express', 'livereload', 'watch']);
gulp.task('lint:js', tasks.lint);
gulp.task('express', tasks.express);
gulp.task('livereload', tasks.livereload);
gulp.task('watch', function() {
    gulp.watch(sources.scripts, ['lint:js'], notifyLiveReload);
    gulp.watch(sources.statics, notifyLiveReload);
    gulp.watch(sources.css, notifyLiveReload);
});
