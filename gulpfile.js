'use strict';

/*
 * gulpfile.js
 * ===========
 * Rather than manage one giant configuration file responsible
 * for creating multiple tasks, each task has been broken out into
 * its own file in the 'gulp' folder. Any files in that directory get
 *  automatically required below.
 *
 * To add a new task, simply add a new task file in that directory.
 */

var gulp = require('gulp');
var requireDir = require('require-dir');


global.IONIC_DIR = './node_modules/ionic-framework/dist/';

// Specify paths & globbing patterns for tasks.
global.paths = {
  // HTML sources.
  'html': 'index.prod.html',
  
  // JS sources.
  'js': './app/**/*.js',
  
  'ts': './app/**/*.ts',
  
  // SASS sources.
  'sass': './app/**/*.scss',
  
  // Image sources.
  'img': './app/img/*',
  
  // Sources folder.
  'src': './',
  
  // Compiled CSS folder.
  'css': './www',
  
  // Distribution folder.
  'dist': './dist',

  // Cordova folder
  'cordova': './cordova',
  
  //compiled font folder
  'fonts': './fonts',

  'node_modules': './node_modules',
};


global.app = {
  name: 'NavTeacher',
  bundleId: 'com.srgsolutions.navteacher'
}

// Require all tasks in the 'gulp' folder.
requireDir('./gulp', { recurse: false });

gulp.task('b', function(){
  var browserify = require('browserify');
  var source = require('vinyl-source-stream');
  var watchify = require('watchify');
  var tsify = require('tsify');
  
  return browserify([
    global.IONIC_DIR+'js/web-animations.min.js', 
    './www/app.js'], {
    debug: true,
  }).bundle()
    .pipe(source('build.js'))
    .pipe(gulp.dest('./'));
  
  //  var watcher  = watchify(browserify(['./node_modules/ionic-framework/dist/js/web-animations.min.js', './www/app.js', {
  //   debug: true
  // }));

  // return watcher.on('update', function () {
  //   watcher.bundle()
  //     .pipe(source('build.js'))
  //     .pipe(gulp.dest('./'))
  //     console.log('Updated');
  // })
  //   .bundle()
  //   .pipe(source('build.js'))
  //   .pipe(gulp.dest('./'));
    
})

// Default task; start local server & watch for changes.
gulp.task('default', ['sass', 'fonts', 'ts', 'connect', 'watch']);