'use strict';

window.addEventListener("scroll", function() {
	let currentHeight = window.pageYOffset;
	let screenHeight = document.documentElement.clientHeight;

	let blockAboutHeigth = document.getElementById('about').scrollHeight;
	let blockPortfolioHeigth = document.getElementById('portfolio').scrollHeight;
	let blockReviewsHeigth = document.getElementById('reviews').scrollHeight;

	let itemHome = document.querySelector('.item-home');
	let itemAbout = document.querySelector('.item-about');
	let itemPortfolio = document.querySelector('.item-portfolio');
	let itemReviews = document.querySelector('.item-reviews');
	let itemContacts = document.querySelector('.item-contacts');

	function addClassActive(elem) {
		elem.classList.add('active');
	}

	function removeClassActive(item_1, item_2, item_3, item_4) {
		item_1.classList.remove('active');
		item_2.classList.remove('active');
		item_3.classList.remove('active');
		item_4.classList.remove('active');
	}

	if(currentHeight < screenHeight) {
		addClassActive(itemHome);
		removeClassActive(itemAbout, itemPortfolio, itemReviews, itemContacts);
	}

	if(currentHeight > screenHeight -50) {
		addClassActive(itemAbout);
		removeClassActive(itemHome, itemPortfolio, itemReviews, itemContacts);
	}

	if(currentHeight > screenHeight + blockAboutHeigth -50) {
		addClassActive(itemPortfolio);
		removeClassActive(itemHome, itemAbout, itemReviews, itemContacts);
	}

	if(currentHeight > screenHeight + blockAboutHeigth + blockPortfolioHeigth -50) {
		addClassActive(itemReviews);
		removeClassActive(itemHome, itemAbout, itemPortfolio, itemContacts);
	}

	if(currentHeight > screenHeight + blockAboutHeigth + blockPortfolioHeigth + blockReviewsHeigth -50) {
		addClassActive(itemContacts);
		removeClassActive(itemHome, itemAbout, itemPortfolio, itemReviews);
	}
	console.log(currentHeight);
});

// анимация заголовка на стартовой


window.addEventListener('load', function() {
	let cat = document.querySelector('.cat');
	let meow = document.querySelector('.meow');
	setTimeout(function replaceName() {
		cat.style.display = 'none';
		meow.style.display = 'inline-block';
		setTimeout(function hideMeow() {
			cat.style.display = 'inline-block';
			meow.style.display = 'none';
		}, 600);
	}, 4000);
});
