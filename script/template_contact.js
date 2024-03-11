"use strict";

function contactHTML() {
    return /*html*/ `

				<a id="content__close" href="#" onclick="hideOverlay()"></a>
				<h3 class="contact__heading">Sie können uns gern kontaktieren:</h3>
				<p class="contact__paragraph">Haben Sie Fragen zu einem Rezept, möchten ein eignes einreichen oder uns aus anderen Gründen kontaktieren, können Sie uns gern jederzeit über dieses Formular erreichen.</p>

				<form  class="form" action="#">
					<div class="form__horizontal">
						<div class="form__group">
							<input type="text" class="form__input" id="contact-name" placeholder="Name" required>
							<label class="form__label" for="contact-name">Name</label>
						</div>
						<div class="form__group">
							<input type="text" class="form__input" id="contact-email" placeholder="E-mail" required>
							<label class="form__label" for="contact-email">E-mail</label>
						</div>
					</div>

                    <div class="form__horizontal">
						<div class="form__group">
							<textarea class="form__textarea" id="contact-message" required></textarea>
							<label class="form__label" for="contact-message">Nachricht</label>
						</div>
					</div>


					<div class="contact__submit-container">
						<input type="submit" class="button--contact" value="Anfrage abschicken">
					</div>
				
				</form>

    `;
}