(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('singleUser', SingleUser);

    SingleUser.$inject = ['userService' ,'userPosts', '$stateParams'];

    function SingleUser(userService, userPosts, $stateParams) {

        var vm = this;
        vm.posts = userPosts;
        vm.name = $stateParams.name;

        //getUsers();


        function getUsers() {
            return userService.getAllUsers().then(function(data) {
                vm.users = data;
                return vm.users;
            });
    }


    }
})();
