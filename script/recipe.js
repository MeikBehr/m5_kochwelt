"use strict";


// function renderRecipe() {
//     const container = document.getElementById("recipe__table");
//     container.innerHTML = "";
//     container.innerHTML += /*html*/ `
//         <tr>
//                             <td>1</td>
//                             <td></td>
//                             <td>Salatgurken</td>
//                         </tr>
//                         <tr>
//                             <td>2</td>
//                             <td></td>
//                             <td>Paprikaschotn</td>
//                         </tr>
//                         <tr>
//                             <td>500</td>
//                             <td>g</td>
//                             <td>Tomaten</td>
//                         </tr>
//                         <tr>
//                             <td>2</td>
//                             <td></td>
//                             <td>Zwiebeln</td>
//                         </tr>
//                         <tr>
//                             <td>200</td>
//                             <td>g</td>
//                             <td>Schafskäse</td>
//                         </tr>
//                         <tr>
//                             <td>1</td>
//                             <td></td>
//                             <td>Glas Oliven, schwarz. 100g</td>
//                         </tr>
//                         <tr>
//                             <td></td>
//                             <td></td>
//                             <td>Salz und Pfeffer</td>
//                         </tr>
//                         <tr>
//                             <td>1</td>
//                             <td></td>
//                             <td>Zitrone</td>
//                         </tr>
//                         <tr>
//                             <td>125</td>
//                             <td>ml</td>
//                             <td>Olivenöl</td>
//                         </tr>
//                         <tr>
//                             <td></td>
//                             <td></td>
//                             <td>Oregano</td>
//                         </tr>
//     `;
// }



function renderRecipe(index) {
    const container = document.getElementById("recipe__table");
    container.innerHTML = "";

    // console.log(recipes[id]["zutaten"]);

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
   
}