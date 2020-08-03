let btnUp = document.querySelector('.up');

window.addEventListener('scroll', function trackScroll() {
	let scrolled = window.pageYOffset;

	if(scrolled < 800) {
		btnUp.classList.add('btn-to-scroll');
	}
	if (scrolled > 800) {
		btnUp.classList.remove('btn-to-scroll');
	}
});

btnUp.addEventListener('click', function backHome() {
	window.scrollTo({top: 0, behavior: 'smooth'});
});