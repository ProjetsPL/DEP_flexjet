
module.exports = function(grunt) {

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);


  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {                      
          'dist/flexjet.css' : 'scss/flexjet.scss'    
        }
      }
    },    
    autoprefixer: {
        dist: {
            files: {
                'dist/flexjet.css' : 'dist/flexjet.css'
            }
        }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'dist',
          src: ['*.css', '!*.min.css'],
          dest: 'dist',
          ext: '.min.css'
        }]
      }
    }
  });

  // These plugins provide necessary tasks.
 
  // Default task.
  grunt.registerTask('default', [
    'sass',
    'autoprefixer',
    'cssmin',
  ]);
};
