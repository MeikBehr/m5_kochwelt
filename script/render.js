"use strict";


function headHTML() {
    return /*html*/ `
    	<meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="robots" content="noindex, nofollow">
		<meta name="description" content="This is a trainingswebside of the Developer Akademie Group 107">
        <link rel="icon" type="image" href="./img/logo_small.png" />
        <link rel="stylesheet" type="text/css" href="./style/style.css">
		<link rel="stylesheet" type="text/css" href="./style/content.css">
		<link rel="stylesheet" type="text/css" href="./style/contact.css">
		<link rel="stylesheet" type="text/css" href="./style/recipe.css">
		<link rel="stylesheet" type="text/css" href="./style/mediaqueries.css">
        <script defer src="./script/render.js" type="text/javascript"></script>
		<script defer src="./script/data.js" type="text/javascript"></script>
        <script defer src="./script/script.js" type="text/javascript"></script>
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/cookie-bar/themes/cookiebar.min.css">
    	<title>Kochwelt - Gruppe 107</title>	
    `;
}


function headerHTML() {
    return /*html*/ `
    <figure class="header__logo__container">
		<a href="./index.html">
			<img class="header__logo" src="./img/logo.png" alt="Logo Kochwelt: Eine Kochmütze">
		</a>
	</figure>
	<nav class="header__nav">
		<div class="nav-mobile-hidden">
			<div>
				<a href="./index.html">Start</a>
			</div>
			<div>
				<a id="linkChange3" href="./recipe_anton.html">Rezept des Tages</a>
			</div>
			<div>
				<a id="linkToContactForm" onclick="showContactOverlay()">Kontakt</a>
			</div>
			<div>
				<a href="./impressum.html">Impressum</a>
			</div>
		</div>

		<!-- Navigationsleiste für MOBILE Geräte -->
		<div class="mobile-nav-show" type="radio">
            <div id="mobile-nav-button" alt="Button für Menu">
                <div id="mobile-nav-content">  
                    <ul id="mobile-nav-list">
                        <li class="mobile-nav-li"><a href="./index.html">Start</a></li>
                        <li class="mobile-nav-li"><a id="linkChange4" href="./recipe_anton.html">Rezept des Tages</a></li>
                        <li class="mobile-nav-li"><a href="#" id="linkToContactForm" onclick="showContactOverlay()">Kontakt</a></li>
						<li class="mobile-nav-li"><a href="#">Impressum</a></li>
                      </ul>
                </div>
            </div>
        </div>

	</nav>
    `;
}


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
			<a href="./impressum.html">Impressum</a>
			<p>|</p>
			<a href="./datenschutz.html">Datenschutz</a>
			<p>|</p>
			<a href="./ueber_uns.html">Über uns</a>
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


function contactHTML() {
    return /*html*/ `
		<a id="content__close" href="#" onclick="hideOverlay()"></a>
        <div class="contact__content">
			<h3 class="contact__heading">Sie können uns gern kontaktieren:</h3>
			<p class="contact__paragraph">Haben Sie Fragen zu einem Rezept, möchten ein eignes einreichen oder uns aus anderen Gründen kontaktieren, können Sie uns gern jederzeit über dieses Formular erreichen.</p>
			<form  class="form" onsubmit="sendMail(event)">
				<div class="form__horizontal">
					<div class="form__group">
						<input name="name" type="text" class="form__input" id="contact-name" placeholder="Name" required>
						<label class="form__label" for="contact-name">Name</label>
					</div>
					<div class="form__group">
						<input  name="email" type="email" class="form__input" id="contact-email" placeholder="E-mail" size="30" required>
						<label class="form__label" for="contact-email">E-mail</label>
					</div>
				</div>
                <div class="form__horizontal">
					<div class="form__group__textarea">
						<textarea name="message" class="form__textarea" id="contact-message" placeholder="Nachricht" required></textarea>
						<label class="form__label" for="contact-message">Nachricht</label>
					</div>
				</div>
				<div class="contact__submit-container__checkbox">
					<input id="form__checkbox" type="checkbox" class="button--contact" value="Anfrage abschicken" required>
					<label for="form__checkbox">Ich habe die Datenschutzerklärung gelesen.</label>
				</div>
				<div class="contact__submit-container">
					<input type="submit" class="button--contact" value="Anfrage abschicken">
				</div>
			</form>
        </div>
    `;
}