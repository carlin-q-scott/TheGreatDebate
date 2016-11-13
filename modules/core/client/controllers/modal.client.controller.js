'use strict';

angular.module('core').controller('ModalInstanceCtrl', ['$scope', '$modalInstance',"position",
	function($scope,$modalInstance,position) {
		$scope.position = position;
		
		$scope.ok = function (data) {
			$modalInstance.close(data);
		};

		$scope.cancel = function() {
			$modalInstance.dismiss("cancel");
		};
	}
]);