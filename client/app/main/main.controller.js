'use strict';

angular.module('colorpickApp')
  .controller('MainCtrl', function ($scope, $http, colorSocket) {
    $scope.awesomeThings = [];
	$scope.color = {};
	
	$scope.colorChange = function(c){
		if(c){
			$scope.rgb = c.split("(")[1].split(")")[0].split(",").map(function(c){return +c});
		}
		colorSocket.emit("color",$scope.rgb);
		
	};
	
    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

  });
