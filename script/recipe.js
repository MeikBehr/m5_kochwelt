"use strict";


function updateIngredients() {
    const newPortionsValue = parseFloat(document.getElementById("recipe__input").value);
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
  












//  VARIANTE A
// document.getElementById('recipe__form').addEventListener('submit', function(event) {
//     event.preventDefault();
// });