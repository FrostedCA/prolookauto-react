import React from 'react'
import './findus.css'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

function FindUs() {
    return (
        <div className='container white'>
            <h1>Emplacement</h1>
            <br/>
            <p>Notre succursale se situe au <a href="https://www.google.com/maps/place/5055+Bd+des+Gradins,+Qu%C3%A9bec,+QC+G2J+1E5/@46.8367691,-71.2745991,17z/data=!3m1!4b1!4m5!3m4!1s0x4cb897c54e937fa3:0xd389052f2aa3a935!8m2!3d46.8367655!4d-71.2724104" target="_blank">5055, boul. des Gradins Québec,  G2J 1E5</a>.</p>
        </div>
    )
}

export default FindUs
