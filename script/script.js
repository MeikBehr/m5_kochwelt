"use strict";

/**
 * This is the initialising function, started by the body onload
 */
function init (main) {
	renderHead();
	renderHeader();
	renderFooter();
	// main ? progressBar() : '';
	// main ? startSlideshow() : '';
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





/* ========= Slideshow Recipe: Image & Text ========= */


let imgIndex = 0;
let recipeIndex = 0;
let recipeTextIndex = 0;
let recipeTitleIndex = 0;


/* sucht sich aus der arry das bild raus */
function changeImage() {
	const currentImg = images[imgIndex]
	imgIndex = (imgIndex + 1) % images.length;
    return currentImg;
}


/* sucht sich aus der arry die html-seite raus */
function changeRecipe() {
	const currentRecipie = recipe[recipeIndex]
	recipeIndex = (recipeIndex + 1) % recipe.length;
	return currentRecipie;
}

/* sucht sich aus der arry den text raus */
function changeRecipeText() {
	const currentRecipieText = recipeText[recipeTextIndex]
	recipeTextIndex = (recipeTextIndex + 1) % recipeText.length;
	return currentRecipieText;
}

/* sucht sich aus der arry den titel raus */
function changeRecipeTitle() {
	const currentRecipieTitle = recipeTitle[recipeTitleIndex]
	recipeTitleIndex = (recipeTitleIndex + 1) % recipeTitle.length;
	return currentRecipieTitle;
}













///////////////////////////////////////////////////////////



/* rendert das bild jede 5sek */
function changeRezeptdesTages(){
	const container = document.getElementById('imgChange');
	container.src = changeImage();
} 


/* rendert den link jede 5sek */
function changeRezeptdesTagesLink(){
	const container = document.getElementById('linkChange');
	const container2 = document.getElementById('linkChange2');
	const recipeHref = changeRecipe();
	container.href = recipeHref;
	container2.href = recipeHref;
} 


/* rendert den text jede 5sek */
function changeRezeptdesTagesText(){
	const container = document.getElementById('recipeText');
	container.style.opacity = 0;
	setTimeout(function() {
	container.innerText = changeRecipeText();
	container.style.opacity = 1;
 }, 500);
} 


/* rendert den titel jede 5sek */
function changeRezeptdesTagesTitle(){
	const container = document.getElementById('recipeTitle');
	container.style.opacity = 0;
	setTimeout(function() {
	container.innerText = changeRecipeTitle();
	container.style.opacity = 1;
 }, 500);
} 


function progressBar() {
	const bar = document.getElementById('progressBar');
	let width = 1;
	let id = setInterval(() => {
		if (width >= 100) {
			clearInterval(id);
		} else {
			width++;
			bar.style.width = width + '%';
		}
	}, 50);
}

setInterval(changeRezeptdesTages, 5000);
setInterval(changeRezeptdesTagesLink, 5000);
setInterval(changeRezeptdesTagesText, 5000);
setInterval(changeRezeptdesTagesTitle, 5000);
setInterval(progressBar, 5000);










/*    O L D   C O D E


function progressBar() {
	const bar = document.getElementById('progressBar');
	let width = 1;
	let id = setInterval(() => {
		if (width >= 100) {
			clearInterval(id);
		} else {
			width++;
			bar.style.width = width + '%';
		}
	}, 50);
}


let id = 0;

function slideShow() {
    const image = document.getElementById('recipeOfTheDay');
    const currentSrc = image.src;
    const imageSources = [
        '../img/salad.jpg',
        '../img/shrimps.jpg',
        '../img/wok.jpg',
    ];
    const nextSrc = imageSources[id];
	id++;
	if (id >= imageSources.length) {id = 0;}

    if (nextSrc !== currentSrc) {
        image.src = nextSrc;
    }
}


function startSlideshow () {
	setInterval(() => {
		slideShow();
		progressBar();
	}, 5000);
}

 */




/*


function progressBar() {
	const bar = document.getElementById('progressBar');
	let width = 1;
	let id = setInterval(() => {
		if (width >= 100) {
			clearInterval(id);
		} else {
			width++;
			bar.style.width = width + '%';
		}
	}, 10);
}


function slideShow() {
    const image = document.getElementById('recipeOfTheDay');
    const currentSrc = image.src;
    const imageSources = [
        '../img/salad.jpg',
        '../img/shrimps.jpg',
        '../img/wok.jpg',
    ];
    const nextSrc = imageSources[Math.floor(Math.random() * imageSources.length)];

    // Sicherstellen, dass das nächste Bild nicht dasselbe wie das aktuelle ist
    if (nextSrc !== currentSrc) {
        image.src = nextSrc;
    }
}

// Funktion starten, die das Bild alle 10 Sekunden ändert
setInterval(() => {
	slideShow();
	progressBar();
}, 1000);
	

*/
