import React from 'react'
import './services.css'
import RemiseNeuf from './img/icons8_broom_48px.png'
import Decontamination from './img/icons8_antiseptic_cream_48px.png'
import Shampoo from './img/icons8_shampoo_48px.png'
import Protection from './img/icons8_shield_48px.png'
import Cire from './img/icons8_clean_48px.png'
import Polissage from './img/icons8_sparkling_48px.png'

export default function Services() {
  return (
    <div id='services' className='container white'>
        <h1>Nos services</h1>
        <div className='app_services-list'>
            <div className='services'>
                <div className='before-div'>
                    <h1>Remise à neuf</h1>
                    <img src={RemiseNeuf} alt='remiseaneuf' />
                </div>
                <div className='after-div'>
                    <p>Nous offrons un service de remise à neuf. Votre auto aura un 'look' splendide!</p>
                </div>
            </div>
            <div className='services'>
                <div className='before-div'>
                    <h1>Enduit céramique</h1>
                    <img src={Protection} alt='ceramique' />
                </div>
                <div className='after-div'>
                    <p>Un traitement céramique est une innovation technologique utilisée pour protéger la carrosserie d'un véhicule. La vraie céramique possède des propriétés exceptionnelles telles que la résistance à la chaleur, au froid, à l'abrasion, aux rayures, mais également aux produits chimiques.</p>
                </div>
            </div>
            <div className='services'>
                <div className='before-div'>
                    <h1>Shampoing tapis et sièges</h1>
                    <img src={Shampoo} alt='shampoing' />
                </div>
                <div className='after-div'>
                    <p>Un shampoing spécialisé pour les tapis et les sièges de votre véhicule. Cela sera réalisé à l'aide d'un extracteur.</p>
                </div>
            </div>
        </div>
        <div className='app_services-list'>
            <div className='services'>
                <div className='before-div'>
                    <h1>Décontamination</h1>
                    <img src={Decontamination} alt='decontamination' />
                </div>
                <div className='after-div'>
                    <p>Nous offrons un service de décontamination du véhicule. Toute sorte de contamination sera retiré.</p>
                </div>
            </div>
            <div className='services'>
                <div className='before-div'>
                    <h1>Cire</h1>
                    <img src={Cire} alt='cire' />
                </div>
                <div className='after-div'>
                    <p>Le cirage régulier n'est pas seulement un avantage esthétique, il aide à protéger la peinture et le vernis de votre voiture en lui donnant plus de vie et en prévenant l'oxydation.</p>
                </div>
            </div>
            <div className='services'>
                <div className='before-div'>
                    <h1>Polissage</h1>
                    <img src={Polissage} alt='polissage' />
                </div>
                <div className='after-div'>
                    <p>Le polissage consiste à rénover intégralement la carrosserie de la voiture.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
