"use strict";


function updateIngredients() {
    const newPortions = document.getElementById("recipe__input");
    const newPortionsValue = parseFloat(newPortions.value);
    
    console.log(newPortionsValue);

    const actualAmounts = document.querySelectorAll('.recipe__table__amount');
  
    console.log(actualAmounts);

    actualAmounts.forEach((element) => {
        console.log(element.innerHTML);
    })


  }
  





//  VARIANTE A
// document.getElementById('recipe__form').addEventListener('submit', function(event) {
//     event.preventDefault();
// });