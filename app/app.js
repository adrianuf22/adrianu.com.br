(function () {
	var app = angular.module('adrianu-postman', []);

	app.controller('PostmanController', ['$http', function ($http) {
		$http.get('/posts/').then(
			function successCallback (res) {
				console.log(res);
			}
			, function errorCallback (err) {
				console.error(err);
			}
		);
	}]);	

}());