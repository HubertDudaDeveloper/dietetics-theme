import React, { useState } from "react"

function Hero() {

  return (
    <div class="hero__content">
      <img class="hero__image" />
      <div class="hero__shader"></div>
      <div class="hero__content-container">
        <h1 class="hero__content-title">Dieta według Oliwii!</h1>
        <p class="hero__content-subtitle">Zapisz się</p>
        <button class="hero__content-button">Click</button>
      </div>
    </div>
  )
}

export default Hero
