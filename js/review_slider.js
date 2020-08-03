let slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
	slides[currentSlide].classList.remove('showing');
	currentSlide = (currentSlide + 1) % slides.length;
	slides[currentSlide].classList.add('showing');
}