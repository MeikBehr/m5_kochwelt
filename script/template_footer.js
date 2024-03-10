"use strict";

function footerHTML() {
    return /*html*/ `
    <section class="footer__logo">
		<figure>
			<a href="#">
				<img src="./img/logo.png" alt="">
			</a>
		</figure>
	</section>


	<nav class="footer__nav">

		<section class="footer__nav__legals">
			<a href="#">Impressum</a>
			<p>|</p>
			<a href="#">Datenschutz</a>
		</section>

		<section class="footer__nav_socialMedia">
			<a href="#">Facebook</a>
			<a href="#">Twitter</a>
		</section>

	</nav>
    `;
}