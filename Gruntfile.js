// Generated on 2013-10-25 using generator-jekyllrb 0.4.0
'use strict';

// Directory reference:
//   sass: styles
//   javascript: scripts
//   images: images
//   fonts: fonts

module.exports = function (grunt) {
  // Show elapsed time after tasks run
  require('time-grunt')(grunt);
  // Load all Grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sass: {
      options: {
        sourceMap: false,
        includePaths: ['./bower_components']
      },
      dist: {
        options: {
          debugInfo: true,
          lineNumbers: true
        },
        files: [{
          expand: true,
          cwd: './',
          src: '*.{scss,sass}',
          dest: './',
          ext: '.css'
        }]
      }
    }
  });

  // Define Tasks
  grunt.registerTask('default', [
    'sass'
  ]);
};
