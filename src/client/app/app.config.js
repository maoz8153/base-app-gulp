angular
    .module('app')
    .config(config);

config.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

function config($locationProvider, $stateProvider, $urlRouterProvider) {

    //$locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/users');

    $stateProvider
            .state('users', {
                url: '/users',
                templateUrl: 'app/layout/users/users.template.html',
                controller : 'users',
                controllerAs : 'vm',
                resolve: {
                    usersData: function(userService) {
                      return userService.getAllUsers().then(function(data) {
                        return data;});
                    }
                }
            })


            .state('user', {
                url: '/users/:name/:userId',
                params : { userId : null ,  name: null },
                templateUrl: 'app/layout/single-user/single-user.template.html',
                controller : 'singleUser',
                controllerAs : 'vm',
                resolve: {
                    userPosts: function($stateParams ,userService) {
                      return userService.getUserPosts($stateParams.userId).then(function(data) {
                        return data;});
                    }
                }
            });
}
