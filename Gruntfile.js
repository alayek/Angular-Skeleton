module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-karma');

  grunt.initConfig({
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
	}
  });

  grunt.registerTask('test', ['karma:development']);

};