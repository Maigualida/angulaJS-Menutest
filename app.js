(function () {
	'use strict';

	angular.module('MsgApp', [])
		.controller('MsgController', MsgController);
	MsgController.$inject = ['$scope'];
	function MsgController($scope, ) {
		$scope.menu = "";
		$scope.messege = ""


		$scope.check = function () {
			let arr = $scope.menu.split(",")
			console.log(arr)
			if ($scope.menu.length == 0) {
				$scope.messege = "Please eat something"
			}
			else {
				if (arr.length <= 3) {
					$scope.messege = "Enjoy"
				}
				else {
					$scope.messege = "Too much"
				}
			}
		};


	}

})();