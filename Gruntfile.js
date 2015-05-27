module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    'pkg': grunt.file.readJSON('package.json'),

    'meta': {
      'jqueryFilesForTesting': 'bower_components/jquery/dist/jquery.js',
      'angularFileForTesting': 'bower_components/angular/angular.js',
      'angularRouteFileForTesting' : 'bower_components/angular-route/angular-route.js',
      'angularSanitizeFileForTesting' : 'bower_components/angular-sanitize/angular-sanitize.js',
      'angularMockFileForTesting' : 'bower_components/angular-mocks/angular-mocks.js',
      'restangularFileForTesting' : 'bower_components/restangular/dist/restangular.js',
      'underscoreFileForTesting' :  'bower_components/underscore/underscore.js',
      'testFileForTesting' : 'test/**/*Spec.js'
    },

    'karma': {
      'development': {
        'configFile': 'karma.conf.js',
        'options': {
          'files': [
            '<%= meta.jqueryFilesForTesting %>',
            '<%= meta.angularFileForTesting %>',
            '<%= meta.angularRouteFileForTesting %>',
            '<%= meta.angularMockFileForTesting %>',
            '<%= meta.angularSanitizeFileForTesting %>',
            '<%= meta.restangularFileForTesting %>',
            '<%= meta.underscoreFileForTesting %>',
            '<%= meta.testFileForTesting %>',
            'source/**/*.js'
          ],
        }
      }
	  },

    'jshint': {
      'beforeconcat': ['source/**/*.js'],
    },

    'concat': {
      'dist': {
        'src': ['source/**/*.js'],
        'dest': 'dist/<%= pkg.namelower %>-<%= pkg.version %>.js'
      }
    },

    'uglify': {
      'options': {
        'mangle': true
      },  
      'dist': {
        'files': {
          'dist/<%= pkg.namelower %>-<%= pkg.version %>.min.js': ['dist/<%= pkg.namelower %>-<%= pkg.version %>.js']
        }
      }
    },

  });

  grunt.registerTask('test', ['karma:development']);

};