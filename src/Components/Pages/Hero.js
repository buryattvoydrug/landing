import React from 'react'

import '../../scss/Pages/Hero.scss'
import Button from '../Button'

function Hero() {
  return (
    <>
    <div className="container">
      <section className="hero">
          <div className="hero-head">
            <h3 className="hero__subtitle">DESIGN INSPIRATION</h3>
            <h1 className="hero__title">Convallis turpis erat tempus, viverra aliquet.</h1>
            <Button/>
          </div>
          <div className="hero-image">
            <img className="hero__image" src="/images/image2.jpg" alt=""/>
          </div>
      </section>
    </div>
    </>
  )
}

export default Hero
