"use strict";

/**
 * This is the initialising function, started by the body onload
 */
function init () {
	renderHead();
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
 * This function is used to render the Head-Element of the document on every Page
 */
function renderHead() {
	const container = document.getElementsByTagName('head')[0];
	container.innerHTML = "";
	container.innerHTML += headHTML();
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
 * This function is used to render the HTML for the Footer-Element of the document
 */
function renderMain() {
	const container = getContainerForHtmlAndClearIt('main');
	container.innerHTML += mainHTML();
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
 * This function sets the Eventlistner for closing the Overlay using ESC (Keydown). The onclick on X is hardcoded to the html
 */
function setEventListener() {
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


/**
 * This function will send an email to formspree, using the data from the contact-form
 * @param {*} event 
 */
function sendMail(event){﻿
    event.preventDefault();
    const data = new FormData(event.target);
    fetch("https://formspree.io/f/mjvnebjr", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        window.location.href = "./send_mail.html";
    }).catch((error) => {
        console.log(error);
    });
}


/**
 * This function checks, if the value of the inputfield is between 1 and 20. If so, it calculates the new amount of 
 * ingredients  and updates the data-original-amount with the value from the input field for further calculations.
 */
function updateIngredients() {
    const newPortionsValue = parseFloat(document.getElementById("recipe__input").value);
    if (newPortionsValue > 0 && newPortionsValue <= 20) {
        const actualAmounts = document.querySelectorAll('.recipe__table__amount');
        const table = document.querySelector('.recipe__table');
        const originalAmount = parseFloat(table.getAttribute('data-original-amount'));
        actualAmounts.forEach((element) => {
            if (element.innerHTML !== '') {
                const amount = parseFloat(element.innerHTML);
                const unit = element.innerHTML.split(" ").slice(1).join(" ");
                const amountNew = amount * newPortionsValue / originalAmount;
                const newAmountWithUnits = amountNew + " "  + unit;
                element.innerHTML = newAmountWithUnits;
            }
        })
        table.setAttribute('data-original-amount', `${newPortionsValue}`);
    }
}


/**
 * This function sets an Eventlistner to the inputfield to capture any keydown events. If Enter is pressed, the updateIngredients function will be called
 */
function setEventListenerRecipe() {
    const inputField = document.getElementById('recipe__input');
    inputField.addEventListener('keydown', (event) => {
		if (event.key === "Enter") {
			updateIngredients();
		}
	});
}
