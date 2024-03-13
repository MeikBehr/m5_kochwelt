"use strict";


function renderRecipe(index) {
    const container = document.getElementById("recipe__table");
    container.innerHTML = "";

    for (let id = 0; id < recipes[index]["zutaten"].length; id++) {
        const ingredient = recipes[index]["zutaten"][id];
        const amount = recipes[index]["menge"][id];

        container.innerHTML += /*html*/ `
            <tr>
                <td class="amount">${amount}</td>
                <td></td>
                <td class="ingredient">${ingredient}</td>
            </tr>           
        `;


    }

    document.getElementById("author_name").innerHTML = recipes[index]["author"];
    document.getElementById("recipe__preparation").innerHTML = recipes[index]["zubereitung"];
   
}