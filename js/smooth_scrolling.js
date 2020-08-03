const anchors = document.querySelectorAll('a[href*="#"]');

for(let anchor of anchors) {
	anchor.addEventListener('click', function(el) {
		el.preventDefault();
		const blockId = anchor.getAttribute('href').substr(1);

		document.getElementById(blockId).scrollIntoView({behavior: 'smooth'});
	});
}