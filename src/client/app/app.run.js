(function () {
    'use strict';
    angular
        .module('app')
        .run(run);

    run.$inject = ['$rootScope', '$state', 'Auth'];

    function run ($rootScope, $state, Auth) {
      $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
             if (toState.data.authenticate && !Auth.isLoggedIn()){
                 // User isn’t authenticated
                 $state.transitionTo("login");
                 event.preventDefault();
             }
         });
    }

})();
