"use strict";


function init () {
	renderHeader();
	renderFooter();
	setEventListener();
}


/**
 * Give ID as String into this function so it will search your document for this ID, clear ist and returns the result
 * @param {string} ID 
 */
function getContainerForHtmlAndClearIt(ID) {
	const container = document.getElementById(ID);
	container.innerHTML = '';
	return container;
}


/**
 * This function is used to render the HTML for the Header-Element of the document
 */
function renderHeader() {
	const container = getContainerForHtmlAndClearIt('header');
	container.innerHTML += headerHTML();
};


/**
 * This function is used to render the HTML for the Footer-Element of the document
 */
function renderFooter() {
	const container = getContainerForHtmlAndClearIt('footer');
	container.innerHTML += footerHTML();
};


/**
 * This function is used to render the HTML for the Overlay-Element of the document, make it visible and disallow scrolling for all other elements
 */
function showContactOverlay() {
	const container = getContainerForHtmlAndClearIt('contact__container');
	container.innerHTML += contactHTML();
	document.getElementById('contact__overlay').classList.remove('d-none');
	document.body.classList.add('no-scroll');
}


/**
 * This function starts setting the Eventlistner for closing the Overlay using ESC (Keydown) oder Click on X
 */
function setEventListener() {
	const close = document.getElementById(`contact__overlay__close`);
	closeOverlay(close);
}


/**
 * This function is used to close the overlay if ESC is keydown or the X is clicked. It calls hideOverlay()
 * @param {HTMLElement } close 
 */
function closeOverlay(close) {
	close.addEventListener('click', hideOverlay);
	document.addEventListener('keydown', (event) => {
		if (event.key === "Escape") {
			hideOverlay();
		}
	});
}


/**
 * This function will "close" the overlay by setting .d-none and give the re-permission to scroll the content
 */
function hideOverlay() {
	const card_overlay = document.getElementById('contact__overlay');
	card_overlay.classList.add('d-none');
	document.body.classList.remove('no-scroll');
}