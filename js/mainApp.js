/**
* materialPreloader Module
*
* Description
*/
angular.module('materialPreloaderApp', ['angularMaterialPreloader'])
.controller('demoMaterialPreloader', ['$scope', function($scope){
	$scope.materialPreloader = true;
	$scope.switch = function(){
		$scope.materialPreloader =!$scope.materialPreloader;
	}
}]);

