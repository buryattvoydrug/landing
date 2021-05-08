import React from 'react'
import {isMobile} from 'react-device-detect'
import Fade from 'react-reveal/Fade';



import '../../scss/Pages/Hero.scss'
import Button from '../Button'

class Hero extends React.Component {
  render(){
  return (
    <div className="container">
      <section className="hero" id="home">
          <Fade left>
            <div className="hero-head">
              <h3 className="hero__subtitle">DESIGN INSPIRATION</h3>
              <h1 className="hero__title">Convallis turpis erat tempus, viverra aliquet.</h1>
              <Button/>
            </div>
          </Fade>
          {isMobile? null :
          <Fade>
            <div className="hero-image">
              <img className="hero__image" src="images/image2.jpg" alt=""/>
            </div>
          </Fade>
          }
      </section>
    </div>
  )
}}

export default Hero
