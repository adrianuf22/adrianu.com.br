// header-toggle
(function () {
	function toggleActive () {
		if (this.className.indexOf('is-active') >= 0) {
			this.className = this.className.replace('is-active', '');
		} else {
			this.className += ' is-active';
		}
	}

	var toggleBtn = document.getElementById('header-toggle');

	if (toggleBtn) {
		toggleBtn.addEventListener('click', function () {
			toggleActive.call(this);
			toggleActive.call(document.getElementById('header-menu'));
		});
	}
}());