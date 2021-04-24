import React from 'react'
import Fade from 'react-reveal/Fade';

import imagesPages from '../../../data/imagesPages.json'

import '../../../scss/Pages/Images.scss'

function Images3() {
  return (
    <>
    <div className="container">
      <section className="images images3">
        <div className="images-block">
        <Fade right cascade>
          <img src={imagesPages.pages[2].image1} alt="" className="images__image first__image"/>
          <img src={imagesPages.pages[2].image2} alt="" className="images__image second__image"/>
          </Fade>
          <div className="images-head">
            <Fade right cascade>
              <h2 className="images__title">{imagesPages.pages[2].title}</h2>
              <div className="images__text">
              {imagesPages.pages[2].text}
              </div>
            </Fade>
          </div>
        </div>
        <Fade right cascade>
        <img src={imagesPages.pages[2].image3} alt="" className="images__image tall__image"/></Fade>
      </section>
    </div>
    </>
  )
}

export default Images3
