console.log('conneceted');
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// showMenu

if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu');
	});
}

// hideMenu

if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu');
	});
}

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
	// When we click on each nav__link, we remove the show-menu class
	navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

// swiper

let homeSwiper = new Swiper('.home-swiper', {
	spaceBetween : 30,
	loop         : 'true',

	pagination   : {
		el        : '.swiper-pagination',
		clickable : true
	}
});

// new swiper


let newSwiper = new Swiper('.new-swiper', {
	centeredSlides : true,
	slidePerView   : 'auto',
	spaceBetween   : 16,
	loop           : 'true',

	pagination     : {
		el        : '.swiper-pagination',
		clickable : true
	}
});


function scrollUp() {
	const scrollUp = document.getElementById('scroll-up');
	// When the scroll is higher than 460 viewport height, add the show-scroll class to the a tag with the scroll-top class
	if (this.scrollY >= 460) scrollUp.classList.add('show-scroll');
	else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

