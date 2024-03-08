"use strict";

function init () {
	setEventListener();
}


function showContactOverlay() {
	console.log('u clicked me!');

	document.getElementById('contact__overlay').classList.remove('d-none');
	document.body.classList.add('no-scroll');

	const container = document.getElementById('contact__container');
	container.innerHTML = '';

	container.innerHTML += /*html*/ `
			<div>Kontaktformular hier einfügen</div>
		 `
}



function setEventListener() {
	const close = document.getElementById(`contact__overlay__close`);
	closeOverlay(close);
}



function closeOverlay(close) {
	close.addEventListener('click', hideOverlay);
	document.addEventListener('keydown', (event) => {
		if (event.key === "Escape") {
			hideOverlay();
		}
	});
}


function hideOverlay() {
	const card_overlay = document.getElementById('contact__overlay');
	card_overlay.classList.add('d-none');
	document.body.classList.remove('no-scroll');
}