import React from 'react'
import Fade from 'react-reveal/Fade';

import '../../../scss/Pages/Images.scss'

function Images3() {
  return (
    <>
    <div className="container">
      <section className="images images3">
        <div className="images-block">
        <Fade right cascade>
          <img src="/images/image4.jpg" alt="" className="images__image first__image"/>
          <img src="/images/image1.jpg" alt="" className="images__image second__image"/>
          </Fade>
          <div className="images-head">
            <Fade right cascade>
              <h2 className="images__title">Requirements gathering and analysis for references.</h2>
              <div className="images__text">
              Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat. Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat. 
              </div>
            </Fade>
          </div>
        </div>
        <Fade right cascade>
        <img src="/images/image3.jpg" alt="" className="images__image tall__image"/></Fade>
      </section>
    </div>
    </>
  )
}

export default Images3
