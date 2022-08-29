import React, { useState } from "react"

function Contact() {
  return (
    <form class="contact__form">
      <input class="contact__form-name" placeholder="Imię..." name="name" type="name" />
      <input class="contact__form-email" placeholder="Email..." name="email" type="email" />
      <input class="contact__form-message" placeholder="Wiadomość..." name="message" type="text" />
      <input class="contact__form-submit" type="submit" name="" />
      <input class="contact__form-agree" name="checkbox" type="checkbox" />
      <label for="checkbox">Potwierdź warunki regulaminu</label>
    </form>

  )
}

export default Contact