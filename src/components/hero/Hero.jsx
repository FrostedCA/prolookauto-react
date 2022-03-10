import React from 'react'
import './hero.css'

export default function Hero() {
  return (
    <div className='app_hero-div'>
      <h1>Pro Look Auto</h1>
      <p>Tout ce qui mérite d'être fait, mérite d'être bien fait!</p>
      <br/>
      <h2>Nous rejoindre</h2>
      <div className='app_hero-social'>
        <a target='_' href='https://www.facebook.com/prolookauto'><button className='facebook'>Facebook</button></a>
        <a target='_' href='https://www.instagram.com/prolookauto/?hl=fr'><button className='instagram'>Instagram</button></a>
        <a href='mailto:contact@prolookauto.com'><button className='email'>Email</button></a>
        <a href='#contact'><button className='tel'>Tel</button></a>
      </div>
      <a href='#contact'><button className='contact'>Contact</button></a>
    </div>
  )
}
