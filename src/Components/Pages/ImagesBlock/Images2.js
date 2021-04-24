import React from 'react'
import Fade from 'react-reveal/Fade';

import imagesPages from '../../../data/imagesPages.json'

import '../../../scss/Pages/Images.scss'

function Images2() {
  return (
    <>
    <div className="container">
      <section className="images images2">
        <div className="images-head">
          <Fade right cascade>
            <h2 className="images__title">{imagesPages.pages[1].title}</h2>
            <div className="images__text">
             {imagesPages.pages[1].text}
            </div>
          </Fade>
        </div>
        <Fade right cascade>
        <img src={imagesPages.pages[1].image1} alt="" className="images__image "/>
        <img src={imagesPages.pages[1].image2} alt="" className="images__image tall__image"/>
        </Fade>
      </section>
    </div>
    </>
  )
}

export default Images2
