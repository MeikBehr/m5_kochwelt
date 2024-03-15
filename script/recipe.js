"use strict";


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
    console.log('setEventListenerRecipe');
    const inputField = document.getElementById('recipe__input');
    inputField.addEventListener('keydown', (event) => {
		if (event.key === "Enter") {
            console.log('ENTER');
			updateIngredients();
		}
	});
}
