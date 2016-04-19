(function(){
  "use strict";

  angular
    .module('carol', [
      'home.ctrl',
      'ui.router'
    ])

    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider

      .state('home', {
        url: '/',
        templateUrl: 'src/home/home.html',
        controller:'HomeCtrl as hc'
      })

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/');

    });

})();
