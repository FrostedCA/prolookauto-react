import React from 'react'
import './contact.css'

export default function Contact() {
  return (
    <div id='contact' className='container'>
      <div className='app_contact-title'>
        <h1>Nous rejoindre</h1>
      </div>
      <div className='app_contact-content'>
        <div className='children'>
          <h1>Facebook</h1>
          <p>Vous pouvez consulter notre <a href='https://www.facebook.com/prolookauto'>Facebook</a> pour prendre rendez-vous ou regarder nos actualités</p>
        </div>
        <div className='children'>
          <h1>Email</h1>
          <p>Notre email: <a href='mailto:contact@prolookauto.com'>contact@prolookauto.com</a></p>
        </div>
        <div className='children'>
          <h1>Téléphone</h1>
          <p>Étienne Mercier: <a href='tel:+14189312793'>(418) 931-2793</a></p>
          <p>Frédéric Gendron: <a href='tel:+14189051647'>(418) 905-1647</a></p>
        </div>
        <div className='children'>
          <h1>Instagram</h1>
          <p>Vous pouvez visiter notre page <a target="_" href='https://www.instagram.com/prolookauto/?hl=fr'>Instagram</a> et en constater les résultats de notre travail</p>
        </div>
      </div>
    </div>
  )
}
