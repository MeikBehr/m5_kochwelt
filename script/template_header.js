"use strict";

function headerHTML() {
    return /*html*/ `
    <figure class="header__logo__container">
		<a href="./index.html">
			<img class="header__logo" src="./img/logo.png" alt="Logo Kochwelt: Eine Kochmütze">
		</a>
	</figure>

	<nav class="header__nav">
		<div>
			<a href="./index.html">Start</a>
		</div>
		<div>
			<a href="./recipe.html">Rezept des Tages</a>
		</div>
		<div>
			<a href="#" id="linkToContactForm" onclick="showContactOverlay()">Kontakt</a>
		</div>
		<div>
			<a href="#">Impressum</a>
		</div>
	</nav>
    `;
}