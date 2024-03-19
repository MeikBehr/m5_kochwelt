"use strict";

/**
 * This is the initialising function, started by the body onload
 */
function init (main) {
	renderHead();
	renderHeader();
	renderFooter();
	main ? startIntervalFunctions() : '';
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
 * This function checks, if the Value of the Inputfield is empty (= Alert) or not. If not it will transform the string into a number, using parseFloat and return is.
 * @param {string} Value 
 * @returns {number}
 */
function checkIfInputIsEmpty(Value) {
	if (Value == '') {
		console.log("Portionen leer");
		alert('Sie haben keine Eingabe für die Anzahl der Portionen gemacht!');
		return;
	} else {
		return Value = parseFloat(Value);
	}
}


/**
 * This function will iterate through all elements of actualAmounts, recalculating the new values of each ingredients and inject the html-file with the new values + units.
 * @param {array} actualAmounts 
 * @param {number} originalAmount 
 * @param {number} newPortionsValue 
 */
function iterateThroughAllIngredientsAndChangeValues(actualAmounts, originalAmount, newPortionsValue) {
	actualAmounts.forEach((element) => {
		if (element.innerHTML !== '') {
			const amount = parseFloat(element.innerHTML);
			const unit = element.innerHTML.split(" ").slice(1).join(" ");
			const amountNew = amount * newPortionsValue / originalAmount;
			const newAmountWithUnits = amountNew + " "  + unit;
			element.innerHTML = newAmountWithUnits;
		}
	})
}


/**
 * This function checks, if the value of the inputfield is between 1 and 20. If so, it calculates the new amount of 
 * ingredients  and updates the data-original-amount with the value from the input field for further calculations.
 */
function updateIngredients() {
	let newPortionsValue = document.getElementById("recipe__input").value;
	checkIfInputIsEmpty(newPortionsValue);
    if (newPortionsValue > 0 && newPortionsValue <= 20) {
        const actualAmounts = document.querySelectorAll('.recipe__table__amount');
        const table = document.querySelector('.recipe__table');
        const originalAmount = parseFloat(table.getAttribute('data-original-amount'));
        iterateThroughAllIngredientsAndChangeValues(actualAmounts, originalAmount, newPortionsValue);
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


/* ============== Slideshow Recipe: Image & Text ============== */


/**
 * Gets the index for the next element in the array, wrapping around if necessary.
 * @param {number} currentIndex - current index.
 * @param {Array} array - array containing the elements.
 * @returns {number} - index for the next element.
 */
function getNextIndex(currentIndex, array) {
    return (currentIndex + 1) % array.length;
}


/**
 * Changes the current image and updates the index.
 * @returns {string} - path of the new image.
 */
function changeImage() {
    const currentImg = images[imgIndex];
    imgIndex = getNextIndex(imgIndex, images);
    return currentImg;
}


/**
 * Changes the current recipe HTML page and updates the index.
 * @returns {string} - path to new recipe page.
 */
function changeRecipe() {
    const currentRecipe = recipe[recipeIndex];
    recipeIndex = getNextIndex(recipeIndex, recipe);
    return currentRecipe;
}


/**
 * Changes the current recipe text and updates the index.
 * @returns {string} - new recipe text.
 */
function changeRecipeText() {
    const currentRecipeText = recipeText[recipeTextIndex];
    recipeTextIndex = getNextIndex(recipeTextIndex, recipeText);
    return currentRecipeText;
}


/**
 * Changes the current recipe title and updates the index.
 * @returns {string} - new recipe title.
 */
function changeRecipeTitle() {
    const currentRecipeTitle = recipeTitle[recipeTitleIndex];
    recipeTitleIndex = getNextIndex(recipeTitleIndex, recipeTitle);
    return currentRecipeTitle;
}


/**
 * Changes the content of the HTML element with the specified ID using an animation.
 * @param {string} containerId - ID of the HTML element to change.
 * @param {function} changeFunction - function to get the new content.
 */
function changeContent(containerId, changeFunction) {
    const container = document.getElementById(containerId);
    container.style.opacity = 0;
    setTimeout(() => {
        container.innerText = changeFunction();
        container.style.opacity = 1;
    }, 500);
}


/**
 * Changes the image in the HTML element with the ID 'imgChange'.
 */
function changeRezeptdesTages() {
    const container = document.getElementById('imgChange');
    container.src = changeImage();
}


/**
 * Changes the links in the HTML elements with the IDs 'linkChange' and 'linkChange2'.
 */
function changeRezeptdesTagesLink() {
    const container = document.getElementById('linkChange');
    const container2 = document.getElementById('linkChange2');
    const recipeHref = changeRecipe();
    container.href = recipeHref;
    container2.href = recipeHref;
}


/**
 * Changes the text in the HTML element with the ID 'recipeText' with a fade-in animation.
 */
function changeRezeptdesTagesText() {
    changeContent('recipeText', () => changeRecipeText());
}


/**
 * Changes the title in the HTML element with the ID 'recipeTitle' with a fade-in animation.
 */
function changeRezeptdesTagesTitle() {
    changeContent('recipeTitle', () => changeRecipeTitle());
}



/**
 * Animates a progress bar by increasing its width from 0% to 100% in 0.5% increments
 * @function progressBar
 */
function progressBar() {
	const bar = document.getElementById('progressBar');
	let width = 1;
	let id = setInterval(() => {
		if (width >= 100) {
			clearInterval(id);
		} else {
			width = width + 0.5;
			bar.style.width = width + '%';
		}
	}, (loopTime / 200));
}


/**
 * Starts interval functions to update content periodically (loopTime in ms).
 * @function startIntervalFunctions
 */
function startIntervalFunctions() {
    setInterval(() => {
        changeRezeptdesTagesText();
        changeRezeptdesTagesTitle();
        progressBar();
        changeRezeptdesTages();
        changeRezeptdesTagesLink();
    }, loopTime);
}


