let navItem = document.querySelectorAll('.nav__item');
let nav = document.querySelector('.nav__list');
let navBurger = document.querySelector('.nav__burger');

navItem.forEach(function(link) {
	link.addEventListener('click', function() {
		nav.classList.add('hide');
		navBurger.classList.remove('open-burger');
		nav.classList.remove('open-burger');
		document.body.classList.remove('lock');
	});
});

navBurger.addEventListener('click', function showMenu() {
	navBurger.classList.toggle('open-burger');
	nav.classList.toggle('open-burger');
	nav.classList.remove('hide');
	document.body.classList.toggle('lock');
});