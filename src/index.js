import './styles/main.sass'
import Contact from './scripts/Contact.js'
import Hero from './scripts/Hero.js'
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(<Hero />, document.querySelector("#hero"))
ReactDOM.render(<Contact />, document.querySelector("#contact"))