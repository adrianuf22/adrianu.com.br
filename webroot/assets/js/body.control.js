(function () {
	
// var images = ['cat', 'wolverine', 'dog', 'felix'],
// 		ixImage = Math.floor(Math.random() * (images.length - 0)) + 0,
// 		lastIx = 0,
// 		bodyEl = document.getElementsByTagName('body')[0],
// 		bodyContainer = document.getElementById('slide-body'),
// 		mc = new Hammer(bodyEl);

// 	var showBody = function () {
// 			if (!images[ixImage])
// 				return;

// 			bodyContainer.className = bodyContainer.className.replace('body-' + images[lastIx], 'body-' + images[ixImage]);
// 		},
// 		prevBody = function () {
// 			if (ixImage > 0)
// 				ixImage -= 1;

// 			lastIx = ixImage + 1;

// 			showBody();
// 		},
// 		nextBody = function (ev) {
// 			if (ixImage < images.length - 1)
// 				ixImage += 1;

// 			lastIx = (ixImage === 0 ? images.length - 1 : ixImage - 1);

// 			showBody();
// 		};

// 		mc.on('swipeleft', nextBody);

// 		mc.on('swiperight', prevBody);

// 		bodyContainer.addEventListener('click', function () {
// 			if (ixImage >= images.length - 1) {
// 				ixImage = -1;
// 			}
// 			nextBody();
// 		});

// 		showBody();
}());