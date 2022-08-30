import React, { useState } from "react"

function Contact() {
  return (
    <form class="contact__form">
      <input class="contact__form-name" required="true" placeholder="Imię..." name="name" type="name" />
      <input class="contact__form-email" required="true" placeholder="Email..." name="email" type="email" />
      <textarea class="contact__form-message" required="true" placeholder="Wiadomość..." name="message"></textarea>
      <input class="contact__form-submit" type="submit" name="" />
      <input class="contact__form-agree" required="true" id="agree" type="checkbox" />
      <label class="contact__form-label" for="agree">Potwierdź warunki regulaminu</label>
    </form>

  )
}

export default Contact