'use strict';

angular.module('core').controller('ModalInstanceCtrl', ['$scope', '$modalInstance',"position","modalData",
	function($scope,$modalInstance,position,modalData) {
		$scope.position = position;
		$scope.data = modalData;
		
		$scope.ok = function (data) {
			$modalInstance.close(data);
		};

		$scope.cancel = function() {
			$modalInstance.dismiss("cancel");
		};
	}
]);