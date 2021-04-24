import React from 'react'
import Fade from 'react-reveal/Fade';

import imagesPages from '../../../data/imagesPages.json'

import '../../../scss/Pages/Images.scss'

function Images1() {

  return (
    <>
    <div className="container">
      <section className="images images1">
        <div className="images-head">
          <Fade right cascade>
              <h2 className="images__title">{imagesPages.pages[0].title}</h2>
              <div className="images__text">
              {imagesPages.pages[0].text}
              </div>
          </Fade>
        </div>
        <Fade right>
          <img src={imagesPages.pages[0].image1} alt="" className="images__image"/>
        </Fade>
      </section>
    </div>
    </>
  )
}

export default Images1
