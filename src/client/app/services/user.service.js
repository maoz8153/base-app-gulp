(function() {
    'use strict';


    angular
        .module('app.services')
        .factory('userService', UserService);

    UserService.$inject = ['$http', '$q'];

    function UserService($http, $q) {

        var baseUrl = "http://jsonplaceholder.typicode.com/";
        var service = {
            getAllUsers: getAllUsers,
            getUserPosts: getUserPosts
        };

        return service;



        function getAllUsers() {
           return getUsers().then(function (data) {
                return data.data;
            });
        }

        function getUserPosts(userId) {
            return getPosts(userId).then(function (data) {
                return data.data;
            });
        }


        function getUsers() {
           return $http({
                        url: baseUrl + 'users',
                        method: "GET"
                      })
                      .then(function (res) {
                            if(!res){
                                return $q.reject('error');
                            }
                                    return res;
                      });
        }

        function getPosts(userId) {
           return $http({
                        url: baseUrl + 'posts',
                        method: "GET",
                        params : {userId : userId}
                      })
                        .then(function (res) {
                            if(!res){
                                return $q.reject('error');
                            }
                                    return res;
                            });
        }

    }

})();

