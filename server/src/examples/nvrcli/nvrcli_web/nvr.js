angular.module('nvrcli', [])
   .controller('nvrcliController', function($scope) {
        // change the IP address to point to your system
       $scope.baseurl = "http://10.211.55.14:9292";
       $scope.w = "400px";
});
