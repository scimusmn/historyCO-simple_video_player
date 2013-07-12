module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
        kiosk_scripts: {
          files: {
            'build/js/potter_player.min.js': [
              'libs/jquery-2.0.3.min.js',
              'libs/video.js',
              'source/js/video_kiosk.js',
              'source/js/screensaver.js',
            ]
          }
        }
    },
    cssmin: {
      compress: {
        files: {
          'build/css/potter_player.min.css': ['source/css/video-js.min.css', 'source/css/build.css', 'source/css/colorado.css']
        }
      }
    },
    smushit: {
      path: {
        src:['assets/images']
      },
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // CSSMin plugin
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Image optimizer
  grunt.loadNpmTasks('grunt-smushit');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'cssmin']);

};