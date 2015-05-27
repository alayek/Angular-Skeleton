/**
 * Setup of main AngularJS application, with Restangular being defined as a dependency.
 *
 * @see controllers
 * @see services
 */
var app = angular.module('ExampleApp',
    [   
        'restangular',
        'ExampleApp.controllers',
        'ExampleApp.services'
    ]   
);
/**
 * This is an example controller.
 * It triggers the UserdataService and puts the returned value on the scope
 *
 * @see services
 */
var controllers = angular.module('ExampleApp.controllers', [])
    .controller('ExampleController', function ($scope, UserdataService) {

        UserdataService.getFirstUsername().then(function(firstUsername) {
            $scope.firstUsername = firstUsername;
        }); 

    });

/**
 * Restangular-based data service, fetches user data from the backend
 *
 * @see https://github.com/mgonto/restangular
 */
var services = angular.module('ExampleApp.services', [])
    .factory('UserdataService', ['Restangular', '$q', function UserdataService(Restangular, $q) {
        return {
            /**
             * @function getFirstUsername
             * @returns a Promise that eventually resolves to the username of the first user
             */
            getFirstUsername: function() {
                var firstUsernameDeferred = $q.defer();
                var response = Restangular.one('users').getList().then(function(response) {
                    firstUsernameDeferred.resolve(response[0].name);
                }); 
                return firstUsernameDeferred.promise;
            }   
        };
    }]);

