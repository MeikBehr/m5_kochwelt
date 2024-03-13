"use strict";

function footerHTML() {
    return /*html*/ `
    <section class="footer__logo">
		<figure>
			<a href="./index.html">
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
			<a href="https://www.facebook.com/?lang=de">
				<div class="footer__nav__facebook footer__nav_socialMedia__icons" role="img" alt="Logo Facebook"></div>
			</a>
			<a href="https://twitter.com/?lang=de">
			<div class="footer__nav__twitter footer__nav_socialMedia__icons" role="img" alt="Logo Twitter / X"></div>
			</a>
		</section>

	</nav>
    `;
}