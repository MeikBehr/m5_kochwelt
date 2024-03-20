"use strict";

/**
 * Initializes the application.
 * Renders the header, footer, and head content. Starts interval functions if the main parameter is true. Sets event listeners.
 * @param {boolean} main - Indicates whether the main content should be loaded.
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
 * This function gets the index for the next element in the array, wrapping around if necessary.
 * @param {number} currentIndex - current index.
 * @param {Array} array - array containing the elements.
 * @returns {number} - index for the next element.
 */
function getNextIndex(currentIndex, array) {
    return (currentIndex + 1) % array.length;
}


/**
 * This function changes the current image and updates the index.
 * @returns {string} - path of the new image.
 */
function changeImage() {
    const currentImg = images[imgIndex];
    imgIndex = getNextIndex(imgIndex, images);
    return currentImg;
}


/**
 * This function changes the current recipe HTML page and updates the index.
 * @returns {string} - path to new recipe page.
 */
function changeRecipe() {
    const currentRecipe = recipe[recipeIndex];
    recipeIndex = getNextIndex(recipeIndex, recipe);
    return currentRecipe;
}


/**
 * This function changes the current recipe text and updates the index.
 * @returns {string} - new recipe text.
 */
function changeRecipeText() {
    const currentRecipeText = recipeText[recipeTextIndex];
    recipeTextIndex = getNextIndex(recipeTextIndex, recipeText);
    return currentRecipeText;
}


/**
 * This function changes the current recipe title and updates the index.
 * @returns {string} - new recipe title.
 */
function changeRecipeTitle() {
    const currentRecipeTitle = recipeTitle[recipeTitleIndex];
    recipeTitleIndex = getNextIndex(recipeTitleIndex, recipeTitle);
    return currentRecipeTitle;
}


/**
 * This function changes the content of the HTML element with the specified ID using an animation.
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
 * This function changes the image in the HTML element with the ID 'imgChange'.
 */
function changeRezeptdesTages() {
    const container = document.getElementById('imgChange');
    container.src = changeImage();
}


/**
 * This function changes the links in the HTML elements with the IDs 'linkChange' and 'linkChange2'.
 */
function changeRezeptdesTagesLink() {
    const container = document.getElementById('linkChange');
    const container2 = document.getElementById('linkChange2');
    const container3 = document.getElementById('linkChange3');
    const recipeHref = changeRecipe();
    container.href = recipeHref;
    container2.href = recipeHref;
    container3.href = recipeHref;
}


/**
 * This function changes the text in the HTML element with the ID 'recipeText' with a fade-in animation.
 */
function changeRezeptdesTagesText() {
    changeContent('recipeText', () => changeRecipeText());
}


/**
 * This function changes the title in the HTML element with the ID 'recipeTitle' with a fade-in animation.
 */
function changeRezeptdesTagesTitle() {
    changeContent('recipeTitle', () => changeRecipeTitle());
}


/**
 * This function animates the progress bar width from 0% to 100% within the specified loop time in 0.5% increments.
 * @param {function} callback - Optional callback function to be executed when animation is complete.
 */
function animateProgressBar(callback) {
    if (isAnimating) return;
    isAnimating = true;
    const bar = document.getElementById('progressBar');
    const isFF = isFirefox();
    let width = 1;
    const id = setInterval(() => {
        if (width >= 100) {
            clearInterval(id);
            isAnimating = false;
            callback && callback();
        } else {
            bar.style.width = `${width}%`;
            !isFF && (bar.style.display = 'flex');
            width += 0.5;
        }
    }, loopTime / 200);
}


/**
 * Finish the progress bar animation and execute the callback function if provided.
 * @param {function} callback - Optional callback function to be executed after finishing the animation.
 */
function finishAnimation(callback) {
    isAnimating = false;
    if (callback) {
        callback();
    }
}


/**
 * Update the progress bar width and display style based on the given parameters.
 * @param {HTMLElement} bar - The progress bar element.
 * @param {number} width - The width of the progress bar in percentage.
 * @param {boolean} isFF - A boolean indicating whether the browser is Firefox.
 */
function updateProgressBar(bar, width, isFF) {
    bar.style.width = width + '%';
    if (!isFF) {
        bar.style.display = 'flex';
    }
}


/**
 * This function starts interval functions to execute tasks periodically.
 * Calls 'animateProgressBar' function with a callback to execute additional tasks once the progress bar animation is complete.
 * Start the interval functions after a delay of 1 second.
 * This delay allows the page to stabilize before starting the animations.
 */
function startIntervalFunctions() {
    adjustForBrowser();
    setTimeout(() => {
        intervalID = setInterval(() => {
            animateProgressBar(() => {
                changeRezeptdesTagesText();
                changeRezeptdesTagesTitle();
                changeRezeptdesTages();
                changeRezeptdesTagesLink();
            });
        }, loopTime);
    }, 1000);
}


/**
 * Bugfix for Firefox - Checks if the current browser is Firefox.
 * @returns {boolean} - True if the browser is Firefox, otherwise false.
 */
function isFirefox() {
    const userAgent = navigator.userAgent.toLowerCase();
    return userAgent.indexOf('firefox') > -1;
}


/**
 * Bugfix for Firefox - Adjusts the application behavior for the current browser. 
 */
function adjustForBrowser() {
    if (isFirefox()) {
        const bar = document.getElementById('progressBar');
        bar.style.display = 'none';
        loopTime = 3000;
    }
}

