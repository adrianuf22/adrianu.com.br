(function () {
	var app = angular.module('postman', []);

	app.directive('bodygallery', function () {
		return {
			templateUrl: 'app/directives/tpls/bodygallery.tpl'
			, controllerAs: 'bodyController'
			, controller: ['$scope', function ($scope) {
				var self = this,
					images = ['cat', 'wolverine', 'dog', 'felix'],
					ixImage = Math.floor(Math.random() * (images.length - 0)) + 0,
					bodyEl = document.getElementsByTagName('body')[0],
					mc = new Hammer(bodyEl);

				$scope.classBody = images[ixImage];

				self.showBody = function () {
					if (images[ixImage] === undefined) { return; }

					$scope.classBody = images[ixImage];
				};

				self.prevBody = function () {
					if (ixImage > 0) {
						ixImage -= 1;
					} else {
						ixImage = images.length - 1;
					}

					self.showBody();
				};
				
				self.nextBody = function () {
					if (ixImage < images.length - 1) {
						ixImage += 1;
					} else {
						ixImage = 0;
					}

					self.showBody();
				};

				mc.on('swipeleft', function () {
					self.nextBody();
					$scope.$apply();
				});
				mc.on('swiperight', function () {
					self.prevBody()
					$scope.$apply();
				});
			}]
		};
	}).directive('postgallery', function () {
		var cards = [
			{
				title: 'Primeiro post adrianu.com.br'
				, date: '1 Jan 2016'
				, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris...'
				, tags: ['css', 'responsive']
				, priority: 'primary'
			}
			, {
				title: 'Primeiro post adrianu.com.br'
				, date: '1 Jan 2016'
				, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris...'
				, tags: ['css', 'responsive']
				, priority: 'warning'
			}
			, {
				title: 'Primeiro post adrianu.com.br'
				, date: '1 Jan 2016'
				, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris...'
				, tags: ['css', 'responsive']
				, priority: 'danger'
			}
			, {
				title: 'Primeiro post adrianu.com.br'
				, date: '1 Jan 2016'
				, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris...'
				, tags: ['css', 'responsive']
				, priority: 'info'
			}
		];

		var moreCards = [
			{
				title: 'Primeiro post adrianu.com.br'
				, date: '1 Jan 2016'
				, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris...'
				, tags: ['css', 'responsive']
				, priority: 'danger'
			}
			, {
				title: 'Primeiro post adrianu.com.br'
				, date: '1 Jan 2016'
				, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris...'
				, tags: ['css', 'responsive']
				, priority: 'info'
			}
			, {
				title: 'Primeiro post adrianu.com.br'
				, date: '1 Jan 2016'
				, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris...'
				, tags: ['css', 'responsive']
				, priority: 'danger'
			}
			, {
				title: 'Primeiro post adrianu.com.br'
				, date: '1 Jan 2016'
				, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris...'
				, tags: ['css', 'responsive']
				, priority: 'info'
			}
			, {
				title: 'Primeiro post adrianu.com.br'
				, date: '1 Jan 2016'
				, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris...'
				, tags: ['css', 'responsive']
				, priority: 'danger'
			}
			, {
				title: 'Primeiro post adrianu.com.br'
				, date: '1 Jan 2016'
				, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris...'
				, tags: ['css', 'responsive']
				, priority: 'info'
			}
		];

		return {
			templateUrl: 'app/directives/tpls/card.tpl'
			, controllerAs: 'postController'
			, controller: ['$http', '$scope', function ($http, $scope) {
				var self = this;

				self.limitSize = 4;
				self.loadMore = function () {
					$scope.posts = $scope.posts.concat(moreCards);
				};

				$scope.posts = cards;

				$scope.searchTerms = [];
				$scope.$watch('searchTerm', function (term) {
					if (term) {
						$scope.searchTerms = term.split(';');
					}
				});

				self.removeSearchTerm = function (idx) {
					$scope.searchTerms.splice(idx, 1);
					$scope.searchTerm = $scope.searchTerms.join(';');
				};
			}]
		};
	});

}());