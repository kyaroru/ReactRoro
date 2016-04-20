(function(){
  "use strict";

  angular
    .module('home.ctrl', [])

    .controller('HomeCtrl',['$timeout',function($timeout){
      var self = this;

      self.activated = false;

      // $timeout(function(){
      //   self.activated = true;
      // },2000);

    }]);

})();
