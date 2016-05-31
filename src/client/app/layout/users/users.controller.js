(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('users', Users);

    Users.$inject = ['userService', 'usersData'];

    function Users(userService, usersData) {

        var vm = this;
        vm.users = usersData;

        //getUsers();


        function getUsers() {
            userService.getAllUsers().then(function(data) {
                vm.users = data;
                return vm.users;
            });
        }


    }
})();
