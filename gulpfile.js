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


global.IONIC_DIR = './jspm_packages/npm/ionic-framework@2.0.0-alpha.34/dist/';

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

// Default task; start local server & watch for changes.
gulp.task('default', ['sass', 'fonts', 'ts', 'connect', 'watch']);