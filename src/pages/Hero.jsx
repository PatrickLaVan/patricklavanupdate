import React from 'react'
import { Link } from "react-router-dom"

import Bild from '../assets/images/Lanfingpage_Illu.png'

const Hero = ({id}) => {
  return (
    <section id={id} className="hero-wrapper">
        <div className="hero-background">
            <div className="one">
                <h1>Patrick La Van</h1>
            </div>
            <div className="introtext">
              <h1>Hallo,<br/>wie gehts?</h1>
              <h2>Ich bin Patrick und ich mache <br/> Graphik-, Motion- und Web-Design in München</h2>
              <Link to='/' 
                    className='bton-white' 
                   
                      >ARBEITEN</Link>
             
              <Link to='/' 
                    className='bton-white' 
                    
                      >KONTAKT</Link>
            </div>
            <div className="two"></div>
            <div className="three"></div>
            <div className="four"></div>
            <div className="five">
                <h1 className="deco-1">POR<br/>TFO<br/>LIO</h1>
                <h2  className="year">2024</h2>
            </div>
            <img className="Bild" src={Bild} alt="Profilbild" />
        </div>
    </section>
  )
}

export default Hero